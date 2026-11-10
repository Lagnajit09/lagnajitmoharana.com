/**
 * prerender.mjs
 *
 * Runs after `vite build` (client) + `vite build --ssr src/entry-server.jsx`
 * (server). Reads dist/index.html as the shell template and renders each
 * route to its own static HTML file so every crawler that visits /projects
 * or /blogs gets full HTML — correct title, meta, OG tags, JSON-LD, and
 * server-rendered React content — without executing JavaScript.
 *
 * Output:
 *   dist/index.html            ← overwritten with / HTML
 *   dist/projects/index.html   ← /projects HTML
 *   dist/blogs/index.html      ← /blogs HTML
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE = 'https://lagnajitmoharana.web.app'

/**
 * Read intrinsic dimensions straight from an image file's header bytes
 * (PNG / JPEG / WebP). Used to emit og:image:width/height so social crawlers —
 * LinkedIn and Facebook especially — render the preview on the first scrape.
 */
function readImageSize(file) {
  const buf = readFileSync(file)
  // PNG: 8-byte signature, then IHDR with width/height as big-endian uint32
  if (buf.length >= 24 && buf.toString('ascii', 1, 4) === 'PNG') {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20), type: 'image/png' }
  }
  // JPEG: scan for a Start-Of-Frame marker
  if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let off = 2
    while (off + 9 < buf.length) {
      if (buf[off] !== 0xff) { off++; continue }
      const marker = buf[off + 1]
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { height: buf.readUInt16BE(off + 5), width: buf.readUInt16BE(off + 7), type: 'image/jpeg' }
      }
      off += 2 + buf.readUInt16BE(off + 2)
    }
  }
  // WebP (VP8 / VP8L / VP8X)
  if (buf.length >= 30 && buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    const fmt = buf.toString('ascii', 12, 16)
    if (fmt === 'VP8 ') {
      return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff, type: 'image/webp' }
    }
    if (fmt === 'VP8L') {
      const b = buf.subarray(21)
      return {
        width: 1 + (((b[1] & 0x3f) << 8) | b[0]),
        height: 1 + (((b[3] & 0x0f) << 10) | (b[2] << 2) | ((b[1] & 0xc0) >> 6)),
        type: 'image/webp',
      }
    }
    if (fmt === 'VP8X') {
      return {
        width: 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16)),
        height: 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16)),
        type: 'image/webp',
      }
    }
  }
  return null
}

// Dimensions of the og:image a given route advertises: a post's cover, or the
// site-wide og-image.png for everything else.
function ogImageSizeForRoute(url) {
  try {
    const slug = url.replace(/^\//, '')
    const postDir = resolve(__dirname, 'src/content/posts', slug)
    if (slug && existsSync(join(postDir, 'index.md'))) {
      const md = readFileSync(join(postDir, 'index.md'), 'utf-8')
      const frontmatter = md.split(/^---\s*$/m)[1] || ''
      const cover = /^\s*cover:\s*(.+)\s*$/m.exec(frontmatter)?.[1]?.trim().replace(/^['"]|['"]$/g, '')
      if (cover && existsSync(join(postDir, cover))) return readImageSize(join(postDir, cover))
      return null
    }
    const og = resolve(__dirname, 'public/og-image.png')
    return existsSync(og) ? readImageSize(og) : null
  } catch {
    return null
  }
}

// Discover self-hosted blog posts: each folder in src/content/posts/ is a
// route at /<folder-name>, so every post gets its own static HTML file.
function discoverPostRoutes() {
  try {
    const dir = resolve(__dirname, 'src/content/posts')
    return readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => `/${e.name}`)
  } catch {
    return []
  }
}

const routes = ['/', '/projects', '/blogs', ...discoverPostRoutes()]

async function prerender() {
  const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8')

  // The SSR build outputs to dist/server/ to avoid clearing dist/index.html
  const { render } = await import('./dist/server/entry-server.js')

  for (const url of routes) {
    const { html: appHtml, helmet } = render(url)

    // Collect head tags from react-helmet-async
    let headTags = ''
    if (helmet) {
      headTags = [
        helmet.title?.toString() ?? '',
        helmet.priority?.toString() ?? '',
        helmet.meta?.toString() ?? '',
        helmet.link?.toString() ?? '',
        helmet.script?.toString() ?? '',
      ]
        .filter(Boolean)
        .join('\n    ')
    }

    // Emit og:image:width/height from the actual image so previews render on
    // the first scrape. (secure_url/type/alt are already set via react-helmet.)
    const size = ogImageSizeForRoute(url)
    if (size && !headTags.includes('og:image:width')) {
      headTags += `\n    <meta property="og:image:width" content="${size.width}" />` +
        `\n    <meta property="og:image:height" content="${size.height}" />`
    }

    const html = template
      .replace('<!--ssr-head-->', headTags)
      .replace('<!--ssr-body-->', appHtml)

    let outPath
    if (url === '/') {
      outPath = resolve(__dirname, 'dist/index.html')
    } else {
      const dir = resolve(__dirname, `dist${url}`)
      mkdirSync(dir, { recursive: true })
      outPath = resolve(dir, 'index.html')
    }

    writeFileSync(outPath, html)
    console.log(`  Prerendered ${url.padEnd(12)} → ${outPath.replace(__dirname, '.').replace(/\\/g, '/')}`)
  }

  writeSitemap()
  console.log('\nPrerender complete.')
}

/**
 * Generate dist/sitemap.xml from the same route list we just rendered, plus any
 * PDFs in public/. Generated rather than hand-maintained so it cannot go stale
 * when a post is added or renamed.
 */
function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10)

  const entries = routes.map((url) => {
    const slug = url.replace(/^\//, '')
    const isPost = slug && existsSync(resolve(__dirname, 'src/content/posts', slug, 'index.md'))
    let lastmod = today
    if (isPost) {
      const md = readFileSync(resolve(__dirname, 'src/content/posts', slug, 'index.md'), 'utf-8')
      const frontmatter = md.split(/^---\s*$/m)[1] || ''
      const date = /^\s*date:\s*(\d{4}-\d{2}-\d{2})/m.exec(frontmatter)?.[1]
      if (date) lastmod = date
    }
    return {
      loc: `${SITE}${url}`,
      lastmod,
      changefreq: isPost ? 'yearly' : 'monthly',
      priority: url === '/' ? '1.0' : isPost ? '0.7' : '0.8',
    }
  })

  // Downloadable documents are indexable too.
  try {
    for (const f of readdirSync(resolve(__dirname, 'public'))) {
      if (f.toLowerCase().endsWith('.pdf')) {
        entries.push({ loc: `${SITE}/${f}`, lastmod: today, changefreq: 'yearly', priority: '0.5' })
      }
    }
  } catch {
    /* no public dir */
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n` +
        `    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    ),
    '</urlset>',
    '',
  ].join('\n')

  writeFileSync(resolve(__dirname, 'dist/sitemap.xml'), xml)
  console.log(`  Sitemap     → ./dist/sitemap.xml (${entries.length} urls)`)
}

prerender().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})

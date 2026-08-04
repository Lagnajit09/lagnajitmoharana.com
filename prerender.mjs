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

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const routes = ['/', '/projects', '/blogs']

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

  console.log('\nPrerender complete.')
}

prerender().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})

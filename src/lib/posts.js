/**
 * posts.js — self-hosted blog content loader.
 *
 * Posts live in `src/content/posts/<slug>/`, each folder holding:
 *   - index.md          the post (with YAML front-matter)
 *   - cover.<ext>       optional cover image
 *   - *.png|svg|…       any inline images / resources
 *
 * The folder name IS the URL slug, so `content/posts/introducing-autosage/`
 * is served at `/introducing-autosage`.
 *
 * Vite's `import.meta.glob` inlines the raw markdown and resolves every image
 * to its final hashed asset URL at build time — so this works identically in
 * the browser, the SSR bundle, and the static prerender.
 */

// Raw markdown for every post.
const rawMarkdown = import.meta.glob("../content/posts/*/index.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Resolved URLs for every image/resource in a post folder (nested included).
const assetUrls = import.meta.glob(
  [
    "../content/posts/*/*.{png,jpg,jpeg,webp,gif,svg,avif}",
    "../content/posts/*/**/*.{png,jpg,jpeg,webp,gif,svg,avif}",
  ],
  { query: "?url", import: "default", eager: true }
);

const POSTS_PREFIX = "../content/posts/";

/** Pull the `<slug>` out of `../content/posts/<slug>/index.md`. */
function slugFromMarkdownPath(path) {
  return path.slice(POSTS_PREFIX.length).split("/")[0];
}

/**
 * Minimal YAML front-matter parser. Supports `key: value`, quoted strings,
 * and inline arrays like `tags: [a, b, c]` — which is all our posts need.
 * Returns `{ data, content }`.
 */
function parseFrontmatter(raw) {
  const normalized = raw.replace(/^﻿/, "");
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(normalized);
  if (!match) return { data: {}, content: normalized };

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/.exec(line);
    if (!kv) continue;
    const key = kv[1];
    let value = kv[2].trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((s) => stripQuotes(s.trim()))
        .filter(Boolean);
    } else {
      value = stripQuotes(value);
    }
    data[key] = value;
  }

  return { data, content: normalized.slice(match[0].length) };
}

function stripQuotes(s) {
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    return s.slice(1, -1);
  }
  return s;
}

/** ~200 wpm, rounded up, on the prose (front-matter already stripped). */
function readingTime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200)) + 10;
}

/** Build `{ "cover.png": "/assets/cover.hash.png", ... }` for one post folder. */
function assetMapForSlug(slug) {
  const base = `${POSTS_PREFIX}${slug}/`;
  const map = {};
  for (const [path, url] of Object.entries(assetUrls)) {
    if (path.startsWith(base)) {
      map[path.slice(base.length)] = url;
    }
  }
  return map;
}

/** Resolve a markdown-relative src (`cover.png`, `./x/y.svg`) to its asset URL. */
export function resolveAsset(assets, src) {
  if (!src) return src;
  // Leave absolute URLs and root-absolute paths untouched.
  if (/^(https?:)?\/\//.test(src) || src.startsWith("/") || src.startsWith("data:")) {
    return src;
  }
  const key = src.replace(/^\.?\//, "");
  return assets[key] ?? src;
}

function buildPost(path) {
  const slug = slugFromMarkdownPath(path);
  const { data, content } = parseFrontmatter(rawMarkdown[path]);
  const assets = assetMapForSlug(slug);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
    category: data.category || "Writing",
    cover: data.cover ? resolveAsset(assets, data.cover) : null,
    readingTime: readingTime(content),
    content,
    assets,
  };
}

const allPosts = Object.keys(rawMarkdown)
  .map(buildPost)
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

/** All posts, newest first. */
export function getAllPosts() {
  return allPosts;
}

/** One post by slug, or `null`. */
export function getPost(slug) {
  return allPosts.find((p) => p.slug === slug) || null;
}

/** Format an ISO-ish date string for display; falls back to the raw value. */
export function formatDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

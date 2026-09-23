import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiClock, FiCalendar, FiSun, FiMoon, FiArrowUp } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { getPost, formatDate, resolveAsset } from "../lib/posts";
import { useTheme } from "../context/ThemeContext";

const BASE = "https://lagnajitmoharana.web.app";

/* --- markdown element overrides ---------------------------------------- */
const makeComponents = (post) => ({
  // Plain styled image (inline-safe); relative srcs resolve to bundled assets.
  img({ node, src, alt, title, ...props }) {
    return (
      <img
        src={resolveAsset(post.assets, src)}
        alt={alt || ""}
        title={title}
        loading="lazy"
        {...props}
      />
    );
  },
  // Turn an image-only paragraph into a captioned <figure> (valid block markup).
  p({ node, children, ...props }) {
    const only = node?.children?.length === 1 ? node.children[0] : null;
    if (only && only.type === "element" && only.tagName === "img") {
      const caption = only.properties?.alt;
      return (
        <figure className="blog-figure">
          {children}
          {caption ? <figcaption>{caption}</figcaption> : null}
        </figure>
      );
    }
    return <p {...props}>{children}</p>;
  },
  // External links open in a new tab; in-site links behave normally.
  a({ node, href, children, ...props }) {
    const external = href && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  },
  // Wrap tables so they can scroll horizontally on small screens.
  table({ node, children, ...props }) {
    return (
      <div className="blog-table-wrap">
        <table {...props}>{children}</table>
      </div>
    );
  },
});

// Standalone signature shown in place of the global navbar on article pages.
const Signature = ({ navigate }) => (
  <a
    href="/"
    onClick={(e) => {
      e.preventDefault();
      navigate("/");
    }}
    className="font-display font-black text-xl sm:text-2xl tracking-tight text-fg hover:text-accent transition-colors"
  >
    LAGNAJIT<span className="font-mono font-bold text-accent">_M</span>
  </a>
);

// Theme toggle for the standalone article view (the navbar is hidden here).
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="p-2 border border-border-soft hover:border-border text-muted hover:text-fg transition-colors"
    >
      {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
    </button>
  );
};

const NotFound = ({ navigate }) => (
  <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-16 pb-32 min-h-screen text-center">
    <div className="mb-16 flex items-center justify-between text-left">
      <Signature navigate={navigate} />
      <ThemeToggle />
    </div>
    <span className="eyebrow">404</span>
    <h1 className="font-display font-black text-4xl sm:text-5xl text-fg mt-4">
      This page hasn&apos;t been written.
    </h1>
    <p className="text-muted mt-4">
      The post you&apos;re looking for doesn&apos;t exist — it may have moved.
    </p>
    <button
      onClick={() => navigate("/blogs")}
      className="press mt-8 font-mono text-sm font-semibold uppercase tracking-wider bg-accent text-white border border-border px-5 py-2.5 inline-flex items-center gap-2 shadow-hard-sm"
    >
      <FiArrowLeft size={15} /> All writing
    </button>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPost(slug);
  const articleRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    if (!post) return;
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const start = el.offsetTop;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = window.scrollY - start;
      const pct = total > 0 ? scrolled / total : 1;
      setProgress(Math.min(Math.max(pct, 0), 1));
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [post]);

  if (!post) return <NotFound navigate={navigate} />;

  const url = `${BASE}/${post.slug}`;
  const coverAbs = post.cover
    ? post.cover.startsWith("http")
      ? post.cover
      : `${BASE}${post.cover}`
    : `${BASE}/og-image.png`;

  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    headline: post.title,
    description: post.description,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    url,
    image: coverAbs,
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: "Lagnajit Moharana", url: BASE },
    publisher: { "@type": "Person", name: "Lagnajit Moharana", url: BASE },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  });

  return (
    <>
      <Helmet>
        <title>{`${post.title} — Lagnajit Moharana`}</title>
        <meta name="description" content={post.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={coverAbs} />
        <meta property="og:image:alt" content={post.title} />
        <meta property="og:site_name" content="Lagnajit Moharana" />
        {post.date ? (
          <meta property="article:published_time" content={post.date} />
        ) : null}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@m_lagnajit09" />
        <meta name="twitter:creator" content="@m_lagnajit09" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={coverAbs} />

        <script type="application/ld+json">{articleSchema}</script>
      </Helmet>

      {/* Reading progress */}
      <div
        className="fixed top-0 left-0 z-[60] h-1 bg-accent transition-[width] duration-100 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      {/* Scroll to top — bottom-right, appears after scrolling down */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 z-[60] grid place-items-center w-11 h-11 border border-border bg-surface text-fg shadow-hard-sm transition-all duration-300 hover:bg-accent hover:text-white hover:translate-x-0.5 hover:-translate-y-0.5 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <FiArrowUp size={18} />
      </button>

      <article ref={articleRef} className="min-h-screen pb-24">
        {/* Signature + theme toggle — stand in for the navbar on article pages */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-4 sm:pt-5 flex items-center justify-between">
          <Signature navigate={navigate} />
          <ThemeToggle />
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-5 md:pt-6">
          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="eyebrow">{post.category}</span>
              {post.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[0.7rem] uppercase tracking-wider text-subtle"
                >
                  #{t}
                </span>
              ))}
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-fg mt-5">
              {post.title}
            </h1>

            {post.description ? (
              <p className="text-muted mt-5 text-lg leading-relaxed">
                {post.description}
              </p>
            ) : null}

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 pt-6 border-t border-border-soft font-mono text-xs uppercase tracking-wider text-subtle">
              {post.date ? (
                <span className="inline-flex items-center gap-1.5">
                  <FiCalendar size={13} /> {formatDate(post.date)}
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1.5">
                <FiClock size={13} /> {post.readingTime} min read
              </span>
            </div>
          </header>

          {/* Cover */}
          {post.cover ? (
            <div className="mb-12 border border-border shadow-hard overflow-hidden bg-surface">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-auto block"
              />
            </div>
          ) : null}

          {/* Body */}
          <div className="blog-prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeSlug, rehypeHighlight]}
              components={makeComponents(post)}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;

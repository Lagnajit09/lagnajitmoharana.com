import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { blogs } from "../constants/blogs";

const BASE = "https://lagnajitmoharana.web.app";

const blogsSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE}/blogs#webpage`,
      "url": `${BASE}/blogs`,
      "name": "Writing — Lagnajit Moharana",
      "description":
        "Threads, deep dives, and write-ups by Lagnajit Moharana on transformers, LLM training, Docker containerization, and building AI-powered platforms.",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
    },
    {
      "@type": "Blog",
      "@id": `${BASE}/blogs#blog`,
      "name": "Threads & Thoughts by Lagnajit Moharana",
      "url": `${BASE}/blogs`,
      "author": { "@id": `${BASE}/#person` },
      "blogPost": blogs.map((b) => ({
        "@type": "BlogPosting",
        "headline": b.name,
        "description": b.description,
        "url": b.link,
        "author": { "@id": `${BASE}/#person` },
        "publisher": { "@id": `${BASE}/#person` },
        "image": `${BASE}/og-image.png`,
      })),
    },
  ],
});

const Blogs = () => {
  const navigate = useNavigate();
  const threadRefs = useRef([]);
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      setProgress(atBottom ? 1 : total > 0 ? scrolled / total : 1);

      const lastIndex = threadRefs.current.length - 1;
      if (atBottom) {
        setActive(lastIndex);
        return;
      }

      const center = vh / 2;
      let closest = 0;
      let closestDist = Infinity;
      threadRefs.current.forEach((node, i) => {
        if (!node) return;
        const r = node.getBoundingClientRect();
        const mid = r.top + r.height / 2;
        const dist = Math.abs(mid - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActive(closest);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Writing — Lagnajit Moharana</title>
        <meta
          name="description"
          content="Threads, deep dives, and write-ups by Lagnajit Moharana — building GPT from scratch, training transformers, Docker containerization, and the AutoSage AI platform."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE}/blogs`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE}/blogs`} />
        <meta property="og:title" content="Writing — Lagnajit Moharana" />
        <meta
          property="og:description"
          content="Deep dives and project write-ups: building MiniGPT from scratch, how transformers learn, Docker containerization, and introducing AutoSage."
        />
        <meta property="og:image" content={`${BASE}/og-image.png`} />
        <meta property="og:image:alt" content="Writing — Lagnajit Moharana" />
        <meta property="og:site_name" content="Lagnajit Moharana" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@m_lagnajit09" />
        <meta name="twitter:creator" content="@m_lagnajit09" />
        <meta name="twitter:title" content="Writing — Lagnajit Moharana" />
        <meta
          name="twitter:description"
          content="Threads and deep dives: GPT from scratch, transformers, Docker, and AI platform write-ups."
        />
        <meta name="twitter:image" content={`${BASE}/og-image.png`} />
        <meta name="twitter:image:alt" content="Writing — Lagnajit Moharana" />

        <script type="application/ld+json">{blogsSchema}</script>
      </Helmet>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 md:pt-36 pb-24 min-h-screen">
        <button
          onClick={() => navigate("/")}
          className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-muted hover:text-fg transition-colors mb-10"
        >
          <FiArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back home
        </button>

        <div className="mb-16">
          <span className="eyebrow">Writing</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-fg mt-4">
            Threads &amp; thoughts
          </h1>
          <p className="text-muted mt-4 max-w-xl text-lg leading-relaxed">
            Deep dives, project write-ups, and articles from things I've learned —
            scroll to follow the thread.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Vertical timeline track */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-border-soft"
            aria-hidden="true"
          >
            <div
              className="absolute left-0 top-0 w-full bg-accent origin-top transition-[height] duration-150 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <ol className="flex flex-col gap-14 sm:gap-20">
            {blogs.map((blog, index) => {
              const isActive = index === active;
              const isPassed = index < active;
              return (
                <li
                  key={index}
                  ref={(el) => (threadRefs.current[index] = el)}
                  className="relative pl-10 sm:pl-14"
                >
                  <span
                    className="absolute left-0 top-1.5 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span
                      className={`block transition-all duration-300 ${
                        isActive
                          ? "w-4 h-4 bg-accent ring-4 ring-accent/20"
                          : isPassed
                            ? "w-3.5 h-3.5 bg-accent"
                            : "w-3.5 h-3.5 bg-bg border-2 border-border-soft"
                      }`}
                    />
                  </span>

                  <ThreadCard blog={blog} isActive={isActive} index={index} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

const ThreadCard = ({ blog, isActive, index }) => (
  <a
    href={blog.link}
    target="_blank"
    rel="noreferrer"
    className={`group block border p-5 sm:p-6 transition-all duration-300 ${
      isActive
        ? "border-border bg-surface shadow-hard-lg -translate-x-1 -translate-y-1"
        : "border-border-soft hover:border-border hover:bg-surface"
    }`}
  >
    <div className="flex items-start justify-between gap-3 mb-4">
      <div className="flex items-center gap-2.5">
        <span className="font-mono text-xs font-semibold text-accent-deep tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-8 bg-border-soft" />
        <span className="font-mono text-[0.7rem] uppercase tracking-wider text-subtle">
          Thread
        </span>
      </div>
      <FiArrowUpRight
        size={18}
        className="shrink-0 text-subtle group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
      />
    </div>

    <div className="flex flex-col sm:flex-row gap-5">
      <div className="shrink-0 overflow-hidden border border-border-soft sm:w-44 h-40 sm:h-auto">
        <img
          src={blog.image}
          alt={blog.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="font-display font-bold text-xl sm:text-2xl text-fg group-hover:text-accent-deep transition-colors leading-snug">
          {blog.name}
        </h2>
        <p className="text-sm text-muted mt-2.5 leading-relaxed line-clamp-4">
          {blog.description}
        </p>
      </div>
    </div>
  </a>
);

export default Blogs;

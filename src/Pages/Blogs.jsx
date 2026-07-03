import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { blogs } from "../constants/blogs";

const Blogs = () => {
  const navigate = useNavigate();
  const threadRefs = useRef([]);
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0..1 fill of the track
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      // Track fill: how far through the list container we've scrolled.
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));

      // Near the bottom of the page the last thread can never reach the
      // viewport center (there's nothing left to scroll), so treat reaching
      // the page bottom as fully complete: full track + last thread active.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      setProgress(atBottom ? 1 : total > 0 ? scrolled / total : 1);

      const lastIndex = threadRefs.current.length - 1;
      if (atBottom) {
        setActive(lastIndex);
        return;
      }

      // Active thread: the one whose midpoint is closest to viewport center.
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
    <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-28 md:pt-36 pb-24 min-h-screen">
      <button
        onClick={() => navigate("/")}
        className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors mb-8"
      >
        <FiArrowLeft
          size={16}
          className="group-hover:-translate-x-0.5 transition-transform"
        />
        Back home
      </button>

      <div className="mb-14">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Writing
        </span>
        <h1 className="font-display text-4xl md:text-5xl tracking-tight text-fg mt-3">
          Threads & thoughts
        </h1>
        <p className="text-muted mt-3 max-w-lg">
          Deep dives, project write-ups, and notes from things I've learned —
          scroll to follow the thread.
        </p>
      </div>

      <div ref={containerRef} className="relative">
        {/* Vertical timeline track */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border"
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
                {/* Node */}
                <span
                  className="absolute left-0 top-1.5 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-4 h-4 bg-accent ring-4 ring-accent/20"
                        : isPassed
                        ? "w-3 h-3 bg-accent"
                        : "w-3 h-3 bg-bg border-2 border-border"
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
  );
};

const ThreadCard = ({ blog, isActive, index }) => (
  <a
    href={blog.link}
    target="_blank"
    rel="noreferrer"
    className={`group block rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
      isActive
        ? "border-accent/40 bg-surface shadow-lg shadow-black/5 sm:-translate-y-0.5"
        : "border-border hover:border-accent/30 hover:bg-surface/60"
    }`}
  >
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xs font-medium text-subtle tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="h-px w-6 bg-border" />
      <span className="text-xs text-subtle">Thread</span>
    </div>

    <div className="flex flex-col sm:flex-row gap-5">
      <div className="shrink-0 overflow-hidden rounded-xl border border-border sm:w-40 h-40 sm:h-auto">
        <img
          src={blog.image}
          alt={blog.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-xl font-semibold text-fg group-hover:text-accent transition-colors flex items-start gap-1.5">
          {blog.name}
          <FiArrowUpRight
            size={17}
            className="shrink-0 mt-1 text-subtle group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          />
        </h2>
        <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-4">
          {blog.description}
        </p>
      </div>
    </div>
  </a>
);

export default Blogs;

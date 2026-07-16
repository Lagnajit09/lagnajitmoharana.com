import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants/projects";
import { useReveal } from "../hooks/useReveal";

const Projects = () => {
  const navigate = useNavigate();
  const containerRef = useReveal();

  return (
    <div
      ref={containerRef}
      className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 md:pt-36 pb-20 min-h-screen"
    >
      <button
        onClick={() => navigate("/")}
        className="group flex w-fit items-center gap-2 font-mono text-sm uppercase tracking-wide text-muted hover:text-fg transition-colors mb-10"
      >
        <FiArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back home
      </button>

      <span className="eyebrow">Archives</span>
      <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-fg mt-4">
        All projects
      </h1>
      <p className="text-muted mt-4 max-w-xl text-lg leading-relaxed">
        A collection of things I've designed and built — from full-stack web apps
        to training models from scratch.
      </p>

      <div className="mt-12 border-t border-border">
        {projects.map((row) => (
          <div
            key={row.id}
            className="reveal group grid grid-cols-1 sm:grid-cols-[6rem_1fr_auto] gap-x-6 gap-y-4 items-start py-7 border-b border-border-soft transition-colors hover:bg-surface -mx-4 px-4"
          >
            <span className="font-mono text-sm text-accent-deep tabular-nums pt-1">
              {row.year}
            </span>

            <div className="min-w-0">
              <h3 className="font-display font-bold text-fg text-xl sm:text-2xl">
                {row.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {row.tech.map((item, index) => (
                  <span key={index} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:justify-end pt-1">
              {row.link && (
                <a
                  href={row.link}
                  target="_blank"
                  rel="noreferrer"
                  className="press inline-flex items-center gap-1.5 border border-border bg-bg px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-fg shadow-hard-sm"
                >
                  Live <FiArrowUpRight size={13} />
                </a>
              )}
              <a
                href={row.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
                className="press inline-flex items-center gap-1.5 border border-border bg-bg px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-fg shadow-hard-sm"
              >
                <FaGithub size={13} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

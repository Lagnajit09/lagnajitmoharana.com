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
      className="max-w-4xl mx-auto px-5 sm:px-8 pt-28 md:pt-36 pb-16 min-h-screen"
    >
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

      <h1 className="font-display text-4xl md:text-5xl tracking-tight text-fg">
        All projects
      </h1>
      <p className="text-muted mt-3 max-w-lg">
        A collection of things I've designed and built — from full-stack web
        apps to mobile.
      </p>

      <div className="mt-10 flex flex-col">
        {projects.map((row) => (
          <div
            key={row.id}
            className="reveal group grid grid-cols-[auto_1fr] sm:grid-cols-[5rem_1fr_auto] gap-x-4 gap-y-3 items-start py-6 border-t border-border first:border-t-0 sm:items-center"
          >
            <span className="text-sm text-subtle tabular-nums pt-0.5 sm:pt-0">
              {row.year}
            </span>

            <div className="min-w-0">
              <h3 className="font-semibold text-fg text-lg">{row.title}</h3>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {row.tech.map((item, index) => (
                  <span
                    key={index}
                    className="text-xs text-muted rounded-full px-2 py-0.5 border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-2 sm:justify-end">
              {row.link && (
                <a
                  href={row.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-fg hover:border-accent hover:text-accent transition-colors"
                >
                  Visit <FiArrowUpRight size={13} />
                </a>
              )}
              <a
                href={row.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
                className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-fg hover:border-accent hover:text-accent transition-colors"
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

import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { topProjects } from "../constants/projects";

function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-14 md:py-20 reveal">
      <div className="flex items-center gap-4 mb-8">
        <span className="eyebrow whitespace-nowrap">Selected Work</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-fg tracking-tight">
          Featured Projects
        </h2>
        <button
          onClick={() => navigate("/projects")}
          className="group shrink-0 inline-flex items-center gap-2 font-mono text-sm font-medium uppercase tracking-wide text-fg border-b-2 border-fg pb-0.5 hover:text-accent hover:border-accent transition-colors"
        >
          View all projects
          <FiArrowRight
            size={15}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {topProjects.map((project, index) => (
          <div
            key={index}
            className="group border border-border bg-surface p-6 sm:p-8 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg"
          >
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.slice(0, 8).map((item, i) => (
                <span key={i} className="badge">
                  {item}
                </span>
              ))}
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-fg group-hover:text-accent-deep transition-colors">
              {project.title}
            </h3>
            <p className="text-muted mt-3 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="press inline-flex items-center gap-2 border border-border bg-bg px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-fg shadow-hard-sm"
                >
                  Live <FiArrowUpRight size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="press inline-flex items-center gap-2 border border-border bg-bg px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-fg shadow-hard-sm"
                >
                  <FaGithub size={14} /> Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

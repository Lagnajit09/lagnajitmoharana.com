import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import {
  featuredProjects,
  mlProjects,
  additionalProjects,
} from "../constants/projects";

const totalProjects =
  featuredProjects.length + mlProjects.length + additionalProjects.length;

function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-14 md:py-20 reveal">
      {/* Projects */}
      <div className="flex items-center gap-4 mb-8">
        <span className="eyebrow whitespace-nowrap">Selected Work</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-fg tracking-tight">
          Projects
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
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* ML Journey & Projects */}
      <div
        id="ml-journey"
        className="flex items-center gap-4 mb-8 mt-24 scroll-mt-28"
      >
        <span className="eyebrow whitespace-nowrap">Learning in Public</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="mb-10">
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-fg tracking-tight">
          ML Journey &amp; Projects
        </h2>
        <p className="text-muted mt-3 leading-relaxed max-w-3xl text-lg">
          Building and aligning language models from the ground up — each version
          pushing further than the last.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {mlProjects.map((project) => (
          <ProjectCard key={project.version} project={project} />
        ))}
      </div>

      {/* Pointer to the full archive */}
      <div className="mt-16 border border-border bg-panel p-6 sm:p-8 shadow-hard flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
        <div className="min-w-0">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-fg">
            There&apos;s more in the archive
          </h3>
          <p className="text-muted mt-2 leading-relaxed max-w-xl">
            {totalProjects} projects in total — flagship platforms, the full ML
            journey, CLIs and full-stack apps, each with live demos, source and
            write-ups.
          </p>
        </div>
        <button
          onClick={() => navigate("/projects")}
          className="press shrink-0 inline-flex items-center gap-2 bg-accent text-white border border-border px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wide shadow-hard-sm"
        >
          Browse all projects <FiArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}

export default Projects;

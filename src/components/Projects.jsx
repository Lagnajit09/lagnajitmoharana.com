import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Section from "./Section";
import { topProjects } from "../constants/projects";

function Projects() {
  const navigate = useNavigate();

  return (
    <Section id="projects" label="Selected Work" title="Projects">
      <div className="flex flex-col gap-4">
        {topProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border p-6 hover:border-accent/50 hover:bg-surface transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-fg group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <FiArrowUpRight
                size={20}
                className="shrink-0 text-subtle group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
              />
            </div>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="text-xs text-muted rounded-full px-2.5 py-1 border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <button
        onClick={() => navigate("/projects")}
        className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg hover:text-accent transition-colors"
      >
        View all projects
        <FiArrowUpRight
          size={16}
          className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
        />
      </button>
    </Section>
  );
}

export default Projects;

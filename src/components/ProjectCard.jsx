import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";

/**
 * The rich project card, shared by the /projects page and the home page's
 * "Selected Work" section so the two can never drift apart.
 *
 * Optional fields: `version` and `status` render as badges; `linkLabel`
 * overrides the default "Live" label (e.g. "Collection"); `links` is an array
 * of extra `{ label, href }` buttons; `report` adds an accented button for a
 * downloadable write-up, rendered last.
 */

// Leave the site only for external URLs and downloadable files; in-site routes
// navigate in place.
const isAway = (href) => /^https?:\/\//.test(href) || /\.pdf($|[?#])/i.test(href);
const awayProps = (href) =>
  isAway(href) ? { target: "_blank", rel: "noreferrer" } : {};

const BTN =
  "press inline-flex items-center gap-2 border border-border bg-bg px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-fg shadow-hard-sm";
const ProjectCard = ({ project }) => (
  <div className="group border border-border bg-surface p-6 sm:p-8 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg">
    <div className="flex flex-wrap items-center gap-2 mb-5">
      {project.version && (
        <span className="inline-flex items-center border border-accent bg-accent/10 px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wide text-accent-deep">
          {project.version}
        </span>
      )}
      {project.status && (
        <span className="inline-flex items-center gap-1.5 border border-accent bg-accent/10 px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wide text-accent-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {project.status}
        </span>
      )}
      {project.tech.slice(0, 8).map((item, i) => (
        <span key={i} className="badge">
          {item}
        </span>
      ))}
    </div>

    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
      <h3 className="font-display font-bold text-2xl sm:text-3xl text-fg group-hover:text-accent-deep transition-colors">
        {project.title}
      </h3>
      {project.year && (
        <span className="font-mono text-sm text-accent-deep tabular-nums">
          {project.year}
        </span>
      )}
    </div>
    <p className="text-muted mt-3 leading-relaxed max-w-3xl">
      {project.description}
    </p>

    <div className="flex flex-wrap items-center gap-3 mt-6">
      {project.link && (
        <a href={project.link} {...awayProps(project.link)} className={BTN}>
          {project.linkLabel || "Live"} <FiArrowUpRight size={14} />
        </a>
      )}
      {project.links?.map(({ label, href }) => (
        <a key={label} href={href} {...awayProps(href)} className={BTN}>
          {label} <FiArrowUpRight size={14} />
        </a>
      ))}
      {project.github && (
        <a href={project.github} {...awayProps(project.github)} className={BTN}>
          <FaGithub size={14} /> Code
        </a>
      )}
      {project.report && (
        <a
          href={project.report}
          {...awayProps(project.report)}
          className="press inline-flex items-center gap-2 border border-border bg-accent px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-white shadow-hard-sm"
        >
          <FiFileText size={14} /> Report
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;

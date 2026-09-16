import { Helmet } from "react-helmet-async";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {
  featuredProjects,
  mlProjects,
  additionalProjects,
} from "../constants/projects";
import { useReveal } from "../hooks/useReveal";

const BASE = "https://lagnajitmoharana.web.app";

const allProjects = [...featuredProjects, ...mlProjects, ...additionalProjects];

const projectsSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE}/projects#webpage`,
      "url": `${BASE}/projects`,
      "name": "Projects — Lagnajit Moharana",
      "description":
        "Projects by Lagnajit Moharana — featured work like AutoSage (AI infrastructure platform), SageX (CLI) and AutoSage Docs; ML & AI research including the MiniGPT models trained from scratch with PyTorch; and additional full-stack apps.",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
    },
    {
      "@type": "ItemList",
      "@id": `${BASE}/projects#list`,
      "name": "Projects by Lagnajit Moharana",
      "url": `${BASE}/projects`,
      "numberOfItems": allProjects.length,
      "author": { "@id": `${BASE}/#person` },
      "itemListElement": allProjects.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": p.title,
          "url": p.link || p.github,
          "codeRepository": p.github,
          "applicationCategory": "WebApplication",
          "programmingLanguage": p.tech,
          "author": { "@id": `${BASE}/#person` },
          "dateCreated": p.year,
        },
      })),
    },
  ],
});

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="mt-20 first:mt-14">
    <div className="flex items-center gap-4 mb-6">
      <span className="eyebrow whitespace-nowrap">{eyebrow}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-fg tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted mt-3 leading-relaxed max-w-3xl text-lg">
        {subtitle}
      </p>
    )}
  </div>
);

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
      <span className="font-mono text-sm text-accent-deep tabular-nums">
        {project.year}
      </span>
    </div>
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
);

const ProjectRow = ({ row }) => (
  <div className="group grid grid-cols-1 sm:grid-cols-[6rem_1fr_auto] gap-x-6 gap-y-4 items-start py-7 border-b border-border-soft transition-colors hover:bg-surface -mx-4 px-4">
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
);

const Projects = () => {
  const navigate = useNavigate();
  const containerRef = useReveal();

  return (
    <>
      <Helmet>
        <title>Projects — Lagnajit Moharana</title>
        <meta
          name="description"
          content="Projects by Lagnajit Moharana — featured work (AutoSage, SageX CLI, AutoSage Docs), ML & AI research (MiniGPT models trained from scratch with PyTorch), and additional full-stack apps."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE}/projects`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE}/projects`} />
        <meta property="og:title" content="Projects — Lagnajit Moharana" />
        <meta
          property="og:description"
          content="Featured work (AutoSage, SageX CLI, AutoSage Docs), ML & AI research (MiniGPT from scratch with PyTorch), and additional full-stack apps."
        />
        <meta property="og:image" content={`${BASE}/og-image.png`} />
        <meta property="og:image:alt" content="Projects — Lagnajit Moharana" />
        <meta property="og:site_name" content="Lagnajit Moharana" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@m_lagnajit09" />
        <meta name="twitter:creator" content="@m_lagnajit09" />
        <meta name="twitter:title" content="Projects — Lagnajit Moharana" />
        <meta
          name="twitter:description"
          content="Featured work, ML & AI research (MiniGPT from scratch), and additional full-stack apps by Lagnajit Moharana."
        />
        <meta name="twitter:image" content={`${BASE}/og-image.png`} />
        <meta name="twitter:image:alt" content="Projects — Lagnajit Moharana" />

        <script type="application/ld+json">{projectsSchema}</script>
      </Helmet>

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
          A collection of things I've designed and built — from full-stack web
          apps to training language models from scratch.
        </p>

        {/* 1 — Featured */}
        <section className="reveal">
          <SectionHeading
            eyebrow="Featured Project"
            title="My best work"
            subtitle="The AutoSage ecosystem — an AI-driven infrastructure automation platform, its terminal CLI, and its docs, each backed by RAG and agentic AI."
          />
          <div className="flex flex-col gap-6 mt-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 2 — ML & AI */}
        <section className="reveal">
          <SectionHeading
            eyebrow="Learning in Public"
            title="ML & AI Research and Work"
            subtitle="Building and aligning language models from the ground up — each MiniGPT version pushing further than the last."
          />
          <div className="flex flex-col gap-6 mt-10">
            {mlProjects.map((project) => (
              <ProjectCard key={project.version} project={project} />
            ))}
          </div>
        </section>

        {/* 3 — Additionals */}
        <section className="reveal">
          <SectionHeading
            eyebrow="More Work"
            title="Additionals"
            subtitle="Full-stack apps and experiments built along the way."
          />
          <div className="mt-8 border-t border-border">
            {additionalProjects.map((row) => (
              <ProjectRow key={row.id} row={row} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;

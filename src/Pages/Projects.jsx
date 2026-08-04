import { Helmet } from "react-helmet-async";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants/projects";
import { useReveal } from "../hooks/useReveal";

const BASE = "https://lagnajitmoharana.web.app";

const projectsSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE}/projects#webpage`,
      "url": `${BASE}/projects`,
      "name": "Projects — Lagnajit Moharana",
      "description":
        "All 11 projects by Lagnajit Moharana — from AutoSage (AI infrastructure platform) and SwiftPay (payment app) to MiniGPT language models trained from scratch with PyTorch.",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
    },
    {
      "@type": "ItemList",
      "@id": `${BASE}/projects#list`,
      "name": "Projects by Lagnajit Moharana",
      "url": `${BASE}/projects`,
      "numberOfItems": projects.length,
      "author": { "@id": `${BASE}/#person` },
      "itemListElement": projects.map((p, i) => ({
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

const Projects = () => {
  const navigate = useNavigate();
  const containerRef = useReveal();

  return (
    <>
      <Helmet>
        <title>Projects — Lagnajit Moharana</title>
        <meta
          name="description"
          content="All 11 projects by Lagnajit Moharana — from AutoSage (AI infrastructure platform) and SwiftPay (payment app with microservices) to MiniGPT language models trained from scratch with PyTorch."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE}/projects`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE}/projects`} />
        <meta property="og:title" content="Projects — Lagnajit Moharana" />
        <meta
          property="og:description"
          content="Full-stack web apps and ML research projects — AutoSage (agentic AI + RAG), SwiftPay (Kubernetes microservices), and MiniGPT models trained from scratch with PyTorch."
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
          content="11 projects: AutoSage (AI infrastructure), SwiftPay (microservices), MiniGPT (LLM from scratch), and more."
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
    </>
  );
};

export default Projects;

import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Disciplines from "../components/Disciplines";
import About from "../components/About";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

const BASE = "https://lagnajitmoharana.web.app";

const homeSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE}/#person`,
      "name": "Lagnajit Moharana",
      "url": `${BASE}/`,
      "image": `${BASE}/og-image.png`,
      "jobTitle": "App Development Analyst",
      "worksFor": {
        "@type": "Organization",
        "name": "Accenture",
        "url": "https://www.accenture.com",
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Ravenshaw University",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cuttack",
          "addressRegion": "Odisha",
          "addressCountry": "IN",
        },
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Odisha",
        "postalCode": "753004",
        "addressCountry": "IN",
      },
      "email": "2004lagnajitmoharana@gmail.com",
      "sameAs": [
        "https://github.com/Lagnajit09",
        "https://www.linkedin.com/in/lagnajitmoharana2004/",
        "https://x.com/m_lagnajit09",
        "https://www.instagram.com/sketchify99/",
      ],
      "knowsAbout": [
        "Full-Stack Development",
        "Cloud Infrastructure",
        "DevOps",
        "Machine Learning",
        "Large Language Models",
        "RAG Pipelines",
        "Agentic AI",
        "React",
        "Next.js",
        "Python",
        "AWS",
        "Google Cloud Platform",
        "Docker",
        "Kubernetes",
        "PyTorch",
        "LangChain",
        "LoRA Fine-Tuning",
        "ServiceNow",
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "AWS Certified Cloud Practitioner",
          "credentialCategory": "certification",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Amazon Web Services",
          },
          "validFrom": "2024-12",
          "validUntil": "2027-12",
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "GCP Certified Associate Cloud Engineer",
          "credentialCategory": "certification",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Google Cloud",
          },
          "validFrom": "2026-01",
          "validUntil": "2029-01",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      "url": `${BASE}/`,
      "name": "Lagnajit Moharana — Portfolio",
      "description":
        "Portfolio of Lagnajit Moharana, Full-Stack Developer and AI Engineer at Accenture.",
      "author": { "@id": `${BASE}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE}/#webpage`,
      "url": `${BASE}/`,
      "name": "Lagnajit Moharana — Full-Stack Developer & AI Engineer",
      "isPartOf": { "@id": `${BASE}/#website` },
      "about": { "@id": `${BASE}/#person` },
      "description":
        "Lagnajit Moharana is a full-stack developer and AI engineer at Accenture, specialising in cloud infrastructure, DevOps, and machine learning.",
    },
  ],
});

const Home = () => {
  const containerRef = useReveal();

  return (
    <>
      <Helmet>
        <title>Lagnajit Moharana — Full-Stack Developer &amp; AI Engineer</title>
        <meta
          name="description"
          content="Lagnajit Moharana is a full-stack developer and AI engineer at Accenture, specialising in cloud infrastructure, DevOps, and machine learning — LLMs, RAG pipelines, and agentic AI workflows."
        />
        <meta
          name="keywords"
          content="Lagnajit Moharana, full-stack developer, AI engineer, cloud infrastructure, DevOps, machine learning, React, Next.js, Python, AWS, GCP, LLM, RAG, agentic AI, portfolio"
        />
        <meta name="author" content="Lagnajit Moharana" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE}/`} />
        <meta property="og:title" content="Lagnajit Moharana — Full-Stack Developer & AI Engineer" />
        <meta
          property="og:description"
          content="Full-stack developer and AI engineer at Accenture. Building end-to-end systems — from React interfaces to cloud infrastructure, DevOps pipelines, and LLM-powered applications."
        />
        <meta property="og:image" content={`${BASE}/og-image.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Lagnajit Moharana — Full-Stack Developer & AI Engineer" />
        <meta property="og:site_name" content="Lagnajit Moharana" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@m_lagnajit09" />
        <meta name="twitter:creator" content="@m_lagnajit09" />
        <meta name="twitter:title" content="Lagnajit Moharana — Full-Stack Developer & AI Engineer" />
        <meta
          name="twitter:description"
          content="Full-stack developer and AI engineer at Accenture — cloud infrastructure, DevOps, and ML (LLMs, RAG, agentic AI)."
        />
        <meta name="twitter:image" content={`${BASE}/og-image.png`} />
        <meta name="twitter:image:alt" content="Lagnajit Moharana — Full-Stack Developer & AI Engineer" />

        <script type="application/ld+json">{homeSchema}</script>
      </Helmet>

      <div ref={containerRef} className="max-w-6xl mx-auto px-5 sm:px-8">
        <Header />
        <main>
          <Disciplines />
          <About />
          <Experience />
          <Certifications />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;

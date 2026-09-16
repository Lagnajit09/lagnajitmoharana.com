// ── Featured — flagship / best work (rendered as rich cards on /projects) ──
export const featuredProjects = [
  {
    id: "autosage",
    year: "2025 - 2026",
    title: "AutoSage",
    link: "https://autosagex.web.app/",
    github: "https://github.com/Lagnajit09/autosage",
    tech: [
      "ReactJS",
      "Django",
      "Redis",
      "Celery",
      "GCP",
      "Agentic AI",
      "RAG",
      "Supabase",
      "Docker",
      "Tailwind CSS",
    ],
    description:
      "A production full-stack AI platform that automates cloud infrastructure management through RAG pipelines and agentic AI workflows. The Django backend orchestrates long-running jobs with Redis and Celery, is containerized on GCP, and uses Supabase as the vector store.",
  },
  {
    id: "sagex-cli",
    year: "Aug, 2026",
    title: "SageX (CLI)",
    status: "In progress",
    link: "",
    github: "https://github.com/Lagnajit09/sagex",
    tech: ["Python", "CLI", "AutoSage API", "Agentic AI", "RAG"],
    description:
      "The command-line companion to AutoSage — bringing infrastructure automation, RAG-powered queries and agentic workflows straight to the terminal, so you can provision, inspect and manage cloud resources without leaving the shell. Actively in development since August 2026.",
  },
  {
    id: "autosage-docs",
    year: "2025 - 2026",
    title: "AutoSage Docs",
    link: "https://autosagexdocs.web.app/",
    github: "https://github.com/Lagnajit09/autosage-docs",
    tech: ["Docusaurus", "Django", "RAG", "Supabase - VectorDB"],
    description:
      "The documentation hub for AutoSage, built on Docusaurus and backed by a Django-powered RAG assistant over a Supabase vector database — letting users ask questions in natural language and get grounded answers sourced straight from the docs.",
  },
];

// ── Additionals — everything else (rendered as a compact list on /projects) ──
export const additionalProjects = [
  {
    id: "8",
    year: "2025 - 2026",
    title: "SwiftPay-v2: Payment Application",
    link: "https://swiftpayz.web.app/",
    github: "https://github.com/Lagnajit09/swiftpay-infraops",
    tech: [
      "NextJS",
      "ExpressJS",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
      "Microservices",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: "7",
    year: "2024 - 2025",
    title: "SwiftPay",
    link: "",
    github: "https://github.com/Lagnajit09/walletX",
    tech: ["NextJS", "ExpressJS", "PostgreSQL", "Tailwind CSS", "Prisma"],
  },
  {
    id: "2",
    year: "2024",
    title: "Medium: Blogging website",
    link: "https://medium-pro.web.app/",
    github: "https://github.com/Lagnajit09/Medium",
    tech: ["ReactJS", "postgreSQL", "CloudFlare", "Prisma ORM", "Tailwind CSS"],
  },
  {
    id: "3",
    year: "2024",
    title: "Aora: Android application",
    link: "",
    github: "https://github.com/Lagnajit09/Aora-ReactNative",
    tech: ["ReactNative", "appwrite", "Tailwind CSS"],
  },
  {
    id: "4",
    year: "2024",
    title: "Figma: Desiging platform",
    link: "https://pro-figma.vercel.app/",
    github: "https://github.com/Lagnajit09/Figma",
    tech: ["NextJS", "Liveblocks", "Tailwind CSS", "Typescript"],
  },
  {
    id: "5",
    year: "2024",
    title: "Resume Portfolio",
    link: "https://lagnajitmoharana.web.app/",
    github: "https://github.com/Lagnajit09/lagnajitmoharana.com",
    tech: ["ReactJS", "Tailwind CSS"],
  },
];

export const topProjects = [
  {
    title: "AutoSage: Infrastructure Automation Platform",
    link: "https://autosagex.web.app/",
    github: "https://github.com/Lagnajit09/autosage",
    tech: [
      "ReactJS",
      "Django",
      "Redis",
      "Celery",
      "GCP",
      "Docker",
      "Agentic AI",
      "RAG",
      "Tailwind CSS",
      "Supabase",
    ],
    description:
      "AutoSage is an AI-driven infrastructure automation platform that streamlines and optimizes cloud operations through workflows, RAG and agentic AI, enabling users to manage and scale their infrastructure efficiently.",
  },
  {
    title: "SwiftPay: Payment Application",
    link: "https://swiftpayz.web.app/",
    github: "https://github.com/Lagnajit09/swiftpay-infraops",
    tech: [
      "ReactJS",
      "ExpressJS",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
      "Docker",
      "Microservices",
      "Kubernetes",
    ],
    description:
      "SwiftPay is a demo payment application that allows users to send and receive money instantly, connect with friends, and manage their finances with ease. It is built with a modern tech stack and offers a seamless user experience.",
  },
];

// MiniGPT — an evolving learning journey of building & aligning language models,
// each version pushing further than the last (v1 → v2 → v3).
export const mlProjects = [
  {
    version: "v1",
    year: "Jun, 2026",
    title: "MiniGPT-Shakespeare",
    link: "https://huggingface.co/spaces/m-lagnajit/minigpt-shakespeare",
    github:
      "https://github.com/Lagnajit09/100x_AI_ML/tree/main/minigpt-model-hf",
    tech: ["PyTorch", "Gradio", "HuggingFace", "Transformers & Attention"],
    description:
      "Where it started — a GPT-style transformer trained entirely from scratch in PyTorch on the works of Shakespeare, then deployed on HuggingFace Spaces with a Gradio interface for interactive text generation.",
  },
  {
    version: "v2",
    year: "Jul, 2026",
    title: "MiniGPT-v2",
    link: "https://minigpt-v2.onrender.com/",
    github: "https://github.com/Lagnajit09/100x_AI_ML/tree/main/minigpt-v2",
    tech: [
      "PyTorch",
      "Gradio",
      "Transformers & Attention",
      "RMSNorm",
      "SwiGLU",
      "RoPE",
      "GQA",
      "BPE Tokenization",
    ],
    description:
      "A GPT-style transformer built from scratch in PyTorch and trained on the TinyStories dataset. It layers in modern techniques — RMSNorm, SwiGLU, RoPE, GQA, LR scheduling and a hand-rolled BPE tokenizer — to improve quality and efficiency in text generation.",
  },
  {
    version: "v3",
    year: "Aug, 2026",
    title: "MiniGPT-v3",
    link: "https://minigpt-v3.streamlit.app",
    github: "https://github.com/Lagnajit09/100x_AI_ML/tree/main/minigpt-v3",
    tech: [
      "PyTorch",
      "Transformers",
      "Streamlit",
      "SmolLM-135M",
      "LoRA",
      "SFT",
      "DPO",
      "GRPO",
    ],
    description:
      "A fine-tuned SmolLM-135M taken through a complete alignment pipeline — Continued Pre-Training (CPT) on WikiText, Supervised Fine-Tuning (SFT) on Alpaca, preference alignment via RLHF/DPO on Orca pairs, and RLVR with GRPO for verifiable arithmetic reasoning. Each stage is a stackable LoRA adapter, served on Streamlit.",
  },
];

import JavaScript from "../assets/skills/javascript.svg";
import MongoDB from "../assets/skills/mongodb.svg";
import MySQL from "../assets/skills/mysql.svg";
import NextJS from "../assets/skills/nextjs.svg";
import ExpressJS from "../assets/skills/nodejs.svg";
import PostgreSQL from "../assets/skills/pgsql.svg";
import Prisma from "../assets/skills/prisma.svg";
import ReactJS from "../assets/skills/reactjs.svg";
import TailwindCSS from "../assets/skills/tailwindcss.svg";
import TypeScript from "../assets/skills/typescript.svg";
import AWS from "../assets/skills/awsLogo.svg";
import Azure from "../assets/skills/azureLogo.svg";
import GCP from "../assets/skills/gcpLogo.svg";
import Python from "../assets/skills/pyLogo.svg";
import Ansible from "../assets/skills/ansible.svg";
import Terraform from "../assets/skills/terraform.svg";
import Docker from "../assets/skills/docker.svg";
import Kubernetes from "../assets/skills/kubernetes.svg";
import PyTorch from "../assets/skills/pytorch.svg";
import HuggingFace from "../assets/skills/huggingface.svg";
import LangChain from "../assets/skills/langchain.svg";
import Django from "../assets/skills/django.svg";
import FastAPI from "../assets/skills/fastapi.svg";
import Redis from "../assets/skills/redis.svg";
import Git from "../assets/skills/git.svg";
import Github from "../assets/skills/github.svg";

/**
 * `darkBg: true` — icon is white/transparent and needs a dark pill background
 *                  to be visible in both light and dark themes (e.g. NextJS, GitHub).
 * `text: true`   — no icon; render the name as a styled monogram instead.
 */
export const skillGroups = [
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: AWS },
      { name: "Azure", icon: Azure },
      { name: "GCP", icon: GCP },
      { name: "Docker", icon: Docker },
      { name: "Kubernetes", icon: Kubernetes },
      { name: "Ansible", icon: Ansible },
      { name: "Terraform", icon: Terraform },
      { name: "Git", icon: Git },
      { name: "GitHub", icon: Github, darkBg: true },
    ],
  },
  {
    label: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", icon: PyTorch },
      { name: "HuggingFace", icon: HuggingFace },
      { name: "LangChain", icon: LangChain },
      { name: "Agentic AI", text: true },
      { name: "RAG", text: true },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "ReactJS", icon: ReactJS },
      { name: "NextJS", icon: NextJS, darkBg: true },
      { name: "TypeScript", icon: TypeScript },
      { name: "JavaScript", icon: JavaScript },
      { name: "Tailwind CSS", icon: TailwindCSS },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "ExpressJS", icon: ExpressJS },
      { name: "Python", icon: Python },
      { name: "Django", icon: Django },
      { name: "FastAPI", icon: FastAPI },
      { name: "Redis", icon: Redis },
      { name: "Prisma", icon: Prisma, darkBg: true },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "MongoDB", icon: MongoDB },
      { name: "MySQL", icon: MySQL },
    ],
  },
];

// Keep the flat list for any backward-compatible use
export const skillsList = skillGroups.flatMap((g) => g.skills);

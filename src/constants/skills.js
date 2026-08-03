import JavaScript from "../assets/skills/javascript.svg";
import NextJS from "../assets/skills/nextjs.svg";
import ExpressJS from "../assets/skills/nodejs.svg";
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
import AI from "../assets/skills/ai.svg";
import RAG from "../assets/skills/rag.svg";
import Django from "../assets/skills/django.svg";
import FastAPI from "../assets/skills/fastapi.svg";
import Redis from "../assets/skills/redis.svg";
import Git from "../assets/skills/git.svg";
import Github from "../assets/skills/github.svg";

/**
 * `darkBg: true`     — icon needs a pill background to be visible.
 * `darkInvert: true` — icon is dark-colored; invert it in dark mode so it reads as white.
 * `text: true`       — no icon; render the name as a styled monogram instead.
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
      { name: "Ansible", icon: Ansible, darkBg: true, darkInvert: true },
      { name: "Terraform", icon: Terraform },
      { name: "Git", icon: Git },
      { name: "GitHub", icon: Github, darkBg: true, darkInvert: true },
    ],
  },
  {
    label: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", icon: PyTorch },
      { name: "Hugging Face", icon: HuggingFace },
      { name: "Transformers", text: true },
      { name: "Fine-Tuning", text: true },
      { name: "LoRA", text: true },
      { name: "LangChain", icon: LangChain },
      { name: "Agentic AI", icon: AI, darkInvert: true },
      { name: "RAG", icon: RAG, darkInvert: true },
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
      { name: "Prisma", icon: Prisma, darkBg: true, darkInvert: true },
    ],
  },
];

// Keep the flat list for any backward-compatible use
export const skillsList = skillGroups.flatMap((g) => g.skills);

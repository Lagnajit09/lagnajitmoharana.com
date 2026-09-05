import DockerBlog from "../assets/blogs/docker.png";
import XArticle1 from "../assets/blogs/x_post_1.webp";
import XArticle2 from "../assets/blogs/x_post_2.jpg";
import XArticle3 from "../assets/blogs/x_post_3.png";
import XArticle4 from "../assets/blogs/x_post_4.png";
import Autosage from "../assets/blogs/autosage.png";

export const blogs = [
  {
    name: "From Text to Nodes: How AI Engineering Is Evolving",
    link: "https://x.com/m_lagnajit09/status/2094334032066777120?s=20",
    image: XArticle4,
    description:
      "From prompt engineering and context engineering to harnesses, loops, and graphs — the unit of AI engineering is gradually moving from the model to the system around it.",
  },
  {
    name: "Coherent Isn't the Same as Correct: What I Learned Building a GPT From Scratch",
    link: "https://x.com/m_lagnajit09/status/2075518911228051771?s=20",
    image: XArticle3,
    description:
      "Built a mini GPT-v2 from scratch using a modern Transformer stack: RMSNorm, GQA, SwiGLU, and RoPE, along with a BPE tokenizer implemented from scratch. Trained on 15,000 TinyStories samples with 6.8M parameters in Google Colab, then deployed the model on Render with Gradio for interactive inference.",
  },
  {
    name: "Introducing Autosage: A Remote Automation Platform with an AI Copilot",
    link: "https://lmdev09.notion.site/Autosage-A-Remote-Automation-Platform-with-an-AI-Copilot-393146351df1802a9f25f137dcf501ac",
    image: Autosage,
    description:
      "Built an AI-powered automation platform to control, orchestrate, and monitor infrastructure from one place. The built-in AI copilot allows users to automate tasks, manage resources, and gain insights into their systems.",
  },
  {
    name: "How a Transformer Actually Learns — Loss, Backprop & Going Deeper",
    link: "https://x.com/m_lagnajit09/status/2070404529917677667?s=20",
    image: XArticle2,
    description:
      "Training a Transformer model involves optimizing millions of parameters through concepts like Multi-Head Attention, Neural Networks, backpropagation, and learning rate optimization. These allow the model to learn patterns in data, perform tasks like language understanding and generation effectively.",
  },
  {
    name: "How Transformers Actually Work — From First Principles",
    link: "https://x.com/m_lagnajit09/status/2067852406612992187?s=20",
    image: XArticle1,
    description:
      "Transformers are the foundation of modern AI systems, enabling models to understand language and complex data by using attention mechanisms. They analyze relationships between all parts of the input at once, allowing them to capture context, meaning, and long-range dependencies efficiently.",
  },
  {
    name: "Docker: Way to Containerization",
    link: "https://lmdev09.notion.site/Docker-101-Your-First-Steps-into-Containerization-e548710acb0347cca304765731de3ab9",
    image: DockerBlog,
    description:
      "Docker is an open-source platform that allows developers to automate the deployment of applications in lightweight, portable containers. These containers package everything needed to run an application, ensuring consistent performance across different environments.",
  },
];

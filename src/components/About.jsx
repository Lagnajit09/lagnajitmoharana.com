import Section from "./Section";

const About = () => {
  return (
    <Section id="about" label="About" title="Who I am">
      <div className="text-muted text-base md:text-lg leading-relaxed flex flex-col gap-5 max-w-2xl">
        <p>
          I found my passion for coding back in college, diving headfirst into
          full-stack development. Since then I've built a range of end-to-end
          applications — from real-time collaboration tools to payment systems.
        </p>
        <p>
          I started with front-end, crafting clean and responsive interfaces.
          Over time my focus grew into{" "}
          <span className="text-fg">Cloud Infrastructure</span>,{" "}
          <span className="text-fg">DevOps</span>, and{" "}
          <span className="text-fg">AI-driven systems</span> — designing and
          deploying scalable applications with containerization, CI/CD
          pipelines, and infrastructure automation.
        </p>
        <p>
          These days, I'm deep into <span className="text-fg">ML and AI</span> —
          studying the internals of large language models, from transformer
          architecture and attention mechanisms to advanced concepts. I've
          trained and deployed my own models, and built production systems with
          RAG pipelines, agentic workflows, and tool use.
        </p>
        <p>
          Away from the keyboard, you'll find me in the world of 2D animation,
          portrait drawing, and design — bringing characters to life and
          sketching intricate portraits.
        </p>
      </div>
    </Section>
  );
};

export default About;

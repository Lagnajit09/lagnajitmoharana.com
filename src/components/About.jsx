import Section from "./Section";

const About = () => {
  return (
    <Section id="about" label="About" title="Who I am">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12">
        <p className="font-display text-2xl sm:text-3xl leading-snug text-fg">
          I build end-to-end systems — from{" "}
          <span className="italic text-accent-deep">clean interfaces</span> to{" "}
          <span className="italic text-accent-deep">scalable infrastructure</span>.
        </p>

        <div className="text-muted text-base md:text-lg leading-relaxed flex flex-col gap-5">
          <p>
            I found my passion for coding back in college, diving headfirst into
            full-stack development. Since then I've built a range of end-to-end
            applications — from real-time collaboration tools to payment systems.
          </p>
          <p>
            I started with front-end, crafting clean and responsive interfaces.
            Over time my focus grew into{" "}
            <span className="text-fg font-medium">Cloud Infrastructure</span>,{" "}
            <span className="text-fg font-medium">DevOps</span>, and{" "}
            <span className="text-fg font-medium">AI-driven systems</span> —
            designing and deploying scalable applications with containerization,
            CI/CD pipelines, and infrastructure automation.
          </p>
          <p>
            These days, I'm deep into{" "}
            <span className="text-fg font-medium">ML and AI</span> — studying the
            internals of large language models, from transformer architecture and
            attention mechanisms to advanced concepts. I've trained and deployed my
            own models, and built production systems with RAG pipelines, agentic
            workflows, and tool use.
          </p>
          <p>
            Away from the keyboard, you'll find me in the world of 2D animation,
            portrait drawing, and design — bringing characters to life and
            sketching intricate portraits.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;

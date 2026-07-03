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
          <span className="text-fg">cloud infrastructure</span>,{" "}
          <span className="text-fg">DevOps</span>, and{" "}
          <span className="text-fg">AI-driven systems</span> — designing and
          deploying scalable applications with containerization, CI/CD
          pipelines, and infrastructure automation.
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

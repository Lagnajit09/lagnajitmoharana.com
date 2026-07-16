import { FiLayers, FiCloud, FiCpu } from "react-icons/fi";

const disciplines = [
  {
    icon: FiLayers,
    title: "Full Stack",
    detail:
      "Crafting clean, responsive front-ends and robust back-end architectures with real-time capabilities.",
  },
  {
    icon: FiCloud,
    title: "DevOps",
    detail:
      "Deploying scalable applications with containerization, CI/CD pipelines, and infrastructure automation.",
  },
  {
    icon: FiCpu,
    title: "Machine Learning",
    detail:
      "Studying transformer architectures and building production systems with RAG pipelines and agentic workflows.",
  },
];

const Disciplines = () => {
  return (
    <section id="disciplines" className="py-14 md:py-20 reveal">
      <div className="flex items-center gap-4 mb-10">
        <span className="eyebrow whitespace-nowrap">Core Disciplines</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {disciplines.map((d) => (
          <div
            key={d.title}
            className="group border border-border bg-surface p-7 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard"
          >
            <d.icon size={30} className="text-fg" strokeWidth={1.6} />
            <h3 className="font-display font-bold text-2xl text-fg mt-6">
              {d.title}
            </h3>
            <p className="text-[0.95rem] text-muted mt-3 leading-relaxed">
              {d.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Disciplines;

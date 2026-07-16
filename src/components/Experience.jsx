import { experiences } from "../constants/experiences";

const education = [
  {
    period: "2021 — 2024",
    school: "Ravenshaw University",
    detail:
      "B.Sc. in Information Technology & Management (87.13%). Built several full-stack projects spanning React.js front-ends, Node.js / MongoDB back-ends, and cloud services like Firebase — laying a solid foundation for my career.",
  },
  {
    period: "2019 — 2021",
    school: "Ravenshaw Higher Secondary School",
    detail: "12th, CHSE Board (94%).",
  },
  {
    period: "2008 — 2019",
    school: "Saraswati Vidya Mandir",
    detail: "10th, BSE Board (91.67%).",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-14 md:py-20 reveal">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Experience column */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="eyebrow whitespace-nowrap">Experience</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mb-8 tracking-tight">
            Where I've worked
          </h2>

          <ol className="relative border-l border-border ml-1.5">
            {experiences.map((exp) => (
              <li key={exp.id} className="ml-6 pb-9 last:pb-0">
                <span className="absolute -left-[7px] w-3.5 h-3.5 rounded-full bg-accent border-2 border-bg" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display font-bold text-lg text-fg">
                    {exp.designation}
                  </h3>
                  <span className="font-mono text-xs text-subtle whitespace-nowrap">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-accent-deep font-medium mt-0.5">
                  {exp.company}
                </p>
                {exp.description && (
                  <p className="text-sm text-muted mt-2.5 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Education column */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="eyebrow whitespace-nowrap">Education</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mb-8 tracking-tight">
            Where I studied
          </h2>

          <div className="flex flex-col gap-4">
            {education.map((item, i) => (
              <div
                key={i}
                className="border border-border bg-surface p-5 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-sm"
              >
                <span className="font-mono text-xs text-subtle">
                  {item.period}
                </span>
                <h3 className="font-display font-bold text-lg text-fg mt-1">
                  {item.school}
                </h3>
                <p className="text-sm text-muted mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

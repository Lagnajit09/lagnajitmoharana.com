import Section from "./Section";

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

function Education() {
  return (
    <Section id="education" label="Education" title="Where I studied">
      <ol className="relative border-l border-border ml-1.5">
        {education.map((item, i) => (
          <li key={i} className="ml-6 pb-8 last:pb-0">
            <span className="absolute -left-[6px] w-3 h-3 rounded-full bg-bg border-2 border-accent" />
            <span className="text-sm text-subtle">{item.period}</span>
            <h3 className="font-semibold text-fg mt-0.5">{item.school}</h3>
            <p className="text-sm text-muted mt-1.5 leading-relaxed max-w-2xl">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Education;

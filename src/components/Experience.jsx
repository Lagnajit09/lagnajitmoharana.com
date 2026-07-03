import Section from "./Section";
import { experiences } from "../constants/experiences";

const Experience = () => {
  return (
    <Section id="experience" label="Experience" title="Where I've worked">
      <div className="flex flex-col gap-2">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group flex gap-4 sm:gap-6 rounded-xl p-4 -mx-4 hover:bg-surface transition-colors"
          >
            <div className="shrink-0 mt-1">
              <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center ring-1 ring-border">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold text-fg">{exp.designation}</h3>
                <span className="text-sm text-subtle whitespace-nowrap">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <p className="text-sm text-accent mt-0.5">{exp.company}</p>
              {exp.description && (
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  {exp.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

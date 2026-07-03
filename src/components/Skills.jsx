import Section from "./Section";
import { skillsList } from "../constants/skills";

function Skills() {
  return (
    <Section id="skills" label="Toolkit" title="Technical skills">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {skillsList.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center gap-2.5 rounded-xl border border-border bg-surface/40 py-5 hover:border-accent/40 hover:bg-surface transition-colors"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-9 h-9 object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
            />
            <span className="text-xs text-muted group-hover:text-fg transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;

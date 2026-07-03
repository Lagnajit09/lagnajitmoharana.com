import Section from "./Section";
import { skillGroups } from "../constants/skills";

function Skills() {
  return (
    <Section id="skills" label="Toolkit" title="Technical skills">
      <div className="flex flex-col gap-10">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-subtle mb-4">
              {group.label}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {group.skills.map((item) => (
                <SkillCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const SkillCard = ({ item }) => (
  <div className="group flex flex-col items-center gap-2.5 rounded-xl border border-border bg-surface/40 py-5 px-2 hover:border-accent/40 hover:bg-surface transition-colors">
    <SkillIcon item={item} />
    <span className="text-xs text-muted group-hover:text-fg transition-colors text-center leading-tight">
      {item.name}
    </span>
  </div>
);

const SkillIcon = ({ item }) => {
  // Text-only skill — render a compact monogram badge
  if (item.text) {
    const abbr = item.name
      .split(/[\s/]+/)
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 3);

    return (
      <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center">
        <span className="text-[10px] font-bold text-subtle tracking-wide leading-none">
          {abbr}
        </span>
      </div>
    );
  }

  // darkBg: icon is white — always show on a dark pill so it's visible in
  // both light and dark themes without inverting (which breaks on hover)
  if (item.darkBg) {
    return (
      <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center p-1.5 group-hover:opacity-100 transition-opacity opacity-80">
        <img
          src={item.icon}
          alt={item.name}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Standard icon — grayscale at rest, full color on hover
  return (
    <img
      src={item.icon}
      alt={item.name}
      className="w-9 h-9 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
    />
  );
};

export default Skills;

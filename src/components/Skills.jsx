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

  // darkBg: icon needs a pill container. darkInvert flips dark icons to white in dark mode.
  if (item.darkBg) {
    return (
      <div className="w-9 h-9 rounded-lg bg-zinc-300 dark:bg-zinc-700 flex items-center justify-center p-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
        <img
          src={item.icon}
          alt={item.name}
          className={`w-full h-full object-contain${item.darkInvert ? " dark:invert" : ""}`}
        />
      </div>
    );
  }

  // Standard icon — grayscale at rest, full color on hover.
  // darkInvert: icon is dark-colored, flip to white in dark mode so it stays readable.
  return (
    <img
      src={item.icon}
      alt={item.name}
      className={`w-9 h-9 object-contain opacity-70 group-hover:opacity-100 transition-all duration-200${item.darkInvert ? " grayscale dark:invert" : " grayscale group-hover:grayscale-0"}`}
    />
  );
};

export default Skills;

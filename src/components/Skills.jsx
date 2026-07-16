import { skillGroups } from "../constants/skills";

function Skills() {
  return (
    <section id="skills" className="py-14 md:py-20 reveal">
      <div className="border border-border bg-panel">
        <div className="px-6 sm:px-10 md:px-14 py-12 md:py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Technical Arsenal</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-fg mt-4 tracking-tight">
              Tech stack for high performance
            </h2>
            <p className="text-muted mt-4 leading-relaxed">
              Continuous exploration of the best tools to solve complex
              architectural challenges.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-subtle whitespace-nowrap">
                    {group.label}
                  </h3>
                  <span className="h-px flex-1 bg-border-soft" />
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {group.skills.map((item) => (
                    <SkillCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SkillCard = ({ item }) => (
  <div className="group flex flex-col items-center justify-center gap-3 border border-border-soft bg-surface py-6 px-2 transition-all duration-200 hover:border-border hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-sm">
    <SkillIcon item={item} />
    <span className="font-mono text-[0.7rem] text-muted group-hover:text-fg transition-colors text-center leading-tight tracking-tight">
      {item.name}
    </span>
  </div>
);

const SkillIcon = ({ item }) => {
  if (item.text) {
    const abbr = item.name
      .split(/[\s/]+/)
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 3);
    return (
      <div className="w-9 h-9 border border-border-soft flex items-center justify-center">
        <span className="font-mono text-[10px] font-bold text-subtle tracking-wide leading-none">
          {abbr}
        </span>
      </div>
    );
  }

  if (item.darkBg) {
    return (
      <div className="w-9 h-9 bg-zinc-800 dark:bg-zinc-200 flex items-center justify-center p-1.5">
        <img
          src={item.icon}
          alt={item.name}
          className={`w-full h-full object-contain${item.darkInvert ? " dark:invert-0 invert" : ""}`}
        />
      </div>
    );
  }

  return (
    <img
      src={item.icon}
      alt={item.name}
      className={`w-9 h-9 object-contain transition-all duration-200${item.darkInvert ? " grayscale dark:invert opacity-80 group-hover:opacity-100" : " grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100"}`}
    />
  );
};

export default Skills;

/**
 * Consistent section wrapper for the "Retro-Modern Technical" system:
 * a mono uppercase eyebrow followed by a long 1px rule, then a high-contrast
 * Playfair title. Reveal-on-scroll keeps sections aligned.
 */
const Section = ({ id, label, title, children, className = "" }) => (
  <section id={id} className={`py-14 md:py-20 reveal ${className}`}>
    {label && (
      <div className="flex items-center gap-4 mb-8">
        <span className="eyebrow whitespace-nowrap">{label}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
    )}
    {title && (
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-fg mb-8 tracking-tight leading-tight">
        {title}
      </h2>
    )}
    {children}
  </section>
);

export default Section;

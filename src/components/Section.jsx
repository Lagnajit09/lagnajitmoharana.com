/**
 * Consistent section wrapper: an eyebrow label + optional title, with a
 * reveal-on-scroll animation. Keeps every home section visually aligned.
 */
const Section = ({ id, label, title, children, className = "" }) => (
  <section id={id} className={`py-12 md:py-16 reveal ${className}`}>
    {label && (
      <div className="flex items-center gap-3 mb-8">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
    )}
    {title && (
      <h2 className="font-display text-3xl md:text-4xl text-fg mb-6 tracking-tight">
        {title}
      </h2>
    )}
    {children}
  </section>
);

export default Section;

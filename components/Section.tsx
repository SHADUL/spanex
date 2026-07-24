import { Hairline } from "./Hairline";
import { Reveal } from "./Reveal";

/**
 * Standard section shell: generous vertical rhythm, 1200px measure, an optional
 * numbered eyebrow + copper hairline header. Left-aligned, asymmetric.
 */
export function Section({
  id,
  index,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[1200px] px-6 py-[var(--spacing-section)] md:px-10 ${className}`}
    >
      {eyebrow && (
        <Reveal className="mb-10 flex items-center gap-3">
          {index && (
            <span
              aria-hidden
              className="h-2 w-2 shrink-0 rounded-full bg-copper"
            />
          )}
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      {children}
    </section>
  );
}

export function SectionRule() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 md:px-10">
      <Hairline />
    </div>
  );
}

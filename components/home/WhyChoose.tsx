import { Section } from "@/components/Section";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { reasons } from "@/lib/content";

/**
 * Why work with SPANEX. A four-column hairline grid of short, checkable reasons
 * — numbered, no icons, to keep it quiet and precise.
 */
export default function WhyChoose() {
  return (
    <Section id="why" index="04" eyebrow="Why Spanex">
      <div className="grid grid-cols-12 gap-x-6">
        <h2 className="col-span-12 mb-12 text-[length:var(--text-h2)] leading-[1.02] tracking-[-0.02em] text-ink lg:col-span-8">
          Precision, checked before it ships.
        </h2>
      </div>

      <RevealGroup className="grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <Reveal
            key={r.title}
            className={`border-b border-rule py-8 sm:px-6 lg:px-7 sm:[&:nth-child(2n+1)]:pl-0 lg:[&:nth-child(4n+1)]:pl-0 ${
              i < reasons.length ? "sm:border-r lg:[&:nth-child(4n)]:border-r-0 sm:[&:nth-child(2n)]:border-r-0" : ""
            }`}
          >
            <span
              aria-hidden
              className="block h-2 w-2 rounded-full bg-copper"
            />
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-[1.15rem] font-semibold leading-tight tracking-[-0.01em] text-ink">
              {r.title}
            </h3>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-slate">
              {r.body}
            </p>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}

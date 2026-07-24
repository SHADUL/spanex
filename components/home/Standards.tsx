import { Section } from "@/components/Section";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { standards } from "@/lib/content";

/**
 * Standards worked to. Deliberately reads like a spec sheet — mono labels,
 * tabular rows, hairlines. Not a marketing block.
 */
export default function Standards() {
  return (
    <Section id="standards" index="05" eyebrow="Worked to your standards">
      <div className="grid grid-cols-12 gap-x-6">
        <h2 className="col-span-12 mb-9 text-[length:var(--text-h2)] leading-[1.02] tracking-[-0.02em] text-ink lg:col-span-9">
          We hold to the code you name, not one of our own.
        </h2>
      </div>

      <RevealGroup as="ul" className="border-t border-rule">
        {standards.map((s) => (
          <Reveal
            as="li"
            key={s.code}
            className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 border-b border-rule py-6"
          >
            <span className="col-span-12 font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.1em] text-copper md:col-span-4">
              {s.code}
            </span>
            <span className="col-span-12 font-[family-name:var(--font-display)] text-ink md:col-span-3">
              {s.label}
            </span>
            <span className="measure col-span-12 text-[0.95rem] leading-relaxed text-slate md:col-span-5">
              {s.note}
            </span>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}

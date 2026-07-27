import { Section } from "@/components/Section";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { ReasonIcon } from "./ReasonIcon";
import { reasons } from "@/lib/content";

/**
 * Why work with SPANEX. A grid of premium cards — soft elevation, a hairline
 * ring, a distinct icon per reason and a calm hover lift.
 */
export default function WhyChoose() {
  return (
    <Section id="why" index="04" eyebrow="Why Spanex">
      <div className="grid grid-cols-12 gap-x-6">
        <h2 className="col-span-12 mb-14 text-[length:var(--text-h2)] font-semibold leading-[1.02] tracking-[-0.025em] text-ink lg:col-span-8">
          Precision, checked before it ships.
        </h2>
      </div>

      <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title}>
            <div className="card card-hover flex h-full flex-col p-7">
              <span className="inline-flex text-copper">
                <ReasonIcon index={i} />
              </span>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-[1.1rem] font-semibold leading-tight tracking-[-0.01em] text-ink">
                {r.title}
              </h3>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-slate">
                {r.body}
              </p>
            </div>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}

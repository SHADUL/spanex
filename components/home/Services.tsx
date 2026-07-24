import Link from "next/link";
import { Section } from "@/components/Section";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { ServiceIcon } from "./ServiceIcon";
import { Arrow } from "@/components/ui/Arrow";
import { services } from "@/lib/content";

/**
 * The five service lines as a hairline-separated technical list. Each row: a
 * numbered header with a copper line-icon on the left, and the description plus
 * a scope list and a detail link on the right. No cards, no shadows.
 */
export default function Services() {
  return (
    <Section id="services" index="01" eyebrow="What we design">
      <div className="grid grid-cols-12 gap-x-6">
        <h2 className="col-span-12 mb-12 text-[length:var(--text-h2)] leading-[1.02] tracking-[-0.02em] text-ink lg:col-span-8">
          Utility distribution drafting and engineering design.
        </h2>
      </div>

      <RevealGroup className="border-t border-rule">
        {services.map((s) => (
          <Reveal
            key={s.id}
            className="grid grid-cols-12 gap-x-6 gap-y-6 border-b border-rule py-10"
          >
            {/* Left: index, icon, title */}
            <div className="col-span-12 md:col-span-4">
              <span className="inline-flex text-copper">
                <ServiceIcon name={s.icon} />
              </span>
              <h3 className="mt-4 text-[length:var(--text-h3)] leading-tight text-ink">
                {s.title}
              </h3>
            </div>

            {/* Right: summary, scope, link */}
            <div className="col-span-12 md:col-span-8">
              <p className="measure text-[1.05rem] leading-relaxed text-ink">
                {s.summary}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-[0.92rem] leading-snug text-slate"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] h-px w-3 shrink-0 bg-copper"
                    />
                    {p}
                  </li>
                ))}
              </ul>

              <Link
                href={s.href}
                className="link-wipe mt-7 inline-flex w-fit items-center gap-2 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-ink"
              >
                See detail
                <Arrow className="text-copper" />
              </Link>
            </div>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}

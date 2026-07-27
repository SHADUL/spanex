import Link from "next/link";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "./ServiceIcon";
import { ServiceVisual } from "./ServiceVisual";
import { Arrow } from "@/components/ui/Arrow";
import { services } from "@/lib/content";

/**
 * The five service lines as alternating editorial feature blocks — each pairs a
 * custom technical visual with a concise capability summary. Generous rhythm,
 * left/right alternation, no boxed cards.
 */
export default function Services() {
  return (
    <Section id="services" index="01" eyebrow="What we design">
      <div className="grid grid-cols-12 gap-x-6">
        <h2 className="col-span-12 mb-16 text-[length:var(--text-h2)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink lg:col-span-8 md:mb-24">
          Utility distribution drafting and engineering design.
        </h2>
      </div>

      <div className="space-y-24 md:space-y-36">
        {services.map((s, i) => {
          const visualFirst = i % 2 === 0;
          return (
            <div
              key={s.id}
              className="grid grid-cols-12 items-center gap-x-6 gap-y-8 lg:gap-x-16"
            >
              {/* Visual */}
              <Reveal
                className={`col-span-12 lg:col-span-6 ${
                  visualFirst ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <ServiceVisual name={s.icon} />
              </Reveal>

              {/* Text */}
              <div
                className={`col-span-12 lg:col-span-6 ${
                  visualFirst ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.16em] text-slate">
                      {s.index}
                    </span>
                    <span className="h-px w-8 bg-rule" />
                    <span className="inline-flex text-copper">
                      <ServiceIcon name={s.icon} />
                    </span>
                  </div>

                  <h3 className="mt-6 text-[length:var(--text-h3)] font-semibold leading-tight tracking-[-0.02em] text-ink">
                    {s.title}
                  </h3>

                  <p className="measure mt-4 text-[1.05rem] leading-relaxed text-slate">
                    {s.summary}
                  </p>

                  <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[0.92rem] leading-snug text-ink"
                      >
                        <span aria-hidden className="mt-[0.55em] h-px w-3 shrink-0 bg-copper" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={s.href}
                    className="link-wipe mt-8 inline-flex w-fit items-center gap-2 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-ink"
                  >
                    See detail
                    <Arrow className="text-copper" />
                  </Link>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

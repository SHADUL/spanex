import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { HeadlineReveal } from "@/components/HeadlineReveal";
import { Arrow } from "@/components/ui/Arrow";

/**
 * Closing call to action. Full-bleed ink section — the only dark surface on the
 * page — with one line and one action.
 */
export default function PilotOffer() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-[var(--spacing-section)] md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-10">
            <span className="eyebrow text-copper-lt">Start a project</span>
          </Reveal>

          <HeadlineReveal
            as="h2"
            className="text-paper"
            lineClassName="text-[length:var(--text-display)] font-semibold leading-[0.98] tracking-[-0.03em]"
            lines={[
              <>Send us a drawing set.</>,
              <>
                We&rsquo;ll scope it in{" "}
                <span className="text-copper-lt">24 hours</span>.
              </>,
            ]}
          />

          <Reveal
            as="p"
            className="measure mt-8 text-[length:var(--text-lead)] leading-relaxed text-[color:var(--color-rule)]"
          >
            Send scope, standards and source data. We reply the same business day
            with a fixed schedule and a quote &mdash; no forms behind forms, no
            follow-up sequence.
          </Reveal>

          <Reveal className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border border-copper px-7 py-4 font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-copper hover:text-ink"
            >
              Request a quote
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

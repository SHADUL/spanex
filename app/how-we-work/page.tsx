import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { TimeZones } from "@/components/how/TimeZones";
import { workflow } from "@/lib/content";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "Intake, setup, production, self-check, lead review, delivery and comment loop — plus the overnight time-zone advantage, explained on a 24-hour timeline.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Workflow"
        titleLines={[
          <>From project request</>,
          <>
            to final <span className="text-copper">drawing</span> package.
          </>,
        ]}
        standfirst="Nine steps run on every project. Engineering review and SPIDAcalc validation sit between drafting and delivery, so what you receive has already been checked against your standard and the analysis before you open it."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <RevealGroup as="ol" className="border-t border-rule">
          {workflow.map((step) => (
            <Reveal
              as="li"
              key={step.index}
              className="grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-b border-rule py-9"
            >
              <span className="col-span-2 font-[family-name:var(--font-mono)] text-[0.85rem] tabular-nums tracking-[0.1em] text-copper md:col-span-1">
                {step.index.padStart(2, "0")}
              </span>
              <h2 className="col-span-10 text-[length:var(--text-h3)] leading-tight text-ink md:col-span-3">
                {step.title}
              </h2>
              <p className="measure col-span-12 text-[1.02rem] leading-relaxed text-slate md:col-span-7 md:col-start-6">
                {step.body}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      <TimeZones />
    </>
  );
}

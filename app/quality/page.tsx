import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Checklist } from "@/components/quality/Checklist";
import { qaControls } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "How the work is checked before it reaches you: a release checklist, an auditable defect register, an assumption log, independent lead review and isolated data handling.",
};

export default function QualityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quality"
        titleLines={[
          <>The work is checked twice</>,
          <>
            before it <span className="text-copper">reaches</span> you.
          </>,
        ]}
        standfirst="Safety-critical production only earns trust if the checking is real. Ours is a controlled process — a release checklist run on every package, an auditable defect register, a standing assumption log, and an independent review by someone who did not draw the work."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      {/* The checklist artifact */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 mb-12 lg:col-span-4">
            <span className="eyebrow text-copper">Controlled document</span>
            <h2 className="mt-5 text-[length:var(--text-h3)] leading-tight text-ink">
              The checklist we run, in full.
            </h2>
            <p className="measure mt-5 text-[0.98rem] leading-relaxed text-slate">
              This is the actual release checklist, not a summary of one. Every
              line is passed, or the package does not ship.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <Checklist />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      {/* Controls */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-12 gap-x-6">
          <h2 className="col-span-12 mb-9 text-[length:var(--text-h2)] leading-[1.03] tracking-[-0.02em] text-ink lg:col-span-8">
            Four controls behind every deliverable.
          </h2>
        </div>

        <RevealGroup className="grid grid-cols-1 border-t border-rule md:grid-cols-2">
          {qaControls.map((control, i) => (
            <Reveal
              key={control.index}
              className={`border-b border-rule px-0 py-9 md:px-8 md:py-11 md:first:pl-0 ${
                i % 2 === 0 ? "md:border-r md:pl-0" : ""
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span className="eyebrow text-copper tnum">
                  {control.index}
                </span>
                <h3 className="text-[length:var(--text-h3)] leading-tight text-ink">
                  {control.title}
                </h3>
              </div>
              <p className="measure mt-5 text-[1.02rem] leading-relaxed text-slate">
                {control.body}
              </p>
            </Reveal>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Arrow } from "@/components/ui/Arrow";
import { ImageBand } from "@/components/ImageBand";
import { buildMetadata } from "@/lib/metadata";
import { jobs, careersIntro } from "@/lib/careers-data";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Work with us",
  description:
    "Join SPANEX Engineering. Open roles in utility distribution drafting and design, working on live projects for reputed Canadian utilities and consultancies.",
  path: "/careers",
  keywords: [
    "AutoCAD drafter job",
    "utility drafting careers",
    "CAD drafter Bengaluru",
    "distribution design jobs",
  ],
});

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        titleLines={[
          <>Work with us on</>,
          <>
            Canadian <span className="text-copper">utility</span> projects.
          </>,
        ]}
        standfirst={careersIntro}
      />

      <ImageBand
        src="/images/work-review.jpg"
        alt="Distribution drawings reviewed at a drafting desk."
        eyebrow="The work"
        title="Real projects, reviewed to standard."
        note="You draft to a client's CAD standard, a lead reviews it, and it ships on a live North American project. Structured work, clear feedback."
        height="short"
      />

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <Reveal className="mb-10 flex items-center gap-3">
          <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-copper" />
          <span className="eyebrow">Open positions</span>
        </Reveal>

        <RevealGroup className="border-t border-rule">
          {jobs.map((j) => (
            <Reveal key={j.id}>
              <Link
                href={`/careers/${j.id}`}
                className="group grid grid-cols-12 gap-x-6 gap-y-4 border-b border-rule py-9"
              >
                <div className="col-span-12 md:col-span-8">
                  <span className="eyebrow text-copper">{j.discipline}</span>
                  <h2 className="mt-3 text-[length:var(--text-h3)] leading-tight text-ink">
                    {j.title}
                  </h2>
                  <p className="measure mt-3 text-[1rem] leading-relaxed text-slate">
                    {j.summary}
                  </p>
                  <span className="link-wipe mt-5 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-ink">
                    View role &amp; apply
                    <Arrow className="text-copper" />
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4 md:text-right">
                  <div className="flex flex-col gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-slate">
                    <span>{j.location}</span>
                    <span>{j.type}</span>
                    <span className="text-ink">Hours · {j.hours}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}

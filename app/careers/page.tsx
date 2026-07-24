import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd, jobPostingSchema } from "@/components/SchemaJsonLd";
import { ImageBand } from "@/components/ImageBand";
import { buildMetadata } from "@/lib/metadata";
import { jobs, careersIntro, CAREERS_EMAIL } from "@/lib/careers-data";

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

function ListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <span className="eyebrow">{label}</span>
      <ul className="mt-5 border-t border-rule">
        {items.map((it) => (
          <li
            key={it}
            className="measure flex gap-3 border-b border-rule py-3.5 text-[0.98rem] leading-snug text-ink"
          >
            <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-copper" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      {jobs.map((j) => (
        <JsonLd
          key={j.id}
          data={jobPostingSchema({
            title: `${j.title} — ${j.discipline}`,
            description: `${j.summary} Responsibilities: ${j.responsibilities.join(" ")} Requirements: ${j.requirements.join(" ")}`,
            path: `/careers#${j.id}`,
            datePosted: j.datePosted,
            employmentType: j.employmentType,
            city: "Bengaluru",
            country: "IN",
          })}
        />
      ))}

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

        {jobs.map((j) => (
          <article
            key={j.id}
            id={j.id}
            className="scroll-mt-24 border border-rule"
          >
            {/* Header */}
            <div className="border-b border-rule p-7 md:p-10">
              <span className="eyebrow text-copper">{j.discipline}</span>
              <h2 className="mt-4 text-[length:var(--text-h2)] font-semibold leading-[1.03] tracking-[-0.02em] text-ink">
                {j.title}
              </h2>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-slate">
                <span>{j.location}</span>
                <span>{j.type}</span>
                <span className="text-ink">Hours · {j.hours}</span>
              </div>
              <p className="measure mt-6 text-[1.05rem] leading-relaxed text-ink">
                {j.summary}
              </p>
            </div>

            {/* Body */}
            <div className="grid grid-cols-1 gap-y-10 p-7 md:grid-cols-2 md:gap-x-12 md:p-10">
              <div className="space-y-10">
                <ListBlock label="What you'll do" items={j.responsibilities} />
                <ListBlock label="Nice to have" items={j.niceToHave} />
              </div>
              <div className="space-y-10">
                <ListBlock label="What we're looking for" items={j.requirements} />
                <ListBlock label="What we offer" items={j.offer} />
              </div>
            </div>

            {/* Apply */}
            <div className="border-t border-rule p-7 md:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="measure text-[1rem] leading-relaxed text-slate">
                  Send your CV and a short portfolio or sample drawings to{" "}
                  <a
                    href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
                      `Application — ${j.title}`,
                    )}`}
                    className="link-wipe text-ink"
                  >
                    {CAREERS_EMAIL}
                  </a>
                  .
                </p>
                <a
                  href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
                    `Application — ${j.title}`,
                  )}`}
                  className="group inline-flex shrink-0 items-center justify-center gap-3 bg-ink px-7 py-4 font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-copper"
                >
                  Apply now
                  <Arrow />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

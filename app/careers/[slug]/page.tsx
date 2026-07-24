import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Arrow } from "@/components/ui/Arrow";
import {
  JsonLd,
  jobPostingSchema,
  breadcrumbSchema,
} from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { jobs, getJob, CAREERS_EMAIL, type Job } from "@/lib/careers-data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return jobs.map((j) => ({ slug: j.id }));
}

export const dynamicParams = false;

function validThrough(datePosted: string): string {
  const d = new Date(datePosted);
  d.setDate(d.getDate() + 60);
  return d.toISOString().slice(0, 10);
}

/** A plain-text description for the JobPosting schema (Google reads this). */
function schemaDescription(j: Job): string {
  const line = (label: string, items: string[]) =>
    `${label}: ${items.join("; ")}.`;
  return [
    j.summary,
    line("Responsibilities", j.responsibilities),
    line("Requirements", j.requirements),
    line("Nice to have", j.niceToHave),
    line("What we offer", j.offer),
    `Working hours: ${j.hours}. Location: ${j.location}.`,
  ].join(" ");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const j = getJob(slug);
  if (!j) return {};
  return buildMetadata({
    title: `${j.title} — Careers`,
    description: j.summary,
    path: `/careers/${j.id}`,
    keywords: [
      `${j.title} job`,
      "AutoCAD drafter",
      "utility distribution drafting",
      "CAD drafter Bengaluru",
      "drafting careers India",
    ],
  });
}

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

export default async function JobPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const j = getJob(slug);
  if (!j) notFound();

  const path = `/careers/${j.id}`;
  const mailto = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
    `Application — ${j.title}`,
  )}`;

  return (
    <>
      <JsonLd
        data={[
          jobPostingSchema({
            identifier: j.id,
            title: j.title,
            description: schemaDescription(j),
            path,
            datePosted: j.datePosted,
            validThrough: validThrough(j.datePosted),
            employmentType: j.employmentType,
            city: "Bengaluru",
            region: "Karnataka",
            country: "IN",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
            { name: j.title, path },
          ]),
        ]}
      />

      <div className="mx-auto max-w-[1200px] px-6 pb-6 pt-12 md:px-10 md:pt-16">
        <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span aria-hidden className="text-rule">/</span>
          <Link href="/careers" className="hover:text-ink">Careers</Link>
          <span aria-hidden className="text-rule">/</span>
          <span className="text-copper">{j.title}</span>
        </nav>
      </div>

      <article className="mx-auto max-w-[1200px] px-6 pb-12 md:px-10 md:pb-16">
        <div className="border border-rule">
          <div className="border-b border-rule p-7 md:p-10">
            <span className="eyebrow text-copper">{j.discipline}</span>
            <h1 className="mt-4 text-[length:var(--text-h2)] font-semibold leading-[1.03] tracking-[-0.02em] text-ink">
              {j.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-slate">
              <span>{j.location}</span>
              <span>{j.type}</span>
              <span className="text-ink">Hours · {j.hours}</span>
            </div>
            <p className="measure mt-6 text-[1.05rem] leading-relaxed text-ink">
              {j.summary}
            </p>
          </div>

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

          <div className="border-t border-rule p-7 md:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="measure text-[1rem] leading-relaxed text-slate">
                Apply below with your details and resume, or email us at{" "}
                <a href={mailto} className="link-wipe text-ink">
                  {CAREERS_EMAIL}
                </a>
                .
              </p>
              <Link
                href={`/careers/${j.id}/apply`}
                className="group inline-flex shrink-0 items-center justify-center gap-3 bg-ink px-7 py-4 font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-copper"
              >
                Apply now
                <Arrow />
              </Link>
            </div>
          </div>
        </div>

        <Reveal className="mt-10">
          <Link
            href="/careers"
            className="link-wipe font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-slate hover:text-ink"
          >
            All open positions
          </Link>
        </Reveal>
      </article>
    </>
  );
}

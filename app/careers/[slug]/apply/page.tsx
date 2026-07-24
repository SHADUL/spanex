import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hairline } from "@/components/Hairline";
import { ApplyForm } from "@/components/careers/ApplyForm";
import { buildMetadata } from "@/lib/metadata";
import { jobs, getJob } from "@/lib/careers-data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return jobs.map((j) => ({ slug: j.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const j = getJob(slug);
  if (!j) return {};
  return {
    ...buildMetadata({
      title: `Apply — ${j.title}`,
      description: `Apply for the ${j.title} role at SPANEX. Send your details and resume.`,
      path: `/careers/${j.id}/apply`,
    }),
    robots: { index: false, follow: true },
  };
}

export default async function ApplyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const j = getJob(slug);
  if (!j) notFound();

  return (
    <>
      <div className="mx-auto max-w-[1200px] px-6 pb-6 pt-12 md:px-10 md:pt-16">
        <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span aria-hidden className="text-rule">/</span>
          <Link href="/careers" className="hover:text-ink">Careers</Link>
          <span aria-hidden className="text-rule">/</span>
          <Link href={`/careers/${j.id}`} className="hover:text-ink">{j.title}</Link>
          <span aria-hidden className="text-rule">/</span>
          <span className="text-copper">Apply</span>
        </nav>
      </div>

      <section className="mx-auto max-w-[1200px] px-6 pb-8 md:px-10">
        <span className="eyebrow text-copper">{j.discipline}</span>
        <h1 className="mt-4 text-[length:var(--text-h2)] font-semibold leading-[1.03] tracking-[-0.02em] text-ink">
          Apply — {j.title}
        </h1>
        <p className="measure mt-5 text-[1.05rem] leading-relaxed text-slate">
          Tell us a little about yourself and attach your resume. We read every
          application and reply to those that fit. Fields marked{" "}
          <span className="text-copper">*</span> are required.
        </p>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <ApplyForm roleTitle={j.title} />
          </div>

          <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="border-l-2 border-copper pl-8">
              <span className="eyebrow text-copper">The role</span>
              <p className="mt-5 font-[family-name:var(--font-display)] text-[1.15rem] font-semibold leading-tight text-ink">
                {j.title}
              </p>
              <div className="mt-5 space-y-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-slate">
                <p>{j.location}</p>
                <p>{j.type}</p>
                <p className="text-ink">Hours · {j.hours}</p>
              </div>
              <p className="measure mt-6 text-[0.95rem] leading-relaxed text-slate">
                {j.summary}
              </p>
              <Link
                href={`/careers/${j.id}`}
                className="link-wipe mt-6 inline-flex font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-slate hover:text-ink"
              >
                Read the full description
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

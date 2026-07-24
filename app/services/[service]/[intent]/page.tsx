import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import { Faq } from "@/components/pseo/Faq";
import { LeadForm } from "@/components/pseo/LeadForm";
import { SoftwareBar } from "@/components/pseo/SoftwareBar";
import {
  JsonLd,
  professionalServiceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  allPseoParams,
  buildPseoPage,
  comparisonRows,
  services,
  intents,
} from "@/lib/pseo-data";

type Params = { service: string; intent: string };

export function generateStaticParams(): Params[] {
  return allPseoParams();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service, intent } = await params;
  const page = buildPseoPage(service, intent);
  if (!page) return {};
  return buildMetadata({
    title: `${page.h1} | SPANEX Engineering`,
    description: page.service.summary,
    path: `/services/${page.slug}`,
    keywords: page.keywords,
  });
}

export default async function PseoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service, intent } = await params;
  const page = buildPseoPage(service, intent);
  if (!page) notFound();

  const { service: svc, intent: itn } = page;
  const path = `/services/${page.slug}`;

  const relatedIntents = intents.filter((i) => i.key !== itn.key);
  const relatedServices = services.filter((s) => s.key !== svc.key);

  return (
    <>
      <JsonLd
        data={[
          professionalServiceSchema({
            name: page.h1,
            description: svc.summary,
            path,
            serviceType: svc.name,
          }),
          faqSchema(page.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/capabilities" },
            { name: page.h1, path },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pb-10 pt-12 md:px-10 md:pb-14 md:pt-16">
        <nav aria-label="Breadcrumb" className="eyebrow mb-8 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span aria-hidden className="text-rule">/</span>
          <Link href="/capabilities" className="hover:text-ink">Services</Link>
          <span aria-hidden className="text-rule">/</span>
          <span className="text-copper">{itn.label}</span>
        </nav>

        <div className="grid grid-cols-12 gap-x-6">
          <h1 className="col-span-12 text-[length:var(--text-display)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink lg:col-span-10">
            {svc.name}{" "}
            <span className="text-copper">{itn.headlineTail}</span>.
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-x-6">
          <p className="measure col-span-12 text-[length:var(--text-lead)] leading-relaxed text-slate lg:col-span-7">
            {page.intro}
          </p>
        </div>

        <div className="mt-9">
          <a href="#quote" className="link-wipe inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.14em] text-ink">
            Request a quote
            <Arrow className="text-copper" />
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      {/* Comparison table */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <Reveal className="mb-10 flex items-baseline gap-4">
          <span className="eyebrow text-copper tnum">01</span>
          <span className="eyebrow">In-house vs. Spanex support</span>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-y border-rule">
                  <th className="py-4 pr-6 eyebrow font-normal">Metric</th>
                  <th className="py-4 pr-6 eyebrow font-normal">In-house team</th>
                  <th className="py-4 eyebrow font-normal text-copper">Spanex Engineering</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.metric} className="border-b border-rule align-top">
                    <td className="py-5 pr-6 font-[family-name:var(--font-display)] text-[0.98rem] font-medium text-ink">{r.metric}</td>
                    <td className="py-5 pr-6 text-[0.95rem] leading-relaxed text-slate">{r.inHouse}</td>
                    <td className="py-5 text-[0.95rem] leading-relaxed text-ink">{r.spanex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      {/* Software compatibility */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <Reveal className="mb-10 flex items-baseline gap-4">
          <span className="eyebrow text-copper tnum">02</span>
          <span className="eyebrow">Software compatibility</span>
        </Reveal>
        <Reveal>
          <SoftwareBar activeKeys={svc.toolKeys} />
        </Reveal>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      {/* Scope + compliance matrix */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-6">
            <Reveal className="mb-8 flex items-baseline gap-4">
              <span className="eyebrow text-copper tnum">03</span>
              <span className="eyebrow">Scope</span>
            </Reveal>
            <ul className="border-t border-rule">
              {svc.scope.map((s) => (
                <Reveal as="li" key={s} className="flex gap-3 border-b border-rule py-4 text-[1rem] leading-snug text-ink">
                  <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-copper" />
                  {s}
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <Reveal className="mb-8 flex items-baseline gap-4">
              <span className="eyebrow text-copper tnum">04</span>
              <span className="eyebrow">Workflow &amp; compliance</span>
            </Reveal>
            <dl className="border-t border-rule">
              {svc.compliance.map((c) => (
                <Reveal key={c.label} className="grid grid-cols-12 gap-x-6 border-b border-rule py-4">
                  <dt className="col-span-5 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.1em] text-copper">{c.label}</dt>
                  <dd className="col-span-7 text-[0.95rem] leading-snug text-ink">{c.value}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      {/* FAQ */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-4">
            <Reveal className="flex items-baseline gap-4">
              <span className="eyebrow text-copper tnum">05</span>
              <span className="eyebrow">Questions</span>
            </Reveal>
            <h2 className="mt-5 text-[length:var(--text-h3)] leading-tight text-ink">
              Common questions
            </h2>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-8 lg:mt-0">
            <Faq items={page.faqs} />
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="quote" className="scroll-mt-24 bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow text-copper-lt">Request a quote</span>
              <p className="mt-5 font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-semibold leading-tight text-paper">
                {svc.name} for your next project.
              </p>
              <p className="measure mt-4 text-[1rem] leading-relaxed text-[color:var(--color-rule)]">
                Send scope, standards and source data. We reply the same business
                day with a fixed schedule and a quote.
              </p>
            </div>
            <div className="col-span-12 rounded-none bg-paper p-7 text-ink lg:col-span-6 lg:col-start-7 md:p-9">
              <LeadForm source={page.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Related programmatic links (internal linking for crawlability) */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
        <span className="eyebrow">Related</span>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          <div>
            <span className="eyebrow text-copper">{svc.name} for other markets</span>
            <ul className="mt-4 space-y-2.5">
              {relatedIntents.map((i) => (
                <li key={i.key}>
                  <Link href={`/services/${svc.key}/${i.key}`} className="link-wipe text-[0.98rem] text-ink">
                    {svc.name} {i.headlineTail}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow text-copper">Other services for {itn.label.toLowerCase()}</span>
            <ul className="mt-4 space-y-2.5">
              {relatedServices.map((s) => (
                <li key={s.key}>
                  <Link href={`/services/${s.key}/${itn.key}`} className="link-wipe text-[0.98rem] text-ink">
                    {s.name} {itn.headlineTail}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

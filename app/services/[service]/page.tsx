import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import { Faq } from "@/components/pseo/Faq";
import { LeadForm } from "@/components/pseo/LeadForm";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { servicePillars, getServicePillar } from "@/lib/seo/services";
import type { ServicePillar } from "@/lib/seo/schema";
import { getTool } from "@/lib/seo/software";
import { getIndustry } from "@/lib/seo/industries";
import { getIntent } from "@/lib/pseo-data";
import { GATE, passesGate, robotsFor } from "@/lib/seo/gate";

type Params = { service: string };

export function generateStaticParams(): Params[] {
  return servicePillars.map((s) => ({ service: s.slug }));
}

export const dynamicParams = false;

function gateInput(s: ServicePillar) {
  const text = [
    s.tagline,
    s.problem,
    s.approach,
    ...s.scope,
    ...s.deliverables,
    ...s.standards,
    ...s.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  const links =
    s.toolSlugs.length +
    s.industrySlugs.length +
    s.relatedServiceSlugs.length +
    (s.intents?.length ?? 0) +
    2;
  return { text, faqCount: s.faqs.length, internalLinks: links };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service } = await params;
  const s = getServicePillar(service);
  if (!s) return {};
  const indexable = passesGate(gateInput(s), GATE.service);
  return {
    ...buildMetadata({
      title: s.metaTitle,
      description: s.metaDescription,
      path: `/services/${s.slug}`,
      keywords: s.keywords,
    }),
    robots: robotsFor(indexable),
  };
}

function Panel({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <Reveal className="mb-6 flex items-center gap-3">
        <span aria-hidden className="h-2 w-2 rounded-full bg-copper" />
        <span className="eyebrow">{label}</span>
      </Reveal>
      <ul className="border-t border-rule">
        {items.map((it) => (
          <Reveal as="li" key={it} className="flex gap-3 border-b border-rule py-4 text-[1rem] leading-snug text-ink">
            <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-copper" />
            {it}
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default async function ServicePillarPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service } = await params;
  const s = getServicePillar(service);
  if (!s) notFound();

  const path = `/services/${s.slug}`;
  const tools = s.toolSlugs.map(getTool).filter(Boolean);
  const inds = s.industrySlugs.map(getIndustry).filter(Boolean);
  const related = s.relatedServiceSlugs
    .map(getServicePillar)
    .filter(Boolean) as ServicePillar[];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: s.name,
            description: s.metaDescription,
            path,
            serviceType: s.name,
          }),
          faqSchema(s.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: s.name, path },
          ]),
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 pb-10 pt-12 md:px-10 md:pb-14 md:pt-16">
        <nav aria-label="Breadcrumb" className="eyebrow mb-8 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span aria-hidden className="text-rule">/</span>
          <Link href="/services" className="hover:text-ink">Services</Link>
          <span aria-hidden className="text-rule">/</span>
          <span className="text-copper">{s.name}</span>
        </nav>

        <div className="grid grid-cols-12 gap-x-6">
          <h1 className="col-span-12 text-[length:var(--text-display)] font-semibold leading-[0.99] tracking-[-0.03em] text-ink lg:col-span-10">
            {s.name}
          </h1>
        </div>
        <div className="mt-8 grid grid-cols-12 gap-x-6">
          <div className="measure col-span-12 lg:col-span-7">
            <p className="text-[length:var(--text-lead)] leading-relaxed text-ink">
              {s.problem}
            </p>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-slate">
              {s.approach} Every deliverable is produced to your standard and
              checked before it reaches your reviewer — see{" "}
              <Link href="/how-we-work" className="link-wipe text-ink">how we work</Link>{" "}
              and our{" "}
              <Link href="/quality" className="link-wipe text-ink">quality process</Link>.
            </p>
          </div>
        </div>
        <div className="mt-9">
          <a href="#quote" className="link-wipe inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.14em] text-ink">
            Request a quote
            <Arrow className="text-copper" />
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-6">
            <Panel label="Scope" items={s.scope} />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Panel label="Deliverables" items={s.deliverables} />
            <Reveal className="mt-8">
              <span className="eyebrow block">Worked to</span>
              <p className="measure mt-3 text-[0.95rem] leading-relaxed text-slate">
                {s.standards.join(" · ")}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Cross-links: tools + industries */}
        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 border-t border-rule pt-10">
          {tools.length > 0 && (
            <div className="col-span-12 md:col-span-4">
              <span className="eyebrow text-copper">Tools</span>
              <ul className="mt-4 space-y-2.5">
                {tools.map((t) => (
                  <li key={t!.slug}>
                    <Link href={`/software/${t!.slug}`} className="link-wipe text-[0.95rem] text-ink">{t!.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {inds.length > 0 && (
            <div className="col-span-12 md:col-span-4">
              <span className="eyebrow text-copper">Industries</span>
              <ul className="mt-4 space-y-2.5">
                {inds.map((i) => (
                  <li key={i!.slug}>
                    <Link href={`/industries/${i!.slug}`} className="link-wipe text-[0.95rem] text-ink">{i!.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {related.length > 0 && (
            <div className="col-span-12 md:col-span-4">
              <span className="eyebrow text-copper">Related services</span>
              <ul className="mt-4 space-y-2.5">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/services/${r.slug}`} className="link-wipe text-[0.95rem] text-ink">{r.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Intent landing pages (pSEO engine) */}
        {s.intents && s.intents.length > 0 && (
          <div className="mt-10 border-t border-rule pt-8">
            <span className="eyebrow text-copper">{s.name} by market</span>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {s.intents.map((intentKey) => {
                const intent = getIntent(intentKey);
                if (!intent) return null;
                return (
                  <li key={intentKey}>
                    <Link href={`/services/${s.slug}/${intentKey}`} className="link-wipe text-[0.95rem] text-ink">
                      {s.name} {intent.headlineTail}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-4">
            <span className="eyebrow text-copper">Questions</span>
            <h2 className="mt-5 text-[length:var(--text-h3)] leading-tight text-ink">
              Common questions
            </h2>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-8 lg:mt-0">
            <Faq items={s.faqs} />
          </div>
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow text-copper-lt">Request a quote</span>
              <p className="mt-5 font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-semibold leading-tight text-paper">
                {s.name} for your next project.
              </p>
            </div>
            <div className="col-span-12 bg-paper p-7 text-ink lg:col-span-6 lg:col-start-7 md:p-9">
              <LeadForm source={`services/${s.slug}`} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

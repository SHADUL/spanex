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
  locationServiceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { regions, allRegionParams, getRegion } from "@/lib/seo/locations";
import type { Region } from "@/lib/seo/schema";
import { servicePillars } from "@/lib/seo/services";
import { GATE, passesGate, robotsFor } from "@/lib/seo/gate";

type Params = { country: string; region: string };

export function generateStaticParams(): Params[] {
  return allRegionParams();
}

export const dynamicParams = false;

/** Services surfaced on a location page — a curated cross-section. */
const REGION_SERVICE_SLUGS = [
  "overhead-distribution-design",
  "underground-distribution-design",
  "autocad-drafting",
  "spidacalc-analysis",
  "gis-mapping",
  "make-ready-design",
];

function regionFaqs(r: Region) {
  return [
    {
      q: `Do you work to ${r.name}'s standards?`,
      a: `Yes. We design and draft to ${r.standardBody}, plus your own CAD standard. Your licensed professional reviews and seals the work.`,
    },
    {
      q: `Can you support utilities in ${r.name} from a remote team?`,
      a: `Yes. We work with ${r.name} utilities and their engineering partners entirely remotely — you send scope and standards, and receive documented, review-ready packages. ${r.handoff}`,
    },
    {
      q: `Which ${r.name} utilities have work like this?`,
      a: `Distribution design and drafting of this kind supports networks such as ${r.utilities.slice(0, 3).join(", ")} and their consultants. We are an independent production partner and are not affiliated with these utilities.`,
    },
  ];
}

function gateInput(r: Region) {
  const faqs = regionFaqs(r);
  const text = [
    r.marketNote,
    r.standardBody,
    r.handoff,
    r.utilities.join(" "),
    ...faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return { text, faqCount: faqs.length, internalLinks: REGION_SERVICE_SLUGS.length + 3 };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { country, region } = await params;
  const r = getRegion(country, region);
  if (!r) return {};
  const indexable = passesGate(gateInput(r), GATE.location);
  return {
    ...buildMetadata({
      title: `Utility Distribution Design Services in ${r.name} | SPANEX`,
      description: `Remote utility distribution design and drafting for ${r.name} — overhead and underground design, SPIDAcalc and CAD to ${r.standardBody}.`,
      path: `/locations/${r.country}/${r.slug}`,
      keywords: r.keywords,
    }),
    robots: robotsFor(indexable),
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { country, region } = await params;
  const r = getRegion(country, region);
  if (!r) notFound();

  const path = `/locations/${r.country}/${r.slug}`;
  const faqs = regionFaqs(r);
  const svc = REGION_SERVICE_SLUGS.map((slug) =>
    servicePillars.find((s) => s.slug === slug),
  ).filter(Boolean);
  const siblings = regions
    .filter((x) => x.country === r.country && x.slug !== r.slug)
    .slice(0, 8);
  const countryLabel = r.country === "canada" ? "Canada" : "United States";

  return (
    <>
      <JsonLd
        data={[
          locationServiceSchema({
            name: `Utility distribution design services in ${r.name}`,
            description: `Remote distribution design and drafting for ${r.name} utilities to ${r.standardBody}.`,
            path,
            regionName: r.name,
            countryCode: r.countryCode,
          }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Where we work", path: "/locations" },
            { name: r.name, path },
          ]),
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 pb-10 pt-12 md:px-10 md:pb-14 md:pt-16">
        <nav aria-label="Breadcrumb" className="eyebrow mb-8 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span aria-hidden className="text-rule">/</span>
          <Link href="/locations" className="hover:text-ink">Where we work</Link>
          <span aria-hidden className="text-rule">/</span>
          <span className="text-copper">{r.name}</span>
        </nav>

        <div className="grid grid-cols-12 gap-x-6">
          <h1 className="col-span-12 text-[length:var(--text-display)] font-semibold leading-[0.99] tracking-[-0.03em] text-ink lg:col-span-10">
            Utility distribution design in {r.name}
          </h1>
        </div>
        <div className="mt-8 grid grid-cols-12 gap-x-6">
          <p className="measure col-span-12 text-[length:var(--text-lead)] leading-relaxed text-slate lg:col-span-7">
            {r.marketNote} We support {r.name} utilities and their engineering
            partners remotely — designing and drafting to {r.standardBody}. {r.handoff}
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

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <Reveal className="mb-10 flex items-center gap-3">
          <span aria-hidden className="h-2 w-2 rounded-full bg-copper" />
          <span className="eyebrow">Services in {r.name}</span>
        </Reveal>
        <div className="grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
          {svc.map((s) => (
            <Reveal key={s!.slug}>
              <Link href={`/services/${s!.slug}`} className="group flex h-full flex-col border-b border-r border-rule px-6 py-7 transition-colors hover:border-copper">
                <span className="font-[family-name:var(--font-display)] text-[1.1rem] font-semibold text-ink">{s!.name}</span>
                <span className="mt-2 text-[0.9rem] leading-snug text-slate">{s!.tagline}</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10 border-t border-rule pt-10">
          <div className="col-span-12 md:col-span-6">
            <span className="eyebrow text-copper">Standards</span>
            <p className="measure mt-4 text-[1rem] leading-relaxed text-ink">
              Work for {r.name} is produced to {r.standardBody}, and to your own
              construction and CAD standards.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <span className="eyebrow text-copper">Utilities in {r.name}</span>
            <p className="measure mt-4 text-[1rem] leading-relaxed text-ink">
              {r.utilities.join(" · ")}
            </p>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-slate">
              Referenced for context only. SPANEX is an independent production
              partner and is not affiliated with these utilities.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-4">
            <span className="eyebrow text-copper">Questions</span>
            <h2 className="mt-5 text-[length:var(--text-h3)] leading-tight text-ink">
              {r.name}, answered
            </h2>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-8 lg:mt-0">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow text-copper-lt">Request a quote</span>
              <p className="mt-5 font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-semibold leading-tight text-paper">
                Distribution design support in {r.name}.
              </p>
            </div>
            <div className="col-span-12 bg-paper p-7 text-ink lg:col-span-6 lg:col-start-7 md:p-9">
              <LeadForm source={`locations/${r.country}/${r.slug}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
        <span className="eyebrow">Other {countryLabel} regions</span>
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-4">
          {siblings.map((o) => (
            <li key={o.slug}>
              <Link href={`/locations/${o.country}/${o.slug}`} className="link-wipe text-[0.95rem] text-ink">
                {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

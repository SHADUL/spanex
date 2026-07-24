import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import { ImageBand } from "@/components/ImageBand";
import { JsonLd, itemListSchema } from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { servicePillars } from "@/lib/seo/services";
import {
  services as pseoServices,
  intents as pseoIntents,
} from "@/lib/pseo-data";

export const metadata: Metadata = buildMetadata({
  title: "Services — Utility Distribution Design & Drafting",
  description:
    "Utility distribution design, AutoCAD drafting, SPIDAcalc analysis, GIS and landbase, joint-use and make-ready — produced to your CAD standard and the governing code.",
  path: "/services",
  keywords: [
    "distribution design services",
    "utility CAD services",
    "SpidaCalc services",
    "engineering drafting services",
  ],
});

const CATEGORIES: { key: string; label: string }[] = [
  { key: "design", label: "Distribution design" },
  { key: "drafting", label: "Drafting & CAD" },
  { key: "analysis", label: "Analysis" },
  { key: "gis", label: "GIS & data" },
  { key: "support", label: "Conversion & support" },
];

export default function ServicesHub() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          servicePillars.map((s) => ({ name: s.name, path: `/services/${s.slug}` })),
        )}
      />

      <PageHeader
        eyebrow="Services"
        titleLines={[
          <>Utility distribution</>,
          <>
            design &amp; <span className="text-copper">drafting</span>.
          </>,
        ]}
        standfirst="Every service below is produced to your CAD standard and the governing code, checked against standards and analysis before it reaches your reviewer, and delivered as a documented, review-ready package."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        {CATEGORIES.map((cat) => {
          const items = servicePillars.filter((s) => s.category === cat.key);
          if (items.length === 0) return null;
          return (
            <div key={cat.key} className="mb-14 last:mb-0">
              <Reveal className="mb-6 flex items-center gap-3">
                <span aria-hidden className="h-2 w-2 rounded-full bg-copper" />
                <span className="eyebrow">{cat.label}</span>
              </Reveal>
              <RevealGroup className="grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s) => (
                  <Reveal key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex h-full flex-col border-b border-r border-rule px-6 py-7 transition-colors hover:border-copper"
                    >
                      <span className="font-[family-name:var(--font-display)] text-[1.15rem] font-semibold leading-tight text-ink">
                        {s.name}
                      </span>
                      <span className="mt-2 flex-1 text-[0.9rem] leading-snug text-slate">
                        {s.tagline}
                      </span>
                      <span className="link-wipe mt-5 inline-flex w-fit items-center gap-2 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-ink">
                        View
                        <Arrow className="text-copper" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </RevealGroup>
            </div>
          );
        })}
      </section>

      <ImageBand
        src="/images/pole-wood.jpg"
        alt="A distribution pole with crossarm and insulators carrying overhead conductors."
        eyebrow="Overhead & underground"
        title="From the pole down to the drawing set."
        note="Framing, clearances and attachments — resolved on paper before a crew ever touches the structure."
        height="short"
      />

      {/* Specialised (service × market) landing pages — internal linking */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <Reveal className="mb-10 flex items-center gap-3">
          <span aria-hidden className="h-2 w-2 rounded-full bg-copper" />
          <span className="eyebrow">Specialised support</span>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {pseoServices.map((s) => (
            <Reveal key={s.key}>
              <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold text-ink">
                {s.name}
              </h3>
              <ul className="mt-4 space-y-2.5 border-t border-rule pt-4">
                {pseoIntents.map((i) => (
                  <li key={i.key}>
                    <Link
                      href={`/services/${s.key}/${i.key}`}
                      className="link-wipe text-[0.92rem] leading-snug text-slate hover:text-ink"
                    >
                      {s.name} {i.headlineTail}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

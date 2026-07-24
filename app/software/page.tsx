import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd, itemListSchema } from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { softwareTools } from "@/lib/seo/software";

export const metadata: Metadata = buildMetadata({
  title: "Software Expertise — CAD, GIS & Analysis Tools",
  description:
    "The tools SPANEX Engineering works in for utility distribution design — AutoCAD, SPIDAcalc, ArcGIS, QGIS, MicroStation, PoleForeman, Katapult, Bluebeam, FME and more.",
  path: "/software",
  keywords: [
    "SPIDAcalc experts",
    "AutoCAD designers",
    "ArcGIS specialists",
    "utility CAD software",
  ],
});

const CATEGORIES: { key: string; label: string }[] = [
  { key: "cad", label: "CAD & drafting" },
  { key: "analysis", label: "Structural analysis" },
  { key: "gis", label: "GIS & data" },
  { key: "collection", label: "Field & collection" },
  { key: "docs", label: "Documents & QA" },
];

export default function SoftwareHub() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          softwareTools.map((t) => ({ name: t.name, path: `/software/${t.slug}` })),
        )}
      />

      <PageHeader
        eyebrow="Software"
        titleLines={[
          <>The tools behind</>,
          <>
            every <span className="text-copper">drawing</span>.
          </>,
        ]}
        standfirst="We produce to your environment, not ours. These are the CAD, GIS, analysis and documentation tools our team works in daily for Canadian and US utility distribution projects."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        {CATEGORIES.map((cat) => {
          const tools = softwareTools.filter((t) => t.category === cat.key);
          if (tools.length === 0) return null;
          return (
            <div key={cat.key} className="mb-14 last:mb-0">
              <Reveal className="mb-6 flex items-center gap-3">
                <span aria-hidden className="h-2 w-2 rounded-full bg-copper" />
                <span className="eyebrow">{cat.label}</span>
              </Reveal>
              <RevealGroup className="grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
                {tools.map((t) => (
                  <Reveal key={t.slug}>
                    <Link
                      href={`/software/${t.slug}`}
                      className="group flex h-full flex-col border-b border-r border-rule px-6 py-7 transition-colors hover:border-copper"
                    >
                      <span className="font-[family-name:var(--font-display)] text-[1.2rem] font-semibold text-ink">
                        {t.name}
                      </span>
                      <span className="mt-2 text-[0.9rem] leading-snug text-slate">
                        {t.tagline}
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
    </>
  );
}

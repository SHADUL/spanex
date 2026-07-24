import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { JsonLd, itemListSchema } from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { guides } from "@/lib/seo/guides";

export const metadata: Metadata = buildMetadata({
  title: "Guides — Utility Distribution Design & Analysis",
  description:
    "In-depth guides to utility distribution design: make-ready engineering, SPIDAcalc pole loading, GIS-to-CAD conversion, joint-use attachments, NESC and CSA loading, and outsourcing drafting.",
  path: "/guides",
  keywords: [
    "make ready engineering guide",
    "SPIDAcalc pole loading guide",
    "GIS to CAD conversion",
    "joint use pole attachments",
    "NESC CSA loading",
  ],
});

export default function GuidesHub() {
  const sorted = [...guides].sort(
    (a, b) => +new Date(b.datePublished) - +new Date(a.datePublished),
  );

  return (
    <>
      <JsonLd
        data={itemListSchema(
          sorted.map((g) => ({ name: g.title, path: `/guides/${g.slug}` })),
        )}
      />

      <PageHeader
        eyebrow="Guides"
        titleLines={[
          <>How distribution</>,
          <>
            design <span className="text-copper">works</span>.
          </>,
        ]}
        standfirst="Long-form, standards-grounded guides to the work we do — make-ready, pole loading, GIS conversion, joint-use and the codes behind them. Written for the people who review and seal the drawings."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <ul className="border-t border-rule">
          {sorted.map((g) => (
            <Reveal as="li" key={g.slug} className="border-b border-rule">
              <Link
                href={`/guides/${g.slug}`}
                className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-8"
              >
                <span className="col-span-12 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-slate md:col-span-3">
                  {g.category} · {g.readMinutes} min
                </span>
                <div className="col-span-12 md:col-span-9">
                  <h2 className="font-[family-name:var(--font-display)] text-[1.4rem] font-semibold leading-tight tracking-[-0.02em] text-ink transition-colors group-hover:text-copper">
                    {g.title}
                  </h2>
                  <p className="measure mt-2 text-[1rem] leading-relaxed text-slate">
                    {g.dek}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { JsonLd, itemListSchema } from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { glossaryTerms } from "@/lib/seo/glossary";

export const metadata: Metadata = buildMetadata({
  title: "Utility Distribution Design Glossary",
  description:
    "Plain-language definitions of utility distribution design and drafting terms — make-ready, joint-use, pole loading, SPIDAcalc, NESC, CSA C22.3, landbase, as-built and more.",
  path: "/glossary",
  keywords: [
    "utility engineering glossary",
    "make ready definition",
    "joint use definition",
    "pole loading definition",
  ],
});

export default function GlossaryHub() {
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <>
      <JsonLd
        data={itemListSchema(
          sorted.map((t) => ({ name: t.term, path: `/glossary/${t.slug}` })),
        )}
      />

      <PageHeader
        eyebrow="Glossary"
        titleLines={[
          <>Utility distribution</>,
          <>
            design, <span className="text-copper">defined</span>.
          </>,
        ]}
        standfirst="Plain-language definitions of the terms behind distribution design and drafting — make-ready, joint-use, pole loading, landbase and the standards that govern them."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <ul className="border-t border-rule">
          {sorted.map((t) => (
            <Reveal as="li" key={t.slug} className="border-b border-rule">
              <Link
                href={`/glossary/${t.slug}`}
                className="group grid grid-cols-12 items-baseline gap-x-6 gap-y-1 py-6"
              >
                <span className="col-span-12 font-[family-name:var(--font-display)] text-[1.15rem] font-semibold text-ink transition-colors group-hover:text-copper md:col-span-4">
                  {t.term}
                </span>
                <span className="measure col-span-12 text-[0.95rem] leading-snug text-slate md:col-span-8">
                  {t.short}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}

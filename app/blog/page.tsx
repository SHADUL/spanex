import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import { buildMetadata } from "@/lib/metadata";
import { posts } from "@/lib/blog-data";

export const metadata: Metadata = buildMetadata({
  title: "Insights — Utility Engineering & Drafting",
  description:
    "Technical insights on utility distribution drafting, SPIDAcalc pole loading, landbase and GIS, joint-use attachments, and offshore engineering design.",
  path: "/blog",
  keywords: [
    "utility engineering insights",
    "SPIDAcalc guide",
    "AutoCAD drafting outsourcing",
    "landbase mapping",
  ],
});

const dateFmt = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        titleLines={[
          <>Notes on utility</>,
          <>
            distribution <span className="text-copper">design</span>.
          </>,
        ]}
        standfirst="Technical writing on drafting, analysis and the workflows behind accurate distribution design — for engineering managers and the teams they lead."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <RevealGroup as="ul" className="border-t border-rule">
          {sorted.map((p) => (
            <Reveal as="li" key={p.slug} className="border-b border-rule">
              <Link
                href={`/blog/${p.slug}`}
                className="group grid grid-cols-12 gap-x-6 gap-y-3 py-9"
              >
                <div className="col-span-12 flex items-center gap-4 md:col-span-3">
                  <span className="eyebrow text-copper">{p.category}</span>
                  <span className="eyebrow">
                    {dateFmt.format(new Date(p.datePublished))}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h2 className="text-[length:var(--text-h3)] leading-tight text-ink">
                    {p.title}
                  </h2>
                  <p className="measure mt-3 text-[1rem] leading-relaxed text-slate">
                    {p.dek}
                  </p>
                  <span className="link-wipe mt-5 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-ink">
                    Read
                    <Arrow className="text-copper" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}

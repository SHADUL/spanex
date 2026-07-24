import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd, itemListSchema } from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { industries } from "@/lib/seo/industries";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Support — Utilities, Telecom, Fibre & More",
  description:
    "Distribution design and drafting support for electric utilities, telecom, fibre, municipal utilities, power distribution, renewables, contractors, consultants and government utilities.",
  path: "/industries",
  keywords: [
    "electric utility distribution design",
    "telecom pole attachment",
    "engineering consultant support",
    "municipal utility design",
  ],
});

export default function IndustriesHub() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          industries.map((i) => ({ name: i.name, path: `/industries/${i.slug}` })),
        )}
      />

      <PageHeader
        eyebrow="Industries"
        titleLines={[
          <>Who we</>,
          <>
            work <span className="text-copper">with</span>.
          </>,
        ]}
        standfirst="We work only in utility distribution — across electric utilities, telecom and fibre attachers, municipal and government utilities, renewables, contractors and the consultancies that serve them."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <RevealGroup className="grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Reveal key={i.slug}>
              <Link
                href={`/industries/${i.slug}`}
                className="group flex h-full flex-col border-b border-r border-rule px-6 py-8 transition-colors hover:border-copper"
              >
                <span className="font-[family-name:var(--font-display)] text-[1.2rem] font-semibold leading-tight text-ink">
                  {i.name}
                </span>
                <span className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-slate">
                  {i.tagline}
                </span>
                <span className="link-wipe mt-5 inline-flex w-fit items-center gap-2 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-ink">
                  View
                  <Arrow className="text-copper" />
                </span>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}

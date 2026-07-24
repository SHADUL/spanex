import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd, itemListSchema } from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { regions } from "@/lib/seo/locations";

export const metadata: Metadata = buildMetadata({
  title: "Where We Work — Canadian Provinces & US States",
  description:
    "Utility distribution design and drafting for utilities across Canadian provinces and US states — remote support to CSA and NESC standards, delivered on your time zone.",
  path: "/locations",
  keywords: [
    "utility engineering outsourcing Canada",
    "engineering outsourcing USA",
    "distribution design Canada US",
  ],
});

const GROUPS: { key: "canada" | "united-states"; label: string }[] = [
  { key: "canada", label: "Canada" },
  { key: "united-states", label: "United States" },
];

export default function LocationsHub() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          regions.map((r) => ({ name: r.name, path: `/locations/${r.country}/${r.slug}` })),
        )}
      />

      <PageHeader
        eyebrow="Where we work"
        titleLines={[
          <>Remote support,</>,
          <>
            to your <span className="text-copper">standards</span>.
          </>,
        ]}
        standfirst="We support utilities and their engineering partners across Canada and the United States — to CSA and NESC standards, on your CAD standard, delivered overnight against your time zone."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        {GROUPS.map((g) => {
          const items = regions.filter((r) => r.country === g.key);
          return (
            <div key={g.key} className="mb-14 last:mb-0">
              <Reveal className="mb-6 flex items-center gap-3">
                <span aria-hidden className="h-2 w-2 rounded-full bg-copper" />
                <span className="eyebrow">{g.label}</span>
              </Reveal>
              <RevealGroup className="grid grid-cols-2 border-t border-rule sm:grid-cols-3 lg:grid-cols-4">
                {items.map((r) => (
                  <Reveal key={r.slug}>
                    <Link
                      href={`/locations/${r.country}/${r.slug}`}
                      className="group flex items-center justify-between border-b border-r border-rule px-5 py-5 transition-colors hover:border-copper"
                    >
                      <span className="text-[0.98rem] leading-snug text-ink">{r.name}</span>
                      <Arrow className="text-copper opacity-0 transition-opacity group-hover:opacity-100" />
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

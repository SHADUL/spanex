import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { services } from "@/lib/content";
import {
  services as pseoServices,
  intents as pseoIntents,
} from "@/lib/pseo-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Distribution drafting, AutoCAD design, GIS and landbase integration, SPIDAcalc engineering, and telecom and fibre design for utility distribution networks.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        titleLines={[
          <>Utility distribution</>,
          <>
            drafting &amp; <span className="text-copper">design</span>.
          </>,
        ]}
        standfirst="Five service lines, produced to your CAD standard and the governing code. Each is delivered as a documented, review-ready package — drawings, calculations and an assumption log."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      {services.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="mx-auto max-w-[1200px] scroll-mt-24 px-6 py-14 md:px-10 md:py-20"
        >
          <RevealGroup className="grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 md:col-span-5">
              <Reveal className="flex items-baseline gap-4">
                <span className="eyebrow text-copper tnum">{s.index}</span>
                <span className="eyebrow">Service</span>
              </Reveal>
              <Reveal
                as="p"
                className="mt-6 text-[length:var(--text-h2)] font-semibold leading-[1.03] tracking-[-0.02em] text-ink"
              >
                {s.title}
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-7">
              <Reveal
                as="p"
                className="measure text-[1.05rem] leading-relaxed text-ink"
              >
                {s.summary}
              </Reveal>

              <Reveal className="mt-8 border-t border-rule pt-6">
                <span className="eyebrow">Scope</span>
                <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 border-b border-rule pb-3 text-[0.95rem] leading-snug text-ink"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.55em] h-px w-3 shrink-0 bg-copper"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </RevealGroup>
        </section>
      ))}

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      {/* Specialised service pages — internal linking + crawlability */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <Reveal className="mb-10 flex items-baseline gap-4">
          <span className="eyebrow text-copper">Specialised support</span>
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

import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import { Faq } from "@/components/pseo/Faq";
import { LeadForm } from "@/components/pseo/LeadForm";
import { SoftwareBar } from "@/components/pseo/SoftwareBar";
import {
  JsonLd,
  professionalServiceSchema,
  itemListSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { services, comparisonRows } from "@/lib/pseo-data";

const PATH = "/outsourcing";
const INTENT = "outsourcing-india";

/* Ordered so the two emphasised themes — AutoCAD drafting and GIS — lead. */
const SPOKE_ORDER = [
  "autocad-drafting",
  "gis-mapping",
  "spidacalc-analysis",
  "landbase-prep",
  "joint-use-pole-loading",
  "telecom-attachment-design",
];

const spokes = SPOKE_ORDER.map((key) => services.find((s) => s.key === key)!).filter(
  Boolean,
);

const HIGHLIGHT = new Set(["autocad-drafting", "gis-mapping"]);

/* Engagement model — factual, value-framed, no rates. */
const engagement: { label: string; value: string }[] = [
  {
    label: "Onboarding",
    value:
      "You send your CAD standard, sample sheets and a pilot package. We match your layers, blocks, xrefs and title block before production drafting begins.",
  },
  {
    label: "Data & security",
    value:
      "Work runs under NDA on access-controlled machines. Source data stays in your systems or a shared workspace you own; we do not resell or reuse project data.",
  },
  {
    label: "CAD standard",
    value:
      "We adopt your standard, not ours — so packages pass your CAD check on the first submission rather than being reworked to fit your template.",
  },
  {
    label: "Turnaround",
    value:
      "Our team in Bengaluru works against your time zone. Small packages return within 48 hours; a run sent at end of day is on your desk the next morning.",
  },
  {
    label: "Review",
    value:
      "A lead reviews every package against your standard and the analysis before release. Your licensed professional reviews and seals the final work.",
  },
  {
    label: "Scaling",
    value:
      "Scale a run up or down by the project. You add drafting and analysis capacity without hiring, training or carrying idle salaried time.",
  },
];

const faqs = [
  {
    q: "Which drafting services can you outsource to India?",
    a: "AutoCAD drafting, GIS-to-CAD conversion and mapping, SPIDAcalc pole loading, landbase preparation, joint-use pole loading and telecom attachment design. Each has a dedicated page describing scope, software and compliance.",
  },
  {
    q: "Is offshore CAD drafting secure?",
    a: "Yes. Work runs under NDA on access-controlled machines. Source data stays in your systems or a workspace you own, and we do not resell or reuse project data. Access is limited to the staff assigned to your project.",
  },
  {
    q: "Do you draft to our CAD standard or your own?",
    a: "Yours. We load your layering, blocks, xrefs and title block before drafting, so packages pass your CAD standards check on the first submission rather than being reworked.",
  },
  {
    q: "How does the overnight turnaround work?",
    a: "Our team in Bengaluru works against your time zone. A package sent at the end of your day is produced overnight and returned the next morning, so your local staff review rather than draft. Small packages typically return within 48 hours.",
  },
  {
    q: "Can you handle GIS-to-CAD conversion as part of outsourced work?",
    a: "Yes. We reconcile ArcGIS and QGIS parcel, asset and network layers into coordinate-true DWG aligned to your project datum, with attributes mapped to your CAD layer schema rather than flattened to geometry.",
  },
  {
    q: "Do we still need a licensed engineer on our side?",
    a: "Yes. We are a production practice, not a licensed engineering firm in your jurisdiction. We produce review-ready drafting and analysis; your licensed professional reviews and seals the work.",
  },
  {
    q: "How do you price outsourced drafting?",
    a: "Per project, against defined scope and standards. Send scope, standards and source data and you receive a fixed schedule and a quote the same business day — you pay for the work, not for idle salaried capacity.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Drafting & CAD Outsourcing to India | SPANEX Engineering",
  description:
    "Outsource utility AutoCAD drafting, GIS-to-CAD conversion, SPIDAcalc pole loading and landbase prep to a distribution design team in India — produced overnight to your CAD standard, lead-reviewed, ready for your professional's seal.",
  path: PATH,
  keywords: [
    "drafting outsourcing companies india",
    "autocad outsourcing india",
    "cad drafting outsourcing india",
    "gis outsourcing india",
    "gis to cad conversion outsourcing",
    "utility drafting outsourcing",
    "offshore cad engineering support",
    "outsource spidacalc pole loading",
  ],
});

export default function OutsourcingPage() {
  return (
    <>
      <JsonLd
        data={[
          professionalServiceSchema({
            name: "Distribution design & drafting outsourcing to India",
            description:
              "Outsourced AutoCAD drafting, GIS-to-CAD conversion, SPIDAcalc pole loading and landbase preparation for Canadian utilities and consultancies, produced to your CAD standard.",
            path: PATH,
            serviceType: "Utility CAD drafting & engineering design outsourcing",
          }),
          itemListSchema(
            spokes.map((s) => ({
              name: `${s.name} outsourcing`,
              path: `/services/${s.key}/${INTENT}`,
            })),
          ),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Outsourcing to India", path: PATH },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Offshore support"
        titleLines={[
          <>Drafting and CAD outsourcing</>,
          <>
            to <span className="text-copper">India</span>, for Canadian
            utilities.
          </>,
        ]}
        standfirst="Spanex Engineering is a distribution design production practice in Bengaluru. Canadian utilities and consultancies outsource AutoCAD drafting, GIS-to-CAD conversion, SPIDAcalc pole loading and landbase preparation to our team — produced overnight to your CAD standard, checked by a lead, and returned ready for your professional's seal."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      {/* Positioning prose */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <Reveal
              as="p"
              className="measure text-[length:var(--text-lead)] leading-relaxed text-ink"
            >
              Outsourcing distribution drafting to India is a capacity decision,
              not a cost gamble. You keep design authority, standards and the
              professional seal in-house, and hand the production hours —
              drafting, conversion and loading analysis — to a team that works
              to your template overnight.
            </Reveal>
            <Reveal
              as="p"
              className="measure mt-6 text-[1.05rem] leading-relaxed text-slate"
            >
              We are an independent production partner. Every package is drafted
              in your CAD standard, self-checked, then reviewed by a lead before
              it reaches you. The two services teams outsource most — AutoCAD
              drafting and GIS-to-CAD conversion — anchor the practice, with
              SPIDAcalc pole loading, landbase and joint-use analysis alongside.
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <dl className="border-t border-rule">
              {[
                ["Practice", "Spanex Engineering Pvt Ltd, Bengaluru"],
                ["Model", "Per-project production, no local headcount"],
                ["Turnaround", "48-hour packages · overnight runs"],
                ["Review", "Lead check before every release"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-12 gap-x-4 border-b border-rule py-4"
                >
                  <dt className="col-span-5 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.1em] text-copper">
                    {k}
                  </dt>
                  <dd className="col-span-7 text-[0.95rem] leading-snug text-ink">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      {/* 01 — Comparison */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <Reveal className="mb-10 flex items-baseline gap-4">
          <span className="eyebrow text-copper tnum">01</span>
          <span className="eyebrow">In-house vs. outsourced production</span>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-y border-rule">
                  <th className="py-4 pr-6 eyebrow font-normal">Metric</th>
                  <th className="py-4 pr-6 eyebrow font-normal">In-house team</th>
                  <th className="py-4 eyebrow font-normal text-copper">
                    Spanex Engineering
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((r) => (
                  <tr key={r.metric} className="border-b border-rule align-top">
                    <td className="py-5 pr-6 font-[family-name:var(--font-display)] text-[0.98rem] font-medium text-ink">
                      {r.metric}
                    </td>
                    <td className="py-5 pr-6 text-[0.95rem] leading-relaxed text-slate">
                      {r.inHouse}
                    </td>
                    <td className="py-5 text-[0.95rem] leading-relaxed text-ink">
                      {r.spanex}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      {/* 02 — What you can outsource (spokes) */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <Reveal className="mb-10 flex items-baseline gap-4">
          <span className="eyebrow text-copper tnum">02</span>
          <span className="eyebrow">What you can outsource</span>
        </Reveal>
        <ul className="grid grid-cols-1 border-t border-rule md:grid-cols-2">
          {spokes.map((s) => (
            <Reveal
              as="li"
              key={s.key}
              className="border-b border-rule px-0 py-7 md:px-8 md:odd:pl-0 md:even:border-l"
            >
              <Link
                href={`/services/${s.key}/${INTENT}`}
                className="group block"
              >
                <div className="flex items-center gap-3">
                  <h2 className="font-[family-name:var(--font-display)] text-[1.25rem] font-medium leading-tight text-ink">
                    {s.name}
                  </h2>
                  {HIGHLIGHT.has(s.key) && (
                    <span className="font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-[0.14em] text-copper">
                      Most requested
                    </span>
                  )}
                </div>
                <p className="measure mt-3 text-[0.98rem] leading-relaxed text-slate">
                  {s.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-ink">
                  Outsource {s.name.toLowerCase()}
                  <Arrow className="text-copper transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      {/* 03 — Software compatibility */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <Reveal className="mb-10 flex items-baseline gap-4">
          <span className="eyebrow text-copper tnum">03</span>
          <span className="eyebrow">Software compatibility</span>
        </Reveal>
        <Reveal>
          <SoftwareBar
            activeKeys={[
              "autocad",
              "arcgis",
              "qgis",
              "spidacalc",
              "microstation",
              "landbase",
            ]}
          />
        </Reveal>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      {/* 04 — How outsourcing works */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-4">
            <Reveal className="flex items-baseline gap-4">
              <span className="eyebrow text-copper tnum">04</span>
              <span className="eyebrow">How outsourcing works</span>
            </Reveal>
            <h2 className="mt-5 text-[length:var(--text-h3)] leading-tight text-ink">
              A model built for a risk-averse buyer.
            </h2>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-8 lg:mt-0">
            <dl className="border-t border-rule">
              {engagement.map((e) => (
                <Reveal
                  key={e.label}
                  className="grid grid-cols-12 gap-x-6 border-b border-rule py-5"
                >
                  <dt className="col-span-12 mb-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.12em] text-copper md:col-span-3 md:mb-0">
                    {e.label}
                  </dt>
                  <dd className="measure col-span-12 text-[1rem] leading-relaxed text-ink md:col-span-9">
                    {e.value}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      {/* 05 — FAQ */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-4">
            <Reveal className="flex items-baseline gap-4">
              <span className="eyebrow text-copper tnum">05</span>
              <span className="eyebrow">Questions</span>
            </Reveal>
            <h2 className="mt-5 text-[length:var(--text-h3)] leading-tight text-ink">
              Outsourcing, answered
            </h2>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-8 lg:mt-0">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="quote" className="scroll-mt-24 bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow text-copper-lt">Request a quote</span>
              <p className="mt-5 font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-semibold leading-tight text-paper">
                Send us a pilot package.
              </p>
              <p className="measure mt-4 text-[1rem] leading-relaxed text-[color:var(--color-rule)]">
                Send scope, your CAD standard and source data. We reply the same
                business day with a fixed schedule and a quote — start with one
                package before you commit a program.
              </p>
            </div>
            <div className="col-span-12 rounded-none bg-paper p-7 text-ink lg:col-span-6 lg:col-start-7 md:p-9">
              <LeadForm source="outsourcing" />
            </div>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
        <span className="eyebrow">Related</span>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
          <div>
            <span className="eyebrow text-copper">Outsource by service</span>
            <ul className="mt-4 space-y-2.5">
              {spokes.map((s) => (
                <li key={s.key}>
                  <Link
                    href={`/services/${s.key}/${INTENT}`}
                    className="link-wipe text-[0.98rem] text-ink"
                  >
                    {s.name} — offshore support
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow text-copper">Explore the practice</span>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/services" className="link-wipe text-[0.98rem] text-ink">
                  All services
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="link-wipe text-[0.98rem] text-ink">
                  How we work
                </Link>
              </li>
              <li>
                <Link href="/quality" className="link-wipe text-[0.98rem] text-ink">
                  Quality &amp; review
                </Link>
              </li>
              <li>
                <Link href="/software" className="link-wipe text-[0.98rem] text-ink">
                  Software we work in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

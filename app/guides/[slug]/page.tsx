import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import {
  JsonLd,
  guideArticleSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { guides, getGuide } from "@/lib/seo/guides";
import { getTerm } from "@/lib/seo/glossary";
import type { Guide, GlossaryTerm } from "@/lib/seo/schema";
import { GATE, passesGate, robotsFor, wordCount } from "@/lib/seo/gate";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return guides.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

function anchor(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function guideText(g: Guide): string {
  return [
    g.dek,
    g.keyTakeaway,
    ...g.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
    ...g.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
}

function gateInput(g: Guide) {
  const links = g.relatedServices.length + g.relatedTermSlugs.length;
  return { text: guideText(g), faqCount: g.faqs.length, internalLinks: links };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const indexable = passesGate(gateInput(g), GATE.guide);
  return {
    ...buildMetadata({
      title: g.metaTitle,
      description: g.metaDescription,
      path: `/guides/${g.slug}`,
      keywords: g.keywords,
    }),
    robots: robotsFor(indexable),
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const path = `/guides/${g.slug}`;
  const relatedTerms = g.relatedTermSlugs
    .map(getTerm)
    .filter(Boolean) as GlossaryTerm[];
  const date = new Date(g.datePublished).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          guideArticleSchema({
            title: g.title,
            description: g.metaDescription,
            path,
            datePublished: g.datePublished,
            keywords: g.keywords,
            sectionHeadings: g.sections.map((s) => s.heading),
            wordCount: wordCount(guideText(g)),
          }),
          faqSchema(g.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: g.title, path },
          ]),
        ]}
      />

      <article className="mx-auto max-w-[1200px] px-6 pb-14 pt-12 md:px-10 md:pb-20 md:pt-16">
        <nav aria-label="Breadcrumb" className="eyebrow mb-8 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span aria-hidden className="text-rule">/</span>
          <Link href="/guides" className="hover:text-ink">Guides</Link>
          <span aria-hidden className="text-rule">/</span>
          <span className="text-copper">{g.category}</span>
        </nav>

        <header className="max-w-[900px]">
          <span className="eyebrow text-slate">
            {g.category} · {g.readMinutes} min read · {date}
          </span>
          <h1 className="mt-4 text-[length:var(--text-h1)] font-semibold leading-[1.02] tracking-[-0.03em] text-ink">
            {g.title}
          </h1>
          <p className="measure mt-5 text-[length:var(--text-lead)] leading-relaxed text-slate">
            {g.dek}
          </p>
        </header>

        {/* answer-first key takeaway (speakable) */}
        <div className="guide-takeaway mt-10 border-l-2 border-copper bg-[color-mix(in_srgb,var(--color-copper)_5%,transparent)] py-5 pl-6 pr-5">
          <span className="eyebrow text-copper">Key takeaway</span>
          <p className="measure mt-3 text-[1.1rem] leading-[1.6] text-ink">
            {g.keyTakeaway}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6">
          {/* Table of contents */}
          <aside className="col-span-12 mb-10 lg:col-span-3 lg:order-2 lg:col-start-10 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow block">On this page</span>
              <ul className="mt-4 space-y-2.5 border-t border-rule pt-4">
                {g.sections.map((s) => (
                  <li key={s.heading}>
                    <a
                      href={`#${anchor(s.heading)}`}
                      className="link-wipe text-[0.9rem] leading-snug text-slate hover:text-ink"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Body */}
          <div className="col-span-12 lg:col-span-8 lg:order-1">
            {g.sections.map((s) => (
              <section key={s.heading} id={anchor(s.heading)} className="scroll-mt-28 [&:not(:first-child)]:mt-12">
                <h2 className="text-[length:var(--text-h3)] font-semibold leading-tight tracking-[-0.02em] text-ink">
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="measure mt-4 text-[1.08rem] leading-[1.7] text-ink">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="measure mt-5 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[1.05rem] leading-relaxed text-ink">
                        <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-copper" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* FAQ */}
            <section className="mt-14 border-t border-rule pt-10">
              <h2 className="text-[length:var(--text-h3)] font-semibold tracking-[-0.02em] text-ink">
                Common questions
              </h2>
              <dl className="mt-6 divide-y divide-rule border-t border-rule">
                {g.faqs.map((f) => (
                  <div key={f.q} className="py-6">
                    <dt className="font-[family-name:var(--font-display)] text-[1.1rem] font-semibold text-ink">
                      {f.q}
                    </dt>
                    <dd className="measure mt-2 text-[1.02rem] leading-relaxed text-slate">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </article>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      {/* Related */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-6">
            <span className="eyebrow block">Related services</span>
            <ul className="mt-4 space-y-2.5 border-t border-rule pt-4">
              {g.relatedServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="link-wipe text-[1rem] text-ink">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {relatedTerms.length > 0 && (
            <div className="col-span-12 md:col-span-6">
              <span className="eyebrow block">Terms in this guide</span>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-rule pt-4">
                {relatedTerms.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/glossary/${t.slug}`} className="link-wipe text-[0.95rem] text-slate hover:text-ink">
                      {t.term}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="measure text-[1.05rem] leading-relaxed text-slate">
            Have a project that needs this work? We can scope it against your standard.
          </p>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-3 bg-ink px-7 py-4 font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-copper"
          >
            Request a quote
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}

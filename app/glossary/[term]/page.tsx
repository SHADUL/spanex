import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import {
  JsonLd,
  definedTermSchema,
  breadcrumbSchema,
} from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { glossaryTerms, getTerm } from "@/lib/seo/glossary";
import type { GlossaryTerm } from "@/lib/seo/schema";
import { GATE, passesGate, robotsFor } from "@/lib/seo/gate";

type Params = { term: string };

export function generateStaticParams(): Params[] {
  return glossaryTerms.map((t) => ({ term: t.slug }));
}

export const dynamicParams = false;

function gateInput(t: GlossaryTerm) {
  const text = [t.short, t.definition].join(" ");
  const links = t.relatedTermSlugs.length + t.relatedServices.length + 1;
  return { text, faqCount: 0, internalLinks: links };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { term } = await params;
  const t = getTerm(term);
  if (!t) return {};
  const indexable = passesGate(gateInput(t), GATE.glossary);
  return {
    ...buildMetadata({
      title: `${t.term} — Definition | SPANEX Engineering`,
      description: t.short,
      path: `/glossary/${t.slug}`,
      keywords: t.keywords,
    }),
    robots: robotsFor(indexable),
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { term } = await params;
  const t = getTerm(term);
  if (!t) notFound();

  const path = `/glossary/${t.slug}`;
  const related = t.relatedTermSlugs.map(getTerm).filter(Boolean) as GlossaryTerm[];

  return (
    <>
      <JsonLd
        data={[
          definedTermSchema({ term: t.term, definition: t.definition, path }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
            { name: t.term, path },
          ]),
        ]}
      />

      <article className="mx-auto max-w-[1200px] px-6 pb-14 pt-12 md:px-10 md:pb-20 md:pt-16">
        <nav aria-label="Breadcrumb" className="eyebrow mb-8 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span aria-hidden className="text-rule">/</span>
          <Link href="/glossary" className="hover:text-ink">Glossary</Link>
          <span aria-hidden className="text-rule">/</span>
          <span className="text-copper">{t.term}</span>
        </nav>

        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-8">
            <span className="eyebrow text-copper">{t.category}</span>
            <h1 className="mt-4 text-[length:var(--text-h2)] font-semibold leading-[1.03] tracking-[-0.025em] text-ink">
              {t.term}
            </h1>
            {/* answer-first block for snippets / AI */}
            <p className="measure mt-6 border-l-2 border-copper pl-6 text-[length:var(--text-lead)] leading-relaxed text-ink">
              {t.short}
            </p>
            <p className="measure mt-8 text-[1.08rem] leading-[1.7] text-ink">
              {t.definition}
            </p>
          </div>

          <aside className="col-span-12 mt-10 lg:col-span-3 lg:col-start-10 lg:mt-0">
            {related.length > 0 && (
              <div>
                <span className="eyebrow block">Related terms</span>
                <ul className="mt-4 space-y-2.5 border-t border-rule pt-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/glossary/${r.slug}`} className="link-wipe text-[0.95rem] text-ink">
                        {r.term}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-8">
              <span className="eyebrow block">Related services</span>
              <ul className="mt-4 space-y-2.5 border-t border-rule pt-4">
                {t.relatedServices.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="link-wipe text-[0.95rem] text-ink">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <Link
            href="/glossary"
            className="link-wipe inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-slate hover:text-ink"
          >
            All terms
          </Link>
        </div>
      </article>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="measure text-[1.05rem] leading-relaxed text-slate">
            Need {t.term.toLowerCase()} on your next distribution project?
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

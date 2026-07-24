import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import { Faq } from "@/components/pseo/Faq";
import { LeadForm } from "@/components/pseo/LeadForm";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { industries, getIndustry } from "@/lib/seo/industries";
import type { Industry } from "@/lib/seo/schema";
import { GATE, passesGate, robotsFor } from "@/lib/seo/gate";

type Params = { industry: string };

export function generateStaticParams(): Params[] {
  return industries.map((i) => ({ industry: i.slug }));
}

export const dynamicParams = false;

function gateInput(i: Industry) {
  const text = [
    i.intro,
    ...i.painPoints,
    ...i.services,
    ...i.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return { text, faqCount: i.faqs.length, internalLinks: 5 };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { industry } = await params;
  const i = getIndustry(industry);
  if (!i) return {};
  const indexable = passesGate(gateInput(i), GATE.industry);
  return {
    ...buildMetadata({
      title: i.metaTitle,
      description: i.metaDescription,
      path: `/industries/${i.slug}`,
      keywords: i.keywords,
    }),
    robots: robotsFor(indexable),
  };
}

function List({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <Reveal className="mb-6 flex items-center gap-3">
        <span aria-hidden className="h-2 w-2 rounded-full bg-copper" />
        <span className="eyebrow">{label}</span>
      </Reveal>
      <ul className="border-t border-rule">
        {items.map((it) => (
          <Reveal as="li" key={it} className="flex gap-3 border-b border-rule py-4 text-[1rem] leading-snug text-ink">
            <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-copper" />
            {it}
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { industry } = await params;
  const i = getIndustry(industry);
  if (!i) notFound();

  const path = `/industries/${i.slug}`;
  const others = industries.filter((x) => x.slug !== i.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Distribution design support for ${i.name.toLowerCase()}`,
            description: i.metaDescription,
            path,
            serviceType: "Utility distribution design & drafting",
          }),
          faqSchema(i.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: i.name, path },
          ]),
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 pb-10 pt-12 md:px-10 md:pb-14 md:pt-16">
        <nav aria-label="Breadcrumb" className="eyebrow mb-8 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span aria-hidden className="text-rule">/</span>
          <Link href="/industries" className="hover:text-ink">Industries</Link>
          <span aria-hidden className="text-rule">/</span>
          <span className="text-copper">{i.name}</span>
        </nav>

        <h1 className="text-[length:var(--text-display)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink">
          {i.name}
        </h1>
        <p className="measure mt-6 text-[length:var(--text-lead)] leading-relaxed text-slate">
          {i.intro}
        </p>
        <div className="mt-8">
          <a href="#quote" className="link-wipe inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.14em] text-ink">
            Request a quote
            <Arrow className="text-copper" />
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-6">
            <List label="What you're dealing with" items={i.painPoints} />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <List label="What we produce" items={i.services} />
            <Reveal className="mt-8">
              <span className="eyebrow block">Worked to</span>
              <p className="measure mt-3 text-[0.95rem] leading-relaxed text-slate">
                {i.standards.join(" · ")}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-20">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-4">
            <span className="eyebrow text-copper">Questions</span>
            <h2 className="mt-5 text-[length:var(--text-h3)] leading-tight text-ink">
              Common questions
            </h2>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-8 lg:mt-0">
            <Faq items={i.faqs} />
          </div>
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow text-copper-lt">Request a quote</span>
              <p className="mt-5 font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-semibold leading-tight text-paper">
                Design support for {i.name.toLowerCase()}.
              </p>
            </div>
            <div className="col-span-12 bg-paper p-7 text-ink lg:col-span-6 lg:col-start-7 md:p-9">
              <LeadForm source={`industries/${i.slug}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
        <span className="eyebrow">Other industries</span>
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/industries/${o.slug}`} className="link-wipe text-[0.95rem] text-ink">
                {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

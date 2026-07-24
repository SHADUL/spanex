import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, RevealGroup } from "@/components/Reveal";
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
import { softwareTools, getTool } from "@/lib/seo/software";
import type { SoftwareTool } from "@/lib/seo/schema";
import { GATE, passesGate, robotsFor } from "@/lib/seo/gate";

type Params = { tool: string };

export function generateStaticParams(): Params[] {
  return softwareTools.map((t) => ({ tool: t.slug }));
}

export const dynamicParams = false;

function gateInput(t: SoftwareTool) {
  const text = [
    t.intro,
    ...t.whatWeDo,
    ...t.outputs,
    ...t.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  const links = t.relatedServiceHrefs.length + 3; // + breadcrumb/CTA/hub
  return { text, faqCount: t.faqs.length, internalLinks: links };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { tool } = await params;
  const t = getTool(tool);
  if (!t) return {};
  const indexable = passesGate(gateInput(t), GATE.software);
  return {
    ...buildMetadata({
      title: t.metaTitle,
      description: t.metaDescription,
      path: `/software/${t.slug}`,
      keywords: t.keywords,
    }),
    robots: robotsFor(indexable),
  };
}

export default async function SoftwarePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { tool } = await params;
  const t = getTool(tool);
  if (!t) notFound();

  const path = `/software/${t.slug}`;
  const others = softwareTools.filter((x) => x.slug !== t.slug).slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${t.name} services`,
            description: t.metaDescription,
            path,
            serviceType: `${t.name} for utility distribution`,
          }),
          faqSchema(t.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Software", path: "/software" },
            { name: t.name, path },
          ]),
        ]}
      />

      <section className="mx-auto max-w-[1200px] px-6 pb-10 pt-12 md:px-10 md:pb-14 md:pt-16">
        <nav aria-label="Breadcrumb" className="eyebrow mb-8 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span aria-hidden className="text-rule">/</span>
          <Link href="/software" className="hover:text-ink">Software</Link>
          <span aria-hidden className="text-rule">/</span>
          <span className="text-copper">{t.name}</span>
        </nav>

        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h1 className="text-[length:var(--text-display)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink">
            {t.name}
          </h1>
          <span className="eyebrow text-slate">{t.vendor}</span>
        </div>
        <p className="measure mt-6 text-[length:var(--text-lead)] leading-relaxed text-slate">
          {t.intro}
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
            <Reveal className="mb-8 flex items-center gap-3">
              <span aria-hidden className="h-2 w-2 rounded-full bg-copper" />
              <span className="eyebrow">What we do in {t.name}</span>
            </Reveal>
            <ul className="border-t border-rule">
              {t.whatWeDo.map((w) => (
                <Reveal as="li" key={w} className="flex gap-3 border-b border-rule py-4 text-[1rem] leading-snug text-ink">
                  <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-copper" />
                  {w}
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Reveal className="mb-8 flex items-center gap-3">
              <span aria-hidden className="h-2 w-2 rounded-full bg-copper" />
              <span className="eyebrow">Deliverables</span>
            </Reveal>
            <ul className="border-t border-rule">
              {t.outputs.map((o) => (
                <Reveal as="li" key={o} className="flex gap-3 border-b border-rule py-4 text-[1rem] leading-snug text-ink">
                  <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-copper" />
                  {o}
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-8">
              <span className="eyebrow block">Related services</span>
              <ul className="mt-4 space-y-2.5">
                {t.relatedServiceHrefs.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="link-wipe text-[0.98rem] text-ink">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
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
              {t.name}, answered
            </h2>
          </div>
          <div className="col-span-12 mt-8 lg:col-span-8 lg:mt-0">
            <Faq items={t.faqs} />
          </div>
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-12 gap-x-6 gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="eyebrow text-copper-lt">Request a quote</span>
              <p className="mt-5 font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-semibold leading-tight text-paper">
                {t.name} support for your next project.
              </p>
            </div>
            <div className="col-span-12 bg-paper p-7 text-ink lg:col-span-6 lg:col-start-7 md:p-9">
              <LeadForm source={`software/${t.slug}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
        <span className="eyebrow">More software</span>
        <RevealGroup className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
          {others.map((o) => (
            <Reveal key={o.slug}>
              <Link href={`/software/${o.slug}`} className="link-wipe text-[0.95rem] text-ink">
                {o.name}
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </section>
    </>
  );
}

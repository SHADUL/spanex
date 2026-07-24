import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { Arrow } from "@/components/ui/Arrow";
import {
  JsonLd,
  techArticleSchema,
  breadcrumbSchema,
} from "@/components/SchemaJsonLd";
import { buildMetadata } from "@/lib/metadata";
import { posts, getPost } from "@/lib/blog-data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

const dateFmt = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.datePublished,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          techArticleSchema({
            title: post.title,
            description: post.description,
            path,
            datePublished: post.datePublished,
            keywords: post.keywords,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />

      <article>
        <header className="mx-auto max-w-[1200px] px-6 pb-10 pt-12 md:px-10 md:pb-14 md:pt-16">
          <nav aria-label="Breadcrumb" className="eyebrow mb-8 flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span aria-hidden className="text-rule">/</span>
            <Link href="/blog" className="hover:text-ink">Insights</Link>
          </nav>

          <div className="flex items-center gap-4">
            <span className="eyebrow text-copper">{post.category}</span>
            <span className="eyebrow">
              {dateFmt.format(new Date(post.datePublished))} · {post.readMinutes} min read
            </span>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-x-6">
            <h1 className="col-span-12 text-[length:var(--text-h2)] font-semibold leading-[1.03] tracking-[-0.025em] text-ink lg:col-span-10">
              {post.title}
            </h1>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-x-6">
            <p className="measure col-span-12 text-[length:var(--text-lead)] leading-relaxed text-slate lg:col-span-8">
              {post.dek}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[1200px] px-6 md:px-10"><Hairline /></div>

        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              {post.sections.map((s) => (
                <Reveal key={s.heading} as="section" className="mb-12 last:mb-0">
                  <h2 className="mb-5 text-[length:var(--text-h3)] leading-tight tracking-[-0.01em] text-ink">
                    {s.heading}
                  </h2>
                  {s.paragraphs.map((para, i) => (
                    <p key={i} className="measure mb-5 text-[1.08rem] leading-[1.7] text-ink last:mb-0">
                      {para}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-6 border-t border-rule">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 border-b border-rule py-3 text-[1rem] leading-snug text-slate">
                          <span aria-hidden className="mt-[0.55em] h-px w-3 shrink-0 bg-copper" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
          <span className="eyebrow text-copper-lt">Start a project</span>
          <p className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-semibold leading-tight text-paper">
            Put this into practice on your next distribution package.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 border border-copper px-7 py-4 font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-copper hover:text-ink"
          >
            Request a quote
            <Arrow />
          </Link>
        </div>
      </section>

      {/* More posts */}
      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-16">
        <span className="eyebrow">More insights</span>
        <ul className="mt-6 border-t border-rule">
          {more.map((p) => (
            <li key={p.slug} className="border-b border-rule">
              <Link href={`/blog/${p.slug}`} className="flex items-baseline justify-between gap-6 py-5">
                <span className="text-[1.05rem] leading-snug text-ink">{p.title}</span>
                <Arrow className="mt-1 text-copper" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

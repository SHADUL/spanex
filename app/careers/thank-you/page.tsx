import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Application received",
    description: "Thanks for applying to SPANEX.",
    path: "/careers/thank-you",
  }),
  robots: { index: false, follow: false },
};

export default function CareersThankYou() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1200px] flex-col justify-center px-6 py-20 md:px-10">
      <div className="max-w-[640px] border-l-2 border-copper pl-8">
        <span className="eyebrow text-copper">Application received</span>
        <h1 className="mt-5 text-[length:var(--text-h2)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink">
          Thanks &mdash; we&rsquo;ve got your application.
        </h1>
        <p className="measure mt-6 text-[1.1rem] leading-relaxed text-slate">
          Your details and resume are on their way to our team. We read every
          application and reply to those that fit the role. If we&rsquo;d like to
          take it further, we&rsquo;ll be in touch by email.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          <Link
            href="/careers"
            className="link-wipe inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.14em] text-ink"
          >
            All open positions
            <Arrow className="text-copper" />
          </Link>
          <Link
            href="/"
            className="link-wipe inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.78rem] uppercase tracking-[0.14em] text-slate hover:text-ink"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

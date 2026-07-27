import Link from "next/link";
import { Media } from "./ui/Media";
import { Arrow } from "./ui/Arrow";
import { media } from "@/lib/media";

/**
 * Hero — editorial. CSS-driven entrance so the headline paints with the
 * stylesheet (fast LCP, no hydration wait). A large, priority-loaded photograph
 * grounds the page in a real engineering environment; the masked line reveal and
 * fades are pure CSS and degrade fully under prefers-reduced-motion.
 */
export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-16 md:px-10 md:pt-24">
      <div className="hero-enter flex items-center gap-3" style={{ animationDelay: "0.05s" }}>
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-copper" />
        <span className="eyebrow">Utility Distribution Drafting &amp; Engineering Design</span>
      </div>

      {/* Asymmetric headline, masked per-line reveal via CSS */}
      <div className="mt-8 grid grid-cols-12 gap-x-6">
        <h1 className="col-span-12 text-[color:var(--color-ink)] lg:col-span-11">
          <span className="hero-line text-[length:var(--text-display)] font-semibold leading-[0.95] tracking-[-0.035em]">
            <span style={{ animationDelay: "0.1s" }}>Utility distribution drafting,</span>
          </span>
          <span className="hero-line text-[length:var(--text-display)] font-semibold leading-[0.95] tracking-[-0.035em]">
            <span style={{ animationDelay: "0.18s" }}>
              designed with <span className="text-copper">precision</span>.
            </span>
          </span>
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-x-6">
        <p
          className="measure hero-enter col-span-12 text-[color:var(--color-slate)] lg:col-span-7"
          style={{ fontSize: "var(--text-lead)", lineHeight: 1.5, animationDelay: "0.34s" }}
        >
          AutoCAD, GIS, landbase and SPIDAcalc production for electrical, telecom
          and fibre distribution — delivered overnight to your standard, ready for
          your professional&rsquo;s seal.
        </p>
      </div>

      <div
        className="hero-enter mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        style={{ animationDelay: "0.46s" }}
      >
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center gap-3 rounded-[0.7rem] bg-ink px-7 py-4 font-[family-name:var(--font-mono)] text-[0.76rem] uppercase tracking-[0.14em] text-paper shadow-[var(--shadow-soft)] transition-colors duration-200 hover:bg-copper"
        >
          Request a quote
          <Arrow />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-3 rounded-[0.7rem] border border-ink/15 px-7 py-4 font-[family-name:var(--font-mono)] text-[0.76rem] uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
        >
          View services
          <Arrow />
        </Link>
      </div>

      {/* Large grounding photograph — priority for LCP, no reveal delay */}
      <div className="hero-enter mt-14 md:mt-20" style={{ animationDelay: "0.5s" }}>
        <Media
          src={media.workReview.src}
          alt={media.workReview.alt}
          ratio="16 / 8"
          priority
          reveal={false}
          sizes="(min-width: 1200px) 1120px, 100vw"
        />
      </div>
    </section>
  );
}

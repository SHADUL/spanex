import Link from "next/link";
import CadHero from "./home/CadHero";
import { Arrow } from "./ui/Arrow";

/**
 * Hero. Server-rendered with CSS-driven entrances, so the headline paints with
 * the stylesheet — no waiting on JS hydration, fast LCP, no late pop-in. The
 * masked line reveal and fades are pure CSS (see globals.css .hero-*), and the
 * content renders fully under prefers-reduced-motion and with JS disabled.
 */
export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-10 md:px-10 md:pt-16">
      <p className="eyebrow hero-enter" style={{ animationDelay: "0.05s" }}>
        Utility Distribution Drafting &amp; Engineering Design
      </p>

      {/* Asymmetric headline, masked per-line reveal via CSS */}
      <div className="mt-8 grid grid-cols-12 gap-x-6">
        <h1 className="col-span-12 text-[color:var(--color-ink)] lg:col-span-11">
          <span className="hero-line text-[length:var(--text-display)] font-semibold leading-[0.98] tracking-[-0.03em]">
            <span style={{ animationDelay: "0.1s" }}>
              Utility distribution drafting,
            </span>
          </span>
          <span className="hero-line text-[length:var(--text-display)] font-semibold leading-[0.98] tracking-[-0.03em]">
            <span style={{ animationDelay: "0.18s" }}>
              designed with <span className="text-copper">precision</span>.
            </span>
          </span>
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-12 gap-x-6">
        <p
          className="measure hero-enter col-span-12 text-[color:var(--color-slate)] md:col-start-1 lg:col-span-7"
          style={{ fontSize: "var(--text-lead)", animationDelay: "0.34s" }}
        >
          Spanex Engineering provides utility distribution drafting and
          engineering design &mdash; AutoCAD, GIS, landbase and SPIDAcalc &mdash;
          for electrical, telecom and fibre infrastructure.
        </p>
      </div>

      <div
        className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 hero-enter"
        style={{ animationDelay: "0.46s" }}
      >
        <Link
          href="/capabilities"
          className="link-wipe inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.14em] text-ink"
        >
          View services
          <Arrow className="text-copper" />
        </Link>
        <Link
          href="/contact"
          className="link-wipe inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.14em] text-slate hover:text-ink"
        >
          Request a quote
        </Link>
      </div>

      {/* The single hero visual — the CAD/SPIDAcalc drawing animation */}
      <div className="mt-10 md:mt-12">
        <CadHero />
      </div>
    </section>
  );
}

import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { HiringStrip } from "./HiringStrip";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-6 pb-16 pt-24 md:px-10">
      <HiringStrip className="mb-10" />
      <div className="h-px w-full bg-rule" />
      <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <Wordmark />
          <p className="measure mt-5 text-[0.95rem] leading-relaxed text-slate">
            Distribution design production for Canadian utilities and
            consultancies. Delivered overnight, to your standards, ready for your
            professional&rsquo;s seal.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-col gap-3 font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-slate"
        >
          <Link href="/services" className="link-wipe hover:text-ink">
            Services
          </Link>
          <Link href="/industries" className="link-wipe hover:text-ink">
            Industries
          </Link>
          <Link href="/software" className="link-wipe hover:text-ink">
            Software
          </Link>
          <Link href="/glossary" className="link-wipe hover:text-ink">
            Glossary
          </Link>
          <Link href="/locations" className="link-wipe hover:text-ink">
            Where we work
          </Link>
          <Link href="/how-we-work" className="link-wipe hover:text-ink">
            Workflow
          </Link>
          <Link href="/quality" className="link-wipe hover:text-ink">
            Quality
          </Link>
          <Link href="/careers" className="link-wipe hover:text-ink">
            Careers
          </Link>
        </nav>

        <div className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-slate">
          <a
            href="mailto:admin@spanexengineering.com"
            className="link-wipe block text-ink"
          >
            admin@spanexengineering.com
          </a>
          <p className="mt-3 normal-case tracking-normal">
            Spanex Engineering Pvt Ltd &middot; Bengaluru, India
          </p>
          <p className="mt-1 normal-case tracking-normal">
            &copy; {new Date().getFullYear()} SPANEX
          </p>
        </div>
      </div>
    </footer>
  );
}

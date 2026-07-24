import Link from "next/link";
import { jobs } from "@/lib/careers-data";

/**
 * "We're hiring" strip linking to the open role. Used in the footer (every page)
 * and on the homepage for visibility.
 */
export function HiringStrip({ className = "" }: { className?: string }) {
  const role = jobs[0];
  if (!role) return null;
  return (
    <Link
      href={`/careers/${role.id}`}
      className={`group flex flex-wrap items-center justify-between gap-4 border border-rule px-6 py-5 transition-colors duration-200 hover:border-copper ${className}`}
    >
      <span className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 bg-copper px-2.5 py-1 font-[family-name:var(--font-mono)] text-[0.62rem] uppercase tracking-[0.14em] text-paper">
          We&rsquo;re hiring
        </span>
        <span className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold text-ink">
          {role.title}
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.12em] text-slate">
          {role.location}
        </span>
      </span>
      <span className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-ink">
        View role &rarr;
      </span>
    </Link>
  );
}

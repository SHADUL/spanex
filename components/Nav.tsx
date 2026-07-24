"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "/capabilities", label: "Services" },
  { href: "/how-we-work", label: "Workflow" },
  { href: "/blog", label: "Insights" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-10">
        <Wordmark />

        <nav aria-label="Primary" className="flex items-center gap-6 md:gap-9">
          {links.map((l) => {
            const active =
              pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`link-wipe font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] ${
                  active ? "text-copper" : "text-slate hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="h-px w-full bg-rule" />
    </header>
  );
}

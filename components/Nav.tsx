"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "/capabilities", label: "Services" },
  { href: "/how-we-work", label: "Workflow" },
  { href: "/blog", label: "Insights" },
  { href: "/quality", label: "Quality" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-10">
        <Wordmark />

        {/* Desktop links */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex lg:gap-7"
        >
          {links.map((l) => {
            const active = isActive(l.href);
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

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-1 p-1 text-ink lg:hidden"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      <div className="h-px w-full bg-rule" />

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Primary"
          className="border-b border-rule bg-paper lg:hidden"
        >
          <ul className="mx-auto max-w-[1200px] px-6 py-2">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href} className="border-b border-rule last:border-b-0">
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-4 font-[family-name:var(--font-mono)] text-[0.8rem] uppercase tracking-[0.14em] ${
                      active ? "text-copper" : "text-ink"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}

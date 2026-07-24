"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

const EASE = "cubic-bezier(0.65,0,0.35,1)";

const links = [
  { href: "/services", label: "Services" },
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

        {/* Mobile toggle — morphing bars → X */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-1.5 flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          <span aria-hidden className="relative block h-[14px] w-6">
            <span
              className="absolute left-0 block h-[1.5px] w-6 bg-ink transition-all duration-300"
              style={{
                transitionTimingFunction: EASE,
                top: open ? "50%" : "0",
                transform: open ? "translateY(-50%) rotate(45deg)" : "none",
              }}
            />
            <span
              className="absolute left-0 top-1/2 block h-[1.5px] w-6 -translate-y-1/2 bg-ink transition-opacity duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="absolute left-0 block h-[1.5px] w-6 bg-ink transition-all duration-300"
              style={{
                transitionTimingFunction: EASE,
                bottom: open ? "50%" : "0",
                transform: open ? "translateY(50%) rotate(-45deg)" : "none",
              }}
            />
          </span>
        </button>
      </div>

      <div className="h-px w-full bg-rule" />

      {/* Mobile menu — grid-rows collapse animates open/close */}
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden"
        style={{
          transitionTimingFunction: EASE,
          gridTemplateRows: open ? "1fr" : "0fr",
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            aria-label="Primary"
            aria-hidden={!open}
            className="border-b border-rule bg-paper"
          >
            <ul className="mx-auto max-w-[1200px] px-6 py-2">
              {links.map((l) => {
                const active = isActive(l.href);
                return (
                  <li key={l.href} className="border-b border-rule last:border-b-0">
                    <Link
                      href={l.href}
                      tabIndex={open ? undefined : -1}
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
        </div>
      </div>
    </header>
  );
}

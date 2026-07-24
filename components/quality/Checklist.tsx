"use client";

import { motion } from "motion/react";
import { Check } from "@phosphor-icons/react";
import { inView, ease, dur } from "@/lib/motion";
import { qaChecklist } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * The QA checklist as an actual checklist artifact — a controlled document, not
 * a marketing graphic. Ref codes, hairline rows, copper check marks that draw
 * in on scroll. This is the page's centrepiece.
 */
export function Checklist() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="border border-rule bg-paper">
      {/* Document header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-rule px-6 py-5 md:px-8">
        <span className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-ink">
          QA-01 &middot; Release checklist
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.12em] text-slate">
          Per package &middot; every structure
        </span>
      </div>

      {qaChecklist.map((group) => (
        <div key={group.title}>
          <div className="bg-ink/[0.02] px-6 py-3 md:px-8">
            <span className="eyebrow">{group.title}</span>
          </div>
          <ul>
            {group.items.map((item, i) => (
              <li
                key={item.ref}
                className="flex items-start gap-4 border-t border-rule px-6 py-4 md:px-8"
              >
                {/* Phosphor Check, revealed with a restrained scale/fade */}
                <motion.span
                  aria-hidden
                  className="mt-[0.15em] grid h-4 w-4 shrink-0 place-items-center border border-copper text-copper"
                  initial={reduced ? false : { opacity: 0, scale: 0.6 }}
                  whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
                  viewport={inView}
                  transition={{
                    duration: dur.fast,
                    ease: ease.out,
                    delay: i * 0.04,
                  }}
                >
                  <Check size={11} weight="bold" />
                </motion.span>
                <span className="font-[family-name:var(--font-mono)] text-[0.68rem] tracking-[0.08em] text-copper">
                  {item.ref}
                </span>
                <span className="measure text-[0.98rem] leading-snug text-ink">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="border-t border-rule px-6 py-4 md:px-8">
        <span className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.12em] text-slate">
          No item is waived. A failed line blocks release.
        </span>
      </div>
    </div>
  );
}

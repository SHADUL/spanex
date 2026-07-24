"use client";

import { motion } from "motion/react";
import { lineReveal, inView } from "@/lib/motion";

/**
 * Masked headline reveal. Each line sits in an overflow-hidden wrapper and
 * slides up from y:100%→0, staggered. Split by LINE only — never per character.
 *
 * Pass lines pre-split; a trailing element per line can be highlighted copper
 * via the `accent` index (at most one word/line coloured, per the brief).
 */
export function HeadlineReveal({
  lines,
  as: Tag = "h1",
  className = "",
  lineClassName = "",
  stagger = 0.08,
}: {
  lines: React.ReactNode[];
  as?: "h1" | "h2";
  className?: string;
  lineClassName?: string;
  stagger?: number;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className={`block ${lineClassName}`}
            variants={lineReveal}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            transition={{ delay: i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

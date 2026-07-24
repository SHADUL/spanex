"use client";

import { motion } from "motion/react";
import { hairline, inView } from "@/lib/motion";

/**
 * A 1px structural rule that scales in from its left origin on scroll. The
 * visual grammar of the whole site — think technical drawing, not cards.
 */
export function Hairline({
  className = "",
  copper = false,
}: {
  className?: string;
  copper?: boolean;
}) {
  return (
    <motion.div
      className={className}
      style={{
        height: 1,
        transformOrigin: "left center",
        backgroundColor: copper ? "var(--color-copper)" : "var(--color-rule)",
      }}
      variants={hairline}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    />
  );
}

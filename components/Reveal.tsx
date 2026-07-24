"use client";

import { motion } from "motion/react";
import { rise, stagger, inView } from "@/lib/motion";

/**
 * Entrance wrapper: opacity 0→1 + y 24→0 on scroll-in. Content is present in the
 * DOM at all times, so it reads with JS disabled.
 */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  as?: "div" | "section" | "li" | "p";
  className?: string;
  delay?: number;
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Staggers direct children (each should be a <Reveal> or motion element). */
export function RevealGroup({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      {children}
    </MotionTag>
  );
}

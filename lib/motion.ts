import type { Variants, Transition } from "motion/react";

/**
 * Single source of truth for motion. Nothing in the app uses an ad-hoc inline
 * transition — every animated element pulls from here.
 *
 * House rule: nothing bounces. No spring overshoot, no rotation, no scale above
 * 1.03. Motion reads as instrumentation settling into place, not decoration.
 */

export const ease = {
  out: [0.16, 1, 0.3, 1] as const, // primary — entrances
  inOut: [0.65, 0, 0.35, 1] as const, // state changes
};

export const dur = { fast: 0.35, base: 0.65, slow: 0.95 } as const;

/** Standard viewport trigger for scroll-in reveals. */
export const inView = { once: true, margin: "-12% 0px" } as const;

/** Entrance: opacity 0→1 + y 24→0. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.base, ease: ease.out },
  },
};

/** Container that staggers its children at 70ms. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

/** A single line inside a masked headline (parent clips overflow). */
export const lineReveal: Variants = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: { duration: dur.slow, ease: ease.out },
  },
};

/** Editorial image reveal: settles up and de-zooms from 1.03 → 1 (no bounce). */
export const mediaReveal: Variants = {
  hidden: { opacity: 0, y: 22, scale: 1.03 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: dur.slow, ease: ease.out },
  },
};

/** Hairline that scales in from its left origin. */
export const hairline: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: dur.slow, ease: ease.out },
  },
};

export const spanexTransition: Transition = {
  duration: dur.base,
  ease: ease.out,
};

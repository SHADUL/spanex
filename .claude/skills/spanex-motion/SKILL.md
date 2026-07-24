---
name: spanex-motion
description: SPANEX motion system — easings, durations, stagger, the reduced-motion contract, and the catenary/workflow signature specs. Load before adding or changing any animation.
---

# SPANEX — motion

`lib/motion.ts` is the single source of truth. Nothing uses an ad-hoc inline
transition — import `ease`, `dur`, `rise`, `stagger`, `lineReveal`, `hairline`,
`inView` from there.

## Constants
- Easings: `out [0.16, 1, 0.3, 1]` (entrances), `inOut [0.65, 0, 0.35, 1]`
  (state changes).
- Durations: `fast 0.35` / `base 0.65` / `slow 0.95`.
- Entrances: `opacity 0→1` + `y 24→0`, `dur.base`, stagger children 70ms.
- Viewport trigger: `{ once: true, margin: "-12% 0px" }`.

## House rule — nothing bounces
No spring overshoot, no rotation, no scale above 1.03. Where a spring is used
(e.g. the workflow progress line) it must be critically damped (high damping,
`restDelta` set) so it settles without overshoot. Motion reads as instrumentation
settling into place, not decoration. **Do not import spring presets that
overshoot, and do not add hover lift/shadow.** Hover = copper underline wipe only.

## Signature moments
1. **Catenary hero** (`components/Catenary.tsx`): true `y = a·cosh(x/a)` curve,
   drawn on load via `pathLength` 0→1 over ~1.6s. Scroll deepens the sag and
   shifts the stroke ink→copper. The curve `d` is built mathematically from a sag
   parameter — never a hardcoded bezier.
2. **Workflow line** (`components/home/Workflow.tsx`): a copper progress line draws
   downward (`scaleY` bound to scroll) as the section scrolls; steps reveal in.
3. **Headline reveal** (`components/HeadlineReveal.tsx`): per-LINE mask, each line
   in `overflow:hidden`, `y 100%→0`, staggered. Never per-character.

## Non-negotiable guards
- `prefers-reduced-motion: reduce` disables Lenis (`SmoothScroll`) and all
  scroll-linked transforms; content renders at its final state. Check
  `usePrefersReducedMotion()` before any scroll transform.
- Content must read with JavaScript disabled — animate presence, never gate it.
- No parallax below 768px. Nothing loops except the hero curve's initial draw.
- Lenis: `lerp 0.09`, `duration 1.15`, single rAF loop.

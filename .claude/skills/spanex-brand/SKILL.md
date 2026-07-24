---
name: spanex-brand
description: SPANEX visual system — colour tokens, type scale, spacing, layout grammar, and the anti-brief. Load before making any styling or layout decision on this site.
---

# SPANEX — brand & layout

Design tokens live in `app/globals.css` under `@theme`. Reference tokens only;
never write arbitrary hex in a component.

## Colour
`--ink #0B1F33` (text, dark surfaces) · `--ink-2 #16324D` · `--copper #B5732A`
(single accent) · `--copper-lt #D4954A` · `--paper #FAF9F7` (page bg, warm — never
pure white) · `--rule #DDD8D1` (hairlines) · `--slate #5A6B7A` (secondary text).

Copper is a conductor reference. It is allowed only on: hairlines, active/focus
states, at most one word per heading, and small mono labels. **If more than ~5%
of any viewport is copper, it is wrong.** Never fill large areas with it.

## Type
- Display / headings: `--font-display` (geometric/neo-grotesque sans), weight
  500–700, tight tracking (−0.02 to −0.035em), leading ~0.98.
- Body: `--font-body` (serif — Newsreader / Source Serif 4). Serif body is the
  primary "document, not landing page" signal. Do not switch body to sans.
- Labels / eyebrows / table headers: `--font-mono`, 11–12px, uppercase, 0.14em
  tracking, slate or copper. Use the `.eyebrow` class.
- Body measure capped at 68ch via `.measure`. Non-negotiable.
- Counting figures use `.tnum` (tabular) so there is no layout shift.

## Layout
8px baseline rhythm. 12-column grid, 1200px content / 1440px full-bleed max.
Section padding `py-[var(--spacing-section)]`. **Asymmetry over centring** —
left-aligned headings, content offset into columns 2–8. Structure comes from 1px
hairlines (`--rule`), not cards. **No drop shadows, no rounded cards, no
`rounded-2xl`/`rounded-3xl`.** Sharp or `rounded-none` edges only.

## Anti-brief — never build
Team/About with headshots · testimonials, logo walls, "trusted by", case studies ·
portfolio/gallery · blog, careers, FAQ accordion, pricing · stock photography or
any people · gradient blobs, glassmorphism, neon, mesh gradients, floating 3D ·
emoji, exclamation marks · cookie/chat/newsletter theatre · scroll-jacking or
full-page snap · any mention of cost/rates/"offshore advantage" · dark-mode
toggle. Six pages max.

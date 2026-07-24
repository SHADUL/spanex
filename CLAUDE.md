# SPANEX — project brief for every session

Marketing site for **SPANEX**, a Bangalore-based distribution design production
practice serving Canadian electric utilities, consultancies and telecom pole
attachers. Legal entity: Spanex Engineering Pvt Ltd (India). Canada-facing brand
is the `SPANEX` wordmark + descriptor `Distribution Design`.

## Audience — drives every decision
One person: a distribution design manager / practice lead at a Canadian
engineering consultancy, 40–55, technically deep, risk-averse, time-poor,
deciding whether to hand safety-critical production work to an unknown offshore
vendor. They are reassured by *precision*, not impressed by design. Every choice
must make the firm feel permanent, institutional and exacting. If a choice makes
the site feel like a design agency, reject it. If it makes it feel like a
well-typeset engineering standard, take it.

## Brand descriptor — "Engineering" (owner decision 2026-07-24)
The Canada-facing descriptor is **"SPANEX Engineering"** (wordmark, hero eyebrow,
page titles, meta, OG card). This reverses the earlier ban on the word
"Engineering", by explicit owner decision.

CAUTION (not legal advice): the original ban existed because Ontario's
Professional Engineers Act restricts how a firm may present an engineering
practice unless properly licensed. Presenting as "Engineering" in Ontario-facing
material may carry compliance risk; confirm licensure/positioning with counsel.
Body copy may still use "design/technical production/drafting/analysis" where it
reads naturally.

## Anti-brief — do NOT build
Team/About with headshots; testimonials, logo walls, case studies, "trusted by";
portfolio/gallery; blog, careers, FAQ accordion, pricing; stock photography or
any people; gradient blobs, glassmorphism, neon, mesh gradients, floating 3D;
emoji, exclamation marks; marketing words (solutions, synergy, leverage,
innovative, cutting-edge, world-class, seamless, empower); cookie/chat/newsletter
theatre; scroll-jacking or full-page snap; dark-mode toggle.

## SEO surface — pSEO + blog (owner decision 2026-07-24)
The marketing pages stay minimal, but there is now an SEO surface: programmatic
pages at `/services/[service]/[intent]` (matrix in lib/pseo-data.ts) and a blog
at `/blog` (lib/blog-data.ts). These MAY discuss cost-effectiveness, offshore/
India support and turnaround — **value-framed only**: use "cost-effective,
scalable, faster turnaround"; never "cheap" and never invented rates. Schema via
components/SchemaJsonLd.tsx; metadata via lib/metadata.ts; both feed app/sitemap.ts.
This relaxes (for the SEO surface only) the earlier ban on cost/offshore
language. The core marketing pages remain restrained.

## Colour tokens (in app/globals.css @theme)
--ink #0B1F33 · --ink-2 #16324D · --copper #B5732A · --copper-lt #D4954A ·
--paper #FAF9F7 · --rule #DDD8D1 · --slate #5A6B7A
Copper = conductor reference. Hairlines, ≤1 word per heading, active states only.
If >5% of a viewport is copper, it is wrong.

## Type scale
Display: tight geometric/neo-grotesque sans, weights 500–700, negative tracking
(-0.02 to -0.035em). Body: high-legibility **serif** (Newsreader / Source Serif
4) — the key differentiator. Labels/tables: mono/wide-tracked uppercase 11–12px,
0.14em, slate or copper. Fluid via clamp(). Body measure capped at 68ch.

## Layout
8px baseline grid; 12-col, 1200px content / 1440px full-bleed max. Asymmetry over
centring — left-aligned headings, content offset into cols 2–8. Section padding
clamp(6rem,12vw,11rem). Visible 1px hairlines as structure. NO drop-shadowed
cards.

## Motion (lib/motion.ts is the single source)
Easings: out [0.16,1,0.3,1] (entrances), inOut [0.65,0,0.35,1] (state).
Durations: fast .35 / base .65 / slow .95. Entrances opacity 0→1 + y 24→0,
stagger 70ms, viewport {once:true, margin:"-12% 0px"}. **Nothing bounces — no
spring overshoot, no rotation, no scale above 1.03.** Lenis lerp 0.09,
duration 1.15. Signature = SVG catenary hero (y=a·cosh(x/a), pathLength draw,
scroll increases sag + shifts ink→copper). Headline reveal = per-line mask
(never per-character). Workflow = copper progress line draws down as section
scrolls. prefers-reduced-motion disables Lenis + all transforms; site must read
with JS disabled. No parallax below 768px.

## Copy voice
Short declarative sentences, technical nouns, specific numbers. Never a
superlative. Domain vocab used correctly: make-ready, load case, framing, guying,
anchor lead, capacity, transmittal, as-built, dead-end, tangent pole. Every claim
checkable ("48-hour turnaround", not "fast"). Contractions fine; exclamation
marks not. No lorem ipsum.

## Stack
Next.js 15 App Router · TypeScript strict · Tailwind v4 (tokens as CSS vars) ·
Motion (motion/react) · Lenis smooth scroll. Self-hosted fonts (see
public/fonts/README.md). Static-friendly; deploy Vercel.

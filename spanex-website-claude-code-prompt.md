# Claude Code Build Prompt — SPANEX Website

> Paste everything below the line into Claude Code in an empty project directory.
> Recommended: run in plan mode first (`shift+tab`) so it proposes an approach before writing files.

---

## PROJECT

Build the marketing website for **SPANEX** — a Bangalore-based distribution design production practice serving Canadian electric utilities, engineering consultancies and telecom pole attachers.

**Legal entity:** Spanex Engineering Pvt Ltd (India).
**Canada-facing brand:** `SPANEX` wordmark + descriptor `Distribution Design`.
**Critical constraint:** the word "Engineering" must NOT appear anywhere in the Canada-facing copy, page titles, meta tags or navigation. Ontario's Professional Engineers Act restricts how firms present engineering practice, and we are deliberately positioned as a *production partner*, not an engineering firm. Use "design," "technical production," "drafting," "analysis." Never "engineering services," "we engineer," "our engineers."

---

## AUDIENCE — THIS DRIVES EVERY DESIGN DECISION

One person: a **distribution design manager or practice lead at a Canadian engineering consultancy**, 40–55, technically deep, risk-averse, time-poor, evaluating whether to hand safety-critical production work to an unknown offshore vendor.

They are not impressed by design. They are reassured by *precision*. Every visual and motion choice must make an offshore company feel **permanent, institutional and exacting** — never scrappy, never trendy, never cheap.

If a choice makes the site feel more like a design agency, reject it. If it makes the site feel more like a well-typeset engineering standard, take it.

---

## HARD ANTI-BRIEF — DO NOT BUILD ANY OF THIS

This must not read as a portfolio or template site. Explicitly forbidden:

- Team / About Us page with headshots
- Testimonials, client logo wall, case studies, "trusted by" strips
- Portfolio or project gallery
- Blog, careers, FAQ accordion, pricing page
- Stock photography of any kind. No hard hats, no handshakes, no laptops, no people at all
- Gradient blobs, glassmorphism, neon, mesh gradients, floating 3D shapes
- Emoji, exclamation marks, "🚀", "Let's build something amazing"
- Marketing words: solutions, synergy, leverage, innovative, cutting-edge, world-class, seamless, empower
- Cookie banner theatre, chat widgets, newsletter popups, exit-intent modals
- Scroll-jacking, horizontal scroll hijacking, full-page scroll snapping
- Any mention of cost, savings, rates, "affordable," "offshore advantage"
- A dark-mode toggle (pick one palette and commit)

**Six pages maximum. Five is better.**

---

## TECH STACK

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** with design tokens defined in CSS custom properties
- **Motion** (`motion/react`, the Framer Motion successor) for component animation
- **Lenis** for smooth scroll
- **GSAP + ScrollTrigger** only if a scroll-linked sequence genuinely needs it — otherwise skip it
- Self-hosted variable fonts via `next/font/local`. No Google Fonts CDN
- Static export where possible; deploy target Vercel
- No CMS, no database, no auth, no analytics beyond a single privacy-friendly script placeholder

---

## DESIGN SYSTEM

Define all of this in `app/globals.css` as tokens, then use Tailwind against the tokens. No arbitrary hex values in components.

### Colour
```
--ink:        #0B1F33   /* primary text, dark surfaces */
--ink-2:      #16324D   /* secondary dark */
--copper:     #B5732A   /* single accent — use sparingly, max 2 uses per viewport */
--copper-lt:  #D4954A
--paper:      #FAF9F7   /* page background — warm, never pure white */
--rule:       #DDD8D1   /* hairlines */
--slate:      #5A6B7A   /* secondary text */
```

Copper is a deliberate reference to conductor material. It appears on hairlines, one word per heading at most, and active states. If more than 5% of a screen is copper, it is wrong.

### Typography
- **Display / headings:** a tight geometric or neo-grotesque variable sans. `General Sans` or `Satoshi` (Fontshare, free for commercial use) or `Inter Tight`. Weights 500–700. Negative tracking on large sizes (`-0.02em` to `-0.035em`).
- **Body:** a high-legibility serif for long-form prose — `Newsreader` or `Source Serif 4`. This is the single most important differentiator: serif body copy signals *document*, not *landing page*.
- **Technical / labels / tables:** a mono or wide-tracked uppercase sans at 11–12px, `0.14em` letter-spacing, in slate or copper. Use for section eyebrows, table headers, figure captions.
- Fluid type via `clamp()`. Display range roughly `clamp(2.75rem, 6vw, 5.5rem)`.
- Body measure capped at **68 characters**. Non-negotiable.

### Layout
- 8px baseline grid. All vertical rhythm is a multiple of 8.
- 12-column grid, 1200px max content width, 1440px max for full-bleed sections.
- **Asymmetry over centring.** Left-aligned headings with content offset into columns 2–8 reads as editorial and technical. Centred everything reads as a template.
- Generous whitespace — section padding `clamp(6rem, 12vw, 11rem)`.
- Visible 1px hairlines (`--rule`) as structure. Think engineering drawing, not card-based UI. **Avoid drop-shadowed cards entirely.**

---

## MOTION SYSTEM

Motion is the craft signal here, but it must read as *precision instrumentation*, not decoration. Every animation should feel like a mechanism settling into place.

Create a single `lib/motion.ts` exporting shared variants and easings. Nothing animates with an ad-hoc inline transition.

### Easing and timing
```ts
export const ease = {
  out:   [0.16, 1, 0.3, 1],      // primary — entrances
  inOut: [0.65, 0, 0.35, 1],     // state changes
}
export const dur = { fast: 0.35, base: 0.65, slow: 0.95 }
```

- Entrances: `opacity 0→1` + `y 24px→0`, `dur.base`, `ease.out`
- Stagger children at **70ms**
- Trigger at `viewport={{ once: true, margin: "-12% 0px" }}`
- **Nothing bounces. No spring overshoot. No rotation. No scale above 1.03.**

### Smooth scroll
Lenis with `lerp: 0.09`, `duration: 1.15`. Must be synced to Motion's scroll listeners via `useLenis` / rAF integration so scroll-linked values don't desync.

### The signature moment — build this well, it carries the whole site
An **SVG catenary curve** (the natural sag of a conductor suspended between two supports) in the hero:

1. Two small solid square nodes at each end representing poles
2. A single uniform-weight curve between them, drawn on load via `pathLength` 0→1 over ~1.6s with `ease.out`
3. As the user scrolls the hero, `useScroll` + `useTransform` subtly increases the sag depth and shifts the curve's `stroke` from `--ink` toward `--copper`
4. Extremely restrained — a thin line on a warm paper background. This is the entire hero visual. No other graphics.

Draw the curve mathematically (`y = a·cosh(x/a)`), not as a hardcoded bezier, so the sag parameter is animatable.

### Other motion
- **Headline reveal:** split into lines, each in an `overflow:hidden` wrapper, `y: 100%→0`, staggered 80ms. Split by line only — never per-character (character animation reads as gimmick to this audience).
- **Workflow section:** a vertical 7-step process. A copper progress line draws downward as the section scrolls; each step fades and slides in as the line reaches it. This is the second-most important animation on the site.
- **Stat counters:** count up on first viewport entry, monospace tabular figures so there is zero layout shift.
- **Hairline rules:** `scaleX 0→1` from left origin, `dur.slow`.
- **Links/buttons:** copper underline wipes left-to-right on hover, 220ms. No colour flash, no lift, no shadow.
- **Page transitions:** a brief paper-coloured wipe, 400ms. Subtle enough that it reads as continuity, not as a feature.

### Non-negotiable guards
- `prefers-reduced-motion: reduce` disables Lenis and all transforms; content renders instantly at final state. Test this.
- No parallax below 768px.
- Nothing animates on a timer or loops infinitely except the hero curve's initial draw.
- Content must be readable with JavaScript disabled.

---

## SITE ARCHITECTURE

### `/` — Home
1. **Hero.** Headline + subhead + catenary SVG. Single CTA.
   - H1: `Distribution design production, built to Canadian standards.`
   - Sub: `SPIDAcalc pole loading, joint-use design packages and landbase work — delivered overnight, to your standards, ready for your engineer's seal.`
   - CTA: `Send us ten poles →`
2. **The problem.** Three short lines of serif prose. No icons, no cards. Just typography and whitespace.
3. **Three capabilities.** A hairline-separated three-column table-like layout. Each: title, one paragraph, deliverable list, turnaround time. Not cards.
4. **How we work.** The animated 7-step vertical workflow described above.
5. **Standards.** A dense, deliberately technical block listing the standards worked to — CSA load cases, Ontario Reg 22/04 context, distributor attachment guidelines. This section should look like a spec sheet. Mono labels, tabular layout, hairlines.
6. **Professional responsibility.** A single short bordered statement, copper left rule: production support delivered under the direction and review of the client's licensed professional, who retains professional responsibility and seals all deliverables.
7. **The pilot offer.** Full-bleed ink-coloured section. One sentence, one CTA. `Ten poles. 48 hours. Free.`
8. **Footer.** Minimal. Wordmark, three links, contact email, entity line, one hairline.

### `/capabilities`
Long-form detail on the three service lines. Serif prose, technical tables of deliverables, turnaround times. Reads like documentation.

### `/how-we-work`
The delivery workflow in full — intake, setup, production, self-check, lead review, delivery, comment loop. Plus the overnight time-zone advantage explained with a simple animated 24-hour timeline showing IST and ET.

### `/quality`
QA process, defect register methodology, assumption logging, data security controls. **This page wins deals — give it the most typographic care.** Present the QA checklist as an actual checklist artifact.

### `/contact`
No form-heavy layout. Name, email, company, volume, message. Five fields, inline validation, no placeholders-as-labels. Restate the pilot offer beside it.

---

## COPY VOICE

Write all copy yourself following these rules — do not use lorem ipsum anywhere.

- Short declarative sentences. Technical nouns. Specific numbers.
- Never a superlative. Never an adjective where a figure would do.
- Use the domain vocabulary correctly: make-ready, load case, framing, guying, anchor lead, capacity, transmittal, as-built, dead-end, tangent pole.
- Every claim must be checkable. "48-hour turnaround" not "fast turnaround."
- Contractions are fine. Exclamation marks are not.

---

## SKILLS AND PROJECT SETUP — DO THIS FIRST

Before writing any component:

1. **Check for and read any available frontend-design skill** in your environment, plus any skill covering design systems or web UI. Read them before making styling decisions.
2. **Create `CLAUDE.md`** at project root containing: the anti-brief list, the colour tokens, the type scale, the motion easing constants, the copy voice rules, and the "no 'Engineering' in Canada-facing copy" constraint. Every future session must load this.
3. **Create project skills** in `.claude/skills/` so these are enforced consistently rather than re-explained:
   - `spanex-brand/SKILL.md` — tokens, type scale, spacing, the anti-brief, when copper is allowed
   - `spanex-motion/SKILL.md` — easings, durations, stagger values, the reduced-motion contract, the catenary spec
   - `spanex-copy/SKILL.md` — voice rules, forbidden words, domain vocabulary, the "Engineering" constraint
4. **Set up a Playwright MCP server** (or equivalent browser automation) and use it to screenshot the build at **390px, 768px and 1440px** after every major section. Actually look at the screenshots and iterate. Do not declare a section finished without having viewed it rendered.

---

## BUILD SEQUENCE

Work in this order and **show me the result at each checkpoint before continuing**:

1. Scaffold, tokens, fonts, `CLAUDE.md`, skills, Lenis + motion primitives
2. Hero with the catenary animation — get this genuinely right before anything else
3. Home page remaining sections
4. Workflow scroll animation
5. Interior pages
6. Reduced-motion pass, accessibility pass, performance pass
7. Metadata, Open Graph image, sitemap, robots.txt

---

## DEFINITION OF DONE

- Lighthouse: Performance ≥ 95, Accessibility 100, Best Practices 100, SEO 100
- LCP < 1.8s, CLS < 0.02, no layout shift from font loading
- Fully keyboard navigable, visible focus rings in copper, correct heading hierarchy
- All text meets WCAG AA contrast
- `prefers-reduced-motion` fully honoured and manually verified
- Renders correctly with JS disabled
- Zero TypeScript errors, zero console warnings
- No `any`, no unused imports, no dead code
- Verified visually at 390 / 768 / 1440 via screenshots
- The word "Engineering" appears nowhere in rendered output or metadata

---

## FINAL INSTRUCTION

Before you write code, restate back to me: the audience, the three things you will do to make this feel institutional rather than trendy, and the one animation you consider the signature moment. Then propose your file structure and wait for approval.

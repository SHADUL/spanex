# SPANEX

Marketing site for SPANEX — distribution design production for Canadian
utilities and consultancies. Next.js 15 (App Router) · TypeScript (strict) ·
Tailwind v4 · Motion · Lenis.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production
npm run typecheck                # tsc --noEmit (passes clean)
```

## Structure

```
app/
  layout.tsx            Root layout, metadata, Nav + Footer, smooth scroll
  page.tsx              Home: hero + 6 sections
  capabilities/         Three production lines in detail
  how-we-work/          7-step loop + 24h IST/ET timeline
  quality/              QA checklist artifact + four controls
  contact/              5-field validated enquiry form
  globals.css           Design tokens (@theme), base, utilities, reduced-motion
  opengraph-image.tsx   Generated OG card (catenary + wordmark)
  sitemap.ts robots.ts
components/              Hero, Catenary, Workflow, Reveal, HeadlineReveal, ...
lib/
  motion.ts             Single source for easings/durations/variants
  content.ts            Copy as structured data
.claude/skills/         spanex-brand · spanex-motion · spanex-copy (session rules)
public/fonts/README.md  How to drop in the self-hosted variable fonts
```

## Notes

- **Fonts:** ships with a close system fallback stack so it renders immediately.
  Add the real variable fonts per `public/fonts/README.md` for the intended look
  (serif body copy is the key differentiator).
- **Motion:** nothing bounces. Reduced-motion disables Lenis and all scroll
  transforms; the site reads with JavaScript disabled.
- **Constraint:** the word "Engineering" appears only once, in the footer legal
  entity line — never in copy, titles, meta or navigation.
- **Contact form** has no backend; it composes a `mailto:` to `design@spanex.ca`.
  Wire it to your endpoint of choice when ready.

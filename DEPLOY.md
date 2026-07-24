# Deploying SPANEX

Standard Next.js 15 (App Router) app. Recommended host: **Vercel** (zero-config).

## 0. Confirm it builds locally (optional but wise)

```bash
cd "Spanex Engineering Website"
npm install
npm run build   # should finish with a route list; ~24 static routes + 20 pSEO + 5 blog
```

If `npm run build` succeeds locally, it will succeed on Vercel.

## 1. Set the production URL

Canonical tags, Open Graph, sitemap and JSON-LD read `NEXT_PUBLIC_SITE_URL`
(falls back to `https://spanex.ca`). Set it to your real domain at deploy time.

## Option A — Vercel CLI (fastest, no GitHub needed)

```bash
npm i -g vercel
vercel                       # first run: link/create project, accept Next.js defaults
vercel env add NEXT_PUBLIC_SITE_URL production   # paste https://your-domain
vercel --prod                # production deploy
```

## Option B — GitHub → Vercel (best for ongoing changes)

```bash
git init
git add -A
git commit -m "SPANEX site"
# create an empty repo on github.com, then:
git remote add origin git@github.com:<you>/spanex.git
git push -u origin main
```

Then on vercel.com → **Add New → Project → Import** the repo. Vercel detects
Next.js automatically. In **Settings → Environment Variables** add
`NEXT_PUBLIC_SITE_URL = https://your-domain`. Deploy.

## 2. Custom domain

Vercel → Project → **Settings → Domains** → add `spanex.ca` (or your domain) and
follow the DNS records shown. Then make sure `NEXT_PUBLIC_SITE_URL` matches it and
redeploy so canonical/OG/sitemap URLs are correct.

## 3. After first deploy — SEO checklist

- Visit `/(sitemap.xml)` and `/robots.txt` — confirm they list your real domain.
- Submit the sitemap in Google Search Console.
- Set `design@spanex.ca` to a real inbox (the contact + lead forms compose a
  mailto to it).
- Optional: add the self-hosted variable fonts (`public/fonts/README.md`) and the
  official software logos (`public/logos/README.md`).

## Notes

- Node 18.18+ or 20+ (Vercel default is fine).
- No database, no server env secrets required.
- A few `export {}` stub files remain from earlier iterations (old hero/animation
  components); they're unimported and safe to delete.

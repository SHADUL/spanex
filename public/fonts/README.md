# Self-hosted fonts

The design system references three families via CSS variables in
`app/globals.css` (`--font-display`, `--font-body`, `--font-mono`). Until you
drop the real variable fonts in, the site falls back to a close system stack
and renders correctly out of the box.

To ship the intended typography (recommended — serif body copy is the primary
"document, not landing page" signal):

1. Download the variable fonts (all free for commercial use):
   - **Display:** General Sans or Satoshi — https://www.fontshare.com
   - **Body (serif):** Newsreader or Source Serif 4 — https://fonts.google.com
     (download the `.woff2` files, do NOT link the CDN)
   - **Mono:** IBM Plex Mono — https://www.fontshare.com

2. Place the `.woff2` files in this folder, then wire them with
   `next/font/local` in `app/fonts.ts` (self-hosted, no external CDN):

   ```ts
   import localFont from "next/font/local";

   export const display = localFont({
     src: "../public/fonts/GeneralSans-Variable.woff2",
     variable: "--font-display",
     display: "swap",
   });
   export const body = localFont({
     src: "../public/fonts/Newsreader-Variable.woff2",
     variable: "--font-body",
     display: "swap",
   });
   ```

   Then add `${display.variable} ${body.variable}` to the `<html>` className
   in `app/layout.tsx`, and drop the fallback names from the `@theme` font
   variables so the loaded font is used first.

No Google Fonts CDN at runtime — `next/font/local` self-hosts the files you add
here.

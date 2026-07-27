import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GlobalJsonLd } from "@/components/SchemaJsonLd";
import { SITE_URL } from "@/lib/pseo-data";

/* Body — Inter. Labels/figures — IBM Plex Mono. Both self-hosted at build by
   next/font (no runtime request, no layout shift). Display headings use General
   Sans + Satoshi, loaded from Fontshare in <head> below. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SPANEX Engineering — Utility Distribution Drafting & Design",
    template: "%s — SPANEX Engineering",
  },
  description:
    "Spanex Engineering provides utility distribution drafting and engineering design — AutoCAD, GIS, landbase and SPIDAcalc — for electrical, telecom and fibre infrastructure.",
  applicationName: "SPANEX Engineering",
  keywords: [
    "utility distribution drafting",
    "engineering design",
    "AutoCAD design",
    "GIS mapping",
    "landbase drafting",
    "SPIDAcalc pole analysis",
    "telecom design",
    "fibre network drafting",
    "electrical distribution drawings",
  ],
  openGraph: {
    title: "SPANEX Engineering — Utility Distribution Drafting & Design",
    description:
      "Utility distribution drafting and engineering design — AutoCAD, GIS, landbase and SPIDAcalc — for electrical, telecom and fibre infrastructure.",
    url: SITE_URL,
    siteName: "SPANEX",
    locale: "en_CA",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${plexMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&f[]=satoshi@500,700,900&display=swap"
        />
      </head>
      <body>
        <GlobalJsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

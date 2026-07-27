import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GlobalJsonLd } from "@/components/SchemaJsonLd";
import { SITE_URL } from "@/lib/pseo-data";

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
    <html lang="en-CA">
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

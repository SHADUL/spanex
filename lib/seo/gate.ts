/**
 * Content quality gate (SEO-BLUEPRINT.md §8). A programmatic page is only marked
 * indexable once it carries enough unique substance; otherwise it renders with
 * robots noindex so thin pages never dilute the site.
 *
 * Pure + deterministic so it can run at build time from the entity record.
 */

export interface GateInput {
  /** All human-visible text on the page, concatenated. */
  text: string;
  /** Number of on-page, unique FAQ Q&A pairs. */
  faqCount: number;
  /** Number of internal links out of this page. */
  internalLinks: number;
}

export interface GateThresholds {
  wordFloor: number;
  minFaqs: number;
  minLinks: number;
}

export const GATE: Record<string, GateThresholds> = {
  software: { wordFloor: 260, minFaqs: 2, minLinks: 3 },
  industry: { wordFloor: 320, minFaqs: 2, minLinks: 3 },
  service: { wordFloor: 240, minFaqs: 2, minLinks: 4 },
  location: { wordFloor: 380, minFaqs: 3, minLinks: 4 },
  glossary: { wordFloor: 120, minFaqs: 0, minLinks: 2 },
};

export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Returns true when the page has enough unique substance to be indexed. */
export function passesGate(input: GateInput, t: GateThresholds): boolean {
  return (
    wordCount(input.text) >= t.wordFloor &&
    input.faqCount >= t.minFaqs &&
    input.internalLinks >= t.minLinks
  );
}

/** Robots metadata object for Next `Metadata.robots`. */
export function robotsFor(indexable: boolean) {
  return indexable
    ? { index: true, follow: true }
    : { index: false, follow: true };
}

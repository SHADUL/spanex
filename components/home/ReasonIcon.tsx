"use client";

import {
  Crosshair,
  Lightning,
  Timer,
  ArrowsOut,
  SealCheck,
  Ruler,
  Files,
  FlowArrow,
  type Icon,
} from "@phosphor-icons/react";

/**
 * One distinct Phosphor glyph per reason, indexed to match lib/content reasons.
 * Duotone, single fixed size, copper via currentColor.
 */
const ICONS: Icon[] = [
  Crosshair, // Engineering accuracy
  Lightning, // Utility experience
  Timer, // Fast turnaround
  ArrowsOut, // Scalable support
  SealCheck, // Quality control
  Ruler, // Standards compliance
  Files, // Reliable documentation
  FlowArrow, // Modern workflows
];

export function ReasonIcon({ index }: { index: number }) {
  const Glyph = ICONS[index % ICONS.length];
  return <Glyph size={26} weight="duotone" aria-hidden />;
}

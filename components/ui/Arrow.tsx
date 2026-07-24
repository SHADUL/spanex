"use client";

import { ArrowRight } from "@phosphor-icons/react";

/**
 * The one inline arrow used across the site — a Phosphor ArrowRight at a fixed
 * size and weight so every "see more / send" affordance is identical in size,
 * weight and vertical alignment. Colour is inherited (set copper on the parent).
 */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <ArrowRight
      size={16}
      weight="bold"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden
    />
  );
}

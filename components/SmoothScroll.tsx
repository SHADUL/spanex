"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Lenis smooth scroll, driven by a single rAF loop so Motion's scroll listeners
 * stay in sync. Disabled entirely under prefers-reduced-motion — native scroll
 * takes over and content is never withheld.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      lerp: 0.09,
      duration: 1.15,
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduced]);

  return <>{children}</>;
}

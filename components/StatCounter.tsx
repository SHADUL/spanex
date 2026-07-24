"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Counts up to `value` on first viewport entry. Uses tabular figures so there is
 * zero layout shift while the digits change. Under reduced motion the final
 * value renders immediately.
 */
export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.1,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const from = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      // ease-out cubic — settles, never overshoots
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (value - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, reduced, value, duration]);

  return (
    <span ref={ref} className="tnum">
      {prefix}
      {display.toLocaleString("en-CA", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

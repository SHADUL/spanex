"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { workflow } from "@/lib/content";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * The delivery workflow. A copper progress line draws downward as the section
 * scrolls; each step slides in as the line reaches it. Second-most important
 * animation on the site. The spring here is critically damped — it settles, it
 * does not overshoot.
 */
export default function Workflow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 75%"],
  });

  // No overshoot: high damping ratio, so scaleY tracks scroll without bounce.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <Section id="workflow" index="02" eyebrow="How we work">
      <div className="grid grid-cols-12 gap-x-6">
        <h2 className="col-span-12 mb-9 text-[length:var(--text-h2)] leading-[1.02] tracking-[-0.02em] text-ink lg:col-span-8">
          From project request to final drawing package.
        </h2>
      </div>

      <div ref={ref} className="relative grid grid-cols-12 gap-x-6">
        {/* Rail: static hairline + copper progress overlay */}
        <div
          className="absolute bottom-0 top-0 col-start-1 w-px bg-rule"
          style={{ left: "0.5px" }}
          aria-hidden
        />
        <motion.div
          className="absolute bottom-0 top-0 w-px origin-top bg-copper"
          style={{
            left: "0.5px",
            scaleY: reduced ? 1 : progress,
          }}
          aria-hidden
        />

        <ol className="col-span-12 lg:col-span-10 lg:col-start-2">
          {workflow.map((step) => (
            <li key={step.index} className="relative">
              <Reveal className="grid grid-cols-12 gap-x-6 py-8">
                {/* Node marker on the rail */}
                <div className="col-span-12 flex items-baseline gap-6 md:col-span-4">
                  <span
                    aria-hidden
                    className="mt-[0.35em] block h-[7px] w-[7px] shrink-0 -translate-x-[calc(0.5px+3.5px)] bg-ink"
                  />
                  <div>
                    <span className="eyebrow text-copper tnum">
                      Step {step.index}
                    </span>
                    <h3 className="mt-2 text-[length:var(--text-h3)] leading-tight text-ink">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="measure col-span-12 text-[0.98rem] leading-relaxed text-slate md:col-span-7 md:col-start-6">
                  {step.body}
                </p>
              </Reveal>
              <div className="h-px w-full bg-rule" />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

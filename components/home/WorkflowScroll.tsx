"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  type MotionValue,
} from "motion/react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * The signature scroll experience — one blueprint that assembles itself through
 * the five production stages as the section scrolls:
 *
 *   AutoCAD → GIS → Landbase → SPIDAcalc → Final Drawing Package
 *
 * Pure scroll-scrubbed 2.5D (layered SVG driven by Framer MotionValues over the
 * existing Lenis scroll). No WebGL. Layers fade/draw on cumulatively — the sheet
 * builds rather than swaps — with a desktop-only parallax drift. Under
 * prefers-reduced-motion (or no JS) it renders the finished sheet, statically.
 */

const INK = "var(--color-ink)";
const SLATE = "var(--color-slate)";
const RULE = "var(--color-rule)";
const COPPER = "var(--color-copper)";
const SIGNAL = "var(--color-signal)";

const STAGES = [
  { n: "01", label: "AutoCAD", body: "Construction linework drafted to your CAD standard — layers, blocks and title block." },
  { n: "02", label: "GIS", body: "Asset and network data reconciled from GIS into a coordinate-true base." },
  { n: "03", label: "Landbase", body: "Property lines, road and right-of-way resolved into one survey-true base." },
  { n: "04", label: "SPIDAcalc", body: "Every structure verified for pole loading — a pass, or a buildable make-ready." },
  { n: "05", label: "Final Drawing Package", body: "Sheets, calculations and an assumption log — sealed-ready, delivered on schedule." },
] as const;

// Fade a value in over [a,b] and hold (clamped 0→1).
function useReveal(p: MotionValue<number>, a: number, b: number) {
  return useTransform(p, [a, b], [0, 1]);
}

export default function WorkflowScroll() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const set = () => setIsDesktop(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const constant = useMotionValue(1);
  // Light spring for buttery scrub — overdamped, never overshoots.
  const p = useSpring(reduced ? constant : scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.0006,
  });

  // Layer reveals (cumulative — each holds at 1 after fading in).
  const grid = useTransform(p, [0, 0.05], [0, 0.5]);
  const cadDraw = useTransform(p, [0.02, 0.18], [0, 1]);
  const cadOpacity = useReveal(p, 0.02, 0.1);
  const gis = useReveal(p, 0.2, 0.3);
  const land = useReveal(p, 0.4, 0.5);
  const spida = useReveal(p, 0.58, 0.68);
  const gauge = useTransform(p, [0.68, 0.8], [0, 1]);
  const gaugeW = useTransform(gauge, [0, 1], [0, 150]);
  const passOpacity = useReveal(p, 0.76, 0.84);
  const finalOpacity = useReveal(p, 0.8, 0.9);

  // Desktop-only parallax drift (subtle; disabled < 768px and reduced-motion).
  const driftA = useTransform(p, [0, 1], [14, -14]);
  const driftB = useTransform(p, [0, 1], [24, -22]);
  const par = isDesktop && !reduced;

  // Caption cross-fades, one per stage.
  const capOpacity = [
    useTransform(p, [0.0, 0.03, 0.17, 0.21], [1, 1, 1, 0]),
    useTransform(p, [0.17, 0.22, 0.37, 0.42], [0, 1, 1, 0]),
    useTransform(p, [0.37, 0.42, 0.55, 0.6], [0, 1, 1, 0]),
    useTransform(p, [0.55, 0.6, 0.77, 0.82], [0, 1, 1, 0]),
    useTransform(p, [0.77, 0.82, 1, 1], [0, 1, 1, 1]),
  ];
  // Tick highlights.
  const tick = [
    useTransform(p, [0.0, 0.02, 0.19, 0.21], [1, 1, 1, 0]),
    useTransform(p, [0.18, 0.22, 0.39, 0.41], [0, 1, 1, 0]),
    useTransform(p, [0.38, 0.42, 0.57, 0.59], [0, 1, 1, 0]),
    useTransform(p, [0.56, 0.6, 0.79, 0.81], [0, 1, 1, 0]),
    useTransform(p, [0.78, 0.82, 1, 1], [0, 1, 1, 1]),
  ];

  const stage = (
    <div className="grid grid-cols-12 items-center gap-x-6 gap-y-10">
      {/* Captions + progress */}
      <div className="col-span-12 lg:col-span-4">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-copper" />
          <span className="eyebrow">How we work</span>
        </div>
        <h2 className="mt-6 text-[length:var(--text-h2)] font-semibold leading-[1.03] tracking-[-0.025em] text-ink">
          One package,
          <br />
          five stages.
        </h2>

        {/* Stacked captions cross-fading with scroll */}
        <div className="relative mt-8 h-[132px]">
          {STAGES.map((s, i) => (
            <motion.div
              key={s.label}
              className="absolute inset-0"
              style={{ opacity: reduced && i !== STAGES.length - 1 ? 0 : capOpacity[i] }}
            >
              <span className="font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.14em] text-copper">
                {s.n} — {s.label.toUpperCase()}
              </span>
              <p className="measure mt-3 text-[1.02rem] leading-relaxed text-slate">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Progress ticks */}
        <div className="mt-8 flex gap-2" aria-hidden>
          {STAGES.map((s, i) => (
            <div key={s.label} className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-rule">
              <motion.div
                className="absolute inset-0 origin-left rounded-full bg-copper"
                style={{ opacity: reduced ? (i === STAGES.length - 1 ? 1 : 0.25) : tick[i] }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* The assembling blueprint */}
      <div className="col-span-12 lg:col-span-8">
        <div className="media-frame surface aspect-[8/5] w-full">
          <svg
            viewBox="0 0 1000 625"
            className="h-full w-full"
            role="img"
            aria-label="A utility distribution drawing assembling through five production stages: AutoCAD linework, GIS data, landbase, SPIDAcalc pole loading, and a final sealed drawing package."
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Drafting grid */}
            <motion.g stroke={RULE} strokeWidth={1} style={{ opacity: grid }}>
              {Array.from({ length: 21 }, (_, i) => (
                <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={625} />
              ))}
              {Array.from({ length: 13 }, (_, i) => (
                <line key={`h${i}`} x1={0} y1={i * 50} x2={1000} y2={i * 50} />
              ))}
            </motion.g>

            {/* Landbase — ROW + coordinate ticks (stage 3) */}
            <motion.g style={{ opacity: reduced ? 1 : land, y: par ? driftB : 0 }}>
              <path d="M70 430 Q360 380 620 470 T940 470" stroke={SLATE} strokeWidth={1.5} strokeDasharray="2 9" />
              <g stroke={SLATE} strokeWidth={1.25} opacity={0.6}>
                {[150, 350, 550, 750].map((x) => (
                  <path key={x} d={`M${x} 40v14M${x} 585v-14`} />
                ))}
              </g>
            </motion.g>

            {/* GIS parcels (stage 2) */}
            <motion.g style={{ opacity: reduced ? 1 : gis, y: par ? driftA : 0 }}>
              <g fill={INK} fillOpacity={0.04} stroke={INK} strokeWidth={1.25}>
                <path d="M120 150 L360 120 L380 300 L140 330 Z" />
                <path d="M380 300 L360 120 L640 140 L660 300 Z" />
                <path d="M140 330 L380 300 L400 470 L160 500 Z" />
              </g>
              <g transform="translate(690 150)">
                <path d="M0 0 c0 22 -22 34 -22 54 a22 22 0 1 0 44 0 c0 -20 -22 -32 -22 -54 Z" stroke={COPPER} strokeWidth={2} />
                <circle cx="0" cy="52" r="6" fill={COPPER} />
              </g>
            </motion.g>

            {/* AutoCAD linework — draws on (stage 1) */}
            <motion.g stroke={INK} strokeWidth={1.75} style={{ opacity: reduced ? 1 : cadOpacity }}>
              <motion.path
                d="M120 520 L120 210 L330 210 L330 150 L560 150 L560 360 L440 360 L440 520 Z"
                style={{ pathLength: reduced ? 1 : cadDraw }}
              />
              <motion.path
                d="M170 480 L170 250 L300 250"
                stroke={SLATE}
                strokeWidth={1.25}
                style={{ pathLength: reduced ? 1 : cadDraw }}
              />
            </motion.g>

            {/* SPIDAcalc — poles, conductors, load, capacity (stage 4) */}
            <motion.g style={{ opacity: reduced ? 1 : spida }}>
              <line x1="90" y1="470" x2="930" y2="470" stroke={INK} strokeWidth={1.75} />
              {[250, 500, 750].map((x) => (
                <g key={x} stroke={INK} strokeWidth={1.75}>
                  <line x1={x} y1={470} x2={x} y2={300} />
                  <line x1={x - 30} y1={330} x2={x + 30} y2={330} />
                </g>
              ))}
              <path d="M250 330 Q375 388 500 330" stroke={COPPER} strokeWidth={2} />
              <path d="M500 330 Q625 388 750 330" stroke={COPPER} strokeWidth={2} />
              {/* load vector */}
              <g stroke={COPPER} strokeWidth={2}>
                <line x1="220" y1="330" x2="165" y2="330" />
                <path d="M165 330 l14 -6 M165 330 l14 6" />
              </g>
              {/* capacity gauge */}
              <text x="800" y="250" fill={SLATE} fontSize="15" fontFamily="var(--font-mono)" textAnchor="middle">
                POLE UTILISATION
              </text>
              <rect x="725" y="266" width="150" height="15" rx="7.5" fill="none" stroke={RULE} strokeWidth={1.5} />
              <motion.rect x="725" y="266" height="15" rx="7.5" fill={SIGNAL} width={reduced ? 118 : gaugeW} />
            </motion.g>

            {/* Final package — sheet border, title block, stamp (stage 5) */}
            <motion.g style={{ opacity: reduced ? 1 : finalOpacity }}>
              <rect x="34" y="34" width="932" height="557" rx="4" fill="none" stroke={INK} strokeWidth={1.5} />
              <g stroke={INK} strokeWidth={1.25}>
                <rect x="700" y="470" width="230" height="90" fill="var(--color-paper)" />
                <line x1="700" y1="512" x2="930" y2="512" />
                <line x1="815" y1="470" x2="815" y2="560" />
              </g>
              <text x="715" y="495" fill={SLATE} fontSize="13" fontFamily="var(--font-mono)">SPANEX</text>
              <text x="830" y="495" fill={SLATE} fontSize="13" fontFamily="var(--font-mono)">SHEET 1/1</text>
            </motion.g>

            {/* APPROVED stamp (resolves near the end) */}
            <motion.g style={{ opacity: reduced ? 1 : passOpacity }}>
              <g transform="translate(120 545)">
                <rect x="-6" y="-22" width="196" height="34" rx="6" fill="none" stroke={SIGNAL} strokeWidth={1.5} />
                <path d="M8 -4 l8 8 l16 -20" fill="none" stroke={SIGNAL} strokeWidth={2.5} />
                <text x="44" y="1" fill={SIGNAL} fontSize="15" fontFamily="var(--font-mono)">
                  ISSUED — APPROVED
                </text>
              </g>
            </motion.g>
          </svg>
        </div>
      </div>
    </div>
  );

  if (reduced) {
    return (
      <section className="mx-auto max-w-[1200px] px-6 py-[var(--spacing-section)] md:px-10">
        {stage}
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[320vh] md:h-[460vh]">
      <div className="sticky top-0 flex h-[100svh] items-center">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">{stage}</div>
      </div>
    </section>
  );
}

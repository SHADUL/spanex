"use client";

import { motion } from "motion/react";
import { inView, ease, dur } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * The overnight advantage, as a single 24-hour timeline. The axis runs from noon
 * ET across to noon ET the next day. India's working day falls inside your
 * night, so work you hand off at end of day is waiting at the start of the next.
 *
 * IST is 9.5 hours ahead of Eastern. The production band is drawn, not decorated
 * — scaleX from the left as it enters view, no bounce.
 */

// Positions as a fraction of a 24h axis beginning at 12:00 ET.
const SEND = 5 / 24; // 5:00 PM ET
const PROD_START = 11.5 / 24; // 11:30 PM ET  (9:00 AM IST)
const PROD_END = 20.5 / 24; // 8:30 AM ET   (6:00 PM IST)
const RECEIVE = 20.5 / 24; // 8:30 AM ET

const ticks = [
  { at: 0, label: "12 PM ET" },
  { at: 0.25, label: "6 PM" },
  { at: 0.5, label: "12 AM" },
  { at: 0.75, label: "6 AM" },
  { at: 1, label: "12 PM" },
];

export function TimeZones() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
      <div className="grid grid-cols-12 gap-x-6">
        <span className="eyebrow col-span-12 text-copper">
          The overnight advantage
        </span>
        <h2 className="col-span-12 mt-6 text-[length:var(--text-h2)] leading-[1.03] tracking-[-0.02em] text-ink lg:col-span-9">
          Hand off at the end of your day. Review it at the start of the next.
        </h2>
      </div>

      <div className="mt-12">
        {/* Axis */}
        <div className="relative h-px w-full bg-rule">
          {ticks.map((t) => (
            <div
              key={t.at}
              className="absolute top-0 -translate-x-1/2"
              style={{ left: `${t.at * 100}%` }}
            >
              <div className="h-2 w-px bg-rule" />
              <span className="mt-2 block whitespace-nowrap font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-[0.12em] text-slate">
                {t.label}
              </span>
            </div>
          ))}
        </div>

        {/* Production band */}
        <div className="relative mt-14 h-10">
          <div
            className="absolute inset-y-0"
            style={{
              left: `${PROD_START * 100}%`,
              width: `${(PROD_END - PROD_START) * 100}%`,
            }}
          >
            <motion.div
              className="h-full w-full origin-left bg-copper/12 border-y border-copper"
              initial={reduced ? false : { scaleX: 0 }}
              whileInView={reduced ? undefined : { scaleX: 1 }}
              viewport={inView}
              transition={{ duration: dur.slow, ease: ease.out }}
            />
            <span className="mt-3 block font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.12em] text-copper">
              SPANEX produces &middot; 9:00 AM – 6:00 PM IST
            </span>
          </div>

          {/* Markers */}
          <Marker at={SEND} label="You send" time="5:00 PM ET" reduced={reduced} />
          <Marker
            at={RECEIVE}
            label="You receive"
            time="8:30 AM ET"
            reduced={reduced}
            align="right"
          />
        </div>
      </div>

      <p className="measure mt-12 text-[1.05rem] leading-relaxed text-slate">
        A run you transmit at 5:00 PM Eastern reaches the production team at the
        start of their day. Modelling, drafting, self-check and lead review all
        happen while your office is closed. The package is back in your inbox
        before 9:00 AM, so your first task is review, not waiting.
      </p>
    </div>
  );
}

function Marker({
  at,
  label,
  time,
  reduced,
  align = "left",
}: {
  at: number;
  label: string;
  time: string;
  reduced: boolean;
  align?: "left" | "right";
}) {
  return (
    <motion.div
      className="absolute -top-14"
      style={{ left: `${at * 100}%` }}
      initial={reduced ? false : { opacity: 0, y: 8 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={inView}
      transition={{ duration: dur.base, ease: ease.out, delay: 0.3 }}
    >
      <div
        className={`flex flex-col ${align === "right" ? "-translate-x-full items-end text-right" : ""}`}
      >
        <span className="font-[family-name:var(--font-display)] text-[0.95rem] font-semibold text-ink">
          {label}
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.12em] text-slate">
          {time}
        </span>
      </div>
      <div
        className={`mt-2 h-6 w-px bg-ink ${align === "right" ? "ml-auto" : ""}`}
      />
    </motion.div>
  );
}

"use client";

import { useRef, useState, useCallback } from "react";
import {
  PenNib,
  GlobeHemisphereWest,
  ChartBar,
  GridFour,
  CaretLeft,
  CaretRight,
  type Icon,
} from "@phosphor-icons/react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { software, type Software as SoftwareItem } from "@/lib/content";

const ICONS: Record<SoftwareItem["icon"], Icon> = {
  pennib: PenNib,
  globe: GlobeHemisphereWest,
  chart: ChartBar,
  grid: GridFour,
};

/**
 * The core toolset as a horizontal, swipeable carousel: native touch-swipe,
 * click-and-drag on desktop, snap-to-card, arrow controls, and a live progress
 * bar. Phosphor icons in brand red; hairline cards, no shadows.
 */
export default function Software() {
  const scroller = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const drag = useRef({ active: false, startX: 0, startLeft: 0 });

  const onScroll = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }, []);

  // Click-and-drag to scroll (mouse only; touch uses native swipe).
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = scroller.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const el = scroller.current;
    if (!el) return;
    el.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
  };
  const endDrag = () => {
    drag.current.active = false;
  };

  const atStart = progress <= 0.01;
  const atEnd = progress >= 0.99;

  return (
    <Section id="software" index="03" eyebrow="The toolset">
      <div className="mb-10 flex items-end justify-between gap-6">
        <h2 className="max-w-2xl text-[length:var(--text-h2)] leading-[1.02] tracking-[-0.02em] text-ink">
          The software behind every drawing, and why we use it.
        </h2>

        {/* Arrow controls (desktop) */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center border border-rule text-ink transition-colors duration-200 hover:border-copper hover:text-copper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-rule disabled:hover:text-ink"
          >
            <CaretLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center border border-rule text-ink transition-colors duration-200 hover:border-copper hover:text-copper disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-rule disabled:hover:text-ink"
          >
            <CaretRight size={18} />
          </button>
        </div>
      </div>

      <Reveal>
        <div
          ref={scroller}
          onScroll={onScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:mx-0 md:cursor-grab md:px-0 md:active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          {software.map((tool) => {
            const Glyph = ICONS[tool.icon];
            return (
              <article
                key={tool.name}
                data-card
                className="group relative flex shrink-0 basis-[82%] snap-start flex-col border border-rule bg-paper p-8 transition-colors duration-300 hover:border-ink/25 sm:basis-[46%] lg:basis-[31%]"
              >
                {/* top accent line grows on hover */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-copper transition-transform duration-300 group-hover:scale-x-100"
                />
                <span className="text-copper">
                  <Glyph size={30} weight="duotone" aria-hidden />
                </span>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-[1.4rem] font-semibold tracking-[-0.01em] text-ink">
                  {tool.name}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-display)] text-[1rem] text-ink">
                  {tool.role}
                </p>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-slate">
                  {tool.why}
                </p>
              </article>
            );
          })}
        </div>
      </Reveal>

      {/* Progress bar */}
      <div className="mt-8 h-px w-full bg-rule">
        <div
          className="h-px origin-left bg-copper transition-[width] duration-150 ease-out"
          style={{ width: `${Math.max(8, progress * 100)}%` }}
        />
      </div>

      <p className="mt-4 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-slate md:hidden">
        Swipe to explore
      </p>
    </Section>
  );
}

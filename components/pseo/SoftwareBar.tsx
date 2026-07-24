"use client";

import { useState } from "react";
import { tools } from "@/lib/pseo-data";

/**
 * Software compatibility bar. Renders the official vendor logo from
 * /public/logos/{key}.svg when present; until you drop those brand-kit assets
 * in, it falls back to a clean monochrome wordmark badge. Relevant tools for the
 * current service are emphasised; the rest are dimmed.
 *
 * Note: AutoCAD, ArcGIS, MicroStation and SPIDAcalc are third-party trademarks —
 * use each vendor's official brand assets (see public/logos/README.md).
 */
export function SoftwareBar({ activeKeys }: { activeKeys: string[] }) {
  return (
    <div className="grid grid-cols-2 border-t border-rule sm:grid-cols-3 lg:grid-cols-6">
      {tools.map((t) => {
        const active = activeKeys.includes(t.key);
        return (
          <div
            key={t.key}
            className={`flex flex-col border-b border-r border-rule px-5 py-6 last:border-r-0 ${
              active ? "" : "opacity-40"
            }`}
          >
            <Logo toolKey={t.key} name={t.name} active={active} />
            <span className="mt-3 text-[0.78rem] leading-snug text-slate">
              {t.note}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Logo({
  toolKey,
  name,
  active,
}: {
  toolKey: string;
  name: string;
  active: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    // Real logo, if the asset exists. Height-constrained, grayscale-neutral.
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/logos/${toolKey}.svg`}
        alt={`${name} logo`}
        className="h-7 w-auto self-start object-contain"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  // Fallback wordmark badge.
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className={`h-1.5 w-1.5 ${active ? "bg-copper" : "bg-slate"}`}
      />
      <span
        className={`font-[family-name:var(--font-display)] text-[1.05rem] font-semibold tracking-[-0.01em] ${
          active ? "text-ink" : "text-slate"
        }`}
      >
        {name}
      </span>
    </span>
  );
}

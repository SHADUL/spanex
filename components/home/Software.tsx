"use client";

import { PenNib, GlobeHemisphereWest, ChartBar, GridFour, type Icon } from "@phosphor-icons/react";
import { Section } from "@/components/Section";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { software, type Software as SoftwareItem } from "@/lib/content";

const ICONS: Record<SoftwareItem["icon"], Icon> = {
  pennib: PenNib,
  globe: GlobeHemisphereWest,
  chart: ChartBar,
  grid: GridFour,
};

/**
 * The core toolset and why each tool is used. A two-column hairline grid, icons
 * in copper, descriptions in serif.
 */
export default function Software() {
  return (
    <Section id="software" index="03" eyebrow="The toolset">
      <div className="grid grid-cols-12 gap-x-6">
        <h2 className="col-span-12 mb-12 text-[length:var(--text-h2)] leading-[1.02] tracking-[-0.02em] text-ink lg:col-span-8">
          The software behind every drawing, and why we use it.
        </h2>
      </div>

      <RevealGroup className="grid grid-cols-1 border-t border-rule md:grid-cols-2">
        {software.map((tool, i) => {
          const Glyph = ICONS[tool.icon];
          return (
            <Reveal
              key={tool.name}
              className={`border-b border-rule py-9 md:py-11 ${
                i % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-copper">
                  <Glyph size={26} weight="duotone" aria-hidden />
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-[1.35rem] font-semibold tracking-[-0.01em] text-ink">
                  {tool.name}
                </h3>
              </div>
              <p className="mt-4 font-[family-name:var(--font-display)] text-[1rem] text-ink">
                {tool.role}
              </p>
              <p className="measure mt-3 text-[0.98rem] leading-relaxed text-slate">
                {tool.why}
              </p>
            </Reveal>
          );
        })}
      </RevealGroup>
    </Section>
  );
}

"use client";

import {
  PencilRuler,
  BezierCurve,
  MapTrifold,
  Gauge,
  ShareNetwork,
  type Icon,
} from "@phosphor-icons/react";
import type { ServiceIconName } from "@/lib/content";

/**
 * Service icons, from Phosphor — one distinct, semantically matched glyph per
 * service. Duotone at a single fixed size; currentColor tints them copper.
 */
const MAP: Record<ServiceIconName, Icon> = {
  drafting: PencilRuler,
  autocad: BezierCurve,
  gis: MapTrifold,
  spidacalc: Gauge,
  fibre: ShareNetwork,
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  const Glyph = MAP[name];
  return <Glyph size={30} weight="duotone" aria-hidden />;
}

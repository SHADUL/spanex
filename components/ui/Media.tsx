"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { mediaReveal, inView } from "@/lib/motion";

/**
 * Editorial media frame. next/image (optimized AVIF/WebP, lazy by default),
 * a rounded clipped frame with soft elevation, an optional very-subtle hover
 * zoom, and a scroll reveal that settles up and de-zooms. Keep `priority` +
 * `reveal={false}` for the hero image so LCP is never delayed.
 */
export function Media({
  src,
  alt,
  ratio = "16 / 10",
  priority = false,
  sizes = "(min-width: 1024px) 46vw, 100vw",
  className = "",
  frame = true,
  zoom = true,
  reveal = true,
  tint = false,
  overlay,
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  frame?: boolean;
  zoom?: boolean;
  reveal?: boolean;
  /** navy gradient for text legibility over the image */
  tint?: boolean;
  overlay?: React.ReactNode;
}) {
  const inner = (
    <div
      className={`relative w-full ${frame ? "media-frame" : "overflow-hidden"} ${
        zoom ? "media-zoom" : ""
      }`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {tint && (
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10"
        />
      )}
      {overlay && <div className="absolute inset-0">{overlay}</div>}
    </div>
  );

  if (!reveal) return <div className={className}>{inner}</div>;

  return (
    <motion.div
      className={className}
      variants={mediaReveal}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      {inner}
    </motion.div>
  );
}

import { Reveal } from "./Reveal";

/**
 * Full-bleed image band with a consistent brand treatment: the photo is muted
 * (slight desaturation) under a navy gradient so overlaid text stays legible and
 * every image reads as part of the SPANEX palette rather than dropped-in stock.
 */
export function ImageBand({
  src,
  alt,
  eyebrow,
  title,
  note,
  height = "tall",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  note?: string;
  height?: "tall" | "short";
}) {
  return (
    <section
      className={`relative isolate w-full overflow-hidden ${
        height === "tall" ? "min-h-[62vh] md:min-h-[70vh]" : "min-h-[42vh]"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 -z-10 h-full w-full object-cover [filter:grayscale(0.15)_contrast(1.03)]"
        loading="lazy"
        decoding="async"
      />
      {/* Navy tint for cohesion + legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/92 via-ink/60 to-ink/45"
      />

      <div className="mx-auto flex min-h-[inherit] max-w-[1200px] items-end px-6 py-16 md:px-10 md:py-20">
        <Reveal className="max-w-2xl">
          {eyebrow && (
            <span className="eyebrow text-copper-lt">{eyebrow}</span>
          )}
          <h2 className="mt-5 text-[length:var(--text-h2)] font-semibold leading-[1.04] tracking-[-0.02em] text-paper">
            {title}
          </h2>
          {note && (
            <p className="measure mt-5 text-[1.05rem] leading-relaxed text-[color:var(--color-rule)]">
              {note}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

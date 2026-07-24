import Link from "next/link";

/**
 * SPANEX logo lockup. Uses the brand logo image (navy on light surfaces, white
 * on dark). Intrinsic dimensions are set so there is no layout shift.
 */
export function Wordmark({
  compact = false,
  variant = "navy",
}: {
  compact?: boolean;
  variant?: "navy" | "white";
}) {
  const src =
    variant === "white"
      ? "/spanex-logo-white.png"
      : "/spanex-logo-navy.png";

  return (
    <Link href="/" aria-label="SPANEX Engineering — home" className="inline-flex">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="SPANEX Engineering"
        width={950}
        height={281}
        className={`w-auto ${compact ? "h-7" : "h-8 md:h-9"}`}
      />
    </Link>
  );
}

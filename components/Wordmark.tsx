import Link from "next/link";

/**
 * SPANEX wordmark + descriptor. A single small copper node sits between the
 * word and the descriptor as a conductor reference — the only mark on the site.
 */
export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="SPANEX — home"
      className="group inline-flex items-baseline gap-3"
    >
      <span
        className="font-[family-name:var(--font-display)] font-semibold tracking-[-0.02em] text-ink"
        style={{ fontSize: compact ? "1.3rem" : "1.5rem" }}
      >
        SPANEX
      </span>
      <span
        aria-hidden
        className="translate-y-[-0.15em] h-[5px] w-[5px] bg-copper"
      />
      {!compact && (
        <span className="eyebrow hidden sm:inline">Engineering</span>
      )}
    </Link>
  );
}

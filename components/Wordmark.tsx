import Link from "next/link";
import { SpanexLogo } from "./SpanexLogo";

/**
 * SPANEX logo lockup. The logo is inlined (SpanexLogo) so its red dot animates
 * via page CSS on load. Height is set here; width scales with the aspect ratio.
 */
export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="SPANEX Engineering — home"
      className="inline-flex items-center"
    >
      <SpanexLogo className={compact ? "h-7" : "h-8 md:h-9"} />
    </Link>
  );
}

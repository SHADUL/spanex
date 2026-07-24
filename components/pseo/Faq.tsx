/**
 * FAQ list built on native <details> — accessible, keyboard-friendly and fully
 * functional with JavaScript disabled. Pair with faqSchema() for FAQPage JSON-LD.
 */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-rule">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-rule">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="font-[family-name:var(--font-display)] text-[1.1rem] font-medium leading-snug text-ink">
              {f.q}
            </span>
            <span
              aria-hidden
              className="relative mt-1 h-3 w-3 shrink-0 text-copper"
            >
              <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-copper" />
              <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-copper transition-transform duration-200 group-open:rotate-90 group-open:opacity-0" />
            </span>
          </summary>
          <p className="measure pb-6 text-[1rem] leading-relaxed text-slate">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}

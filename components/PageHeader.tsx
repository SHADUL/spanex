import { HeadlineReveal } from "./HeadlineReveal";
import { Reveal } from "./Reveal";

/**
 * Interior page header. Masked headline + serif standfirst, asymmetric, with a
 * mono eyebrow. Reads like the opening of a technical document.
 */
export function PageHeader({
  eyebrow,
  titleLines,
  standfirst,
}: {
  eyebrow: string;
  titleLines: React.ReactNode[];
  standfirst: string;
}) {
  return (
    <header className="mx-auto max-w-[1200px] px-6 pb-10 pt-10 md:px-10 md:pb-14 md:pt-16">
      <Reveal>
        <span className="eyebrow text-copper">{eyebrow}</span>
      </Reveal>
      <div className="mt-6 grid grid-cols-12 gap-x-6">
        <HeadlineReveal
          className="col-span-12 lg:col-span-11"
          lineClassName="text-[length:var(--text-h2)] font-semibold leading-[1.02] tracking-[-0.025em] text-ink"
          lines={titleLines}
        />
      </div>
      <div className="mt-6 grid grid-cols-12 gap-x-6">
        <Reveal
          as="p"
          className="measure col-span-12 text-[length:var(--text-lead)] leading-relaxed text-slate lg:col-span-7"
        >
          {standfirst}
        </Reveal>
      </div>
    </header>
  );
}

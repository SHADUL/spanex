import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * About — a short, precise statement of what SPANEX does, paired with a muted
 * image of drafting work for texture. No marketing, no history padding.
 */
export default function About() {
  return (
    <Section id="about" index="06" eyebrow="About">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <Reveal className="col-span-12 lg:col-span-7">
          <div className="border-l-2 border-copper pl-8">
            <p className="measure text-[length:var(--text-h3)] leading-snug text-ink">
              Spanex Engineering provides utility distribution drafting and
              engineering design support for electrical, telecom and fibre
              distribution networks.
            </p>
            <p className="measure mt-6 text-[1.05rem] leading-relaxed text-slate">
              We work in AutoCAD, GIS, landbase and SPIDAcalc, to your CAD
              standard and the governing code. Every drawing is checked against
              standards and structural analysis before it leaves our desk. We
              design distribution networks — we do not build them — so our whole
              practice is organised around one thing: accurate, documented,
              review-ready drawings.
            </p>
          </div>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-rule">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/work-cad.jpg"
              alt="A distribution drawing reviewed on screen at a drafting desk."
              className="h-full w-full object-cover [filter:grayscale(0.2)_contrast(1.02)]"
              loading="lazy"
              decoding="async"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-ink/10 mix-blend-multiply"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

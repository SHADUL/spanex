import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Media } from "@/components/ui/Media";
import { media } from "@/lib/media";

/**
 * About — a short, precise statement of what SPANEX does, paired with an
 * optimized image of drafting work for texture. No marketing, no history padding.
 */
export default function About() {
  return (
    <Section id="about" index="06" eyebrow="About">
      <div className="grid grid-cols-12 items-center gap-x-6 gap-y-12 lg:gap-x-16">
        <Reveal className="col-span-12 lg:col-span-7">
          <div className="border-l-2 border-copper pl-8">
            <p className="measure text-[length:var(--text-h3)] font-medium leading-snug tracking-[-0.01em] text-ink">
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

        <Media
          src={media.workCad.src}
          alt={media.workCad.alt}
          ratio="16 / 11"
          className="col-span-12 lg:col-span-5"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
    </Section>
  );
}

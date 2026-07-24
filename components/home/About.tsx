import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

/**
 * About — a short, precise statement of what SPANEX does. No marketing, no
 * people, no history padding. Copper left rule for emphasis.
 */
export default function About() {
  return (
    <Section id="about" index="06" eyebrow="About">
      <Reveal className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 border-l-2 border-copper pl-8 lg:col-span-9">
          <p className="measure text-[length:var(--text-h3)] leading-snug text-ink">
            Spanex Engineering provides utility distribution drafting and
            engineering design support for electrical, telecom and fibre
            distribution networks.
          </p>
          <p className="measure mt-6 text-[1.05rem] leading-relaxed text-slate">
            We work in AutoCAD, GIS, landbase and SPIDAcalc, to your CAD standard
            and the governing code. Every drawing is checked against standards and
            structural analysis before it leaves our desk. We design distribution
            networks — we do not build them — so our whole practice is organised
            around one thing: accurate, documented, review-ready drawings.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

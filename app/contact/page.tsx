import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Hairline } from "@/components/Hairline";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start with the ten-pole pilot. Send your structures, standards and load cases; we return SPIDAcalc models, capacity results and make-ready notes within 48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        titleLines={[
          <>Send us ten poles.</>,
          <>
            See the work <span className="text-copper">first</span>.
          </>,
        ]}
        standfirst="Tell us what you need produced and to which standards. We reply the same business day with scope and next steps — no forms behind forms, no follow-up sequence."
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Hairline />
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10 md:py-16">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          {/* Form */}
          <div className="col-span-12 lg:col-span-7">
            <ContactForm />
          </div>

          {/* Pilot restated */}
          <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Reveal className="border-l-2 border-copper pl-8">
              <span className="eyebrow text-copper">The pilot</span>
              <p className="mt-5 font-[family-name:var(--font-display)] text-[length:var(--text-h3)] font-semibold leading-tight text-ink">
                Ten poles. 48 hours. Free.
              </p>
              <p className="measure mt-5 text-[0.98rem] leading-relaxed text-slate">
                Send ten structures with your standards and load cases. You get
                SPIDAcalc models, capacity results and make-ready notes back
                within 48 hours, at no cost. Judge the work before you commit to
                anything further.
              </p>

              <div className="mt-8 border-t border-rule pt-6">
                <span className="eyebrow block">Direct</span>
                <a
                  href="mailto:admin@spanexengineering.com"
                  className="link-wipe mt-2 block font-[family-name:var(--font-mono)] text-[0.85rem] tracking-[0.06em] text-ink"
                >
                  admin@spanexengineering.com
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}

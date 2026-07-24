import Hero from "@/components/Hero";
import Services from "@/components/home/Services";
import Workflow from "@/components/home/Workflow";
import Software from "@/components/home/Software";
import WhyChoose from "@/components/home/WhyChoose";
import Standards from "@/components/home/Standards";
import About from "@/components/home/About";
import PilotOffer from "@/components/home/PilotOffer";
import { ImageBand } from "@/components/ImageBand";
import { SectionRule } from "@/components/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionRule />
      <Services />
      <SectionRule />
      <Workflow />
      <SectionRule />
      <Software />
      <SectionRule />
      <WhyChoose />
      <ImageBand
        src="/images/pole-network.jpg"
        alt="Overhead distribution pole with crossarm, insulators and conductors against a clear sky."
        eyebrow="The network"
        title="Every line we draw ends up on a real structure."
        note="Pole framing, guying and conductor — we design to what actually gets built, and to the code that governs it."
      />
      <Standards />
      <SectionRule />
      <About />
      <PilotOffer />
    </>
  );
}

import Hero from "@/components/Hero";
import Services from "@/components/home/Services";
import Workflow from "@/components/home/Workflow";
import Software from "@/components/home/Software";
import WhyChoose from "@/components/home/WhyChoose";
import Standards from "@/components/home/Standards";
import About from "@/components/home/About";
import PilotOffer from "@/components/home/PilotOffer";
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
      <SectionRule />
      <Standards />
      <SectionRule />
      <About />
      <PilotOffer />
    </>
  );
}

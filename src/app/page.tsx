import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import StatsBar from "@/components/StatsBar/StatsBar";
import CorePhilosophy from "@/components/CorePhilosophy/CorePhilosophy";
import OperationalClarity from "@/components/OperationalClarity/OperationalClarity";
import Capabilities from "@/components/Capabilities/Capabilities";
import Partnership from "@/components/Partnership/Partnership";
import ContactSection from "@/components/ContactSection/ContactSection";
import FAQ from "@/components/FAQ/FAQ";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <CorePhilosophy />
        <OperationalClarity />
        <Capabilities />
        <Partnership />
        <ContactSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

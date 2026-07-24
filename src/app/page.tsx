import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import ToggleDemo from "@/components/ToggleDemo";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <ToggleDemo />
        <Showcase />
        <Testimonials />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}

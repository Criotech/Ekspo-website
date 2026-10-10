import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AppsStrip } from "@/components/AppsStrip";
import { Features } from "@/components/Features";
import { Steps } from "@/components/Steps";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AppsStrip />
        <Features />
        <Steps />
        <Pricing />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

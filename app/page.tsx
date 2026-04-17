import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Marquee from "@/components/home/Marquee";
import WhyUs from "@/components/home/WhyUs";
import AISection from "@/components/home/AISection";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <Marquee />
        <WhyUs />
        <AISection />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

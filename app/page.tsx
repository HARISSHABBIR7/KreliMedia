import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import Services from "@/components/site/Services";
import WhyUs from "@/components/site/WhyUs";
import Process from "@/components/site/Process";
import Portfolio from "@/components/site/Portfolio";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import Faq from "@/components/site/Faq";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col overflow-x-hidden">
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

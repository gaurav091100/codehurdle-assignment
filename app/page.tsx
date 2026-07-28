import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ProductOverview } from "@/components/sections/ProductOverview";
import { Features } from "@/components/sections/Features";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ProductOverview />
        <Features />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

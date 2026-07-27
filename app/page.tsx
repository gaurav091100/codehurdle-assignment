import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ProductOverview } from "@/components/sections/ProductOverview";
import { Features } from "@/components/sections/Features";
import { WhyChoose } from "@/components/sections/WhyChoose";
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
      </main>
      <Footer />
    </>
  );
}

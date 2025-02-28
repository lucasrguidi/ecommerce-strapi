import { Footer } from "../../_components/footer";
import { Navbar } from "../../_components/nav-bar";
import { BestSellersSection } from "./_components/best-sellers-section";
import { BrandsSection } from "./_components/brands-section";

import { FaqSection } from "./_components/faq-section";
import { HeroSection } from "./_components/hero-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <BestSellersSection />
      <FaqSection />
      <Footer />
    </>
  );
}

import { BestSellersSection } from './_components/best-sellers-section';
import { CategoriesSection } from './_components/categories-section';
import { DealCtaSection } from './_components/deal-cta-section';
import { FaqSection } from './_components/faq-section';
import { Footer } from './_components/footer';
import { HeroSection } from './_components/hero-section';
import { Navbar } from './_components/nav-bar';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <BestSellersSection />
      <DealCtaSection />
      <FaqSection />
      <Footer />
    </>
  );
}

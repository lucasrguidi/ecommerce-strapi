import { Footer } from "../../_components/footer";
import { Navbar } from "../../_components/nav-bar";
import { BrandsSection } from "./_components/brands-section";
import { CategoriesSection } from "./_components/categories-section";
import { FeaturedSection } from "./_components/featured-section";

import { HeroSection } from "./_components/hero-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <CategoriesSection />
      <FeaturedSection />

      <Footer />
    </>
  );
}

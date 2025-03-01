import { BrandsSection } from "./_components/brands-section";
import { CategoriesSection } from "./_components/categories-section";
import { FeaturedSection } from "./_components/featured-section";

import { HeroSection } from "./_components/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <CategoriesSection />
      <FeaturedSection />
    </>
  );
}

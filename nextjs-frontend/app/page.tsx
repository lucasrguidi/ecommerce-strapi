import { CategoriesSection } from "./_components/categories-section";
import { HeroSection } from "./_components/hero-section";
import { Navbar } from "./_components/nav-bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
    </>
  );
}

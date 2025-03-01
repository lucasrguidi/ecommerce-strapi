import { getFeaturedProducts } from "@/app/services/get-featured-products";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FeaturedProductsCarousel } from "./featured-products-carousel";

export async function FeaturedSection() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <section className="bg-background py-8 md:py-12">
      <div className="container mx-auto flex flex-col gap-12 px-6 md:gap-16">
        <div className="mx-auto flex max-w-xl flex-col gap-4 text-center md:gap-5">
          <h2 className="text-foreground font-heading text-3xl font-bold md:text-4xl">
            Destaques Exclusivos
          </h2>
          <p className="text-muted-foreground text-base">
            Peças selecionadas à mão das grifes mais prestigiadas do mundo.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <FeaturedProductsCarousel featuredProducts={featuredProducts} />
          <Button variant={"link"}>
            Ver todos os produtos
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

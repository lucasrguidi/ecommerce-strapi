"use client";

import ProductCard from "@/app/_components/product-card";
import Product from "@/app/types/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface FeaturedProductsCarouselProps {
  featuredProducts: Product[];
}

export function FeaturedProductsCarousel({ featuredProducts }: FeaturedProductsCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {featuredProducts.map((product) => {
          return (
            <CarouselItem key={product.id} className="md:basis-1/3">
              <ProductCard product={product} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

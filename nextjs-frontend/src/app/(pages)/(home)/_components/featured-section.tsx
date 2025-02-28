import { getBrands } from "@/app/services/get-brands";
import BrandCard from "../../../_components/brand-card";
import { getFeaturedProducts } from "@/app/services/get-featured-products";
import ProductCard from "@/app/_components/product-card";

export async function FeaturedSection() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <section className="bg-background py-8 md:py-12">
      <div className="container mx-auto flex flex-col gap-12 px-6 md:gap-16">
        <div className="mx-auto flex max-w-xl flex-col gap-4 text-center md:gap-5">
          <h2 className="text-foreground font-heading text-3xl font-bold md:text-4xl">
            Grifes que Inspiram
          </h2>
          <p className="text-muted-foreground text-base">
            Peças icônicas das marcas mais renomadas, selecionadas para você.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          {featuredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}

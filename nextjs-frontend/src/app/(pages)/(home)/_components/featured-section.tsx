import Product from "../../../types/product";
import ProductCard from "../../../_components/product-card";
import { API_ENDPOINTS } from "@/app/constants/apiEndpoints";

export async function FeaturedSection() {
  const products: Product[] = await fetch(
    `${API_ENDPOINTS.BASE_URL}/products?populate[images][fields][0]=url`,
  )
    .then((res) => res.json())
    .then(({ data }) => data);

  return (
    <section className="bg-background py-8 md:py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12">
          <div className="flex max-w-xl flex-col gap-4">
            <p className="text-muted-foreground text-sm font-semibold md:text-base">
              Os Mais Amados
            </p>
            <h2 className="text-foreground text-3xl font-bold md:text-4xl">
              Nossos produtos mais vendidos
            </h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, quibusdam non? Modi
              alias, quam, consequatur omnis iusto cum quo vel quod autem soluta totam mollitia?
              Officia fugiat pariatur rem dicta.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

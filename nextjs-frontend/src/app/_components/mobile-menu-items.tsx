import Link from "next/link";
import { getBrands } from "../services/get-brands";
import { getCategories } from "../services/get-categories";

export async function MobileMenuItems() {
  const brands = await getBrands();
  const categories = await getCategories();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Marcas</h3>
        <div className="flex flex-col">
          {brands.map((brand) => (
            <Link key={brand.id} href={`/search?brand=${brand.slug}`}>
              <span className="text-muted-foreground text-lg font-light hover:underline hover:underline-offset-2">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">Categorias</h3>
        <div className="flex flex-col">
          {categories.map((category) => (
            <Link key={category.id} href={`/search?category=${category.slug}`}>
              <span className="text-muted-foreground text-lg font-light hover:underline hover:underline-offset-2">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

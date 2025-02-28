import Category from "../../../types/category";
import CategoryCard from "../../../_components/category-card";
import { API_ENDPOINTS } from "@/app/constants/apiEndpoints";

export async function CategoriesSection() {
  const categories: Category[] = await fetch(
    `${API_ENDPOINTS.BASE_URL}/categories?populate[image][fields][0]=url`,
  )
    .then((res) => res.json())
    .then(({ data }) => data);

  return (
    <section className="bg-background py-8 md:py-12">
      <div className="container mx-auto flex flex-col gap-12 px-6 md:gap-16">
        <div className="mx-auto flex max-w-xl flex-col gap-4 text-center md:gap-5">
          <h2 className="text-foreground font-luxury text-3xl font-bold md:text-4xl">
            Coleções em Destaque
          </h2>
          <p className="text-muted-foreground text-base">
            Peças cuidadosamente escolhidas das mais renomadas grifes internacionais.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          {categories.map((category) => {
            return <CategoryCard key={category.id} category={category} />;
          })}
        </div>
      </div>
    </section>
  );
}

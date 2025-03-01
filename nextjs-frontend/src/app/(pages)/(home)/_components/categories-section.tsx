import CategoryCard from "@/app/_components/category-card";
import { getCategories } from "@/app/services/get-categories";

export async function CategoriesSection() {
  const categories = await getCategories();
  console.log("🚀 ~ CategoriesSection ~ categories:", categories);

  return (
    <section className="bg-muted py-8 md:py-12">
      <div className="container mx-auto flex flex-col gap-12 px-6 md:gap-16">
        <div className="mx-auto flex max-w-xl flex-col gap-4 text-center md:gap-5">
          <h2 className="text-foreground font-heading text-3xl font-bold md:text-4xl">
            Explore por Categoria
          </h2>
          <p className="text-muted-foreground text-base">
            Descubra o luxo em cada detalhe, organizado para você.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          {categories.map((categorie) => {
            return <CategoryCard key={categorie.id} category={categorie} />;
          })}
        </div>
      </div>
    </section>
  );
}

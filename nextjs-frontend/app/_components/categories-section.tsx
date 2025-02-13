import Category from '../types/category';
import CategoryCard from './category-card';

export async function CategoriesSection() {
  const categories: Category[] = await fetch(
    `${process.env.API_URL}/categories?populate[image][fields][0]=url`,
  )
    .then((res) => res.json())
    .then(({ data }) => data);

  return (
    <section className="bg-background py-8 md:py-12">
      <div className="container mx-auto flex flex-col gap-12 px-6 md:gap-16">
        <div className="mx-auto flex max-w-xl flex-col gap-4 text-center md:gap-5">
          <h2 className="text-foreground text-3xl font-bold md:text-4xl">Explore por categoria</h2>
          <p className="text-muted-foreground text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo asperiores incidunt sunt
            esse dignissimos eius iste culpa nihil voluptas obcaecati illo, nostrum soluta? Dolor
            magni iure, molestias maxime minima dolore.
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

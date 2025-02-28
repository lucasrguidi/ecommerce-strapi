import Image from "next/image";
import Link from "next/link";
import { API_ENDPOINTS } from "../constants/apiEndpoints";
import Category from "../types/category";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const imgUrl = `${API_ENDPOINTS.IMAGE_URL}${category.image.url}`;

  return (
    <div key={category.id} className="flex flex-col">
      <Link
        href="/"
        className="group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl"
      >
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden">
          <Image
            src={imgUrl}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="100"
            priority
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70" />
          <div className="text-foreground relative flex w-full justify-center p-6">
            <h3 className="font-heading bg-background/80 mb-2 w-full p-2 text-center text-2xl">
              {category.name}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

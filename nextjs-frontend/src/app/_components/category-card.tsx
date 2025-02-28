import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Category from "../types/category";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const imgUrl = `${API_ENDPOINTS.IMAGE_URL}${category.image.url}`;

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imgUrl}
            alt={category.name}
            fill
            sizes="100"
            className="h-full w-full rounded-xl object-cover"
            priority
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-foreground text-base font-semibold md:text-lg">{category.name}</h3>
        <Button variant="secondary">
          Conheça a Coleção
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

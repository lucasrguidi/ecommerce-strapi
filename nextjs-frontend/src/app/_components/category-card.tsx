import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Category from "../types/category";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const imgUrl = `${process.env.API_IMAGE_URL}${category.image.url}`;

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imgUrl}
            alt={category.name}
            fill
            className="h-full w-full rounded-xl object-cover"
            priority
          />
        </AspectRatio>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-foreground text-base font-semibold md:text-lg">{category.name}</h3>
        <Button variant="secondary">
          Ver produtos
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

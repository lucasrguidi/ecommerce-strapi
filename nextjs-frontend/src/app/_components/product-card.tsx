import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { API_ENDPOINTS } from "../constants/apiEndpoints";
import Product from "../types/product";
import { currencyFormatter } from "../utils/currency-formatter";
import AddToCartButton from "./add-to-cart-button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imgUrl = `${API_ENDPOINTS.IMAGE_URL}${product.images[0].url}`;

  return (
    <div key={product.id} className="flex flex-1 flex-col">
      <div className="group flex h-full flex-col overflow-hidden">
        <Link href={`/product/${product.slug}`} className="cursor-pointer">
          <div className="relative flex aspect-[4/3] flex-col overflow-hidden">
            <Image
              src={imgUrl}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              fill
              sizes="100"
              priority
            />
            <div className="group absolute inset-0 bg-black/30 bg-gradient-to-t to-transparent opacity-80" />
          </div>
        </Link>
        <div className="text-foreground bg-background flex w-full flex-1 flex-col gap-4 p-4">
          <div className="flex grow flex-col">
            <h2 className="text-primary text-md font-bold">{product.brand.name}</h2>
            <Link
              href={`/product/${product.slug}`}
              className="cursor-pointer hover:underline hover:underline-offset-4"
            >
              <h3 className="font-heading text-xl">{product.name}</h3>
            </Link>
          </div>
          <h4 className="text-foreground text-lg font-bold md:text-base">
            {currencyFormatter(product.price)}
          </h4>
          <AddToCartButton product={product} className="mt-auto" />
          <div className="flex justify-between">
            <Button variant={"outline"}>
              <Heart />
            </Button>
            <Button variant={"link"}>Ver detalhes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

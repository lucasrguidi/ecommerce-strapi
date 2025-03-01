import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { API_ENDPOINTS } from "../constants/apiEndpoints";
import Product from "../types/product";
import { currencyFormatter } from "../utils/currency-formatter";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imgUrl = `${API_ENDPOINTS.IMAGE_URL}${product.images[0].url}`;

  return (
    <div key={product.id} className="flex flex-col">
      <div className="group flex flex-col overflow-hidden">
        <div className="relative flex aspect-[4/3] flex-col overflow-hidden">
          <Link href={`/products/${product.slug}`} className="cursor-pointer">
            <Image
              src={imgUrl}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              fill
              sizes="100"
              priority
            />
            <div className="grou absolute inset-0 bg-black/30 bg-gradient-to-t to-transparent opacity-80" />
          </Link>
        </div>
        <div className="text-foreground bg-background flex w-full flex-col gap-4 p-4">
          <div className="flex flex-col">
            <h2 className="text-primary text-md font-bold">{product.brand.name}</h2>
            <Link
              href={`/products/${product.slug}`}
              className="cursor-pointer hover:underline hover:underline-offset-4"
            >
              <h3 className="font-heading text-xl">{product.name}</h3>
            </Link>
          </div>
          <h4 className="text-foreground text-lg font-bold md:text-base">
            {currencyFormatter(product.price)}
          </h4>
          <Button>
            <ShoppingCart />
            Adicionar ao carrinho
          </Button>
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

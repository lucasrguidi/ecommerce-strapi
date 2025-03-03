import { API_ENDPOINTS } from "@/app/constants/apiEndpoints";
import Product from "@/app/types/product";
import { currencyFormatter } from "@/app/utils/currency-formatter";
import Image from "next/image";
import Link from "next/link";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProduts({ products }: RelatedProductsProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-foreground text-2xl font-medium md:text-3xl">
        Você Também Pode Gostar
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`} className="group block">
            <div className="relative mb-4 aspect-square overflow-hidden">
              <Image
                src={`${API_ENDPOINTS.IMAGE_URL}${product.images[0].url}`}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
            </div>
            <div className="space-y-2">
              <p className="text-primary text-sm font-medium">{product.brand.name}</p>
              <h3 className="font-heading text-foreground text-lg font-medium">{product.name}</h3>
              <p className="text-foreground font-semibold">{currencyFormatter(product.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

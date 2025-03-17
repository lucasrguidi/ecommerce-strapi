import { getProduct } from "@/app/services/get-product";
import { getProducts } from "@/app/services/get-products";
import { currencyFormatter } from "@/app/utils/currency-formatter";
import { getRandomProducts } from "@/app/utils/get-random-products";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Share2, Shield, Truck } from "lucide-react";
import Link from "next/link";
import BackToShopping from "./_components/back-to-shopping";
import ProductImages from "./_components/product-images";
import RelatedProduts from "./_components/related-products";
import AddToCartButton from "@/app/_components/add-to-cart-button";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const slug = (await params).slug;

  const product = await getProduct(slug);

  const relatedProducts = getRandomProducts((await getProducts()).products, 3);

  return (
    <div className="bg-background min-h-screen py-4 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <BackToShopping />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Images */}
          <ProductImages productName={product.name} images={product.images} />

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Link
                href={`/search?brand=${product.brand.slug}`}
                className="text-primary text-md font-bold hover:underline hover:underline-offset-2"
              >
                {product.brand.name}
              </Link>
              <h1 className="font-heading text-foreground text-3xl font-medium tracking-tight md:text-4xl">
                {product.name}
              </h1>
              <p className="text-foreground text-2xl font-semibold">
                {currencyFormatter(product.price)}
              </p>
              <p className="text-foreground leading-relaxed">{product.description}</p>
            </div>

            <Separator />

            <div className="flex flex-col gap-4">
              {product.available ? (
                <p className="flex items-center font-medium text-green-600">
                  <span className="mr-2 h-2 w-2 rounded-full bg-green-600" />
                  Em estoque
                </p>
              ) : (
                <p className="flex items-center font-medium text-red-600">
                  <span className="mr-2 h-2 w-2 rounded-full bg-red-600" />
                  Esgotado
                </p>
              )}

              {product.available ? (
                <div className="flex flex-col gap-4">
                  {/* <Button
                  onClick={handleAddToCart}
                  >
                    Adicionar ao carrinho
                  </Button> */}
                  <AddToCartButton product={product} />
                  <Button variant="outline">
                    <Heart className="mr-2 h-5 w-5" />
                    Adicionar à Lista de Desejos
                  </Button>
                </div>
              ) : (
                <Button

                // onClick={handleAddToCart}
                >
                  Avise me quando estiver disponível
                </Button>
              )}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  variant="outline"
                  className="text-foreground hover:underline hover:underline-offset-2"
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Compartilhar
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
              <div className="text-foreground flex items-center space-x-3 text-sm">
                <Truck className="text-primary h-5 w-5" />
                <span>Frete Cortesia</span>
              </div>
              <div className="text-foreground flex items-center space-x-3 text-sm">
                <Shield className="text-primary h-5 w-5" />
                <span>Garantia de Originalidade</span>
              </div>
            </div>
          </div>
        </div>

        <RelatedProduts products={relatedProducts} />
      </div>
    </div>
  );
}

import { getProduct } from "@/app/services/get-product";
import { currencyFormatter } from "@/app/utils/currency-formatter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Share2, Shield, Truck } from "lucide-react";
import Link from "next/link";
import BackToShopping from "./_components/back-to-shopping";
import ProductImages from "./_components/product-images";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const slug = (await params).slug;

  const product = await getProduct(slug);

  return (
    <div className="bg-background min-h-screen py-4 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8">
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
                  <Button
                  // onClick={handleAddToCart}
                  >
                    Adicionar ao carrinho
                  </Button>
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
              <div className="text-luxury-text flex items-center space-x-3 text-sm">
                <Truck className="text-luxury-gold h-5 w-5" />
                <span>Frete Cortesia</span>
              </div>
              <div className="text-luxury-text flex items-center space-x-3 text-sm">
                <Shield className="text-luxury-gold h-5 w-5" />
                <span>Garantia de Originalidade</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {/* <section className="mt-24">
            <h2 className="font-playfair text-2xl md:text-3xl font-medium mb-8 text-luxury">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.relatedProducts.map((related) => (
                <Link key={related.id} to={`/product/${related.id}`} className="block group">
                  <div className="relative aspect-square overflow-hidden mb-4">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-luxury-gold font-medium">{related.brand}</p>
                    <h3 className="font-playfair text-lg font-medium text-luxury">{related.name}</h3>
                    <p className="text-luxury-text font-semibold">{related.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section> */}
      </div>
    </div>
  );
}

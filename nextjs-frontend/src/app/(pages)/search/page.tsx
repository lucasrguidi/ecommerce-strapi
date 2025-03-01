import ProductCard from "@/app/_components/product-card";
import { getProducts } from "@/app/services/get-products";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BackToShopping from "../product/[slug]/_components/back-to-shopping";
import Link from "next/link";
import SearchAndFilter from "./_components/search-and-filter";
import { getBrands } from "@/app/services/get-brands";
import { getCategories } from "@/app/services/get-categories";

type SearchParams = Promise<{
  page?: string;
  search?: string;
  brand?: string;
  category?: string;
  available?: string;
}>;

export default async function SearchPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  const currentPage = Number(searchParams.page) || 1;
  const { products, pagination } = await getProducts(currentPage, 9, {
    search: searchParams.search,
    brand: searchParams.brand,
    category: searchParams.category,
    available: searchParams.available,
  });

  const brands = await getBrands();
  const categories = await getCategories();

  return (
    <section className="bg-background min-h-screen py-8 md:py-12">
      <div className="container mx-auto flex flex-col gap-12 px-6 md:gap-8">
        <SearchAndFilter brands={brands} categories={categories} initialValues={searchParams} />

        {products.length === 0 ? (
          <div className="py-16 text-center">
            <h2 className="font-playfair mb-4 text-2xl font-medium">Nenhum produto encontrado</h2>
            <p className="text-foreground mb-8">Tente ajustar sua busca ou filtros</p>
            <BackToShopping />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  asChild={currentPage > 1}
                  disabled={currentPage === 1}
                >
                  {currentPage > 1 ? (
                    <Link href={`?page=${currentPage - 1}`} scroll={false}>
                      <ChevronLeft className="h-4 w-4" />
                    </Link>
                  ) : (
                    <ChevronLeft className="h-4 w-4" />
                  )}
                </Button>

                {Array.from({ length: pagination.pageCount }, (_, i) => i + 1).map((pageNumber) => (
                  <Button
                    key={pageNumber}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    asChild
                  >
                    <Link href={`?page=${pageNumber}`} scroll={false}>
                      {pageNumber}
                    </Link>
                  </Button>
                ))}

                <Button
                  variant="outline"
                  size="icon"
                  asChild={currentPage < pagination.pageCount}
                  disabled={currentPage === pagination.pageCount}
                >
                  {currentPage < pagination.pageCount ? (
                    <Link href={`?page=${currentPage + 1}`} scroll={false}>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

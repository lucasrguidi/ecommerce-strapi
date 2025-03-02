"use client";
import { Brand } from "@/app/types/brand";
import Category from "@/app/types/category";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { useDebounce } from "use-debounce";

interface SearchAndFilterProps {
  brands: Brand[];
  categories: Category[];
  initialValues: Record<string, string>;
}

export default function SearchAndFilter({
  brands,
  categories,
  initialValues,
}: SearchAndFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(initialValues.search || "");
  const [debouncedSearch] = useDebounce(search, 500);

  const updateParams = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    params.delete("page");
    router.replace(`${pathname}?${params.toString()}`);
  };

  const cleanFilters = () => {
    updateParams({
      search: "",
      brand: "",
      category: "",
      available: "",
    });
  };

  useEffect(() => {
    updateParams({ search: debouncedSearch });
  }, [debouncedSearch]);

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Buscar por produto"
            className="w-full border pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </Button>
          </SheetTrigger>
          <SheetContent className="gap-4">
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium">Marca</h3>
                <Select
                  value={initialValues.brand || "all"}
                  onValueChange={(value) => updateParams({ brand: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar marca" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as marcas</SelectItem>
                    {brands.map((brand) => (
                      <SelectItem key={brand.id} value={brand.slug}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium">Categoria</h3>
                <Select
                  value={initialValues.category || "all"}
                  onValueChange={(value) => updateParams({ category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as categorias</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-medium">Disponibilidade</h3>
                <Select
                  value={initialValues.available || "all"}
                  onValueChange={(value) => updateParams({ available: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="available">Em estoque</SelectItem>
                    <SelectItem value="unavailable">Indisponível</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <Button onClick={cleanFilters}>Limpar filtros</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-4">
        {initialValues.brand && (
          <Badge
            className="flex cursor-pointer items-center"
            onClick={() => updateParams({ brand: "" })}
          >
            {brands.find((brand) => brand.slug === initialValues.brand)?.name}
            <X className="size-4" />
          </Badge>
        )}
        {initialValues.category && (
          <Badge
            className="flex cursor-pointer items-center"
            onClick={() => updateParams({ category: "" })}
          >
            {categories.find((category) => category.slug === initialValues.category)?.name}
            <X className="size-4" />
          </Badge>
        )}
        {initialValues.available && (
          <Badge
            className="flex cursor-pointer items-center"
            onClick={() => updateParams({ available: "" })}
          >
            {initialValues.available === "available" ? "Em estoque" : "Indisponível"}
            <X className="size-4" />
          </Badge>
        )}
      </div>
    </>
  );
}

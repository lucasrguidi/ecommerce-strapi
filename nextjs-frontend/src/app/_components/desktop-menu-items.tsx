import Link from "next/link";
import { getBrands } from "../services/get-brands";
import { getCategories } from "../services/get-categories";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export async function DesktopMenuItems() {
  const brands = await getBrands();
  const categories = await getCategories();

  return (
    <>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Marcas</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-6 p-2 md:w-[200px] lg:w-[400px] lg:grid-cols-2">
            {brands.map((brand) => (
              <div key={brand.name} className="space-y-2">
                <NavigationMenuLink asChild>
                  <Link href="#" className="text-sm leading-none font-medium">
                    {brand.name}
                  </Link>
                </NavigationMenuLink>
              </div>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-2 md:w-[200px] lg:w-[400px] lg:grid-cols-2">
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="text-sm leading-none font-medium hover:underline hover:underline-offset-2"
                  >
                    {category.name}
                  </Link>
                </NavigationMenuLink>
              </div>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </>
  );
}

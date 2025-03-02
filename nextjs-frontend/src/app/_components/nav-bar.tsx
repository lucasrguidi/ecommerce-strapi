import { Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/custom/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileMenuItems } from "./mobile-menu-items";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { DesktopMenuItems } from "./desktop-menu-items";
import { NavBarSearch } from "./nav-bar-search";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import CartButton from "./cart-button";

export default function NavBar() {
  return (
    <header className="bg-popover sticky top-0 isolate z-50 py-3.5 md:py-4">
      <div className="container m-auto flex gap-4 px-4 md:px-6">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[300px] overflow-y-auto p-4 sm:w-[400px]">
            <div className="flex flex-col gap-2">
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription className="text-muted-foreground">
                Peças de luxo cuidadosamente curadas, das marcas mais desejadas do planeta.
              </SheetDescription>
            </div>
            <nav className="flex h-full max-h-[calc(100vh-4rem)] flex-col justify-between gap-6 overflow-y-auto pb-6 text-lg font-medium">
              <MobileMenuItems />
              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 py-1"
                >
                  <User className="h-4 w-4" />
                  <span>Conta</span>
                </Link>
                <Link
                  href=""
                  className="text-muted-foreground hover:text-foreground flex items-center gap-2 py-1"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Carrinho</span>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <DesktopMenuItems />
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search and Account */}
        <div className="ml-auto flex items-center gap-2">
          <NavBarSearch />
          <CartButton />
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

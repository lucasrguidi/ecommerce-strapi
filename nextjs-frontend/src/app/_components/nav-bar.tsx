"use client";

import { Logo } from "@/components/custom/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CartIcon } from "./cart-icon";
import { ThemeToggle } from "@/components/custom/theme-toggle";
import { AuthDialog } from "./auth/auth-dialog";

const MENU_ITEMS = [
  { label: "Eletrônicos", href: "#" },
  { label: "Roupas", href: "#" },
  { label: "Casa e Decoração", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button variant="link" className="w-full md:w-auto">
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 py-3.5 md:py-4">
      <div className="container m-auto px-6">
        {/* Main navbar row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex">
            <NavMenuItems />
          </div>

          {/* Mobile cart button */}
          <div className="flex gap-3 md:hidden">
            <CartIcon />
          </div>

          {/* Desktop cart button */}
          <div className="hidden gap-3 md:flex">
            <CartIcon />
            <ThemeToggle />
            <AuthDialog />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="flex flex-col items-center gap-2.5 pt-4 md:hidden">
            <NavMenuItems />
            <ThemeToggle />
            <Separator className="my-2" />
          </div>
        )}
      </div>
    </nav>
  );
}

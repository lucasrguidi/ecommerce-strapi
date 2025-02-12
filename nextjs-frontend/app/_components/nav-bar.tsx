"use client";

import { Logo } from "@/components/custom/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./cart-icon";

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
  <div className={`flex flex-col md:flex-row gap-1 ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => (
      <Link key={label} href={href}>
        <Button variant="ghost" className="w-full md:w-auto">
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
    <nav className="sticky top-0 z-50 bg-background py-3.5 md:py-4 isolate">
      <div className="container px-6 m-auto">
        {/* Main navbar row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <Logo />
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex">
              <NavMenuItems />
            </div>
          </div>

          {/* Mobile cart button */}
          <div className="flex md:hidden gap-3">
            <CartIcon />
          </div>

          {/* Desktop cart button */}
          <div className="hidden md:flex gap-3">
            <CartIcon />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="size-9 flex items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-2.5 pt-4">
            <NavMenuItems />
            <Separator className="my-2" />
          </div>
        )}
      </div>
    </nav>
  );
}

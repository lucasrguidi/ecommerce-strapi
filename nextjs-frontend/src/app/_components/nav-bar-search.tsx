"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";

export function NavBarSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className={cn("relative", isSearchOpen ? "flex" : "hidden md:flex")}>
        <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
        <Input
          type="search"
          placeholder="Search products..."
          className="w-[200px] pl-8 md:w-[200px] lg:w-[300px]"
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
    </>
  );
}

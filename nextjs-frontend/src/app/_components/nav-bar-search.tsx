"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export function NavBarSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const router = useRouter();

  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
    router.push("/search?search=" + debouncedSearch);
  }, [debouncedSearch]);

  return (
    <>
      <div className={cn("relative", isSearchOpen ? "flex" : "hidden md:flex")}>
        <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
        <Input
          type="search"
          placeholder="Buscar"
          className="w-[200px] pl-8 md:w-[200px] lg:w-[300px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Buscar</span>
      </Button>
    </>
  );
}

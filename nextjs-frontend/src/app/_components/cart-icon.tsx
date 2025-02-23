import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export function CartIcon() {
  return (
    <Link href="#">
      <Button variant="ghost">
        <ShoppingCart />
        <Badge variant={"outline"}>5</Badge>
      </Button>
    </Link>
  );
}

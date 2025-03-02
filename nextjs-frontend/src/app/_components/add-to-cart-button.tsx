"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../stores/cart-store";
import Product from "../types/product";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addToCart } = useCartStore();

  return (
    <Button onClick={() => addToCart(product)} className={className}>
      <ShoppingCart />
      Adicionar ao carrinho
    </Button>
  );
}

"use client";

import { API_ENDPOINTS } from "@/app/constants/apiEndpoints";
import { useCartStore } from "@/app/stores/cart-store";
import { currencyFormatter } from "@/app/utils/currency-formatter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import BackToShopping from "../product/[slug]/_components/back-to-shopping";

export default function CartPage() {
  const { clearCart, items, removeFromCart, updateQuantity } = useCartStore();

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <section className="bg-background min-h-screen py-8 md:py-12">
      <div className="container mx-auto flex flex-col gap-12 px-6 md:gap-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="font-heading text-3xl font-medium">Carrinho de Compras</h1>
          {items.length > 0 && (
            <Button variant="link" onClick={clearCart} className="w-fit !pl-0">
              Limpar Carrinho
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col justify-center gap-4 py-12 text-center">
            <ShoppingBag className="text-foreground mx-auto h-12 w-12" />
            <h2 className="font-heading text-xl font-medium">Seu carrinho está vazio</h2>
            <p className="text-foreground">Explore peças exclusivas das marcas mais desejadas</p>
            <div className="mx-auto">
              <BackToShopping />
            </div>
          </div>
        ) : (
          <div className="flex w-full flex-col-reverse gap-8 md:flex-row">
            <div className="w-full md:w-2/3">
              <div className="g flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-popover dark:bg-muted flex gap-4 rounded-md p-4 shadow-sm"
                  >
                    <Image
                      src={`${API_ENDPOINTS.IMAGE_URL}${item.product.images[0].url}`}
                      alt={item.product.name}
                      className="h-24 w-24 rounded-md object-cover"
                      height={1000}
                      width={1000}
                    />
                    <div className="flex w-full flex-col gap-2 md:gap-1">
                      <p className="text-primary text-sm">{item.product.brand.name}</p>
                      <h3 className="font-heading text-lg font-medium">{item.product.name}</h3>
                      <p className="text-popover-foreground font-medium">
                        {currencyFormatter(item.product.price)}
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="link" onClick={() => removeFromCart(item.id)}>
                          Remover item
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <div className="bg-popover dark:bg-muted flex flex-col gap-4 rounded-md p-4 shadow-sm">
                <h2 className="font-heading text-xl font-medium">Detalhes da Sua Compra</h2>
                <div className="space-y-2">
                  {items.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="text-popover-foreground flex justify-between text-sm"
                      >
                        <span>{item.product.name}</span>
                        <span>
                          {item.quantity}x {currencyFormatter(item.product.price)}
                        </span>
                      </div>
                    );
                  })}

                  <Separator />
                  <div className="text-popover-foreground flex justify-between">
                    <span>Subtotal</span>
                    <span>{currencyFormatter(subtotal)}</span>
                  </div>
                  <div className="text-popover-foreground flex justify-between">
                    <span>Entrega</span>
                    <span>Cortesia</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>{currencyFormatter(total)}</span>
                  </div>
                </div>
                <Button className="w-full">Prosseguir para o Pagamento</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

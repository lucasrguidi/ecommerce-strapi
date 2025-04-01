"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CheckoutForm from "./_components/checkout-form";

import { useCartStore } from "@/app/stores/cart-store";
import { currencyFormatter } from "@/app/utils/currency-formatter";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import UseCart from "../cart/hooks/use-cart";
import { CheckoutSteps } from "./_components/checkout-steps";

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const { items } = useCartStore();

  const { subtotal, shippingTotal, total } = UseCart({ items });

  const steps = [
    { text: "Envio", value: "shipping" },
    { text: "Pagamento", value: "payment" },
    { text: "Revisão", value: "review" },
  ];
  return (
    <section className="bg-background min-h-screen py-8 md:py-12">
      <div className="container mx-auto flex flex-col gap-4 px-6 md:gap-4">
        <Link href="/cart" className="text-foreground flex items-center hover:underline">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Voltar ao carrinho
        </Link>

        <div className="flex flex-col gap-4">
          <h1 className="font-heading text-foreground text-3xl font-medium md:text-4xl">
            Concluir Pedido
          </h1>
          <p className="text-foreground">
            Finalize seu pedido informando os detalhes de envio e pagamento.
          </p>
        </div>

        <CheckoutSteps steps={steps} currentStep={currentStep} />

        <div className="flex flex-col items-start gap-4 md:flex-row md:gap-8">
          <CheckoutForm currentStep={currentStep} steps={steps} setCurrentStep={setCurrentStep} />
          <div className="bg-popover dark:bg-muted flex w-full flex-col gap-4 rounded-md p-4 shadow-sm md:w-1/3">
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
                <span>{shippingTotal == 0 ? "Cortesia" : currencyFormatter(shippingTotal)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>{currencyFormatter(total)}</span>
              </div>
              <div className="text-foreground mt-6 text-sm">
                <p>Deseja modificar seu carrinho?</p>
                <Link href="/cart" className="text-primary hover:underline">
                  Voltar ao carrinho
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CheckoutForm from "./_components/checkout-form";

import { currencyFormatter } from "@/app/utils/currency-formatter";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const mockCartItems = [
  {
    id: "1",
    name: "Classic Leather Bag",
    brand: "Louis Vuitton",
    price: 2850,
    image: "https://images.unsplash.com/photo-1549439602-43ebca2327af",
    quantity: 1,
  },
];

export default function CheckoutPage() {
  return (
    <section className="bg-background min-h-screen py-8 md:py-12">
      <div className="container mx-auto flex flex-col gap-12 px-6 md:gap-4">
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

        <div className="flex items-start gap-8">
          <CheckoutForm />
          <div className="bg-popover dark:bg-muted flex w-full flex-col gap-4 rounded-md p-4 shadow-sm md:w-1/3">
            <h2 className="font-heading text-xl font-medium">Detalhes da Sua Compra</h2>
            <div className="space-y-2">
              {mockCartItems.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="text-popover-foreground flex justify-between text-sm"
                  >
                    <span>{item.name}</span>
                    <span>
                      {item.quantity}x {currencyFormatter(item.price)}
                    </span>
                  </div>
                );
              })}

              <Separator />
              <div className="text-popover-foreground flex justify-between">
                <span>Subtotal</span>
                <span>{currencyFormatter(222)}</span>
              </div>
              <div className="text-popover-foreground flex justify-between">
                <span>Entrega</span>
                <span>Cortesia</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>{currencyFormatter(222)}</span>
              </div>
            </div>
            <Button className="w-full">Prosseguir para o Pagamento</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

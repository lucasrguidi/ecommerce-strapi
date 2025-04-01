import { Separator } from "@/components/ui/separator";

import type { CheckoutFormValues } from "./checkout-form";
import { currencyFormatter } from "@/app/utils/currency-formatter";
import { useCartStore } from "@/app/stores/cart-store";
import UseCart from "../../cart/hooks/use-cart";
import { useMemo } from "react";

interface OrderReviewProps {
  formData: CheckoutFormValues;
}

export function OrderReview({ formData }: OrderReviewProps) {
  const { shipping, payment } = formData;

  const maskedCardNumber = payment.card_number
    ? `•••• •••• •••• ${payment.card_number.trim().slice(-4)}`
    : "";

  const { items } = useCartStore();

  const { subtotal, shippingTotal, total } = UseCart({ items });

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-xl font-medium">Revisão do Pedido</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-heading mb-2 text-lg font-medium">Items</h3>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-muted-foreground text-sm">Quantidade: {item.quantity}</p>
                </div>
                <p className="font-medium">
                  {currencyFormatter(item.product.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-heading mb-2 text-lg font-medium">Endereço de Entrega</h3>
          <div className="text-sm">
            <p>
              {shipping.first_name} {shipping.last_name}
            </p>
            <p>{shipping.address}</p>
            <p>
              {shipping.city}, {shipping.state} {shipping.zip_code}
            </p>

            <p className="mt-1">{shipping.email}</p>
            <p>{shipping.phone}</p>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-heading mb-2 text-lg font-medium">Forma de Pagamento</h3>
          <div className="text-sm">
            <p>{payment.card_name}</p>
            <p>{maskedCardNumber}</p>
            <p>Expira em: {payment.expiry_date}</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{currencyFormatter(subtotal)}</p>
          </div>
          <div className="flex justify-between">
            <p>Entrega</p>
            <span>{shippingTotal == 0 ? "Cortesia" : currencyFormatter(shippingTotal)}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <p>Total</p>
            <p>{currencyFormatter(total)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

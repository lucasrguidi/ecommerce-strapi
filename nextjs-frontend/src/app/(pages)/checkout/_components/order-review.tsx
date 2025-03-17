import { Separator } from "@/components/ui/separator";

import type { CheckoutFormValues } from "./checkout-form";
import { currencyFormatter } from "@/app/utils/currency-formatter";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderReviewProps {
  formData: CheckoutFormValues;
  cartItems: CartItem[];
  total: number;
}

export function OrderReview({ formData, cartItems, total }: OrderReviewProps) {
  const { shipping, payment } = formData;

  // Format card number to only show last 4 digits
  const maskedCardNumber = payment.card_number
    ? `•••• •••• •••• ${payment.card_number.trim().slice(-4)}`
    : "";

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-xl font-medium">Revisão do Pedido</h2>

      <div className="space-y-4">
        <div>
          <h3 className="mb-2 text-lg font-medium">Itens</h3>
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground text-sm">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium">{currencyFormatter(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="mb-2 text-lg font-medium">Endereço de Entrega</h3>
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
          <h3 className="mb-2 text-lg font-medium">Forma de Pagamento</h3>
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
            <p>{currencyFormatter(total)}</p>
          </div>
          <div className="flex justify-between">
            <p>Entrefa</p>
            <p>{currencyFormatter(10)}</p>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <p>Total</p>
            <p>{currencyFormatter(total + 10 + total * 0.07)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

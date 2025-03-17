import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface OrderItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

export default function OrderSummary({ items, subtotal, shipping, tax, total }: OrderSummaryProps) {
  return (
    <div className="sticky top-24 rounded-lg bg-white p-6 shadow-sm">
      <h2 className="font-playfair mb-4 text-xl font-medium">Order Summary</h2>

      <div className="mb-4 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-luxury-gold text-sm">{item.brand}</p>
              <p className="font-medium">{item.name}</p>
              <div className="mt-1 flex items-center justify-between">
                <p className="text-luxury-text text-sm">Qty: {item.quantity}</p>
                <p className="font-medium">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-2">
        <div className="text-luxury-text flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="text-luxury-text flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
        </div>
        <div className="text-luxury-text flex justify-between">
          <span>Tax</span>
          <span>${tax}</span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between text-lg font-medium">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <div className="text-luxury-text mt-6 text-sm">
        <p>Need to modify your cart?</p>
        <Link href="/cart" className="text-luxury-gold hover:underline">
          Return to Cart
        </Link>
      </div>
    </div>
  );
}

import CartItem from "@/app/types/cart-item";

interface UseCartProps {
  items: CartItem[];
}

export default function UseCart({ items }: UseCartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingTotal = 0; // Free shipping
  const total = subtotal + shippingTotal;

  return {
    subtotal,
    shippingTotal,
    total,
  };
}

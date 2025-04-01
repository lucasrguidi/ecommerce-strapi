import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import CartItem from "../types/cart-item";

interface CartState {
  items: CartItem[];
  addToCart: (product: CartItem["product"]) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.product.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
              ),
            };
          }
          return {
            items: [...state.items, { id: crypto.randomUUID(), product, quantity: 1 }],
          };
        }),
      removeFromCart: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),
      updateQuantity: (itemId, newQuantity) =>
        set((state) => {
          if (newQuantity <= 0) {
            return {
              items: state.items.filter((item) => item.id !== itemId),
            };
          }

          return {
            items: state.items.map((item) =>
              item.id === itemId ? { ...item, quantity: newQuantity } : item,
            ),
          };
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

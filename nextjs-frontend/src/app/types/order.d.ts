import Product from "./product";

export default interface Order {
  id?: number;
  user?: number;
  total: number;
  order_status: "pending" | "paid" | "delivered";
  products: Product[];
  shipping: {
    first_name: string;
    last_name: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    email: string;
    phone: string;
  };
  payment: {
    card_name: string;
    card_number: string;
    cvv: string;
    expiry_date: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

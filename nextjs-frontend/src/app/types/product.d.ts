import { Brand } from "./brand";

export default interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: {
    url: string;
  }[];
  category: Category;
  brand: Brand;
  slug: string;
}

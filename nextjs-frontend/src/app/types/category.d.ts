import Product from "./product";

export default interface Category {
  id: number;
  name: string;
  slug: string;
  image: {
    url: string;
  };
  products: Product[];
}

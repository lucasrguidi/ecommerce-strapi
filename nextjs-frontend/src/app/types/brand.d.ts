import Product from "./product";

interface Brand {
  id: number;
  name: string;
  image: {
    url: string;
  };
  slug: string;
  products: Product[];
}

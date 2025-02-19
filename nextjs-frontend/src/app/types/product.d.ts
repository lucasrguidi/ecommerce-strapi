export default interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: {
    url: string;
  }[];
  category: Category;
}

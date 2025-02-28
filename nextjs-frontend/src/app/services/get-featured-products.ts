import { API_ENDPOINTS } from "../constants/apiEndpoints";
import Product from "../types/product";

export async function getFeaturedProducts() {
  const featuredProducts: Product[] = await fetch(
    `${API_ENDPOINTS.BASE_URL}/products?filters[isFeatured][$eq]=true&populate=*`,
  )
    .then((res) => res.json())
    .then(({ data }) => data);

  return featuredProducts;
}

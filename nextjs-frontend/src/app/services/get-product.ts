import { API_ENDPOINTS } from "../constants/apiEndpoints";
import Product from "../types/product";

export async function getProduct(slug: string) {
  const product: Product = await fetch(
    `${API_ENDPOINTS.BASE_URL}/products?filters[slug][$eq]=${slug}&populate[images][fields][0]=url&populate[brand][fields][0]=name&populate[brand][fields][1]=slug`,
  )
    .then((res) => res.json())
    .then(({ data }) => data[0]);

  return product;
}

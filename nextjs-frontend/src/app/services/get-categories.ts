import { API_ENDPOINTS } from "../constants/apiEndpoints";
import Category from "../types/category";

export async function getCategories() {
  const categories: Category[] = await fetch(
    `${API_ENDPOINTS.BASE_URL}/categories?populate[image][fields][0]=url`,
  )
    .then((res) => res.json())
    .then(({ data }) => data);

  return categories;
}

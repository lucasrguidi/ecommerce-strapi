import { API_ENDPOINTS } from "../constants/apiEndpoints";
import { Brand } from "../types/brand";

export async function getBrands() {
  const brands: Brand[] = await fetch(
    `${API_ENDPOINTS.BASE_URL}/brands?populate[image][fields][0]=url`,
  )
    .then((res) => res.json())
    .then(({ data }) => data);

  return brands;
}

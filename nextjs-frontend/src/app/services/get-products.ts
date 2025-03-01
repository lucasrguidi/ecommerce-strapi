import { API_ENDPOINTS } from "../constants/apiEndpoints";
import Product from "../types/product";

export interface PaginatedResponse {
  products: Product[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export async function getProducts(
  page = 1,
  pageSize = 9,
  filters?: {
    search?: string;
    brand?: string;
    category?: string;
    available?: string;
  },
): Promise<PaginatedResponse> {
  const url = new URL(`${API_ENDPOINTS.BASE_URL}/products`);

  url.searchParams.append("pagination[page]", String(page));
  url.searchParams.append("pagination[pageSize]", String(pageSize));
  url.searchParams.append("populate[images][fields][0]", "url");
  url.searchParams.append("populate[brand][fields][0]", "name");
  url.searchParams.append("populate[brand][fields][1]", "slug");
  url.searchParams.append("populate[category][fields][0]", "name");
  url.searchParams.append("populate[category][fields][1]", "slug");

  // Filtro de busca
  if (filters?.search) {
    url.searchParams.append("filters[$or][0][name][$contains]", filters.search);
    url.searchParams.append("filters[$or][1][description][$contains]", filters.search);
  }

  // Filtro de marca
  if (filters?.brand && filters.brand !== "all") {
    url.searchParams.append("filters[brand][slug][$eq]", filters.brand);
  }

  // Filtro de categoria
  if (filters?.category && filters.category !== "all") {
    url.searchParams.append("filters[category][slug][$eq]", filters.category);
  }

  // Filtro de disponibilidade
  if (filters?.available && filters.available !== "all") {
    if (filters.available === "available") {
      url.searchParams.append("filters[available][$eq]", "true");
    }
    if (filters.available === "unavailable") {
      url.searchParams.append("filters[available][$eq]", "false");
    }
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const { data, meta } = await response.json();

  return {
    products: data,
    pagination: meta.pagination,
  };
}

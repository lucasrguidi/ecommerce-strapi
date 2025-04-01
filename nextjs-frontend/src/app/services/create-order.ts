import { API_ENDPOINTS } from "../constants/apiEndpoints";
import Order from "../types/order";
import { mapErrorMessage } from "../utils/error-messages";

export async function createOrder(orderData: Order, token?: string) {
  if (!token) {
    throw new Error("Sem autorização");
  }

  const response = await fetch(`${API_ENDPOINTS.BASE_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: orderData }),
  });

  const data = await response.json();
  if (data.error) throw new Error(mapErrorMessage(data.error.message));
  return data;
}

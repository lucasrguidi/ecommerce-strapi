import { auth } from "@/lib/auth";
import { API_ENDPOINTS } from "../constants/apiEndpoints";
import UserData from "../types/userdata";

export async function getUser() {
  const user = await auth();
  const token = user?.jwt;

  if (!token) {
    throw new Error("Sem autorização");
  }

  const userData: UserData = await fetch(`${API_ENDPOINTS.BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);

  return userData;
}

import { signUpSchema } from "@/app/schemas/sign-up-schema";
import { mapErrorMessage } from "@/app/utils/error-messages";
import { z } from "zod";
import { API_ENDPOINTS } from "../constants/apiEndpoints";

export const registerUser = async (values: z.infer<typeof signUpSchema>) => {
  console.log("🚀 ~ registerUser ~ values:", values);
  const response = await fetch(API_ENDPOINTS.REGISTER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const data = await response.json();
  if (data.error) throw new Error(mapErrorMessage(data.error.message));
  return data;
};

"use server";

import { signIn } from "@/lib/auth";
import { AuthError, CredentialsSignin } from "next-auth";

export async function SignInAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof CredentialsSignin) {
      throw new Error("Credenciais inválidas");
    }

    if (error instanceof AuthError) {
      throw new Error("Falha ao autenticar-se");
    }

    throw error;
  }
}

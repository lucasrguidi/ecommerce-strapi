import { z } from "zod";

export const signUpSchema = z.object({
  username: z.string({ required_error: "Nome é obrigatório" }).trim().min(1, "Nome é obrigatório"),
  email: z
    .string({ required_error: "E-mail é obrigatório" })
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "Senha é obrigatório" })
    .trim()
    .min(1, "Senha é obrigatório"),
});

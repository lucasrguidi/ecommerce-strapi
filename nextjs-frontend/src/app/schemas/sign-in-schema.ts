import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "E-mail é obrigatório" })
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido"),
  password: z.string({ required_error: "Senha é obrigatório" }).min(1, "Senha é obrigatório"),
});

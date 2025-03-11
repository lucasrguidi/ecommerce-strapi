import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const signUpSchema = z.object({
  username: z
    .string({ required_error: "Nome de usuário é obrigatório" })
    .trim()
    .min(1, "Nome é obrigatório"),
  full_name: z
    .string({ required_error: "Nome completo é obrigatório" })
    .trim()
    .min(3, "Nome é obrigatório"),
  phone: z
    .string({ message: "Número de telefone é obrigatório" })
    .refine(isValidPhoneNumber, { message: "Número de telefone inválido" }),
  email: z
    .string({ required_error: "E-mail é obrigatório" })
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "Senha é obrigatório" })
    .trim()
    .min(1, "Senha é obrigatório"),
});

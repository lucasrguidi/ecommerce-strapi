import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const shippingSchema = z.object({
  first_name: z
    .string({ required_error: "Nome é obrigatório" })
    .min(1, { message: "Nome é obrigatório" }),
  last_name: z
    .string({ required_error: "Sobrenome é obrigatório" })
    .min(1, { message: "Sobrenome é obrigatório" }),
  address: z
    .string({ required_error: "Endereço é obrigatório" })
    .min(1, { message: "Endereço é obrigatório" }),
  city: z
    .string({ required_error: "Cidade é obrigatório" })
    .min(1, { message: "Cidade é obrigatório" }),
  state: z
    .string({ required_error: "Estado é obrigatório" })
    .min(1, { message: "Estado é obrigatório" }),
  zip_code: z
    .string({ required_error: "CEP é obrigatório" })
    .min(1, { message: "CEP é obrigatório" }),
  email: z
    .string({ required_error: "E-mail é obrigatório" })
    .min(1, "E-mail é obrigatório")
    .email("E-mail inválido"),
  phone: z
    .string({ message: "Número de telefone é obrigatório" })
    .refine(isValidPhoneNumber, { message: "Número de telefone inválido" }),
});

export const paymentSchema = z.object({
  card_name: z
    .string({ required_error: "Nome no cartão é obrigatório" })
    .min(1, { message: "Nome no cartão é obrigatório" }),
  card_number: z
    .string({ required_error: "Número do cartão é obrigatório" })
    .min(1, { message: "Número do cartão é obrigatório" })
    .refine((val) => /^[\d\s]{16,19}$/.test(val), {
      message: "Insira um número de cartão válido",
    }),
  expiry_date: z
    .string({ required_error: "Data de expiração é obrigatório" })
    .min(1, { message: "Data de expiração é obrigatório" })
    .refine((val) => /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val), {
      message: "Use o formato MM/AA",
    }),
  cvv: z
    .string({ required_error: "CVV é obrigatório" })
    .min(1, { message: "CVV é obrigatório" })
    .refine((val) => /^[0-9]{3,4}$/.test(val), {
      message: "CVV deve conter 3 ou 4 dígitos",
    }),
});

export const checkoutSchema = z.object({
  shipping: shippingSchema,
  payment: paymentSchema,
});

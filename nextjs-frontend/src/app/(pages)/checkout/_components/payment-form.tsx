"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import type { CheckoutFormValues } from "./checkout-form";

export function PaymentForm() {
  const { control } = useFormContext<CheckoutFormValues>();

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    let formatted = cleaned;
    if (cleaned.length > 2) {
      formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    return formatted;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h2 className="font-heading text-xl font-medium">Detalhes do envio</h2>

        <span className="text-muted-foreground text-sm">
          Suas informações de pagamento são protegidas com criptografia avançada.
        </span>
      </div>

      <div className="space-y-4">
        <FormField
          control={control}
          name="payment.card_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name no Cartão</FormLabel>
              <FormControl>
                <Input {...field} placeholder="João Smith" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="payment.card_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número do Cartão</FormLabel>
              <FormControl>
                <div className="relative">
                  <Controller
                    name="payment.card_number"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="pl-10"
                        onChange={(e) => {
                          field.onChange(formatCardNumber(e.target.value));
                        }}
                      />
                    )}
                  />
                  <CreditCard className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 items-start gap-4">
          <FormField
            control={control}
            name="payment.expiry_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data de expiração</FormLabel>
                <FormControl>
                  <Controller
                    name="payment.expiry_date"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="MM/AA"
                        maxLength={5}
                        onChange={(e) => {
                          field.onChange(formatExpiryDate(e.target.value));
                        }}
                      />
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="payment.cvv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="123" maxLength={4} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { checkoutSchema } from "@/app/schemas/checkout-schema";
import { useCartStore } from "@/app/stores/cart-store";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import UseCart from "../../cart/hooks/use-cart";
import useCheckout from "../hooks/use-checkout";
import { OrderReview } from "./order-review";
import { PaymentForm } from "./payment-form";
import { ShippingForm } from "./shipping-form";

interface CheckoutFormProps {
  steps: { text: string; value: string }[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const defaultValues: CheckoutFormValues = {
  shipping: {
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    email: "",
    phone: "",
  },
  payment: {
    card_name: "",
    card_number: "",
    expiry_date: "",
    cvv: "",
  },
};

export default function CheckoutForm({ steps, currentStep, setCurrentStep }: CheckoutFormProps) {
  const methods = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues,
    mode: "onChange",
  });

  const { items } = useCartStore();

  const { total } = UseCart({ items });

  const { createOrder } = useCheckout();

  const { handleSubmit, trigger, getValues } = methods;

  const handleNext = async () => {
    let isValid = false;

    if (currentStep === 0) {
      isValid = await trigger("shipping", { shouldFocus: true });
    } else if (currentStep === 1) {
      isValid = await trigger("payment", { shouldFocus: true });
    } else {
      isValid = true;
    }

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmitOrder = (data: CheckoutFormValues) => {
    createOrder({
      total,
      order_status: "paid",
      products: items.flatMap((item) => Array(item.quantity).fill(item.product.id)),
      shipping: data.shipping,
      payment: data.payment,
    });
  };

  return (
    <FormProvider {...methods}>
      <div className="flex w-full flex-1 flex-col space-y-6 md:w-2/3">
        <div className="bg-popover dark:bg-muted flex flex-col gap-4 rounded-md p-4 shadow-sm">
          <form onSubmit={handleSubmit(onSubmitOrder)} className="flex flex-col gap-8">
            {currentStep === 0 && <ShippingForm />}
            {currentStep === 1 && <PaymentForm />}
            {currentStep === 2 && <OrderReview formData={getValues()} />}

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                Voltar
              </Button>

              {currentStep < steps.length - 1 && (
                <Button type="button" onClick={handleNext}>
                  Continuar para {steps[currentStep + 1].text}
                </Button>
              )}

              {currentStep === steps.length - 1 && <Button type="submit">Finalizar pedido</Button>}
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
}

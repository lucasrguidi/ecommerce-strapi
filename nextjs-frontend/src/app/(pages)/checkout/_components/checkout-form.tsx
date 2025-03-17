"use client";

import { checkoutSchema } from "@/app/schemas/checkout-schema";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { CheckoutSteps } from "./checkout-steps";
import { OrderReview } from "./order-review";
import { PaymentForm } from "./payment-form";
import { ShippingForm } from "./shipping-form";

const cartItems = [
  { id: 1, name: "Premium Headphones", price: 129.99, quantity: 1 },
  { id: 2, name: "Wireless Charger", price: 39.99, quantity: 2 },
];

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

export default function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: "Envio", value: "shipping" },
    { text: "Pagamento", value: "payment" },
    { text: "Revisão", value: "review" },
  ];

  const methods = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues,
    mode: "onChange",
  });

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
    console.log("Form data submitted:", data);
    alert("Order submitted successfully!");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex w-full flex-1 flex-col space-y-6 md:w-2/3">
        <CheckoutSteps steps={steps} currentStep={currentStep} />

        <div className="bg-popover dark:bg-muted flex flex-col gap-4 rounded-md p-4 shadow-sm">
          <form onSubmit={handleSubmit(onSubmitOrder)} className="flex flex-col gap-8">
            {currentStep === 0 && <ShippingForm />}
            {currentStep === 1 && <PaymentForm />}
            {currentStep === 2 && (
              <OrderReview formData={getValues()} cartItems={cartItems} total={calculateTotal()} />
            )}

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                Voltar
              </Button>

              {currentStep < steps.length - 1 ? (
                <Button type="button" onClick={handleNext}>
                  Continuar para {steps[currentStep + 1].text}
                </Button>
              ) : (
                <Button type="submit">Finalizar pedido</Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  );
}

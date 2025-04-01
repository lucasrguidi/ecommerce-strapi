import { CheckCircle } from "lucide-react";

interface CheckoutStepsProps {
  steps: {
    text: string;
    value: string;
  }[];
  currentStep: number;
}

export function CheckoutSteps({ steps, currentStep }: CheckoutStepsProps) {
  return (
    <div className="w-full">
      <div className="mb-8 flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.value} className="relative flex flex-col items-center">
            <div
              className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                index <= currentStep
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-muted-foreground text-muted-foreground"
              }`}
            >
              {index < currentStep ? <CheckCircle className="h-6 w-6" /> : <span>{index + 1}</span>}
            </div>
            <span
              className={`mt-2 text-sm font-medium ${index <= currentStep ? "text-primary" : "text-muted-foreground"}`}
            >
              {step.text}
            </span>

            {index < steps.length - 1 && (
              <div
                className={`absolute top-5 left-10 h-0.5 w-[calc(100vw/3-4rem)] ${index < currentStep ? "bg-primary" : "bg-muted"}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

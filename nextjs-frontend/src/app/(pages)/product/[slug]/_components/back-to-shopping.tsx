"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackToShopping() {
  const router = useRouter();

  return (
    <Button
      variant={"link"}
      onClick={() => router.back()}
      className="text-foreground flex w-fit items-center gap-2 !pl-0 hover:underline hover:underline-offset-2"
    >
      <ArrowLeft className="h-4 w-4" />
      Continuar Explorando
    </Button>
  );
}

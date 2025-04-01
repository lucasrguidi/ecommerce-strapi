import { createOrder as createOrderFn } from "@/app/services/create-order";
import Order from "@/app/types/order";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useCheckout() {
  const router = useRouter();
  const { data: session } = useSession();

  const { mutate: createOrder, isPending } = useMutation({
    mutationFn: (orderData: Order) => createOrderFn(orderData, session?.jwt),
    onSuccess: () => {
      toast.success("Cadastrado com sucesso.");
      router.refresh();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    createOrder,
    isPending,
  };
}

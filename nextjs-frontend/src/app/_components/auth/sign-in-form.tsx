"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import { signInSchema } from "@/app/schemas/sign-in-schema";
import { LoadingSpinner } from "@/components/custom/loading-spinner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

interface SignInFormProps {
  toggleDialog: () => void;
}

export function SignInForm({ toggleDialog }: SignInFormProps) {
  const router = useRouter();

  const { mutate: signInUser, isPending } = useMutation({
    mutationFn: (values: z.infer<typeof signInSchema>) =>
      signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      }),
    onSuccess: (result) => {
      if (result?.error) {
        throw new Error("Credenciais inválidas. Tente novamente.");
      }
      toast.success("Login feito com sucesso.");
      toggleDialog();
      router.refresh();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    signInUser(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit" disabled={isPending}>
          Entrar
          {isPending && <LoadingSpinner />}
        </Button>
      </form>
    </Form>
  );
}

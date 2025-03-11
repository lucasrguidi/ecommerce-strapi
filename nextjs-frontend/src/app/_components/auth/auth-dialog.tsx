"use client";

import { Logo } from "@/components/custom/logo";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";

export function AuthDialog() {
  const [open, setOpen] = useState(false);

  function toggleDialog() {
    setOpen(!open);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Entrar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <Logo />
          <DialogTitle className="font-heading text-center text-lg font-bold">
            Bem-vindo
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="sign-in">
          <TabsList className="mb-6 grid w-full grid-cols-2">
            <TabsTrigger value="sign-in">Log in</TabsTrigger>
            <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
          </TabsList>

          <TabsContent value="sign-in">
            <SignInForm toggleDialog={toggleDialog} />
          </TabsContent>

          <TabsContent value="sign-up">
            <SignUpForm toggleDialog={toggleDialog} />
          </TabsContent>
        </Tabs>

        {/* <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background text-muted-foreground px-2">Ou</span>
          </div>
        </div>

        <div className="space-y-3">
          <GoogleSignInButton />
          <AppleSignInButton />
        </div> */}
      </DialogContent>
    </Dialog>
  );
}

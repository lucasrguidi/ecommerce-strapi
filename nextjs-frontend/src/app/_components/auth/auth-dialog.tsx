"use client";

import { Logo } from "@/components/custom/logo";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInForm } from "./sign-in-form";
import { SignUpForm } from "./sign-up-form";
import { GoogleSignInButton } from "./google-signin-button";
import { AppleSignInButton } from "./apple-signin-button";

export function AuthDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Entrar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <Logo className="mb-6" />
          <DialogTitle className="text-lg font-bold">Entrar</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae
            sodales.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="sign-in">
          <TabsList className="mb-6 grid w-full grid-cols-2">
            <TabsTrigger value="sign-in">Log in</TabsTrigger>
            <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
          </TabsList>

          <TabsContent value="sign-in">
            <SignInForm />
          </TabsContent>

          <TabsContent value="sign-up">
            <SignUpForm />
          </TabsContent>
        </Tabs>

        <div className="relative">
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
        </div>
      </DialogContent>
    </Dialog>
  );
}

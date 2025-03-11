import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface AccountLayoutProps {
  children: ReactNode;
}

export default async function AccountLayout({ children }: AccountLayoutProps) {
  const user = await auth();

  if (!user) redirect("/");

  return children;
}

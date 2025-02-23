"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface QCProviderProps {
  children: React.ReactNode;
}

export function QCProvider({ children }: QCProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

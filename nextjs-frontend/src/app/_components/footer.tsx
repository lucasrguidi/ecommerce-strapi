"use client";

import { Logo } from "@/components/custom/logo";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Explorar",
    links: [
      { label: "Bolsas", href: "#" },
      { label: "Relógios", href: "#" },
      { label: "Jóias", href: "#" },
      { label: "Acessórios", href: "#" },
      { label: "Sapatos", href: "#" },
      { label: "Roupas", href: "#" },
    ],
  },
  {
    title: "A Empresa",
    links: [
      { label: "Sobre nós", href: "#" },
      { label: "Contato", href: "#" },
      { label: "Perguntas Frequentes", href: "#" },
    ],
  },
  {
    title: "Conta",
    links: [
      { label: "Sua Conta", href: "#" },
      { label: "Configurações", href: "#" },
      { label: "Termos", href: "#" },
    ],
  },
];

// Legal links data
const LEGAL_LINKS = [
  { label: "Política de Privacidade", href: "#" },
  { label: "Termos de Serviço", href: "#" },
  { label: "Configurações de Cookies", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-muted py-8 lg:py-8" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto flex flex-col gap-8 px-6 lg:gap-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 items-center gap-12 text-center lg:grid-cols-4 lg:items-start lg:gap-6 lg:text-left">
          {/* Logo Column */}
          <div className="flex flex-col items-center gap-2 md:gap-4 lg:items-start">
            <Link href="/" aria-label="Go to homepage">
              <Logo />
            </Link>
            <p className="text-muted-foreground">
              Peças de luxo cuidadosamente curadas, das marcas mais desejadas do planeta.
            </p>
            <div className="text-muted-foreground flex items-center gap-2">
              <Instagram
                className="hover:text-primary cursor-pointer transition-all"
                strokeWidth={1.5}
              />
              <Twitter
                className="hover:text-primary cursor-pointer transition-all"
                strokeWidth={1.5}
              />
              <Youtube
                className="hover:text-primary cursor-pointer transition-all"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-2 md:gap-4">
              {/* Column Title */}
              <h2 className="text-foreground font-heading text-xl font-semibold">{column.title}</h2>
              {/* Column Navigation */}
              <nav className="flex flex-col gap-3" aria-label={`${column.title} links`}>
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-base transition-colors hover:underline hover:underline-offset-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-12 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          {/* Copyright Text */}
          <p className="text-muted-foreground order-2 text-center text-sm lg:order-1 lg:text-left">
            <span>© {new Date().getFullYear()} LUXE</span> . Todos os direitos reservados.
          </p>

          {/* Legal Navigation */}
          <nav
            className="order-1 flex flex-col items-center gap-6 text-center lg:order-2 lg:flex-row lg:items-start lg:gap-8 lg:text-left"
            aria-label="Legal links"
          >
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground text-center text-sm transition-colors hover:underline hover:underline-offset-2 md:text-left"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

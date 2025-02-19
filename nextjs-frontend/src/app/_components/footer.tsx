'use client';

import { Logo } from '@/src/components/custom/logo';
import { Separator } from '@/src/components/ui/separator';
import Link from 'next/link';

// Footer navigation data
const FOOTER_COLUMNS = [
  {
    title: 'Sobre a LS',
    links: [
      { label: 'Sobre nós', href: '#' },
      { label: 'Parceiros', href: '#' },
      { label: 'Carreiras', href: '#' },
    ],
  },
  {
    title: 'Fale Conosco',
    links: [
      { label: 'Perguntas Frequentes', href: '#' },
      { label: 'Apoio ao cliente', href: '#' },
      { label: 'Pedidos e entrega', href: '#' },
    ],
  },
  {
    title: 'Conta',
    links: [
      { label: 'Sua Conta', href: '#' },
      { label: 'Configurações', href: '#' },
      { label: 'Termos', href: '#' },
    ],
  },
];

// Legal links data
const LEGAL_LINKS = [
  { label: 'Política de Privacidade', href: '#' },
  { label: 'Termos de Serviço', href: '#' },
  { label: 'Configurações de Cookies', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-muted py-8 lg:py-12" role="contentinfo" aria-label="Site footer">
      <div className="container mx-auto flex flex-col gap-12 px-6 lg:gap-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 items-center gap-12 text-center lg:grid-cols-4 lg:items-start lg:gap-6 lg:text-left">
          {/* Logo Column */}
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" aria-label="Go to homepage">
              <Logo />
            </Link>
          </div>

          {/* Navigation Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              {/* Column Title */}
              <h2 className="text-foreground text-base font-semibold">{column.title}</h2>
              {/* Column Navigation */}
              <nav className="flex flex-col gap-3" aria-label={`${column.title} links`}>
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-base transition-colors"
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
          <p className="text-muted-foreground order-2 text-center text-base lg:order-1 lg:text-left">
            <span>Copyright © {new Date().getFullYear()}</span>{' '}
            <Link href="/" className="hover:underline">
              lucasshop.com
            </Link>
            . Todos os direitos reservados.
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
                className="text-muted-foreground hover:text-foreground text-center text-base transition-colors md:text-left"
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

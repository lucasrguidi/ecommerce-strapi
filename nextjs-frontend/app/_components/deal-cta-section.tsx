'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function DealCtaSection() {
  return (
    <section className="bg-background" aria-labelledby="cta-heading">
      <div className="container mx-auto">
        <div className="bg-primary px-6 py-16 sm:rounded-xl md:p-16">
          <div className="flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="flex max-w-xl flex-col gap-4">
              <h2 id="cta-heading" className="text-primary-foreground text-3xl font-bold">
                Oferta Relâmpago ⚡️
              </h2>
              <p className="text-primary-foreground/80">Até 60% OFF em itens selecionados</p>
            </div>
            <div className="align-right flex flex-col gap-3 md:flex-row">
              <Button
                className="bg-primary-foreground hover:bg-primary-foreground/80 text-primary"
                aria-label="Get started with our service"
              >
                Aproveitar oferta
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

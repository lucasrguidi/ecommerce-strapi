'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FaqSection() {
  return (
    <section className="bg-background py-8 md:py-12" aria-labelledby="faq-heading">
      <div className="mx-auto flex max-w-2xl flex-col gap-12 px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-5 text-center">
          {/* Category Tag */}
          <p className="text-muted-foreground text-sm font-semibold md:text-base">FAQ</p>
          {/* Main Title */}
          <h1 id="faq-heading" className="text-foreground text-3xl font-bold md:text-4xl">
            Tire suas dúvidas
          </h1>
          {/* Section Description */}
          <p className="text-muted-foreground">
            Juntamos as informações mais importantes para ajudá-lo a aproveitar ao máximo sua
            experiência. Não consegue encontrar o que procura?{' '}
            <Link href="#" className="text-primary underline">
              Contate-nos.
            </Link>
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" defaultValue="item-1" aria-label="FAQ items">
          {/* FAQ Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-base font-medium">
              Qual o prazo de entrega?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Entregamos em até 5 dias úteis para todo o Brasil.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-base font-medium">
              Posso trocar o tamanho?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Sim! Oferecemos troca grátis em até 30 dias.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-base font-medium">
              Quais as formas de pagamento?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Cartões, Pix, Boleto e parcelamos em até 12x.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-base font-medium">
              É seguro comprar aqui?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              Usamos criptografia SSL e não armazenamos seus dados.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Card */}
        <div className="bg-muted/60 flex w-full flex-col items-center gap-6 rounded-xl p-6 md:p-8">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-foreground text-2xl font-bold">Ainda tem dúvidas?</h2>
            <p className="text-muted-foreground text-base">
              Tem alguma dúvida ou precisa de ajuda? Estamos aqui para te ajudar!
            </p>
          </div>
          <Button aria-label="Contact our support team">Contate-nos</Button>
        </div>
      </div>
    </section>
  );
}

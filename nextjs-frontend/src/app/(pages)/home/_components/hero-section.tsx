"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="bg-placeholder relative overflow-hidden bg-cover bg-center py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <Image
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
        alt="Luxury Fashion"
        className="absolute inset-0 h-full w-full object-cover"
        fill
      />
      <div className="from-luxury/80 to-luxury/40 absolute inset-0 bg-gradient-to-r" />
      <div className="relative z-1 container mx-auto flex flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        <div className="m-auto flex max-w-2xl flex-1 flex-col items-center gap-6 text-center lg:gap-8">
          <div className="flex flex-col gap-4 lg:gap-5">
            <h1 id="hero-heading" className="font-luxury text-3xl font-bold text-white md:text-5xl">
              Descubra o Luxo Atemporal
            </h1>
            <p className="text-base text-white/80 lg:text-lg">
              Explore nossa coleção selecionada das marcas mais prestigiadas do mundo.
            </p>
          </div>
          <Button>
            Explorar Coleção
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

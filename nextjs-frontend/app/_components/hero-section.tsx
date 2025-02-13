'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="bg-background py-8 lg:py-12" aria-labelledby="hero-heading">
      <div className="container mx-auto flex flex-col-reverse items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Main Heading */}
            <h1 id="hero-heading" className="text-foreground text-3xl font-bold md:text-5xl">
              Lorem Ipsum
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et impedit earum distinctio
              sit perspiciatis aperiam corrupti quasi sequi voluptas quidem, quia ab ducimus
              doloremque debitis quibusdam porro dolor illo a!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Comprar agora</Button>
            <Button variant="ghost">
              Ver mais
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Hero section visual"
              fill
              priority
              className="h-full w-full rounded-xl object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

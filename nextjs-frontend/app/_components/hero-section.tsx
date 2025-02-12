"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="bg-background py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-6 lg:gap-8 flex-1">
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Main Heading */}
            <h1
              id="hero-heading"
              className="text-foreground text-3xl md:text-5xl font-bold"
            >
              Lorem Ipsum
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
              impedit earum distinctio sit perspiciatis aperiam corrupti quasi
              sequi voluptas quidem, quia ab ducimus doloremque debitis
              quibusdam porro dolor illo a!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button>Comprar agora</Button>
            <Button variant="ghost">
              Ver mais
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 w-full">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="https://ui.shadcn.com/placeholder.svg"
              alt="Hero section visual"
              fill
              priority
              className="rounded-xl object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}

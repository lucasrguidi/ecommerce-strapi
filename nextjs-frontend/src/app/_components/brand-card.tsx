import { ArrowRight } from "lucide-react";

import Link from "next/link";
import { API_ENDPOINTS } from "../constants/apiEndpoints";
import { Brand } from "../types/brand";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  const imgUrl = `${API_ENDPOINTS.IMAGE_URL}${brand.image.url}`;

  return (
    <div key={brand.id} className="flex flex-col">
      <Link
        href="/"
        className="group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl"
      >
        <div className="relative flex aspect-[4/3] overflow-hidden">
          <Image
            src={imgUrl}
            alt={brand.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="100"
            priority
          />
          <div className="grou absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="text-foreground relative flex w-full flex-col justify-end p-6">
            <h3 className="font-heading bg-background/80 mb-2 p-2 text-2xl">{brand.name}</h3>
            <div className="mt-4 flex max-h-0 items-center overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-10">
              <Button variant={"link"}>
                Explorar marca <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

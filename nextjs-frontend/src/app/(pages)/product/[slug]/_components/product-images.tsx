"use client";

import { API_ENDPOINTS } from "@/app/constants/apiEndpoints";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  productName: string;
  images: {
    url: string;
  }[];
}

export default function ProductImages({ productName, images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-6">
      <div className="aspect-square overflow-hidden rounded-lg bg-white">
        <Image
          src={`${API_ENDPOINTS.IMAGE_URL}${images[selectedImage].url}`}
          alt={productName}
          className="h-full w-full object-cover"
          height={1000}
          width={1000}
          priority
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square overflow-hidden rounded-lg ${
              selectedImage === index ? "ring-primary ring-2" : "ring-1 ring-gray-200"
            }`}
          >
            <Image
              src={`${API_ENDPOINTS.IMAGE_URL}${image.url}`}
              alt={`${productName} ${index + 1}`}
              className="h-full w-full object-cover"
              height={1000}
              width={1000}
              priority
            />
          </button>
        ))}
      </div>
    </div>
  );
}

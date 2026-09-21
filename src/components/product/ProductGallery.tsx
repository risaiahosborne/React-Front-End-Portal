"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: any[]; // Sanity image array
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = images?.[activeIndex];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
        {activeImage && (
          <Image
            src={activeImage.url || activeImage.asset?.url}
            alt="Product image"
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-3 overflow-x-auto">
        {images?.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative w-20 h-20 rounded-md overflow-hidden border 
              ${i === activeIndex ? "border-black" : "border-gray-300"}`}
          >
            <Image
              src={img.url || img.asset?.url}
              alt="Thumbnail"
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

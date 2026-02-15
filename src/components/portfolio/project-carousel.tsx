"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/src/lib/utils";

type ProjectCarouselProps = {
  images: string[];
  title: string;
};

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);

  const currentImage = images[index] ?? images[0];

  const onPrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const onNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      <div className="border-brand-neutral-500 bg-brand-neutral-100 relative aspect-[16/10] overflow-hidden rounded-3xl border">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0.25 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.25 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage}
              alt={`${title} fotografija ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 70vw"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
          <button
            type="button"
            className="border-brand-neutral-100/50 bg-brand-burgundy/75 text-brand-neutral-100 rounded-full border px-4 py-2 text-xs tracking-[0.16em] uppercase backdrop-blur"
            onClick={onPrev}
            aria-label="Prethodna slika"
          >
            Prethodna
          </button>
          <span className="border-brand-neutral-100/50 bg-brand-burgundy/75 text-brand-neutral-100 rounded-full border px-3 py-1 text-xs backdrop-blur">
            {index + 1}/{images.length}
          </span>
          <button
            type="button"
            className="border-brand-neutral-100/50 bg-brand-burgundy/75 text-brand-neutral-100 rounded-full border px-4 py-2 text-xs tracking-[0.16em] uppercase backdrop-blur"
            onClick={onNext}
            aria-label="Sledeća slika"
          >
            Sledeća
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {images.map((image, imageIndex) => (
          <button
            key={image}
            type="button"
            onClick={() => setIndex(imageIndex)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-xl border",
              imageIndex === index
                ? "border-brand-gold"
                : "border-brand-neutral-500 hover:border-brand-earth",
            )}
            aria-label={`Prikaži sliku ${imageIndex + 1}`}
          >
            <Image
              src={image}
              alt={`${title} thumbnail ${imageIndex + 1}`}
              fill
              className="object-cover"
              sizes="20vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

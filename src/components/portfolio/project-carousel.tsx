"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { cn } from "@/src/lib/utils";

type ProjectCarouselProps = {
  images: string[];
  title: string;
};

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const { locale } = useLocale();
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentImage = images[index] ?? images[0];

  const onPrev = useCallback(() => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const onNext = useCallback(() => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const inspirationLabel = useMemo(() => {
    const match = currentImage?.match(/\/projects\/p(\d+)-(\d+)\.jpg$/i);
    if (!match) {
      return String(index + 1).padStart(2, "0");
    }
    return `${String(match[1]).padStart(2, "0")}-${String(match[2]).padStart(2, "0")}`;
  }, [currentImage, index]);

  const imageAlt = useMemo(() => {
    if (locale === "en") {
      return `${title} – inspiration ${inspirationLabel}`;
    }
    return `${title} – inspiracija ${inspirationLabel}`;
  }, [inspirationLabel, locale, title]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setLightboxOpen(false);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrev();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, onNext, onPrev]);

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
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="absolute inset-0 cursor-zoom-in"
              aria-label={locale === "en" ? "Open gallery image" : "Otvori uvećan prikaz"}
            >
              <Image
                src={currentImage}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 70vw"
                priority={index === 0}
              />
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
          <button
            type="button"
            className="border-brand-neutral-100/50 bg-brand-burgundy/75 text-brand-neutral-100 rounded-full border px-4 py-2 text-xs tracking-[0.16em] uppercase backdrop-blur"
            onClick={onPrev}
            aria-label={locale === "en" ? "Previous image" : "Prethodna slika"}
          >
            {locale === "en" ? "Previous" : "Prethodna"}
          </button>
          <span className="border-brand-neutral-100/50 bg-brand-burgundy/75 text-brand-neutral-100 rounded-full border px-3 py-1 text-xs backdrop-blur">
            {index + 1}/{images.length}
          </span>
          <button
            type="button"
            className="border-brand-neutral-100/50 bg-brand-burgundy/75 text-brand-neutral-100 rounded-full border px-4 py-2 text-xs tracking-[0.16em] uppercase backdrop-blur"
            onClick={onNext}
            aria-label={locale === "en" ? "Next image" : "Sledeća slika"}
          >
            {locale === "en" ? "Next" : "Sledeća"}
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
            aria-label={
              locale === "en"
                ? `Show image ${imageIndex + 1}`
                : `Prikaži sliku ${imageIndex + 1}`
            }
          >
            <Image
              src={image}
              alt={locale === "en" ? `${title} thumbnail ${imageIndex + 1}` : `${title} sličica ${imageIndex + 1}`}
              fill
              className="object-cover"
              sizes="20vw"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxOpen ? (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={locale === "en" ? "Image preview" : "Pregled slike"}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              className="absolute inset-0 mx-auto flex max-w-6xl items-center justify-center px-4 py-10"
              initial={{ opacity: 0, y: 8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={currentImage}
                    alt={imageAlt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 py-4">
                  <button
                    type="button"
                    className="border-white/20 bg-black/40 text-white rounded-full border px-4 py-2 text-xs tracking-[0.16em] uppercase backdrop-blur"
                    onClick={onPrev}
                  >
                    {locale === "en" ? "Previous" : "Prethodna"}
                  </button>
                  <div className="text-white text-xs">
                    {index + 1}/{images.length}
                  </div>
                  <button
                    type="button"
                    className="border-white/20 bg-black/40 text-white rounded-full border px-4 py-2 text-xs tracking-[0.16em] uppercase backdrop-blur"
                    onClick={onNext}
                  >
                    {locale === "en" ? "Next" : "Sledeća"}
                  </button>
                </div>

                <button
                  type="button"
                  className="border-white/20 bg-black/40 text-white absolute top-4 right-4 rounded-full border px-4 py-2 text-xs tracking-[0.16em] uppercase backdrop-blur"
                  onClick={() => setLightboxOpen(false)}
                  aria-label={locale === "en" ? "Close preview" : "Zatvori pregled"}
                >
                  {locale === "en" ? "Close" : "Zatvori"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

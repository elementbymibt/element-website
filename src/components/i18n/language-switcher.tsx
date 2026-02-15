"use client";

import { useState } from "react";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { cn } from "@/src/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const [pending, setPending] = useState(false);

  const handleChange = async (next: "sr" | "en") => {
    setPending(true);

    try {
      await setLocale(next);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className={cn("inline-flex items-center gap-1 rounded-full border border-brand-neutral-500/70 bg-white p-1", className)}>
      <button
        type="button"
        disabled={pending}
        className={cn(
          "rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase",
          locale === "sr" ? "bg-brand-burgundy text-white" : "text-brand-earth hover:text-brand-burgundy",
        )}
        onClick={() => void handleChange("sr")}
        aria-label="Promeni jezik na srpski"
      >
        SR
      </button>
      <button
        type="button"
        disabled={pending}
        className={cn(
          "rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase",
          locale === "en" ? "bg-brand-burgundy text-white" : "text-brand-earth hover:text-brand-burgundy",
        )}
        onClick={() => void handleChange("en")}
        aria-label="Switch language to English"
      >
        EN
      </button>
    </div>
  );
}

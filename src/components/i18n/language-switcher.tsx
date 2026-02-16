"use client";

import { useState } from "react";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { pickLocaleText } from "@/src/lib/i18n/config";
import { cn } from "@/src/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const [pending, setPending] = useState(false);

  const handleChange = async (next: "sr" | "en" | "de") => {
    setPending(true);

    try {
      await setLocale(next);
    } finally {
      setPending(false);
    }
  };

  const srAria = pickLocaleText(locale, {
    sr: "Promeni jezik na srpski",
    en: "Switch language to Serbian",
    de: "Sprache auf Serbisch ändern",
  });
  const enAria = pickLocaleText(locale, {
    sr: "Promeni jezik na engleski",
    en: "Switch language to English",
    de: "Sprache auf Englisch ändern",
  });
  const deAria = pickLocaleText(locale, {
    sr: "Promeni jezik na nemački",
    en: "Switch language to German",
    de: "Sprache auf Deutsch ändern",
  });

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
        aria-label={srAria}
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
        aria-label={enAria}
      >
        EN
      </button>
      <button
        type="button"
        disabled={pending}
        className={cn(
          "rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase",
          locale === "de" ? "bg-brand-burgundy text-white" : "text-brand-earth hover:text-brand-burgundy",
        )}
        onClick={() => void handleChange("de")}
        aria-label={deAria}
      >
        DE
      </button>
    </div>
  );
}

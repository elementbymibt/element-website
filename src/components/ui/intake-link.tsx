"use client";

import Link from "next/link";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { trackEvent } from "@/src/lib/analytics";
import { pickLocaleText } from "@/src/lib/i18n/config";
import { cn } from "@/src/lib/utils";

type IntakeLinkProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
  trackingLocation?: string;
};

export function IntakeLink({
  label,
  className,
  variant = "secondary",
  trackingLocation = "cta",
}: IntakeLinkProps) {
  const { locale } = useLocale();
  const buttonLabel =
    label ??
    pickLocaleText(locale, {
      sr: "Popunite upitnik",
      en: "Start intake",
      de: "Fragebogen starten",
    });

  return (
    <Link
      href="/intake/start"
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition",
        variant === "primary" ? "btn-primary" : "btn-secondary text-brand-burgundy",
        className,
      )}
      onClick={() => {
        try {
          const key = "element_intake_start_tracked";
          if (typeof window !== "undefined") {
            if (sessionStorage.getItem(key)) {
              return;
            }
            sessionStorage.setItem(key, "1");
          }
        } catch {
          // Best-effort only.
        }
        trackEvent("intake_start", { location: trackingLocation });
      }}
      aria-label={pickLocaleText(locale, {
        sr: "Otvorite klijentski upitnik",
        en: "Open client intake questionnaire",
        de: "Kundenfragebogen öffnen",
      })}
    >
      {buttonLabel}
    </Link>
  );
}

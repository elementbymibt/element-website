"use client";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { trackEvent } from "@/src/lib/analytics";
import { pickLocaleText } from "@/src/lib/i18n/config";
import { siteConfig } from "@/src/lib/site-config";
import { cn } from "@/src/lib/utils";

type BookingLinkProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
  trackingLocation?: string;
};

export function BookingLink({
  label,
  className,
  variant = "primary",
  trackingLocation = "cta",
}: BookingLinkProps) {
  const { locale } = useLocale();
  const buttonLabel =
    label ??
    pickLocaleText(locale, {
      sr: "Zakažite konsultacije",
      en: "Schedule consultation",
      de: "Beratung vereinbaren",
    });

  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition",
        variant === "primary" ? "btn-primary" : "btn-secondary text-brand-burgundy",
        className,
      )}
      onClick={() => trackEvent("booking_click", { location: trackingLocation })}
      aria-label={pickLocaleText(locale, {
        sr: "Otvorite eksterni booking link",
        en: "Open external booking link",
        de: "Externen Buchungslink öffnen",
      })}
    >
      {buttonLabel}
    </a>
  );
}

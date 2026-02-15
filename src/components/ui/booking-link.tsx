"use client";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { trackEvent } from "@/src/lib/analytics";
import { siteConfig } from "@/src/lib/site-config";
import { cn } from "@/src/lib/utils";

type BookingLinkProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

export function BookingLink({
  label,
  className,
  variant = "primary",
}: BookingLinkProps) {
  const { locale } = useLocale();
  const buttonLabel = label ?? (locale === "en" ? "Schedule consultation" : "Zakažite konsultacije");

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
      onClick={() => trackEvent("booking_click", { location: "cta" })}
      aria-label={locale === "en" ? "Open external booking link" : "Otvorite eksterni booking link"}
    >
      {buttonLabel}
    </a>
  );
}

"use client";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { trackEvent } from "@/src/lib/analytics";
import { pickLocaleText } from "@/src/lib/i18n/config";
import { siteConfig } from "@/src/lib/site-config";
import { cn } from "@/src/lib/utils";

type TrackedPhoneLinkProps = {
  className?: string;
  trackingLocation?: string;
  label?: string;
};

export function TrackedPhoneLink({
  className,
  trackingLocation = "phone_link",
  label,
}: TrackedPhoneLinkProps) {
  const { locale } = useLocale();

  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className={cn(className)}
      onClick={() => trackEvent("phone_click", { location: trackingLocation })}
      aria-label={pickLocaleText(locale, {
        sr: "Pozovite studio",
        en: "Call the studio",
        de: "Studio anrufen",
      })}
    >
      {label ?? siteConfig.phone}
    </a>
  );
}

"use client";

import Link from "next/link";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { trackEvent } from "@/src/lib/analytics";
import { cn } from "@/src/lib/utils";

type IntakeLinkProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

export function IntakeLink({
  label,
  className,
  variant = "secondary",
}: IntakeLinkProps) {
  const { locale } = useLocale();
  const buttonLabel = label ?? (locale === "en" ? "Start intake" : "Popunite upitnik");

  return (
    <Link
      href="/intake/start"
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition",
        variant === "primary" ? "btn-primary" : "btn-secondary",
        className,
      )}
      onClick={() => trackEvent("intake_click", { location: "cta" })}
      aria-label={
        locale === "en"
          ? "Open client intake wizard"
          : "Otvorite klijentski intake upitnik"
      }
    >
      {buttonLabel}
    </Link>
  );
}

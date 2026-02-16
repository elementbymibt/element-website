"use client";

import Link from "next/link";
import { useState } from "react";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { trackEvent } from "@/src/lib/analytics";
import { cn } from "@/src/lib/utils";

type NewsletterFormProps = {
  source?: "newsletter" | "guide";
  buttonLabel?: string;
  placeholder?: string;
  className?: string;
  redirectOnSuccess?: boolean;
};

type LeadApiResponse = {
  status: "success" | "error";
  message: string;
};

export function NewsletterForm({
  source = "newsletter",
  buttonLabel,
  placeholder,
  className,
  redirectOnSuccess = false,
}: NewsletterFormProps) {
  const { locale } = useLocale();
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const submitLabel = buttonLabel ?? (locale === "en" ? "Subscribe" : "Prijavite se");
  const inputPlaceholder =
    placeholder ?? (locale === "en" ? "Enter your email" : "Unesite email adresu");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "");
    const website = String(formData.get("website") ?? "");

    setPending(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          website,
          source,
        }),
      });

      const result = (await response.json()) as LeadApiResponse;

      if (!response.ok || result.status === "error") {
        setStatus("error");
        setMessage(
          result.message ||
            (locale === "en"
              ? "Something went wrong. Please try again."
              : "Došlo je do greške. Pokušajte ponovo."),
        );
        return;
      }

      setStatus("success");
      setMessage(
        result.message ||
          (locale === "en"
            ? "Thank you. Your subscription has been received."
            : "Hvala. Vaša prijava je uspešno poslata."),
      );
      if (source === "newsletter") {
        trackEvent("newsletter_submit", { source });
      } else {
        trackEvent("lead_submit", { source });
      }
      form.reset();

      if (redirectOnSuccess) {
        if (typeof window !== "undefined") {
          window.location.assign("/thank-you?type=lead");
        }
      }
    } catch {
      setStatus("error");
      setMessage(
        locale === "en"
          ? "Something went wrong. Please try again."
          : "Došlo je do greške. Pokušajte ponovo.",
      );
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-3", className)}
      aria-label={locale === "en" ? "Newsletter form" : "Newsletter forma"}
    >
      <label className="sr-only" htmlFor={`${source}-email`}>
        {locale === "en" ? "Email address" : "Email adresa"}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`${source}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={inputPlaceholder}
          className="border-brand-neutral-500 text-brand-ink placeholder:text-brand-earth/70 focus-visible:ring-brand-gold w-full rounded-full border bg-white px-5 py-3 text-sm transition outline-none focus-visible:ring-2"
          aria-label={locale === "en" ? "Email address" : "Email adresa"}
        />
        <button
          type="submit"
          disabled={pending}
          className="btn-primary inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? (locale === "en" ? "Sending..." : "Slanje...") : submitLabel}
        </button>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${source}-website`}>Website</label>
        <input
          id={`${source}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="text-brand-earth flex items-start gap-3 text-xs leading-relaxed">
        <input
          type="checkbox"
          name="consent"
          required
          className="border-brand-neutral-500 mt-0.5 h-4 w-4 rounded accent-[var(--brand-gold)]"
        />
        <span>
          {locale === "en" ? "I agree to the " : "Saglasan/na sam sa "}
          <Link
            href="/privacy"
            className="text-brand-burgundy decoration-brand-gold font-semibold underline underline-offset-4"
          >
            {locale === "en" ? "Privacy Policy" : "Politikom privatnosti"}
          </Link>
          .
        </span>
      </label>

      {status === "error" ? (
        <p className="text-sm text-red-700" role="status">
          {message}
        </p>
      ) : null}
      {status === "success" && !redirectOnSuccess ? (
        <p className="text-brand-green text-sm" role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

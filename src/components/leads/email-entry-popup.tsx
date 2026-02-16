"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { trackEvent } from "@/src/lib/analytics";
import { pickLocaleText } from "@/src/lib/i18n/config";
import { cn } from "@/src/lib/utils";

type LeadApiResponse = {
  status: "success" | "error";
  message: string;
};

const COOKIE_KEY = "element_email_popup";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

function getCookie(name: string) {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1] ?? "") : "";
}

function setCookie(name: string, value: string, maxAgeSeconds: number) {
  if (typeof document === "undefined") return;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value,
  )}; path=/; max-age=${maxAgeSeconds}; samesite=lax`;
}

export function EmailEntryPopup({ className }: { className?: string }) {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const emailRef = useRef<HTMLInputElement | null>(null);

  const t = useMemo(() => {
    return {
      title: pickLocaleText(locale, {
        sr: "Pre nego što krenemo…",
        en: "Before we begin…",
        de: "Bevor wir starten…",
      }),
      body: pickLocaleText(locale, {
        sr: "Ostavite email i poslaćemo vam mini vodič: Kako da izbegnete 7 najčešćih grešaka u uređenju prostora.",
        en: "Leave your email and we’ll send you a mini guide: How to avoid 7 common mistakes in space planning.",
        de: "Hinterlassen Sie Ihre E-Mail und wir senden Ihnen einen Mini-Guide: So vermeiden Sie die 7 häufigsten Fehler bei der Raumgestaltung.",
      }),
      emailLabel: pickLocaleText(locale, {
        sr: "Email adresa",
        en: "Email address",
        de: "E-Mail-Adresse",
      }),
      emailPlaceholder: pickLocaleText(locale, {
        sr: "Unesite email",
        en: "Enter your email",
        de: "E-Mail eingeben",
      }),
      send: pickLocaleText(locale, { sr: "Pošalji", en: "Send", de: "Senden" }),
      skip: pickLocaleText(locale, {
        sr: "Nastavi bez unosa",
        en: "Continue without email",
        de: "Ohne Eingabe fortfahren",
      }),
      consentPrefix: pickLocaleText(locale, {
        sr: "Saglasan/na sam sa ",
        en: "I agree to the ",
        de: "Ich stimme der ",
      }),
      consentLink: pickLocaleText(locale, {
        sr: "Politikom privatnosti",
        en: "Privacy Policy",
        de: "Datenschutzerklärung",
      }),
      consentSuffix: locale === "en" ? "" : "",
    };
  }, [locale]);

  useEffect(() => {
    const alreadyDismissed = Boolean(getCookie(COOKIE_KEY));
    if (alreadyDismissed) return;

    const timeout = window.setTimeout(() => setOpen(true), 650);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleSkip();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => emailRef.current?.focus(), 50);
    }
  }, [open]);

  const handleSkip = () => {
    setCookie(COOKIE_KEY, "1", COOKIE_MAX_AGE_SECONDS);
    trackEvent("email_popup_skip", { locale });
    setOpen(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = String(formData.get("email") ?? "")
      .trim()
      .toLowerCase();
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
          source: "popup",
        }),
      });

      const result = (await response.json()) as LeadApiResponse;

      if (!response.ok || result.status === "error") {
        setStatus("error");
        setMessage(
          result.message ||
            pickLocaleText(locale, {
              sr: "Došlo je do greške. Pokušajte ponovo.",
              en: "Something went wrong. Please try again.",
              de: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
            }),
        );
        return;
      }

      trackEvent("email_popup_submit", { locale });
      setCookie(COOKIE_KEY, "1", COOKIE_MAX_AGE_SECONDS);
      setStatus("success");
      setMessage(
        pickLocaleText(locale, {
          sr: "Hvala. Vodič stiže uskoro.",
          en: "Thank you. The guide will arrive shortly.",
          de: "Vielen Dank. Der Guide kommt in Kürze.",
        }),
      );
      form.reset();

      window.setTimeout(() => setOpen(false), 900);
    } catch {
      setStatus("error");
      setMessage(
        pickLocaleText(locale, {
          sr: "Došlo je do greške. Pokušajte ponovo.",
          en: "Something went wrong. Please try again.",
          de: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
        }),
      );
    } finally {
      setPending(false);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className={cn(
            "fixed inset-0 z-[60] grid place-items-center bg-black/45 px-4 py-10 backdrop-blur-sm",
            className,
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={t.title}
        >
          <motion.div
            className="border-brand-neutral-300/70 w-full max-w-xl rounded-3xl border bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-9"
            initial={{ opacity: 0, y: 14, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.985 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <p className="text-brand-gold text-xs tracking-[0.28em] uppercase">
              ÉLÉMENT
            </p>
            <h2 className="font-display text-brand-burgundy mt-3 text-3xl leading-tight md:text-4xl">
              {t.title}
            </h2>
            <p className="text-brand-earth mt-3 text-sm leading-relaxed md:text-base">
              {t.body}
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="email-popup" className="text-brand-earth text-sm font-medium">
                  {t.emailLabel}
                </label>
                <input
                  ref={emailRef}
                  id="email-popup"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t.emailPlaceholder}
                  className="border-brand-neutral-500 text-brand-ink placeholder:text-brand-earth/70 focus-visible:ring-brand-gold mt-2 w-full rounded-full border bg-white px-5 py-3 text-sm transition outline-none focus-visible:ring-2"
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
                  {t.consentPrefix}
                  <Link
                    href="/privacy"
                    className="text-brand-burgundy decoration-brand-gold font-semibold underline underline-offset-4"
                  >
                    {t.consentLink}
                  </Link>
                  {t.consentSuffix}
                </span>
              </label>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="popup-website">Website</label>
                <input id="popup-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {status === "error" ? (
                <p className="text-sm text-red-700" role="status">
                  {message}
                </p>
              ) : null}
              {status === "success" ? (
                <p className="text-brand-green text-sm" role="status">
                  {message}
                </p>
              ) : null}

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={pending}
                  className="btn-primary inline-flex min-h-11 items-center justify-center rounded-full px-7 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {pending
                    ? pickLocaleText(locale, { sr: "Slanje…", en: "Sending…", de: "Wird gesendet…" })
                    : t.send}
                </button>
                <button
                  type="button"
                  onClick={handleSkip}
                  className="text-brand-earth decoration-brand-gold inline-flex items-center justify-center text-sm font-semibold underline underline-offset-4"
                >
                  {t.skip}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

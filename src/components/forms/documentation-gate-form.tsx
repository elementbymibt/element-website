"use client";

import { useState } from "react";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { trackEvent } from "@/src/lib/analytics";

type DocumentationApiResponse = {
  status: "success" | "error";
  message: string;
  downloadUrl?: string;
};

export function DocumentationGateForm() {
  const { locale } = useLocale();
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | undefined>(undefined);

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
          source: "documentation",
        }),
      });

      const result = (await response.json()) as DocumentationApiResponse;

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
      setMessage(result.message || (locale === "en" ? "Access granted." : "Pristup je odobren."));
      setDownloadUrl(result.downloadUrl);
      trackEvent("lead_submit", { source: "documentation" });
      form.reset();
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
    <div className="border-brand-neutral-500 bg-brand-neutral-100 space-y-4 rounded-3xl border p-6 md:p-8">
      <form
        onSubmit={onSubmit}
        className="space-y-3"
        aria-label={locale === "en" ? "Documentation gate form" : "Forma za dokumentaciju"}
      >
        <label htmlFor="documentation-email" className="text-brand-earth text-sm">
          {locale === "en" ? "Email address" : "Email adresa"}
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="documentation-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={
              locale === "en"
                ? "Enter email to unlock documentation"
                : "Unesite email za pristup dokumentaciji"
            }
            className="border-brand-neutral-500 text-brand-ink placeholder:text-brand-earth/70 focus-visible:ring-brand-gold w-full rounded-full border bg-white px-5 py-3 text-sm transition outline-none focus-visible:ring-2"
          />
          <button
            type="submit"
            disabled={pending}
            className="btn-primary inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending
              ? locale === "en"
                ? "Verifying..."
                : "Provera..."
              : locale === "en"
                ? "Unlock access"
                : "Otključaj pristup"}
          </button>
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="documentation-website">Website</label>
          <input
            id="documentation-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </form>

      {status === "error" ? (
        <p className="text-sm text-red-700" role="status">
          {message}
        </p>
      ) : null}

      {status === "success" && downloadUrl ? (
        <div className="border-brand-gold/40 bg-brand-neutral-200 rounded-2xl border p-4">
          <p className="text-brand-ink text-sm">{message}</p>
          <a
            href={downloadUrl}
            className="text-brand-burgundy decoration-brand-gold mt-3 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            onClick={() => trackEvent("documentation_download", { file: "sample.pdf" })}
          >
            {locale === "en"
              ? "Download sample documentation (PDF)"
              : "Preuzmite sample dokumentaciju (PDF)"}
          </a>
        </div>
      ) : null}
    </div>
  );
}

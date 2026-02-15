"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  buttonLabel = "Prijavite se",
  placeholder = "Unesite email adresu",
  className,
  redirectOnSuccess = false,
}: NewsletterFormProps) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
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
        setMessage(result.message || "Došlo je do greške. Pokušajte ponovo.");
        return;
      }

      setStatus("success");
      setMessage(result.message || "Hvala. Vaša prijava je uspešno poslata.");
      trackEvent("lead_submit", { source });
      event.currentTarget.reset();

      if (redirectOnSuccess) {
        router.push("/thank-you?type=lead");
      }
    } catch {
      setStatus("error");
      setMessage("Došlo je do greške. Pokušajte ponovo.");
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-3", className)}
      aria-label="Lead forma"
    >
      <label className="sr-only" htmlFor={`${source}-email`}>
        Email adresa
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={`${source}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          className="border-brand-neutral-500 text-brand-ink placeholder:text-brand-earth/70 focus-visible:ring-brand-gold w-full rounded-full border bg-white px-5 py-3 text-sm transition outline-none focus-visible:ring-2"
          aria-label="Email adresa"
        />
        <button
          type="submit"
          disabled={pending}
          className="btn-primary inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Slanje..." : buttonLabel}
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

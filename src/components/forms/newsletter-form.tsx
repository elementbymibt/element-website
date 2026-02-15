"use client";

import { useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import {
  initialLeadActionState,
  submitGuideLead,
  submitNewsletterLead,
} from "@/src/actions/leads";
import { trackEvent } from "@/src/lib/analytics";
import { cn } from "@/src/lib/utils";

type NewsletterFormProps = {
  source?: "newsletter" | "guide";
  buttonLabel?: string;
  placeholder?: string;
  className?: string;
  redirectOnSuccess?: boolean;
};

export function NewsletterForm({
  source = "newsletter",
  buttonLabel = "Prijavite se",
  placeholder = "Unesite email adresu",
  className,
  redirectOnSuccess = false,
}: NewsletterFormProps) {
  const router = useRouter();
  const trackingRef = useRef(false);
  const action = source === "guide" ? submitGuideLead : submitNewsletterLead;
  const [state, formAction, pending] = useActionState(action, initialLeadActionState);

  useEffect(() => {
    if (state.status === "success" && !trackingRef.current) {
      trackingRef.current = true;
      trackEvent("lead_submit", { source });

      if (redirectOnSuccess) {
        router.push("/thank-you?type=lead");
      }
    }
  }, [redirectOnSuccess, router, source, state.status]);

  return (
    <form
      action={formAction}
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

      {state.status === "error" ? (
        <p className="text-sm text-red-700" role="status">
          {state.message}
        </p>
      ) : null}
      {state.status === "success" && !redirectOnSuccess ? (
        <p className="text-brand-green text-sm" role="status">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

"use client";

import { useActionState, useEffect, useRef } from "react";

import { initialLeadActionState, submitDocumentationLead } from "@/src/actions/leads";
import { trackEvent } from "@/src/lib/analytics";

export function DocumentationGateForm() {
  const trackedRef = useRef(false);
  const [state, formAction, pending] = useActionState(
    submitDocumentationLead,
    initialLeadActionState,
  );

  useEffect(() => {
    if (state.status === "success" && !trackedRef.current) {
      trackedRef.current = true;
      trackEvent("lead_submit", { source: "documentation" });
    }
  }, [state.status]);

  return (
    <div className="border-brand-neutral-500 bg-brand-neutral-100 space-y-4 rounded-3xl border p-6 md:p-8">
      <form action={formAction} className="space-y-3" aria-label="Forma za dokumentaciju">
        <label htmlFor="documentation-email" className="text-brand-earth text-sm">
          Email adresa
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="documentation-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Unesite email za pristup dokumentaciji"
            className="border-brand-neutral-500 text-brand-ink placeholder:text-brand-earth/70 focus-visible:ring-brand-gold w-full rounded-full border bg-white px-5 py-3 text-sm transition outline-none focus-visible:ring-2"
          />
          <button
            type="submit"
            disabled={pending}
            className="btn-primary inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Provera..." : "Otključaj pristup"}
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

      {state.status === "error" ? (
        <p className="text-sm text-red-700" role="status">
          {state.message}
        </p>
      ) : null}

      {state.status === "success" && state.downloadUrl ? (
        <div className="border-brand-gold/40 bg-brand-neutral-200 rounded-2xl border p-4">
          <p className="text-brand-ink text-sm">{state.message}</p>
          <a
            href={state.downloadUrl}
            className="text-brand-burgundy decoration-brand-gold mt-3 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            onClick={() => trackEvent("documentation_download", { file: "sample.pdf" })}
          >
            Preuzmite sample dokumentaciju (PDF)
          </a>
        </div>
      ) : null}
    </div>
  );
}

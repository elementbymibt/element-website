"use client";

import { useActionState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { initialContactActionState, submitContactForm } from "@/src/actions/contact";
import { trackEvent } from "@/src/lib/analytics";

const budgetOptions = [
  "Do 15.000€",
  "15.000€ - 35.000€",
  "35.000€ - 70.000€",
  "70.000€+",
];

const spaceTypeOptions = ["Stan", "Kuća", "Poslovni prostor", "Drugo"];

export function ContactForm() {
  const router = useRouter();
  const trackingRef = useRef(false);
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactActionState,
  );

  useEffect(() => {
    if (state.status === "success" && !trackingRef.current) {
      trackingRef.current = true;
      trackEvent("contact_submit");
      router.push("/thank-you?type=contact");
    }
  }, [router, state.status]);

  return (
    <form action={formAction} className="space-y-5" aria-label="Kontakt forma">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-brand-earth mb-2 block text-sm font-medium"
          >
            Ime i prezime
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="input-field"
            autoComplete="name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-brand-earth mb-2 block text-sm font-medium"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input-field"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="text-brand-earth mb-2 block text-sm font-medium"
          >
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="input-field"
            autoComplete="tel"
          />
        </div>
        <div>
          <label
            htmlFor="spaceType"
            className="text-brand-earth mb-2 block text-sm font-medium"
          >
            Tip prostora
          </label>
          <select id="spaceType" name="spaceType" required className="input-field">
            <option value="">Izaberite</option>
            {spaceTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="budgetRange"
          className="text-brand-earth mb-2 block text-sm font-medium"
        >
          Budžet range
        </label>
        <select id="budgetRange" name="budgetRange" required className="input-field">
          <option value="">Izaberite okvirni budžet</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-brand-earth mb-2 block text-sm font-medium"
        >
          Poruka
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="input-field min-h-36 rounded-3xl"
          placeholder="Ukratko opišite šta želite da postignete u prostoru."
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
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

      <button
        type="submit"
        disabled={pending}
        className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Slanje..." : "Pošaljite upit"}
      </button>
    </form>
  );
}

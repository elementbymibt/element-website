"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { trackEvent } from "@/src/lib/analytics";

const budgetOptions = [
  "Do 15.000€",
  "15.000€ - 35.000€",
  "35.000€ - 70.000€",
  "70.000€+",
];

const spaceTypeOptions = ["Stan", "Kuća", "Poslovni prostor", "Drugo"];

type ContactApiResponse = {
  status: "success" | "error";
  message: string;
};

export function ContactForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      budgetRange: String(formData.get("budgetRange") ?? ""),
      spaceType: String(formData.get("spaceType") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    setPending(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as ContactApiResponse;

      if (!response.ok || result.status === "error") {
        setStatus("error");
        setMessage(result.message || "Došlo je do greške. Pokušajte ponovo.");
        return;
      }

      setStatus("success");
      setMessage(result.message || "Hvala. Vaša poruka je uspešno poslata.");
      trackEvent("contact_submit");
      event.currentTarget.reset();
      router.push("/thank-you?type=contact");
    } catch {
      setStatus("error");
      setMessage("Došlo je do greške. Pokušajte ponovo.");
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label="Kontakt forma">
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

      {status === "error" ? (
        <p className="text-sm text-red-700" role="status">
          {message}
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

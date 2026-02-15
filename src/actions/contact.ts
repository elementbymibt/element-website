"use server";

import { leadAdapter } from "@/src/lib/lead-adapter";

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialContactActionState: ContactActionState = {
  status: "idle",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const honeypot = formData.get("website");

  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return {
      status: "success",
      message: "Poruka je uspešno poslata.",
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const budgetRange = String(formData.get("budgetRange") ?? "").trim();
  const spaceType = String(formData.get("spaceType") ?? "").trim();

  if (!name || !email || !phone || !message || !budgetRange || !spaceType) {
    return {
      status: "error",
      message: "Molimo popunite sva obavezna polja.",
    };
  }

  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "Unesite ispravnu email adresu.",
    };
  }

  try {
    await leadAdapter.saveContact({
      name,
      email,
      phone,
      message,
      budgetRange,
      spaceType,
    });

    return {
      status: "success",
      message: "Hvala. Vaša poruka je uspešno poslata.",
    };
  } catch {
    return {
      status: "error",
      message: "Došlo je do greške. Pokušajte ponovo.",
    };
  }
}

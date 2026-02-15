"use server";

import { leadAdapter } from "@/src/lib/lead-adapter";

export type LeadActionState = {
  status: "idle" | "success" | "error";
  message: string;
  downloadUrl?: string;
};

export const initialLeadActionState: LeadActionState = {
  status: "idle",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function submitLead(
  formData: FormData,
  source: "newsletter" | "guide" | "documentation",
): Promise<LeadActionState> {
  const honeypot = formData.get("website");

  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return {
      status: "success",
      message: "Prijava je uspešno evidentirana.",
      downloadUrl: source === "documentation" ? "/docs/sample.pdf" : undefined,
    };
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "Unesite ispravnu email adresu.",
    };
  }

  try {
    await leadAdapter.saveLead({
      email,
      source,
    });

    return {
      status: "success",
      message:
        source === "documentation"
          ? "Pristup je odobren. Možete preuzeti dokumentaciju."
          : "Hvala. Vaša prijava je uspešno poslata.",
      downloadUrl: source === "documentation" ? "/docs/sample.pdf" : undefined,
    };
  } catch {
    return {
      status: "error",
      message: "Došlo je do greške. Pokušajte ponovo.",
    };
  }
}

export async function submitNewsletterLead(
  _prevState: LeadActionState,
  formData: FormData,
): Promise<LeadActionState> {
  return submitLead(formData, "newsletter");
}

export async function submitGuideLead(
  _prevState: LeadActionState,
  formData: FormData,
): Promise<LeadActionState> {
  return submitLead(formData, "guide");
}

export async function submitDocumentationLead(
  _prevState: LeadActionState,
  formData: FormData,
): Promise<LeadActionState> {
  return submitLead(formData, "documentation");
}

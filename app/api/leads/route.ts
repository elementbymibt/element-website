import { NextResponse } from "next/server";

import { leadAdapter } from "@/src/lib/lead-adapter";

export const runtime = "nodejs";

type LeadSource = "newsletter" | "guide" | "documentation" | "popup";

type LeadRequestBody = {
  email?: string;
  website?: string;
  source?: LeadSource;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadRequestBody;

    const honeypot = (body.website ?? "").toString().trim();
    const source = body.source ?? "newsletter";
    const email = (body.email ?? "").toString().trim().toLowerCase();

    if (honeypot) {
      return NextResponse.json({
        status: "success",
        message: "Prijava je uspešno evidentirana.",
        downloadUrl: source === "documentation" ? "/docs/sample.pdf" : undefined,
      });
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          status: "error",
          message: "Unesite ispravnu email adresu.",
        },
        { status: 400 },
      );
    }

    await leadAdapter.saveLead({
      email,
      source,
    });

    return NextResponse.json({
      status: "success",
      message:
        source === "documentation"
          ? "Pristup je odobren. Možete preuzeti dokumentaciju."
          : "Hvala. Vaša prijava je uspešno poslata.",
      downloadUrl: source === "documentation" ? "/docs/sample.pdf" : undefined,
    });
  } catch {
    return NextResponse.json(
      {
        status: "error",
        message: "Došlo je do greške. Pokušajte ponovo.",
      },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";

import { leadAdapter } from "@/src/lib/lead-adapter";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  budgetRange?: string;
  spaceType?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const honeypot = (body.website ?? "").toString().trim();

    if (honeypot) {
      return NextResponse.json({
        status: "success",
        message: "Poruka je uspešno poslata.",
      });
    }

    const name = (body.name ?? "").toString().trim();
    const email = (body.email ?? "").toString().trim().toLowerCase();
    const phone = (body.phone ?? "").toString().trim();
    const message = (body.message ?? "").toString().trim();
    const budgetRange =
      (body.budgetRange ?? "").toString().trim() || "Nije navedeno";
    const spaceType = (body.spaceType ?? "").toString().trim() || "Nije navedeno";

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          status: "error",
          message: "Molimo popunite sva obavezna polja.",
        },
        { status: 400 },
      );
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

    await leadAdapter.saveContact({
      name,
      email,
      phone,
      message,
      budgetRange,
      spaceType,
    });

    return NextResponse.json({
      status: "success",
      message: "Hvala. Vaša poruka je uspešno poslata.",
    });
  } catch (error) {
    console.error("[contact] submit failed", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Došlo je do greške. Pokušajte ponovo.",
      },
      { status: 500 },
    );
  }
}

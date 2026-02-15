import type { IntakeDraft } from "@/src/lib/intake/types";
import { siteConfig } from "@/src/lib/site-config";

function formatMoney(value: number | null) {
  if (typeof value !== "number") {
    return "N/A";
  }

  return `${value.toLocaleString("sr-RS")} EUR`;
}

export async function notifyIntakeSubmitted(input: {
  intake: IntakeDraft;
  projectId: string;
}) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const emailTo = process.env.CONTACT_EMAIL_TO?.trim();

  if (!apiKey || !emailTo) {
    return { sent: false, reason: "missing_env" as const };
  }

  const baseUrl = siteConfig.baseUrl;
  const projectUrl = `${baseUrl}/projects/${input.projectId}`;
  const intakeUrl = `${baseUrl}/intake/${input.intake.id}`;
  const subjectCity = input.intake.basics.city || "bez-grada";

  const textBody = [
    "Novi intake je popunjen.",
    "",
    `Projekt ID: ${input.projectId}`,
    `Intake ID: ${input.intake.id}`,
    `Grad: ${input.intake.basics.city || "N/A"}`,
    `Tip prostora: ${input.intake.basics.propertyType}`,
    `Kvadratura: ${input.intake.basics.total_m2 ?? "N/A"} m2`,
    `Budžet: ${formatMoney(input.intake.budget.minTotal)} - ${formatMoney(input.intake.budget.maxTotal)}`,
    `Stil: ${input.intake.style.selectedStyles.join(", ") || "N/A"}`,
    `Mood: ${input.intake.mood.selectedMoods.join(", ") || "N/A"}`,
    "",
    `Project dashboard: ${projectUrl}`,
    `Edit intake: ${intakeUrl}`,
    "",
    "Kompletan intake_json:",
    JSON.stringify(input.intake, null, 2),
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: "ÉLÉMENT Intake <onboarding@resend.dev>",
      to: emailTo,
      subject: `[Intake] ${subjectCity} · ${input.intake.basics.propertyType}`,
      text: textBody,
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "resend_error");
    throw new Error(`Intake email failed: ${details}`);
  }

  return { sent: true as const };
}

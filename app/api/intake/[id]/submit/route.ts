import { NextResponse } from "next/server";

import { notifyIntakeSubmitted } from "@/src/lib/intake/notify";
import { intakeStore } from "@/src/lib/intake/store";
import type { IntakeDraft } from "@/src/lib/intake/types";

export const runtime = "nodejs";

type SubmitRequestBody = {
  confirmContradictions?: boolean;
  draft?: Partial<IntakeDraft>;
};

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function normalizeId(id: string) {
  return id.trim().toLowerCase();
}

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const params = await context.params;
  const id = normalizeId(params.id);

  if (!UUID_PATTERN.test(id)) {
    return NextResponse.json(
      {
        status: "error",
        message: "Nevalidan intake ID.",
      },
      { status: 400 },
    );
  }

  try {
    const body = (await request.json()) as SubmitRequestBody;

    if (body.draft) {
      await intakeStore.saveDraft(id, {
        ...body.draft,
        currentStep: 12,
      });
    }

    const result = await intakeStore.submitDraft(id, Boolean(body.confirmContradictions));

    if (result.status === "needs_confirmation") {
      return NextResponse.json(
        {
          status: "needs_confirmation",
          message: "Pre potvrde proverite potencijalne kontradikcije.",
          contradictions: result.contradictions,
          intake: result.intake,
        },
        { status: 409 },
      );
    }

    const projectId = result.project?.id ?? id;

    // Email notifikacija je best-effort i ne sme da blokira submit flow.
    try {
      await notifyIntakeSubmitted({
        intake: result.intake,
        projectId,
      });
    } catch (error) {
      console.error("[intake] notifyIntakeSubmitted failed", error);
    }

    return NextResponse.json({
      status: "success",
      message: "Intake je uspešno završen.",
      projectId,
      intake: result.intake,
      contradictions: result.contradictions,
      redirectTo: `/projects/${projectId}`,
    });
  } catch {
    return NextResponse.json(
      {
        status: "error",
        message: "Nismo uspeli da završimo intake. Pokušajte ponovo.",
      },
      { status: 500 },
    );
  }
}

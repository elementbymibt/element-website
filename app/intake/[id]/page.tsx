import { notFound } from "next/navigation";

import { IntakeWizard } from "@/src/components/intake/intake-wizard";
import { Container } from "@/src/components/ui/container";
import { buildMetadata } from "@/src/lib/seo";
import { intakeStore } from "@/src/lib/intake/store";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: PageProps) {
  const params = await props.params;

  return buildMetadata({
    title: `Intake ${params.id}`,
    description:
      "Ultimate Client Intake Wizard - kompletan dizajn brief sa hard i soft preferencijama.",
    path: `/intake/${params.id}`,
  });
}

export default async function IntakePage(props: PageProps) {
  const params = await props.params;
  const record = await intakeStore.getIntakeWithProject(params.id.toLowerCase());

  if (!record) {
    notFound();
  }

  return (
    <Container className="py-10 md:py-14">
      <IntakeWizard initialIntake={record.intake} />
    </Container>
  );
}

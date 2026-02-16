import { notFound } from "next/navigation";

import { IntakeWizardLite } from "@/src/components/intake/intake-wizard-lite";
import { Container } from "@/src/components/ui/container";
import { buildMetadata } from "@/src/lib/seo";
import { intakeStore } from "@/src/lib/intake/store";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: PageProps) {
  const params = await props.params;

  return buildMetadata({
    title: "Upitnik",
    description:
      "Nastavite klijentski upitnik i završite projektni brief.",
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
      <IntakeWizardLite initialIntake={record.intake} />
    </Container>
  );
}

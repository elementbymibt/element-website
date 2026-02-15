import { notFound } from "next/navigation";

import { ProjectDashboard } from "@/src/components/projects/project-dashboard";
import { Container } from "@/src/components/ui/container";
import { buildMetadata } from "@/src/lib/seo";
import { intakeStore } from "@/src/lib/intake/store";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: PageProps) {
  const params = await props.params;

  return buildMetadata({
    title: `Project ${params.id}`,
    description:
      "Dashboard projekta sa intake sažetkom, statusom i spremnim CTA-om za generisanje predloga.",
    path: `/projects/${params.id}`,
  });
}

export default async function ProjectPage(props: PageProps) {
  const params = await props.params;
  const record = await intakeStore.getIntakeWithProject(params.id.toLowerCase());

  if (!record) {
    notFound();
  }

  return (
    <Container className="py-10 md:py-14">
      <ProjectDashboard intake={record.intake} project={record.project} />
    </Container>
  );
}

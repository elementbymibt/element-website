import { ProjectGrid } from "@/src/components/portfolio/project-grid";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { projects } from "@/src/data/projects";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Naši projekti",
  description:
    "Portfolio studija ÉLÉMENT: rezidencijalni i poslovni enterijeri sa premium pristupom.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Portfolio"
          title="Naši projekti"
          description="Istražite odabrane realizacije po kategorijama: stan, kuća i poslovni prostor."
        />
      </FadeIn>
      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </Container>
  );
}

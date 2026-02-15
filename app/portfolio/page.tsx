import { ProjectGrid } from "@/src/components/portfolio/project-grid";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { projects } from "@/src/data/projects";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Naši projekti",
  description:
    "Portfolio studija ÉLÉMENT: rezidencijalni i poslovni enterijeri sa premium pristupom.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Portfolio"
          title={textByLocale(locale, { sr: "Naši projekti", en: "Our projects" })}
          description={textByLocale(locale, {
            sr: "Istražite odabrane realizacije po kategorijama: stan, kuća i poslovni prostor.",
            en: "Explore selected works by category: apartment, house and business space.",
          })}
        />
      </FadeIn>
      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </Container>
  );
}

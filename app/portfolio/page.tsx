import Image from "next/image";

import { ProjectGrid } from "@/src/components/portfolio/project-grid";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { projects } from "@/src/data/projects";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Odabrani projekti studija ÉLÉMENT: rezidencijalni i poslovni enterijeri sa smirenim luksuzom i preciznim detaljem.",
  path: "/portfolio",
});

export default async function PortfolioPage() {
  const locale = await getCurrentLocale();

  return (
    <div className="space-y-16 pb-10">
      <section className="bg-brand-burgundy text-brand-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/hero/portfolio-hero.jpg"
            alt={textByLocale(locale, {
              sr: "Luksuzna kuhinja i open space – ÉLÉMENT",
              en: "Luxury kitchen and open-space interior – ÉLÉMENT",
              de: "Luxusküche und Open-Space-Interieur – ÉLÉMENT",
            })}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="from-brand-burgundy via-brand-burgundy/85 to-brand-burgundy/60 absolute inset-0 bg-gradient-to-r" />
        </div>

        <Container className="relative py-20 md:py-28">
          <FadeIn className="max-w-3xl">
            <p className="text-brand-gold text-xs tracking-[0.35em] uppercase">
              {textByLocale(locale, { sr: "Portfolio", en: "Portfolio", de: "Portfolio" })}
            </p>
            <h1 className="font-display mt-5 text-5xl leading-tight md:text-7xl">
              {textByLocale(locale, { sr: "Naši projekti", en: "Selected projects", de: "Ausgewählte Projekte" })}
            </h1>
            <p className="text-brand-neutral-200 mt-6 text-base md:text-lg">
              {textByLocale(locale, {
                sr: "Rezidencijalni i poslovni enterijeri sa jasnim potpisom: smiren luksuz, disciplinovan detalj i funkcija koja traje.",
                en: "Residential and business interiors with a clear signature: quiet luxury, disciplined detailing and lasting function.",
                de: "Wohn- und Geschäftsinterieurs mit klarer Handschrift: ruhiger Luxus, disziplinierte Details und langlebige Funktion.",
              })}
            </p>
          </FadeIn>
        </Container>
      </section>

      <Container className="py-2">
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Kategorije", en: "Categories", de: "Kategorien" })}
            title={textByLocale(locale, { sr: "Istražite po tipu prostora", en: "Explore by space type", de: "Nach Raumtyp entdecken" })}
            description={textByLocale(locale, {
              sr: "Filteri su tu da brzo pronađete projekte najbliže vašem obimu i tipu prostora.",
              en: "Use filters to quickly find work closest to your scope and space type.",
              de: "Nutzen Sie die Filter, um schnell Projekte zu finden, die Ihrem Umfang und Raumtyp am nächsten sind.",
            })}
          />
        </FadeIn>

        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </div>
  );
}

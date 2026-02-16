import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectCarousel } from "@/src/components/portfolio/project-carousel";
import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { IntakeLink } from "@/src/components/ui/intake-link";
import { getProjectBySlug, projects } from "@/src/data/projects";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({
      title: "Projekat nije pronađen",
      description: "Traženi projekat ne postoji.",
      path: `/portfolio/${slug}`,
    });
  }

  return buildMetadata({
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
    path: `/portfolio/${project.slug}`,
    image: project.coverImage,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const locale = await getCurrentLocale();

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-16 md:py-20">
      <Link
        href="/portfolio"
        className="text-brand-earth decoration-brand-gold text-sm underline underline-offset-4"
      >
        {textByLocale(locale, { sr: "← Nazad na portfolio", en: "← Back to portfolio" })}
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <ProjectCarousel images={project.images} title={project.title} />

        <aside className="border-brand-neutral-500/70 space-y-6 rounded-3xl border bg-white p-7 shadow-[0_16px_35px_rgba(59,13,24,0.08)]">
          <div className="space-y-2">
            <p className="text-brand-gold text-xs tracking-[0.22em] uppercase">
              {project.category}
            </p>
            <h1 className="font-display text-brand-burgundy text-4xl">{project.title}</h1>
            <p className="text-brand-earth text-sm">
              {project.location} • {project.year}
            </p>
          </div>

          <p className="text-brand-ink text-sm">{project.description}</p>

          <div>
            <h2 className="text-brand-gold text-sm tracking-[0.18em] uppercase">
              {textByLocale(locale, { sr: "Šta smo radili", en: "What we delivered" })}
            </h2>
            <ul className="text-brand-ink mt-3 space-y-2 text-sm">
              {project.whatWeDid.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="bg-brand-gold mt-1 inline-block h-1.5 w-1.5 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <BookingLink className="px-5 py-2.5 text-xs" />
            <IntakeLink className="px-5 py-2.5 text-xs font-semibold" />
            <Link
              href="/contact"
              className="btn-secondary text-brand-burgundy inline-flex items-center rounded-full px-5 py-2.5 text-xs font-semibold"
            >
              {textByLocale(locale, { sr: "Pošaljite upit", en: "Send inquiry" })}
            </Link>
          </div>
        </aside>
      </div>
    </Container>
  );
}

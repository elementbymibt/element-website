import Link from "next/link";
import Image from "next/image";

import { NewsletterForm } from "@/src/components/forms/newsletter-form";
import { ProjectGrid } from "@/src/components/portfolio/project-grid";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { featuredProjects } from "@/src/data/projects";
import {
  getProcessSteps,
  getServicePackages,
  getTestimonials,
} from "@/src/data/site-content-i18n";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Početna",
  description:
    "ÉLÉMENT (by M·I·B·T) je studio za dizajn enterijera. Definišemo karakter prostora kroz smirenu eleganciju, proporciju i funkciju.",
  path: "/",
});

export default async function HomePage() {
  const locale = await getCurrentLocale();
  const processSteps = getProcessSteps(locale);
  const servicePackages = getServicePackages(locale);
  const testimonials = getTestimonials(locale);

  return (
    <div className="space-y-24 pb-10">
      <section className="bg-brand-burgundy text-brand-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/hero/home-hero.jpg"
            alt="Luksuzni enterijer dnevne zone – ÉLÉMENT"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="from-brand-burgundy via-brand-burgundy/85 to-brand-burgundy/60 absolute inset-0 bg-gradient-to-r" />
        </div>

        <Container className="relative py-28 md:py-36">
          <FadeIn className="max-w-4xl">
            <p className="text-brand-gold text-xs tracking-[0.35em] uppercase">
              ÉLÉMENT (by M·I·B·T)
            </p>
            <h1 className="font-display text-brand-neutral-100 mt-5 text-5xl leading-tight md:text-7xl">
              {textByLocale(locale, {
                sr: "Postoji jedan element koji čini razliku. Mi ga otkrivamo. Vi ga živite.",
                en: "There is one element that makes the difference. We reveal it. You live it.",
              })}
            </h1>
            <p className="text-brand-neutral-200 mt-6 max-w-2xl text-base md:text-lg">
              {textByLocale(locale, {
                sr: "Element nije detalj. Element je identitet prostora. Onaj nevidljivi sloj koji enterijeru daje ravnotežu, proporciju i funkcionalnost. Mi ne uređujemo prostor. Mi definišemo njegov karakter.",
                en: "Element is not a detail. Element is the identity of a space: the invisible layer that gives balance, proportion and function. We don’t decorate. We define character.",
              })}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs tracking-[0.22em] uppercase text-white/80">
              <span className="inline-flex items-center gap-2">
                <span className="bg-brand-gold inline-block h-1.5 w-1.5 rounded-full" />
                {textByLocale(locale, { sr: "Idejno rešenje", en: "Concept design" })}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="bg-brand-gold inline-block h-1.5 w-1.5 rounded-full" />
                {textByLocale(locale, { sr: "3D vizuelizacija", en: "3D visualization" })}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="bg-brand-gold inline-block h-1.5 w-1.5 rounded-full" />
                {textByLocale(locale, { sr: "Finalni paket smernica", en: "Final guidance package" })}
              </span>
            </div>
            <p className="mt-8 text-sm text-white/80">
              {textByLocale(locale, {
                sr: "Spremni da pronađemo Vaš element?",
                en: "Ready to find your element?",
              })}
            </p>
            <Link
              href="/contact"
              className="text-brand-neutral-100 decoration-brand-gold mt-6 inline-flex text-sm font-semibold underline underline-offset-4"
            >
              {textByLocale(locale, { sr: "Kontaktirajte nas", en: "Contact us" })}
            </Link>
          </FadeIn>
        </Container>
      </section>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Odabrani radovi", en: "Selected works" })}
            title={textByLocale(locale, { sr: "Izdvojeni projekti", en: "Featured projects" })}
            description={textByLocale(locale, {
              sr: "Kratak izbor projekata koji prikazuju naš standard razrade, materijala i atmosfere.",
              en: "A concise selection of projects that represents our standard of detailing, materials and atmosphere.",
            })}
          />
        </FadeIn>
        <div className="mt-10">
          <ProjectGrid projects={featuredProjects.slice(0, 4)} enableFilter={false} />
        </div>
        <Link
          href="/portfolio"
          className="text-brand-burgundy decoration-brand-gold mt-8 inline-flex text-sm font-semibold underline underline-offset-4"
        >
          {textByLocale(locale, { sr: "Pogledajte sve projekte", en: "View all projects" })}
        </Link>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Usluge", en: "Services" })}
            title={textByLocale(locale, { sr: "Kako izgleda saradnja", en: "How collaboration works" })}
            description={textByLocale(locale, {
              sr: "Tri faze koje donose jasan pravac, sigurnost pre realizacije i finalni set smernica za dosledan rezultat.",
              en: "Three phases that deliver direction, confidence before realization, and a final set of guidance for a consistent result.",
            })}
          />
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {servicePackages.slice(0, 3).map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.05}
              className="border-brand-neutral-500/70 rounded-3xl border bg-white p-6 shadow-[0_18px_40px_rgba(59,13,24,0.07)]"
            >
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">
                {item.subtitle}
              </p>
              <h3 className="font-display text-brand-burgundy mt-3 text-3xl">
                {item.name}
              </h3>
              <ul className="text-brand-ink mt-5 space-y-2 text-sm">
                {item.includes.slice(0, 3).map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="bg-brand-gold mt-1 inline-block h-1.5 w-1.5 rounded-full" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
        <Link
          href="/services"
          className="text-brand-burgundy decoration-brand-gold mt-8 inline-flex text-sm font-semibold underline underline-offset-4"
        >
          {textByLocale(locale, {
            sr: "Saznajte više",
            en: "Learn more",
          })}
        </Link>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Proces", en: "Process" })}
            title={textByLocale(locale, { sr: "Kako radimo", en: "How we work" })}
            description={textByLocale(locale, {
              sr: "Četiri jasna koraka koji smanjuju neizvesnost i drže kvalitet pod kontrolom.",
              en: "Four clear steps that reduce uncertainty and keep quality under control.",
            })}
          />
        </FadeIn>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <FadeIn
              key={step.title}
              delay={index * 0.04}
              className="border-brand-neutral-500/70 rounded-2xl border bg-white p-4"
            >
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">
                0{index + 1}
              </p>
              <h3 className="font-display text-brand-burgundy mt-2 text-2xl">
                {step.title}
              </h3>
              <p className="text-brand-earth mt-2 text-sm">{step.short}</p>
            </FadeIn>
          ))}
        </div>
        <Link
          href="/process"
          className="text-brand-burgundy decoration-brand-gold mt-8 inline-flex text-sm font-semibold underline underline-offset-4"
        >
          {textByLocale(locale, { sr: "Detaljan proces", en: "Detailed process" })}
        </Link>
      </Container>

      <Container>
        <FadeIn className="border-brand-neutral-500/60 rounded-3xl border bg-white p-8 md:p-10">
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Vodič", en: "Guide" })}
            title={textByLocale(locale, {
              sr: "Preuzmite vodič: 10 grešaka u uređenju",
              en: "Download the guide: 10 costly interior mistakes",
            })}
            description={textByLocale(locale, {
              sr: "Kratak vodič sa ključnim greškama koje najčešće povećavaju trošak i produžavaju rokove.",
              en: "A short guide covering mistakes that most often increase cost and delay timelines.",
            })}
          />
          <NewsletterForm
            source="guide"
            buttonLabel={locale === "en" ? "Get the guide" : "Preuzmi vodič"}
            redirectOnSuccess
            className="mt-6 max-w-xl"
          />
        </FadeIn>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Utisci", en: "Testimonials" })}
            title={textByLocale(locale, {
              sr: "Povratne informacije klijenata",
              en: "Client testimonials",
            })}
            description={textByLocale(locale, {
              sr: "Diskretna potvrda kvaliteta dolazi iz iskustva onih koji su prošli ceo proces sa nama.",
              en: "The strongest proof of quality comes from clients who completed the full process with us.",
            })}
          />
        </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={testimonial.author}
              delay={index * 0.06}
              className="border-brand-neutral-500/70 bg-brand-neutral-100 rounded-3xl border p-6"
            >
              <p className="font-display text-brand-burgundy text-2xl">
                “{testimonial.quote}”
              </p>
              <p className="text-brand-earth mt-4 text-sm tracking-wide">
                {testimonial.author}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  );
}

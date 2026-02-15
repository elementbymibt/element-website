import Link from "next/link";
import Image from "next/image";

import { NewsletterForm } from "@/src/components/forms/newsletter-form";
import { ProjectGrid } from "@/src/components/portfolio/project-grid";
import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { IntakeLink } from "@/src/components/ui/intake-link";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { featuredProjects } from "@/src/data/projects";
import {
  caseStudy,
  processSteps,
  servicePackages,
  signaturePoints,
  testimonials,
} from "@/src/data/site-content";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Početna",
  description:
    "ÉLÉMENT (by M·I·B·T) je premium studio za dizajn enterijera. Kreiramo rezidencijalne i poslovne prostore sa jasnim potpisom elegancije.",
  path: "/",
});

export default async function HomePage() {
  const locale = await getCurrentLocale();

  return (
    <div className="space-y-24 pb-10">
      <section className="bg-brand-burgundy text-brand-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/projects/p1-1.jpg"
            alt="Luksuzni enterijer"
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
                sr: "Enterijeri koji zrače tihim luksuzom.",
                en: "Interiors with a quiet luxury signature.",
              })}
            </h1>
            <p className="text-brand-neutral-200 mt-6 max-w-2xl text-base md:text-lg">
              {textByLocale(locale, {
                sr: "Projektujemo prostore koji izgledaju reprezentativno, funkcionišu precizno i ostaju relevantni kroz vreme.",
                en: "We design spaces that look representative, perform precisely and stay relevant over time.",
              })}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="btn-primary rounded-full px-7 py-3 text-sm font-semibold"
              >
                {textByLocale(locale, { sr: "Pogledajte projekte", en: "View projects" })}
              </Link>
              <IntakeLink
                label={textByLocale(locale, {
                  sr: "Popunite upitnik",
                  en: "Start intake",
                })}
                className="rounded-full px-7 py-3 text-sm font-semibold"
              />
              <BookingLink
                variant="secondary"
                className="text-brand-neutral-100 hover:text-brand-neutral-100 rounded-full px-7 py-3 text-sm font-semibold"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Selected Works"
            title={textByLocale(locale, { sr: "Izdvojeni projekti", en: "Featured projects" })}
            description={textByLocale(locale, {
              sr: "Šest prostora koji prikazuju naš standard razrade, materijalne kulture i estetske discipline.",
              en: "Six spaces that represent our standard of detailing, material culture and aesthetics.",
            })}
          />
        </FadeIn>
        <div className="mt-10">
          <ProjectGrid projects={featuredProjects} enableFilter={false} />
        </div>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Signature"
            title={textByLocale(locale, { sr: "Naš potpis", en: "Our signature" })}
            description={textByLocale(locale, {
              sr: "Dizajn odluke donosimo sa istim fokusom na atmosferu, ergonomiju i dugoročnu vrednost prostora.",
              en: "We make design decisions with equal focus on atmosphere, ergonomics and long-term value.",
            })}
          />
        </FadeIn>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {signaturePoints.map((point, index) => (
            <FadeIn
              key={point}
              delay={index * 0.05}
              className="border-brand-neutral-500/70 rounded-3xl border bg-white p-6 shadow-[0_14px_30px_rgba(59,13,24,0.06)]"
            >
              <p className="text-brand-ink text-sm">{point}</p>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title={textByLocale(locale, { sr: "Paketi usluga", en: "Service packages" })}
            description={textByLocale(locale, {
              sr: "Izaberite nivo podrške u skladu sa obimom projekta i stepenom uključenosti koji želite.",
              en: "Choose support level according to project scope and your desired involvement.",
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
              <p className="text-brand-earth mt-2 text-sm">{item.priceFrom}</p>
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
            sr: "Pogledajte kompletne pakete i cene",
            en: "Explore full packages and pricing",
          })}
        </Link>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Process"
            title={textByLocale(locale, { sr: "Kako radimo", en: "How we work" })}
            description={textByLocale(locale, {
              sr: "Proces od pet koraka koji smanjuje neizvesnost i drži kvalitet pod kontrolom.",
              en: "A five-step process that reduces uncertainty and keeps quality under control.",
            })}
          />
        </FadeIn>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
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
      </Container>

      <Container>
        <FadeIn className="border-brand-neutral-500/60 rounded-3xl border bg-white p-8 md:p-10">
          <SectionHeading
            eyebrow="Lead Magnet"
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
            eyebrow="Testimonials"
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

      <Container>
        <FadeIn className="border-brand-burgundy/20 from-brand-neutral-100 to-brand-neutral-200 rounded-3xl border bg-gradient-to-br p-8 md:p-10">
          <SectionHeading
            eyebrow="Case Study"
            title={caseStudy.title}
            description={textByLocale(locale, {
              sr: "Format rada: Problem → Rešenje → Rezultat",
              en: "Working format: Problem → Solution → Result",
            })}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="border-brand-neutral-500/70 rounded-2xl border bg-white p-5">
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">
                Problem
              </p>
              <p className="text-brand-ink mt-2 text-sm">{caseStudy.problem}</p>
            </article>
            <article className="border-brand-neutral-500/70 rounded-2xl border bg-white p-5">
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">
                Rešenje
              </p>
              <p className="text-brand-ink mt-2 text-sm">{caseStudy.solution}</p>
            </article>
            <article className="border-brand-neutral-500/70 rounded-2xl border bg-white p-5">
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">
                Rezultat
              </p>
              <p className="text-brand-ink mt-2 text-sm">{caseStudy.result}</p>
            </article>
          </div>
        </FadeIn>
      </Container>

      <Container>
        <FadeIn className="bg-brand-burgundy text-brand-neutral-100 rounded-3xl p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-brand-gold text-xs tracking-[0.3em] uppercase">
                Final CTA
              </p>
              <h2 className="font-display mt-2 text-4xl">
                {textByLocale(locale, {
                  sr: "Spremni za prostor nove kategorije?",
                  en: "Ready for a next-category space?",
                })}
              </h2>
              <p className="text-brand-neutral-200 mt-3 max-w-2xl">
                {textByLocale(locale, {
                  sr: "Rezervišite uvodne konsultacije ili nam pošaljite upit. Vraćamo se sa jasnim predlogom sledećeg koraka.",
                  en: "Book an intro consultation or send an inquiry. We return with a clear next-step proposal.",
                })}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <IntakeLink
                label={textByLocale(locale, { sr: "Krenite kroz upitnik", en: "Go to intake" })}
                className="rounded-full px-7 py-3 text-sm font-semibold"
              />
              <BookingLink className="rounded-full px-7 py-3 text-sm font-semibold" />
              <Link
                href="/contact"
                className="btn-secondary text-brand-neutral-100 inline-flex rounded-full px-7 py-3 text-sm font-semibold"
              >
                {textByLocale(locale, { sr: "Kontaktirajte nas", en: "Contact us" })}
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

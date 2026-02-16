import Link from "next/link";
import Image from "next/image";

import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { getAboutValues } from "@/src/data/site-content-i18n";
import { projects } from "@/src/data/projects";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "O nama",
  description:
    "Upoznajte ÉLÉMENT (by M·I·B·T): premium studio koji spaja estetsku disciplinu i tehničku preciznost.",
  path: "/about",
});

export default async function AboutPage() {
  const locale = await getCurrentLocale();
  const aboutValues = getAboutValues(locale);
  const highlights = [
    {
      label: "Residence 01",
      slug: projects[0]?.slug ?? "dorcol-residence",
      cover: projects[0]?.coverImage ?? "/projects/p01-01.jpg",
      alt: textByLocale(locale, {
        sr: "Residence 01 – ÉLÉMENT portfolio inspiracija",
        en: "Residence 01 – ÉLÉMENT portfolio highlight",
      }),
    },
    {
      label: "Urban Apartment",
      slug: projects[2]?.slug ?? "new-belgrade-penthouse",
      cover: projects[2]?.coverImage ?? "/projects/p03-01.jpg",
      alt: textByLocale(locale, {
        sr: "Urban Apartment – ÉLÉMENT portfolio inspiracija",
        en: "Urban Apartment – ÉLÉMENT portfolio highlight",
      }),
    },
    {
      label: "Minimal House",
      slug: projects[1]?.slug ?? "senjak-villa",
      cover: projects[1]?.coverImage ?? "/projects/p02-01.jpg",
      alt: textByLocale(locale, {
        sr: "Minimal House – ÉLÉMENT portfolio inspiracija",
        en: "Minimal House – ÉLÉMENT portfolio highlight",
      }),
    },
    {
      label: "Concept 04",
      slug: projects[3]?.slug ?? "zemun-loft-office",
      cover: projects[3]?.coverImage ?? "/projects/p04-01.jpg",
      alt: textByLocale(locale, {
        sr: "Concept 04 – ÉLÉMENT portfolio inspiracija",
        en: "Concept 04 – ÉLÉMENT portfolio highlight",
      }),
    },
  ];

  return (
    <div className="space-y-20 py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "O nama", en: "About" })}
            title={textByLocale(locale, {
              sr: "Studio koji definiše karakter prostora",
              en: "A studio that defines a space’s character",
            })}
            description={textByLocale(locale, {
              sr: "Smirena elegancija, disciplina detalja i proces koji donosi jasnoću.",
              en: "Calm elegance, detail discipline and a process that brings clarity.",
            })}
          />
        </FadeIn>

        <FadeIn className="border-brand-neutral-500/70 mt-8 rounded-3xl border bg-white p-8 md:p-10">
          <p className="text-brand-earth max-w-4xl text-sm leading-7 md:text-base">
            {textByLocale(locale, {
              sr: "ÉLÉMENT je studio za dizajn enterijera koji veruje da prostor mora da odražava način života svojih vlasnika.",
              en: "ÉLÉMENT is an interior design studio that believes a space must reflect the way its owners live.",
            })}
          </p>
          <p className="text-brand-earth mt-4 max-w-4xl text-sm leading-7 md:text-base">
            {textByLocale(locale, {
              sr: "Ne pratimo trendove po svaku cenu. Ne kreiramo enterijere za fotografiju. Kreiramo enterijere koji traju, funkcionišu i ostaju jednako snažni i nakon godina korišćenja.",
              en: "We don’t chase trends at any cost. We don’t design for a photo. We design spaces that last, function, and feel equally strong years later.",
            })}
          </p>
          <p className="text-brand-earth mt-4 max-w-4xl text-sm leading-7 md:text-base">
            {textByLocale(locale, {
              sr: "Svaki projekat razvijamo kroz pažljivo vođen proces — od ideje do jasno definisanog idejnog rešenja koje omogućava sigurnu realizaciju.",
              en: "Each project is developed through a carefully guided process: from idea to a clearly defined concept that enables confident realization.",
            })}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <FadeIn
                key={item.label}
                delay={index * 0.04}
                className="border-brand-neutral-500/70 group overflow-hidden rounded-2xl border bg-brand-neutral-100"
              >
                <Link href={`/portfolio/${item.slug}`} className="block">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.cover}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <div className="absolute left-4 right-4 bottom-4">
                      <p className="text-white text-xs tracking-[0.26em] uppercase">Portfolio</p>
                      <p className="font-display mt-1 text-2xl text-white">{item.label}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <p className="text-brand-earth mt-6 text-sm">
            {textByLocale(locale, {
              sr: "Spremni da pronađemo Vaš element?",
              en: "Ready to find your element?",
            })}
          </p>
        </FadeIn>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Vrednosti", en: "Values" })}
            title={textByLocale(locale, { sr: "Principi koji nas vode", en: "Principles we follow" })}
            description={textByLocale(locale, {
              sr: "Svaka odluka u projektu proverava se kroz ova četiri kriterijuma.",
              en: "Every project decision is checked against these four criteria.",
            })}
          />
        </FadeIn>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {aboutValues.map((value, index) => (
            <FadeIn
              key={value}
              delay={index * 0.05}
              className="border-brand-neutral-500/70 bg-brand-neutral-100 text-brand-ink rounded-2xl border p-5 text-sm"
            >
              {value}
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container>
        <FadeIn className="bg-brand-burgundy text-brand-neutral-100 rounded-3xl p-8 md:p-10">
          <h2 className="font-display text-4xl">
            {textByLocale(locale, { sr: "Spremni da pronađemo Vaš element?", en: "Ready to find your element?" })}
          </h2>
          <p className="text-brand-neutral-200 mt-3 max-w-2xl">
            {textByLocale(locale, {
              sr: "Pošaljite nam informacije o projektu i vraćamo se sa personalizovanim predlogom saradnje.",
              en: "Share your project details and we’ll return with a personalized collaboration proposal.",
            })}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="text-brand-neutral-100 decoration-brand-gold inline-flex items-center text-sm font-semibold underline underline-offset-4">
              {textByLocale(locale, { sr: "Kontakt", en: "Contact" })}
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

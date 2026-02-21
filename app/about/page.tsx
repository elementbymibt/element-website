import Link from "next/link";
import Image from "next/image";

import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { getProcessSteps } from "@/src/data/site-content-i18n";
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
  const processSteps = getProcessSteps(locale);
  const highlights = [
    {
      label: "Residence 01",
      slug: projects[0]?.slug ?? "dorcol-residence",
      cover: projects[0]?.coverImage ?? "/projects/p01-01.jpg",
      alt: textByLocale(locale, {
        sr: "Residence 01 – ÉLÉMENT portfolio inspiracija",
        en: "Residence 01 – ÉLÉMENT portfolio highlight",
        de: "Residence 01 – ÉLÉMENT Portfolio-Highlight",
      }),
    },
    {
      label: "Urban Apartment",
      slug: projects[2]?.slug ?? "new-belgrade-penthouse",
      cover: projects[2]?.coverImage ?? "/projects/p03-01.jpg",
      alt: textByLocale(locale, {
        sr: "Urban Apartment – ÉLÉMENT portfolio inspiracija",
        en: "Urban Apartment – ÉLÉMENT portfolio highlight",
        de: "Urban Apartment – ÉLÉMENT Portfolio-Highlight",
      }),
    },
    {
      label: "Minimal House",
      slug: projects[1]?.slug ?? "senjak-villa",
      cover: projects[1]?.coverImage ?? "/projects/p02-01.jpg",
      alt: textByLocale(locale, {
        sr: "Minimal House – ÉLÉMENT portfolio inspiracija",
        en: "Minimal House – ÉLÉMENT portfolio highlight",
        de: "Minimal House – ÉLÉMENT Portfolio-Highlight",
      }),
    },
    {
      label: "Koncept 04",
      slug: projects[3]?.slug ?? "zemun-loft-office",
      cover: projects[3]?.coverImage ?? "/projects/p04-01.jpg",
      alt: textByLocale(locale, {
        sr: "Koncept 04 – ÉLÉMENT portfolio inspiracija",
        en: "Concept 04 – ÉLÉMENT portfolio highlight",
        de: "Konzept 04 – ÉLÉMENT Portfolio-Highlight",
      }),
    },
  ];

  return (
    <div className="space-y-20 py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "O nama", en: "About", de: "Über uns" })}
            title={textByLocale(locale, {
              sr: "Postoji jedan element koji čini razliku. Mi ga otkrivamo. Vi ga živite.",
              en: "There is one element that makes the difference. We reveal it. You live it.",
              de: "Es gibt ein Element, das den Unterschied macht. Wir entdecken es. Sie leben es.",
            })}
            description={textByLocale(locale, {
              sr: "Element nije detalj. Element je identitet prostora. Onaj nevidljivi sloj koji enterijeru daje identitet, ravnotežu i funkcionalnost.",
              en: "Element is not a detail. Element is the identity of a space: the layer that gives interior identity, balance and function.",
              de: "Element ist kein Detail. Element ist die Identität des Raums: die Ebene, die dem Interieur Identität, Balance und Funktion gibt.",
            })}
          />
        </FadeIn>

        <FadeIn className="border-brand-neutral-500/70 mt-8 rounded-3xl border bg-white p-8 md:p-10">
          <p className="text-brand-earth max-w-4xl text-sm leading-7 md:text-base">
            {textByLocale(locale, {
              sr: "ÉLÉMENT je studio za dizajn enterijera koji veruje da prostor mora da odražava način života svojih vlasnika.",
              en: "ÉLÉMENT is an interior design studio that believes a space must reflect the way its owners live.",
              de: "ÉLÉMENT ist ein Interior-Design-Studio, das daran glaubt, dass ein Raum den Lebensstil seiner Eigentümer widerspiegeln muss.",
            })}
          </p>
          <p className="text-brand-earth mt-4 max-w-4xl text-sm leading-7 md:text-base">
            {textByLocale(locale, {
              sr: "Ne pratimo trendove po svaku cenu. Kreiramo enterijere koji traju, funkcionišu i ostaju jednako snažni i nakon godina korišćenja.",
              en: "We don’t chase trends at any cost. We create interiors that last, function and stay equally strong after years of use.",
              de: "Wir folgen Trends nicht um jeden Preis. Wir gestalten Interieurs, die Bestand haben, funktionieren und auch nach Jahren genauso stark wirken.",
            })}
          </p>
          <p className="text-brand-earth mt-4 max-w-4xl text-sm leading-7 md:text-base">
            {textByLocale(locale, {
              sr: "Svaki projekat gradimo kroz pažljivo vođen proces - od ideje do realizacije.",
              en: "Each project is built through a carefully guided process - from idea to realization.",
              de: "Jedes Projekt entsteht in einem sorgfältig geführten Prozess – von der Idee bis zur Umsetzung.",
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
              de: "Bereit, Ihr Element zu finden?",
            })}
          </p>
        </FadeIn>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Naš proces", en: "Our process", de: "Unser Prozess" })}
            title={textByLocale(locale, { sr: "Četiri koraka do jasnog rezultata", en: "Four steps to a clear result", de: "Vier Schritte zu einem klaren Ergebnis" })}
            description={textByLocale(locale, {
              sr: "Proces je strukturisan i transparentan, sa jasnim isporukama u svakoj etapi.",
              en: "The process is structured and transparent, with clear deliverables in every stage.",
              de: "Der Prozess ist strukturiert und transparent, mit klaren Ergebnissen in jeder Phase.",
            })}
          />
        </FadeIn>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <FadeIn
              key={step.title}
              delay={index * 0.05}
              className="border-brand-neutral-500/70 rounded-2xl border bg-white p-5"
            >
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">0{index + 1}</p>
              <h3 className="font-display text-brand-burgundy mt-2 text-3xl">{step.title}</h3>
              <p className="text-brand-earth mt-2 text-sm">{step.short}</p>
              <ul className="text-brand-ink mt-3 space-y-2 text-sm">
                {step.deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="bg-brand-gold mt-1 inline-block h-1.5 w-1.5 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container>
        <FadeIn className="border-brand-neutral-500/70 rounded-3xl border bg-white p-8 md:p-10">
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Tim", en: "Team", de: "Team" })}
            title={textByLocale(locale, {
              sr: "Suosnivači",
              en: "Co-founders",
              de: "Mitgründerinnen",
            })}
            description={textByLocale(locale, {
              sr: "Studio vodi tim kroz jasnu podelu odgovornosti između dizajna, tehnike i komunikacije.",
              en: "The studio is led through a clear division of design, technical and communication responsibilities.",
              de: "Das Studio arbeitet mit klarer Aufteilung der Verantwortlichkeiten zwischen Design, Technik und Kommunikation.",
            })}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="border-brand-neutral-500/70 rounded-2xl border bg-brand-neutral-100 p-5">
              <h3 className="font-display text-brand-burgundy text-3xl">Bojana Dimitrijević</h3>
              <p className="text-brand-earth mt-2 text-sm">
                {textByLocale(locale, {
                  sr: "Suosnivač, tehnički direktor i vodeći arhitekta tima.",
                  en: "Co-founder, technical director and lead architect.",
                  de: "Mitgründerin, technische Direktorin und leitende Architektin.",
                })}
              </p>
            </article>
            <article className="border-brand-neutral-500/70 rounded-2xl border bg-brand-neutral-100 p-5">
              <h3 className="font-display text-brand-burgundy text-3xl">Tina Živković</h3>
              <p className="text-brand-earth mt-2 text-sm">
                {textByLocale(locale, {
                  sr: "Suosnivač i lider marketinškog tima.",
                  en: "Co-founder and marketing team lead.",
                  de: "Mitgründerin und Leiterin des Marketing-Teams.",
                })}
              </p>
            </article>
          </div>
          <Link
            href="/contact"
            className="text-brand-burgundy decoration-brand-gold mt-6 inline-flex items-center text-sm font-semibold underline underline-offset-4"
          >
            {textByLocale(locale, { sr: "Kontakt", en: "Contact", de: "Kontakt" })}
          </Link>
        </FadeIn>
      </Container>
    </div>
  );
}

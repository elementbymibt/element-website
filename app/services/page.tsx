import Image from "next/image";
import Link from "next/link";

import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { getFaqItems } from "@/src/data/site-content-i18n";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";
import type { SiteLocale } from "@/src/lib/i18n/config";

export const metadata = buildMetadata({
  title: "Usluge",
  description:
    "Dizajn enterijera kroz jasne faze: koncept, vizuelizacija i finalni paket. Idejna i konsultantska usluga studija ÉLÉMENT za Beograd i Pančevo.",
  path: "/services",
});

function getCollaborationPhases(locale: SiteLocale) {
  if (locale === "de") {
    return [
      {
        id: "concept",
        title: "PHASE 1 – KONZEPT",
        points: [
          "Erstgespräch und Raumanalyse",
          "Stil, Atmosphäre und Raumaufteilung",
          "Moodboard und Materialleitlinien",
          "Klare Richtung für die nächsten Entscheidungen",
        ],
      },
      {
        id: "visualization",
        title: "PHASE 2 – VISUALISIERUNG",
        points: [
          "3D-Modell und Renderings der Schlüsselbereiche",
          "Abgleich von Ästhetik und Funktion",
          "Feinabstimmung von Materialien und Farben",
          "Zwei gebündelte Korrekturrunden in dieser Phase",
        ],
      },
      {
        id: "final",
        title: "PHASE 3 – FINALES PAKET",
        points: [
          "Konzeptzeichnungen und Schemata (PDF)",
          "Listen und Spezifikationen (Materialien/Ausstattung)",
          "Orientierungsbudget und Kaufpriorisierung",
          "Übergabe für eine sichere Umsetzung",
        ],
      },
    ];
  }

  if (locale === "en") {
    return [
      {
        id: "concept",
        title: "PHASE 1 – CONCEPT",
        points: [
          "Intro meeting and space analysis",
          "Style, atmosphere and layout",
          "Moodboard and material guidelines",
          "Clear direction for next decisions",
        ],
      },
      {
        id: "visualization",
        title: "PHASE 2 – VISUALIZATION",
        points: [
          "3D model and renders of key spaces",
          "Alignment of aesthetics and function",
          "Fine tuning of materials and colors",
          "Two consolidated revisions in this phase",
        ],
      },
      {
        id: "final",
        title: "PHASE 3 – FINAL PACKAGE",
        points: [
          "Concept drawings and schemes (PDF)",
          "Lists and specifications (materials/equipment)",
          "Indicative budget and purchase priorities",
          "Handover for confident realization",
        ],
      },
    ];
  }

  return [
    {
      id: "concept",
      title: "FAZA 1 – KONCEPT",
      points: [
        "Uvodni razgovor i analiza prostora",
        "Stil, atmosfera i raspored",
        "Stilska tabla i smernice materijala",
        "Jasan pravac za naredne odluke",
      ],
    },
    {
      id: "visualization",
      title: "FAZA 2 – VIZUELIZACIJA",
      points: [
        "3D model i renderi ključnih prostora",
        "Usklađivanje estetike i funkcije",
        "Fino podešavanje materijala i boja",
        "Dve objedinjene korekcije u okviru faze",
      ],
    },
    {
      id: "final",
      title: "FAZA 3 – FINALNI PAKET",
      points: [
        "Idejni crteži i sheme (PDF)",
        "Spiskovi i specifikacije (materijali/oprema)",
        "Orijentacioni budžet i prioritizacija kupovine",
        "Predaja za sigurnu realizaciju",
      ],
    },
  ];
}

export default async function ServicesPage() {
  const locale = await getCurrentLocale();
  const faqItems = getFaqItems(locale);
  const collaborationPhases = getCollaborationPhases(locale);

  return (
    <div className="space-y-20 pb-10">
      <section className="bg-brand-burgundy text-brand-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/hero/services-hero.jpg"
            alt={textByLocale(locale, {
              sr: "Elegantna spavaća soba – ÉLÉMENT",
              en: "Elegant bedroom interior – ÉLÉMENT",
              de: "Elegantes Schlafzimmer-Interieur – ÉLÉMENT",
            })}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="from-brand-burgundy via-brand-burgundy/85 to-brand-burgundy/65 absolute inset-0 bg-gradient-to-r" />
        </div>

        <Container className="relative py-20 md:py-28">
          <FadeIn className="max-w-3xl">
            <p className="text-brand-gold text-xs tracking-[0.35em] uppercase">
              {textByLocale(locale, { sr: "Usluge", en: "Services", de: "Leistungen" })}
            </p>
            <h1 className="font-display mt-5 text-5xl leading-tight md:text-7xl">
              {textByLocale(locale, {
                sr: "Dizajn koji je jasan, smiren i izvodljiv.",
                en: "Design that is clear, calm and actionable.",
                de: "Design, das klar, ruhig und umsetzbar ist.",
              })}
            </h1>
            <p className="text-brand-neutral-200 mt-6 text-base md:text-lg">
              {textByLocale(locale, {
                sr: "Radimo idejno i konsultantski: od koncepta do finalnog paketa koji eliminiše nejasnoće i ubrzava odluke.",
                en: "We work conceptually and consultatively: from concept to a final package that removes ambiguity and speeds decisions.",
                de: "Wir arbeiten konzeptionell und beratend: vom Konzept bis zum finalen Paket, das Unklarheiten reduziert und Entscheidungen beschleunigt.",
              })}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="text-brand-neutral-100 decoration-brand-gold inline-flex items-center text-sm font-semibold underline underline-offset-4"
              >
                {textByLocale(locale, { sr: "Pogledajte projekte", en: "View projects", de: "Projekte ansehen" })}
              </Link>
              <Link
                href="/contact"
                className="text-brand-neutral-100 decoration-brand-gold inline-flex items-center text-sm font-semibold underline underline-offset-4"
              >
                {textByLocale(locale, { sr: "Kontaktirajte nas", en: "Contact us", de: "Kontaktieren Sie uns" })}
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Kako izgleda saradnja", en: "How collaboration works", de: "Wie die Zusammenarbeit abläuft" })}
            title={textByLocale(locale, {
              sr: "Tri faze koje drže kvalitet pod kontrolom",
              en: "Three phases that keep quality under control",
              de: "Drei Phasen, die Qualität unter Kontrolle halten",
            })}
            description={textByLocale(locale, {
              sr: "Jasan tok, jasne isporuke, minimalna konfuzija. Fokus: atmosfera, funkcija i dugoročna vrednost prostora.",
              en: "Clear flow, clear deliverables, minimal confusion. Focus: mood, function and long-term value.",
              de: "Klarer Ablauf, klare Ergebnisse, minimale Unklarheiten. Fokus: Atmosphäre, Funktion und langfristiger Raumwert.",
            })}
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {collaborationPhases.map((phase, index) => (
            <FadeIn
              key={phase.id}
              delay={index * 0.05}
              className="border-brand-neutral-500/70 rounded-3xl border bg-white p-7 shadow-[0_18px_40px_rgba(59,13,24,0.06)]"
            >
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">{phase.title}</p>
              <ul className="text-brand-ink mt-5 space-y-2 text-sm">
                {phase.points.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="bg-brand-gold mt-1 inline-block h-1.5 w-1.5 rounded-full" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="border-brand-neutral-500/70 bg-brand-neutral-100 mt-8 rounded-3xl border p-6 md:p-7">
          <p className="text-brand-ink text-sm leading-relaxed">
            <span className="text-brand-burgundy font-semibold">
              {textByLocale(locale, { sr: "Napomena:", en: "Note:", de: "Hinweis:" })}
            </span>{" "}
            {textByLocale(locale, {
              sr: "Ova usluga je idejna i konsultantska i ne predstavlja tehnički ili izvođački projekat.",
              en: "This service is conceptual and consultative and does not represent a technical/contractor project.",
              de: "Diese Leistung ist konzeptionell und beratend und stellt kein technisches oder ausführungsreifes Projekt dar.",
            })}
          </p>
        </FadeIn>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={textByLocale(locale, { sr: "Pitanja", en: "FAQ", de: "Fragen" })}
            title={textByLocale(locale, { sr: "Česta pitanja", en: "Frequently asked questions", de: "Häufige Fragen" })}
            description={textByLocale(locale, {
              sr: "Najčešća pitanja pre početka saradnje.",
              en: "Common questions before starting.",
              de: "Häufige Fragen vor Projektstart.",
            })}
          />
        </FadeIn>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <FadeIn
              key={item.question}
              delay={index * 0.03}
              className="border-brand-neutral-500/70 rounded-2xl border bg-white p-5"
            >
              <h3 className="font-display text-brand-burgundy text-2xl">{item.question}</h3>
              <p className="text-brand-earth mt-2 text-sm">{item.answer}</p>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container>
        <FadeIn className="bg-brand-burgundy text-brand-neutral-100 rounded-3xl p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-brand-gold text-xs tracking-[0.3em] uppercase">
                {textByLocale(locale, { sr: "Sledeći korak", en: "Next step", de: "Nächster Schritt" })}
              </p>
              <h2 className="font-display mt-2 text-4xl">
                {textByLocale(locale, {
                  sr: "Želite ponudu za svoj projekat?",
                  en: "Need a proposal for your project?",
                  de: "Benötigen Sie ein Angebot für Ihr Projekt?",
                })}
              </h2>
              <p className="text-brand-neutral-200 mt-3 max-w-2xl">
                {textByLocale(locale, {
                  sr: "Pošaljite nam osnovne informacije i dobićete jasan predlog narednih koraka.",
                  en: "Send us your core details and we will return with a clear next-step proposal.",
                  de: "Senden Sie uns Ihre Basisinformationen und wir melden uns mit einem klaren Vorschlag für die nächsten Schritte.",
                })}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-secondary text-brand-neutral-100 inline-flex rounded-full px-7 py-3 text-sm font-semibold"
              >
                {textByLocale(locale, { sr: "Kontakt", en: "Contact", de: "Kontakt" })}
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

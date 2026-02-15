import Link from "next/link";

import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { aboutValues, pressMentions, teamMembers } from "@/src/data/site-content";
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

  return (
    <div className="space-y-20 py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title={textByLocale(locale, {
              sr: "Studio sa jasnim autorskim potpisom",
              en: "A studio with a clear authorial signature",
            })}
            description={textByLocale(locale, {
              sr: "ÉLÉMENT (by M·I·B·T) razvija enterijere koji komuniciraju smiren luksuz, preciznu funkciju i dugotrajnu vrednost.",
              en: "ÉLÉMENT (by M·I·B·T) creates interiors that communicate calm luxury, precise function and long-term value.",
            })}
          />
        </FadeIn>

        <FadeIn className="border-brand-neutral-500/70 mt-8 rounded-3xl border bg-white p-8 md:p-10">
          <p className="font-display text-brand-burgundy text-3xl leading-relaxed md:text-4xl">
            {textByLocale(locale, {
              sr: "Verujemo da vrhunski enterijer ne treba da bude glasan. Treba da bude tačan.",
              en: "We believe a premium interior should not be loud. It should be precise.",
            })}
          </p>
          <p className="text-brand-earth mt-6 max-w-3xl text-sm leading-7">
            {textByLocale(locale, {
              sr: "Naš rad se zasniva na disciplini detalja, promišljenoj upotrebi materijala i procesu koji klijentu vraća sigurnost. Dizajn posmatramo kao stratešku odluku: kako prostor izgleda, kako radi i kakvu emociju ostavlja kroz vreme.",
              en: "Our work is based on detail discipline, intentional material curation and a process that restores confidence to the client. We view design as a strategic decision: how the space looks, performs and feels over time.",
            })}
          </p>
        </FadeIn>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Values"
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
        <FadeIn>
          <SectionHeading
            eyebrow="Team"
            title={textByLocale(locale, { sr: "Tim", en: "Team" })}
            description={textByLocale(locale, {
              sr: "Multidisciplinarni profil koji kombinuje kreativnu viziju i operativnu pouzdanost.",
              en: "A multidisciplinary profile combining creative vision and operational reliability.",
            })}
          />
        </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <FadeIn
              key={member.name}
              delay={index * 0.04}
              className="border-brand-neutral-500/70 rounded-3xl border bg-white p-6"
            >
              <h3 className="font-display text-brand-burgundy text-3xl">{member.name}</h3>
              <p className="text-brand-gold mt-1 text-xs tracking-[0.2em] uppercase">
                {member.role}
              </p>
              <p className="text-brand-earth mt-4 text-sm">{member.bio}</p>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container>
        <FadeIn className="border-brand-neutral-500/70 rounded-3xl border bg-white p-8 md:p-10">
          <SectionHeading
            eyebrow="Press"
            title="Featured / Press"
            description={textByLocale(locale, {
              sr: "Objave i editorijali u kojima je studio predstavljen.",
              en: "Features and editorials where the studio has been presented.",
            })}
          />
          <ul className="text-brand-earth mt-6 space-y-3 text-sm">
            {pressMentions.map((item) => (
              <li
                key={item}
                className="border-brand-neutral-500/70 bg-brand-neutral-100 rounded-xl border p-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>

      <Container>
        <FadeIn className="bg-brand-burgundy text-brand-neutral-100 rounded-3xl p-8 md:p-10">
          <h2 className="font-display text-4xl">
            {textByLocale(locale, { sr: "Upoznajmo vaš prostor.", en: "Let's review your space." })}
          </h2>
          <p className="text-brand-neutral-200 mt-3 max-w-2xl">
            {textByLocale(locale, {
              sr: "Pošaljite osnovne informacije i dobijte predlog odgovarajućeg paketa i toka realizacije.",
              en: "Share the core details and receive a proposal for the right package and execution flow.",
            })}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookingLink className="px-7 py-3 text-sm font-semibold" />
            <Link
              href="/contact"
              className="btn-secondary text-brand-neutral-100 inline-flex rounded-full px-7 py-3 text-sm font-semibold"
            >
              {textByLocale(locale, { sr: "Kontakt forma", en: "Contact form" })}
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

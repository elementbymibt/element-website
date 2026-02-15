import Link from "next/link";

import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { aboutValues, pressMentions, teamMembers } from "@/src/data/site-content";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "O nama",
  description:
    "Upoznajte ÉLÉMENT (by M·I·B·T): premium studio koji spaja estetsku disciplinu i tehničku preciznost.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-20 py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="Studio sa jasnim autorskim potpisom"
            description="ÉLÉMENT (by M·I·B·T) razvija enterijere koji komuniciraju smiren luksuz, preciznu funkciju i dugotrajnu vrednost."
          />
        </FadeIn>

        <FadeIn className="border-brand-neutral-500/70 mt-8 rounded-3xl border bg-white p-8 md:p-10">
          <p className="font-display text-brand-burgundy text-3xl leading-relaxed md:text-4xl">
            Verujemo da vrhunski enterijer ne treba da bude glasan. Treba da bude tačan.
          </p>
          <p className="text-brand-earth mt-6 max-w-3xl text-sm leading-7">
            Naš rad se zasniva na disciplini detalja, promišljenoj upotrebi materijala i
            procesu koji klijentu vraća sigurnost. Dizajn posmatramo kao stratešku odluku:
            kako prostor izgleda, kako radi i kakvu emociju ostavlja kroz vreme.
          </p>
        </FadeIn>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Values"
            title="Principi koji nas vode"
            description="Svaka odluka u projektu proverava se kroz ova četiri kriterijuma."
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
            title="Tim"
            description="Multidisciplinarni profil koji kombinuje kreativnu viziju i operativnu pouzdanost."
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
            description="Objave i editorijali u kojima je studio predstavljen."
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
          <h2 className="font-display text-4xl">Upoznajmo vaš prostor.</h2>
          <p className="text-brand-neutral-200 mt-3 max-w-2xl">
            Pošaljite osnovne informacije i dobijte predlog odgovarajućeg paketa i toka
            realizacije.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookingLink className="px-7 py-3 text-sm font-semibold" />
            <Link
              href="/contact"
              className="btn-secondary text-brand-neutral-100 inline-flex rounded-full px-7 py-3 text-sm font-semibold"
            >
              Kontakt forma
            </Link>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

import Link from "next/link";

import { ContactForm } from "@/src/components/forms/contact-form";
import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import {
  faqItems,
  packageComparisonRows,
  servicePackages,
} from "@/src/data/site-content";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Usluge i paketi",
  description:
    "Upoznajte pakete usluga studija ÉLÉMENT: Concept, Full Design, Premium Turn-Key i Business Space.",
  path: "/services",
});

const documentationDeliverables = [
  "PDF paket sa svim usaglašenim nacrtima i shemama",
  "DWG fajlovi za izvođače i tehničku koordinaciju",
  "Specifikacije materijala i završnih obrada",
  "Shopping lista sa dobavljačima i okvirnim cenama",
  "3D vizuali ključnih prostora za sigurnu realizaciju",
];

export default async function ServicesPage() {
  const locale = await getCurrentLocale();

  return (
    <div className="space-y-20 py-16 md:py-20">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title={textByLocale(locale, { sr: "Usluge, paketi i cene", en: "Services, packages and pricing" })}
            description={textByLocale(locale, {
              sr: "Svaki paket ima jasan scope, transparentne faze i isporuke koje omogućavaju sigurnu realizaciju.",
              en: "Each package has a clear scope, transparent phases and reliable deliverables.",
            })}
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {servicePackages.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.04}
              className="border-brand-neutral-500/70 rounded-3xl border bg-white p-6 shadow-[0_18px_40px_rgba(59,13,24,0.06)]"
            >
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">
                {item.subtitle}
              </p>
              <h2 className="font-display text-brand-burgundy mt-2 text-4xl">
                {item.name}
              </h2>
              <p className="text-brand-earth mt-2 text-sm">{item.priceFrom}</p>
              <p className="text-brand-ink mt-4 text-sm">{item.idealFor}</p>

              <ul className="text-brand-ink mt-5 space-y-2 text-sm">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="bg-brand-gold mt-1 inline-block h-1.5 w-1.5 rounded-full" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Comparison"
            title={textByLocale(locale, { sr: "Uporedni pregled paketa", en: "Package comparison" })}
            description={textByLocale(locale, {
              sr: "Orijentacioni pregled. Tačan scope se definiše nakon brief-a i analize prostora.",
              en: "Indicative overview. Final scope is defined after briefing and spatial analysis.",
            })}
          />
        </FadeIn>
        <div className="border-brand-neutral-500/70 mt-8 overflow-x-auto rounded-3xl border bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-neutral-200 text-brand-burgundy">
              <tr>
                <th className="px-4 py-4 font-semibold">
                  {textByLocale(locale, { sr: "Karakteristika", en: "Feature" })}
                </th>
                {servicePackages.map((item) => (
                  <th key={item.id} className="px-4 py-4 font-semibold">
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {packageComparisonRows.map((row) => (
                <tr key={row.feature} className="border-brand-neutral-500/60 border-t">
                  <td className="text-brand-ink px-4 py-4">{row.feature}</td>
                  {row.values.map((value, valueIndex) => (
                    <td
                      key={`${row.feature}-${value}-${valueIndex}`}
                      className="text-brand-earth px-4 py-4"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      <Container>
        <FadeIn className="border-brand-neutral-500/70 bg-brand-neutral-100 rounded-3xl border p-8 md:p-10">
          <SectionHeading
            eyebrow="Završna dokumentacija"
            title={textByLocale(locale, { sr: "Šta dobijate na kraju projekta", en: "What you receive at project end" })}
            description={textByLocale(locale, {
              sr: "Dokumentacija je projektovana da izvođenju ukloni nejasnoće i ubrza donošenje odluka.",
              en: "Documentation is designed to remove ambiguity in execution and speed up decisions.",
            })}
          />
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {documentationDeliverables.map((item) => (
              <li
                key={item}
                className="border-brand-neutral-500/70 text-brand-ink rounded-2xl border bg-white p-4 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/documentation"
            className="text-brand-burgundy decoration-brand-gold mt-6 inline-flex text-sm font-semibold underline underline-offset-4"
          >
            {textByLocale(locale, {
              sr: "Pogledajte primer završne dokumentacije",
              en: "View a sample final documentation package",
            })}
          </Link>
        </FadeIn>
      </Container>

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="FAQ"
            title={textByLocale(locale, { sr: "Česta pitanja", en: "Frequently asked questions" })}
            description={textByLocale(locale, {
              sr: "Osam ključnih pitanja koje klijenti najčešće postavljaju pre početka saradnje.",
              en: "Eight key questions clients most often ask before starting collaboration.",
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
              <h3 className="font-display text-brand-burgundy text-2xl">
                {item.question}
              </h3>
              <p className="text-brand-earth mt-2 text-sm">{item.answer}</p>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container>
        <FadeIn className="border-brand-burgundy/20 rounded-3xl border bg-white p-8 md:p-10">
          <SectionHeading
            eyebrow="Start"
            title={textByLocale(locale, { sr: "Rezervišite termin ili pošaljite upit", en: "Book a slot or send an inquiry" })}
            description={textByLocale(locale, {
              sr: "Uvodni razgovor definiše obim, budžet i najefikasniji paket za vaš projekat.",
              en: "An intro call defines scope, budget and the most effective package for your project.",
            })}
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <BookingLink className="px-7 py-3 text-sm font-semibold" />
            <a
              href="#kontakt-forma"
              className="btn-secondary inline-flex rounded-full px-7 py-3 text-sm font-semibold"
            >
              {textByLocale(locale, { sr: "Kontakt forma", en: "Contact form" })}
            </a>
          </div>

          <div id="kontakt-forma" className="mt-10">
            <ContactForm />
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}

import Link from "next/link";

import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Uslovi saradnje",
  description:
    "Sažet pregled načina saradnje sa studiom ÉLÉMENT: faze, korekcije i opseg idejne usluge.",
  path: "/uslovi-saradnje",
});

export default async function TermsPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow={textByLocale(locale, { sr: "Saradnja", en: "Collaboration", de: "Zusammenarbeit" })}
          title={textByLocale(locale, { sr: "Uslovi saradnje", en: "Collaboration terms", de: "Zusammenarbeitsbedingungen" })}
          description={textByLocale(locale, {
            sr: "Ovo je sažet, praktičan pregled. Finalne detalje definišemo u ponudi nakon uvodnih konsultacija.",
            en: "A short, practical overview. Final details are defined in a proposal after an intro consultation.",
            de: "Dies ist ein kurzer, praxisnaher Überblick. Finale Details definieren wir im Angebot nach dem Erstgespräch.",
          })}
        />
      </FadeIn>

      <FadeIn className="border-brand-neutral-500/70 mt-8 rounded-3xl border bg-white p-8 text-sm leading-7 md:p-10">
        <h2 className="font-display text-brand-burgundy text-3xl">
          {textByLocale(locale, { sr: "Opseg usluge", en: "Scope", de: "Leistungsumfang" })}
        </h2>
        <p className="text-brand-earth mt-4">
          {textByLocale(locale, {
            sr: "Naša usluga je idejna i konsultantska: definišemo karakter prostora, atmosferu, ključne materijale i smernice koje omogućavaju sigurnu realizaciju.",
            en: "Our service is conceptual and consultative: we define the space’s character, atmosphere, key materials and guidance that enables confident realization.",
            de: "Unsere Leistung ist konzeptionell und beratend: wir definieren den Charakter des Raums, die Atmosphäre, zentrale Materialien und Leitlinien für eine sichere Umsetzung.",
          })}
        </p>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Korekcije", en: "Revisions", de: "Korrekturen" })}
        </h2>
        <p className="text-brand-earth mt-4">
          {textByLocale(locale, {
            sr: "U okviru standardnog procesa uključene su dve objedinjene korekcije po fazi (kada je korekcija dogovorena kao deo isporuke). Cilj je da svaka korekcija bude jasna, fokusirana i da stvarno unapredi rezultat.",
            en: "The standard process includes two consolidated revision rounds per phase (when revisions are part of the agreed deliverable). The goal is clarity, focus and real improvement.",
            de: "Im Standardprozess sind zwei gebündelte Korrekturrunden pro Phase enthalten (wenn Korrekturen Teil der vereinbarten Lieferung sind). Ziel ist Klarheit, Fokus und echte Verbesserung.",
          })}
        </p>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Dodatni opseg", en: "Additional scope", de: "Zusätzlicher Umfang" })}
        </h2>
        <p className="text-brand-earth mt-4">
          {textByLocale(locale, {
            sr: "Sve što je van dogovorenog opsega (dodatne prostorije, varijante, iteracije ili proširenja dokumentacije) definiše se unapred i ugovara posebno, uz jasan okvir isporuka.",
            en: "Anything outside the agreed scope (additional rooms, variants, iterations or expanded documentation) is defined upfront and agreed separately with clear deliverables.",
            de: "Alles außerhalb des vereinbarten Umfangs (zusätzliche Räume, Varianten, Iterationen oder erweiterte Dokumentation) wird vorab definiert und separat mit klaren Lieferpunkten vereinbart.",
          })}
        </p>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Komunikacija i rokovi", en: "Communication and timelines", de: "Kommunikation und Zeitplan" })}
        </h2>
        <p className="text-brand-earth mt-4">
          {textByLocale(locale, {
            sr: "Rokovi zavise od obima i brzine donošenja odluka. Nakon uvodnog razgovora definišemo realan plan po fazama, tako da proces ostane miran, precizan i predvidiv.",
            en: "Timelines depend on scope and decision speed. After an intro call, we define a realistic phase plan so the process stays calm, precise and predictable.",
            de: "Zeitpläne hängen von Umfang und Entscheidungsgeschwindigkeit ab. Nach dem Erstgespräch definieren wir einen realistischen Phasenplan, damit der Prozess ruhig, präzise und planbar bleibt.",
          })}
        </p>

        <div className="border-brand-neutral-500/70 bg-brand-neutral-100 mt-10 rounded-2xl border p-5">
          <p className="text-brand-ink text-sm leading-relaxed">
            <span className="text-brand-burgundy font-semibold">
              {textByLocale(locale, { sr: "Napomena:", en: "Note:", de: "Hinweis:" })}
            </span>{" "}
            {textByLocale(locale, {
              sr: "Idejna usluga ne predstavlja tehnički projekat niti izvođačku dokumentaciju. Za tehničke projekte i saglasnosti, po potrebi vas usmeravamo ka odgovarajućim licenciranim stručnjacima.",
              en: "Concept work is not a technical project or contractor-ready documentation. When needed, we can direct you to the appropriate licensed professionals.",
              de: "Die konzeptionelle Leistung ist weder technische Planung noch ausführungsreife Dokumentation. Bei Bedarf verweisen wir Sie an passende lizenzierte Fachpersonen.",
            })}
          </p>
        </div>

        <p className="text-brand-earth mt-8 text-sm">
          {textByLocale(locale, {
            sr: "Za pitanja ili dodatna pojašnjenja, pišite nam ili koristite kontakt formu.",
            en: "If you have questions, email us or use the contact form.",
            de: "Für Fragen oder zusätzliche Klärungen schreiben Sie uns oder nutzen Sie das Kontaktformular.",
          })}{" "}
          <Link href="/contact" className="text-brand-burgundy decoration-brand-gold font-semibold underline underline-offset-4">
            {textByLocale(locale, { sr: "Kontakt", en: "Contact", de: "Kontakt" })}
          </Link>
          .
        </p>
      </FadeIn>

      <FadeIn className="bg-brand-burgundy text-brand-neutral-100 mt-12 rounded-3xl p-8 md:p-10">
        <h2 className="font-display text-4xl">
          {textByLocale(locale, {
            sr: "Spremni da pronađemo Vaš element?",
            en: "Ready to find your element?",
            de: "Bereit, Ihr Element zu finden?",
          })}
        </h2>
        <p className="text-brand-neutral-200 mt-3 max-w-2xl">
          {textByLocale(locale, {
            sr: "Pošaljite nam informacije o projektu i vraćamo se sa personalizovanim predlogom saradnje.",
            en: "Share your project details and we’ll return with a personalized collaboration proposal.",
            de: "Senden Sie uns Projektdetails und wir melden uns mit einem personalisierten Vorschlag zur Zusammenarbeit.",
          })}
        </p>
        <Link
          href="/contact"
          className="text-brand-neutral-100 decoration-brand-gold mt-6 inline-flex items-center text-sm font-semibold underline underline-offset-4"
        >
          {textByLocale(locale, { sr: "Kontakt", en: "Contact", de: "Kontakt" })}
        </Link>
      </FadeIn>
    </Container>
  );
}

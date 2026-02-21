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
            sr: "Naša usluga je idejna i konsultantska: obuhvata koncept, idejni 2D raspored, 3D vizuelizaciju, pokazni raspored instalacija (informativno), idejne crteže po meri i finalni paket smernica.",
            en: "Our service is conceptual and consultative: it includes concept direction, conceptual 2D layout, 3D visualization, indicative installation layout, concept furniture drawings and a final guidance package.",
            de: "Unsere Leistung ist konzeptionell und beratend: sie umfasst Konzeptentwicklung, konzeptionelles 2D-Layout, 3D-Visualisierung, hinweisenden Installationsplan, konzeptionelle Möbelzeichnungen und ein finales Leitfadenpaket.",
          })}
        </p>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Korekcije", en: "Revisions", de: "Korrekturen" })}
        </h2>
        <p className="text-brand-earth mt-4">
          {textByLocale(locale, {
            sr: "U okviru standardnog procesa uključene su dve objedinjene korekcije unutar istog koncepta. Promena koncepta (stil, pravac ili logika rešenja) nakon odobrene faze tretira se kao dodatni opseg.",
            en: "The standard process includes two consolidated revision rounds within the same concept. A concept change (style, direction or core logic) after phase approval is treated as additional scope.",
            de: "Im Standardprozess sind zwei gebündelte Korrekturrunden innerhalb desselben Konzepts enthalten. Eine Konzeptänderung (Stil, Richtung oder Kernlogik) nach Phasenfreigabe gilt als zusätzlicher Umfang.",
          })}
        </p>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Dodatni opseg", en: "Additional scope", de: "Zusätzlicher Umfang" })}
        </h2>
        <p className="text-brand-earth mt-4">
          {textByLocale(locale, {
            sr: "Sve što je van dogovorenog opsega (dodatne prostorije, dodatni renderi, dodatne iteracije, dodatni izlazak na teren, dodatna dokumentacija) definiše se unapred i ugovara posebno.",
            en: "Anything outside the agreed scope (additional rooms, extra renders, extra iterations, additional site visits, expanded documentation) is defined upfront and agreed separately.",
            de: "Alles außerhalb des vereinbarten Umfangs (zusätzliche Räume, zusätzliche Renderings, zusätzliche Iterationen, weitere Vor-Ort-Termine, erweiterte Dokumentation) wird vorab definiert und separat vereinbart.",
          })}
        </p>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Vizuelizacije i realizacija", en: "Visuals and realization", de: "Visualisierung und Umsetzung" })}
        </h2>
        <p className="text-brand-earth mt-4">
          {textByLocale(locale, {
            sr: "Renderi predstavljaju vizuelno-idejni prikaz. Finalni izgled realizacije može odstupati u odnosu na render zbog realnog osvetljenja, serije materijala, dostupnosti proizvoda i kvaliteta izvođenja.",
            en: "Renders represent a visual-concept interpretation. The final realized result may vary due to real lighting, material batches, product availability and execution quality.",
            de: "Renderings sind eine visuell-konzeptionelle Darstellung. Das finale umgesetzte Ergebnis kann aufgrund von realem Licht, Materialchargen, Produktverfügbarkeit und Ausführungsqualität abweichen.",
          })}
        </p>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Komunikacija i rokovi", en: "Communication and timelines", de: "Kommunikation und Zeitplan" })}
        </h2>
        <p className="text-brand-earth mt-4">
          {textByLocale(locale, {
            sr: "Zvanična komunikacija i odobrenja faza vode se email-om. Povratne informacije po fazi dostavljaju se u roku od 3 radna dana kako bi rokovi ostali stabilni i predvidivi.",
            en: "Official communication and phase approvals are managed via email. Phase feedback is delivered within 3 business days to keep timelines stable and predictable.",
            de: "Offizielle Kommunikation und Phasenfreigaben erfolgen per E-Mail. Feedback pro Phase wird innerhalb von 3 Werktagen übermittelt, damit der Zeitplan stabil und planbar bleibt.",
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

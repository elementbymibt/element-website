import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";
import { siteConfig } from "@/src/lib/site-config";

export const metadata = buildMetadata({
  title: "Politika privatnosti",
  description:
    "Kako ÉLÉMENT (by M·I·B·T) prikuplja i koristi podatke koje ostavite putem formi na sajtu.",
  path: "/privacy",
});

export default async function PrivacyPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow={textByLocale(locale, { sr: "Pravno", en: "Legal", de: "Rechtliches" })}
          title={textByLocale(locale, { sr: "Politika privatnosti", en: "Privacy Policy", de: "Datenschutzerklärung" })}
          description={textByLocale(locale, {
            sr: "Ukratko objašnjavamo koje podatke prikupljamo i zašto, kao i kako možete zatražiti brisanje.",
            en: "A short overview of what we collect, why, and how to request deletion.",
            de: "Kurzüberblick darüber, welche Daten wir erfassen, warum wir sie erfassen und wie Sie eine Löschung anfordern können.",
          })}
        />
      </FadeIn>

      <FadeIn className="border-brand-neutral-500/70 text-brand-earth mt-8 rounded-3xl border bg-white p-8 text-sm leading-7">
        <h2 className="font-display text-brand-burgundy text-3xl">
          {textByLocale(locale, { sr: "Šta prikupljamo", en: "What we collect", de: "Welche Daten wir erfassen" })}
        </h2>
        <ul className="mt-4 space-y-2">
          <li>
            {textByLocale(locale, {
              sr: "Kontakt podaci koje unesete: ime, email i telefon (ako ga ostavite).",
              en: "Contact details you submit: name, email, and phone (if provided).",
              de: "Von Ihnen eingegebene Kontaktdaten: Name, E-Mail und Telefon (falls angegeben).",
            })}
          </li>
          <li>
            {textByLocale(locale, {
              sr: "Sadržaj poruke koji nam pošaljete kroz kontakt forme.",
              en: "Your message submitted through contact forms.",
              de: "Inhalte Ihrer Nachricht, die Sie über Kontaktformulare senden.",
            })}
          </li>
          <li>
            {textByLocale(locale, {
              sr: "Tehnički podaci o poseti (analitika): događaji, osnovni podaci o uređaju/pregledaču i stranice koje posećujete.",
              en: "Visit telemetry (analytics): events, basic device/browser info, and pages viewed.",
              de: "Technische Besuchsdaten (Analytics): Events, Basisdaten zu Gerät/Browser und besuchte Seiten.",
            })}
          </li>
        </ul>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Zašto prikupljamo", en: "Why we collect", de: "Warum wir Daten erfassen" })}
        </h2>
        <ul className="mt-4 space-y-2">
          <li>
            {textByLocale(locale, {
              sr: "Da bismo vam odgovorili na upit i pripremili predlog saradnje.",
              en: "To reply to your inquiry and prepare a collaboration proposal.",
              de: "Um auf Ihre Anfrage zu antworten und einen Vorschlag zur Zusammenarbeit vorzubereiten.",
            })}
          </li>
          <li>
            {textByLocale(locale, {
              sr: "Da bismo vam poslali vodič ili novosti, samo ako ostavite email kroz odgovarajuću formu.",
              en: "To send the guide or updates, only when you submit your email through the relevant form.",
              de: "Um Ihnen einen Guide oder Neuigkeiten zu senden, nur wenn Sie Ihre E-Mail über das entsprechende Formular hinterlassen.",
            })}
          </li>
          <li>
            {textByLocale(locale, {
              sr: "Da bismo razumeli koje stranice i sadržaji su najkorisniji (GA4 i Vercel Analytics).",
              en: "To understand what pages and content are most useful (GA4 and Vercel Analytics).",
              de: "Um zu verstehen, welche Seiten und Inhalte am nützlichsten sind (GA4 und Vercel Analytics).",
            })}
          </li>
        </ul>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Kolačići", en: "Cookies", de: "Cookies" })}
        </h2>
        <p className="mt-4">
          {textByLocale(locale, {
            sr: "Koristimo kolačić koji pamti da je email modal zatvoren (kako se ne bi prikazivao ponovo u narednih 30 dana), kao i kolačiće/identifikatore analitike (GA4/Vercel).",
            en: "We use a cookie to remember when the email modal was dismissed (so it won’t reappear for 30 days), plus analytics cookies/identifiers (GA4/Vercel).",
            de: "Wir verwenden ein Cookie, das speichert, wenn das E-Mail-Modal geschlossen wurde (damit es 30 Tage lang nicht erneut erscheint), sowie Analytics-Cookies/Identifier (GA4/Vercel).",
          })}
        </p>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Brisanje podataka", en: "Data deletion", de: "Datenlöschung" })}
        </h2>
        <p className="mt-4">
          {textByLocale(locale, {
            sr: "Možete u bilo kom trenutku zatražiti uvid, ispravku ili brisanje podataka slanjem zahteva na naš email. Odgovaramo u razumnom roku.",
            en: "You can request access, correction or deletion at any time by emailing us. We will respond within a reasonable timeframe.",
            de: "Sie können jederzeit per E-Mail Auskunft, Berichtigung oder Löschung Ihrer Daten anfordern. Wir antworten innerhalb einer angemessenen Frist.",
          })}
        </p>
        <p className="mt-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-brand-burgundy decoration-brand-gold font-semibold underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
        </p>
      </FadeIn>
    </Container>
  );
}

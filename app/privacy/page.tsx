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
          eyebrow={textByLocale(locale, { sr: "Pravno", en: "Legal" })}
          title={textByLocale(locale, { sr: "Politika privatnosti", en: "Privacy Policy" })}
          description={textByLocale(locale, {
            sr: "Ukratko objašnjavamo koje podatke prikupljamo i zašto, kao i kako možete zatražiti brisanje.",
            en: "A short overview of what we collect, why, and how to request deletion.",
          })}
        />
      </FadeIn>

      <FadeIn className="border-brand-neutral-500/70 text-brand-earth mt-8 rounded-3xl border bg-white p-8 text-sm leading-7">
        <h2 className="font-display text-brand-burgundy text-3xl">
          {textByLocale(locale, { sr: "Šta prikupljamo", en: "What we collect" })}
        </h2>
        <ul className="mt-4 space-y-2">
          <li>
            {textByLocale(locale, {
              sr: "Kontakt podaci koje unesete: ime, email i telefon (ako ga ostavite).",
              en: "Contact details you submit: name, email, and phone (if provided).",
            })}
          </li>
          <li>
            {textByLocale(locale, {
              sr: "Sadržaj poruke i odgovori iz upitnika (ukoliko popunite upitnik).",
              en: "Your message and intake answers (if you complete the intake).",
            })}
          </li>
          <li>
            {textByLocale(locale, {
              sr: "Tehnički podaci o poseti (analitika): događaji, osnovni podaci o uređaju/pregledaču i stranice koje posećujete.",
              en: "Visit telemetry (analytics): events, basic device/browser info, and pages viewed.",
            })}
          </li>
        </ul>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Zašto prikupljamo", en: "Why we collect" })}
        </h2>
        <ul className="mt-4 space-y-2">
          <li>
            {textByLocale(locale, {
              sr: "Da bismo vam odgovorili na upit i pripremili predlog saradnje.",
              en: "To reply to your inquiry and prepare a collaboration proposal.",
            })}
          </li>
          <li>
            {textByLocale(locale, {
              sr: "Da bismo vam poslali vodič ili novosti, samo ako ostavite email kroz odgovarajuću formu.",
              en: "To send the guide or updates, only when you submit your email through the relevant form.",
            })}
          </li>
          <li>
            {textByLocale(locale, {
              sr: "Da bismo razumeli koje stranice i sadržaji su najkorisniji (GA4 i Vercel Analytics).",
              en: "To understand what pages and content are most useful (GA4 and Vercel Analytics).",
            })}
          </li>
        </ul>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Kolačići", en: "Cookies" })}
        </h2>
        <p className="mt-4">
          {textByLocale(locale, {
            sr: "Koristimo kolačić koji pamti da je email modal zatvoren (kako se ne bi prikazivao ponovo u narednih 30 dana), kao i kolačiće/identifikatore analitike (GA4/Vercel).",
            en: "We use a cookie to remember when the email modal was dismissed (so it won’t reappear for 30 days), plus analytics cookies/identifiers (GA4/Vercel).",
          })}
        </p>

        <h2 className="font-display text-brand-burgundy mt-10 text-3xl">
          {textByLocale(locale, { sr: "Brisanje podataka", en: "Data deletion" })}
        </h2>
        <p className="mt-4">
          {textByLocale(locale, {
            sr: "Možete u bilo kom trenutku zatražiti uvid, ispravku ili brisanje podataka slanjem zahteva na naš email. Odgovaramo u razumnom roku.",
            en: "You can request access, correction or deletion at any time by emailing us. We will respond within a reasonable timeframe.",
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

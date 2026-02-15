import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Placeholder stranica za politiku privatnosti.",
  path: "/privacy",
});

export default async function PrivacyPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          description={textByLocale(locale, {
            sr: "Ovo je placeholder verzija politike privatnosti. Finalni tekst uskladiti sa pravnim timom pre objave.",
            en: "This is a placeholder privacy policy. Align final legal content before launch.",
          })}
        />
      </FadeIn>

      <FadeIn className="border-brand-neutral-500/70 text-brand-earth mt-8 rounded-3xl border bg-white p-8 text-sm leading-7">
        <p>
          {textByLocale(locale, {
            sr: "ÉLÉMENT (by M·I·B·T) poštuje privatnost korisnika i obrađuje podatke isključivo u svrhu komunikacije, realizacije usluge i unapređenja korisničkog iskustva.",
            en: "ÉLÉMENT (by M·I·B·T) respects user privacy and processes data only for communication, service delivery and UX improvement.",
          })}
        </p>
        <p className="mt-4">
          {textByLocale(locale, {
            sr: "Podaci koji se prikupljaju putem kontakt i newsletter formi koriste se za odgovor na upit, slanje relevantnih informacija i internu analitiku. Korisnik može u svakom trenutku zatražiti izmenu ili brisanje podataka.",
            en: "Data collected through contact and newsletter forms is used to answer inquiries, send relevant information and support internal analytics. Users can request data updates or deletion at any time.",
          })}
        </p>
        <p className="mt-4">
          {textByLocale(locale, {
            sr: "Za finalnu produkciju: dopuniti punim pravnim tekstom, rokom čuvanja podataka i kontaktom za Data Privacy zahteve.",
            en: "Before production: complete full legal text, data retention periods and dedicated privacy contact details.",
          })}
        </p>
      </FadeIn>
    </Container>
  );
}

import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Placeholder stranica za politiku privatnosti.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          description="Ovo je placeholder verzija politike privatnosti. Finalni tekst uskladiti sa pravnim timom pre objave."
        />
      </FadeIn>

      <FadeIn className="border-brand-neutral-500/70 text-brand-earth mt-8 rounded-3xl border bg-white p-8 text-sm leading-7">
        <p>
          ÉLÉMENT (by M·I·B·T) poštuje privatnost korisnika i obrađuje podatke isključivo
          u svrhu komunikacije, realizacije usluge i unapređenja korisničkog iskustva.
        </p>
        <p className="mt-4">
          Podaci koji se prikupljaju putem kontakt i newsletter formi koriste se za
          odgovor na upit, slanje relevantnih informacija i internu analitiku. Korisnik
          može u svakom trenutku zatražiti izmenu ili brisanje podataka.
        </p>
        <p className="mt-4">
          Za finalnu produkciju: dopuniti punim pravnim tekstom, rokom čuvanja podataka i
          kontaktom za Data Privacy zahteve.
        </p>
      </FadeIn>
    </Container>
  );
}

import Link from "next/link";

import { DocumentationGateForm } from "@/src/components/forms/documentation-gate-form";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Završna dokumentacija",
  description:
    "Otključajte primer završne dokumentacije i pogledajte kako izgleda deliverable paket studija ÉLÉMENT.",
  path: "/documentation",
});

export default async function DocumentationPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow={textByLocale(locale, { sr: "Dokumentacija", en: "Documentation" })}
          title={textByLocale(locale, {
            sr: "Primer završne dokumentacije",
            en: "Final documentation sample",
          })}
          description={textByLocale(locale, {
            sr: "Unesite email adresu i otključajte PDF primer dokumentacije koju klijent dobija na kraju projekta.",
            en: "Enter your email to unlock a PDF sample of the final documentation package.",
          })}
        />
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn className="border-brand-neutral-500/70 rounded-3xl border bg-white p-8">
          <h2 className="font-display text-brand-burgundy text-3xl">
            {textByLocale(locale, { sr: "Šta sadrži paket", en: "What is included" })}
          </h2>
          <ul className="text-brand-earth mt-5 space-y-3 text-sm">
            <li>
              {textByLocale(locale, {
                sr: "PDF tehnički paket (osnove, preseci, pozicije opreme)",
                en: "PDF technical package (plans, sections, equipment positions)",
              })}
            </li>
            <li>
              {textByLocale(locale, {
                sr: "DWG fajlovi spremni za izvođače",
                en: "DWG files ready for execution teams",
              })}
            </li>
            <li>
              {textByLocale(locale, {
                sr: "Specifikacije materijala i završnih obrada",
                en: "Material and finish specifications",
              })}
            </li>
            <li>
              {textByLocale(locale, {
                sr: "Shopping lista sa referencama proizvoda",
                en: "Shopping list with product references",
              })}
            </li>
            <li>
              {textByLocale(locale, {
                sr: "3D prikazi ključnih prostora i detalja",
                en: "3D visuals of key spaces and details",
              })}
            </li>
          </ul>
          <p className="text-brand-ink mt-6 text-sm">
            {textByLocale(locale, {
              sr: "Ovaj sample je skraćena verzija, namenjena da pokaže standard razrade i nivo detaljnosti koji dobijate.",
              en: "This sample is a shortened version showing our documentation quality and level of detail.",
            })}
          </p>
        </FadeIn>

        <FadeIn>
          <DocumentationGateForm />
          <div className="border-brand-neutral-500/70 bg-brand-neutral-100 mt-6 rounded-2xl border p-5">
            <p className="text-brand-earth text-sm">
              {textByLocale(locale, {
                sr: "Za dodatna pitanja o dokumentaciji i opsegu isporuka, kontaktirajte nas direktno.",
                en: "For additional questions about documentation and deliverables, contact us directly.",
              })}
            </p>
            <Link
              href="/contact"
              className="text-brand-burgundy decoration-brand-gold mt-4 inline-flex text-sm font-semibold underline underline-offset-4"
            >
              {textByLocale(locale, { sr: "Kontakt", en: "Contact" })}
            </Link>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}

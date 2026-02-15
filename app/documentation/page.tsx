import { DocumentationGateForm } from "@/src/components/forms/documentation-gate-form";
import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Završna dokumentacija",
  description:
    "Otključajte primer završne dokumentacije i pogledajte kako izgleda deliverable paket studija ÉLÉMENT.",
  path: "/documentation",
});

export default function DocumentationPage() {
  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Gated Content"
          title="Primer završne dokumentacije"
          description="Unesite email adresu i otključajte PDF primer dokumentacije koju klijent dobija na kraju projekta."
        />
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn className="border-brand-neutral-500/70 rounded-3xl border bg-white p-8">
          <h2 className="font-display text-brand-burgundy text-3xl">Šta sadrži paket</h2>
          <ul className="text-brand-earth mt-5 space-y-3 text-sm">
            <li>PDF tehnički paket (osnove, preseci, pozicije opreme)</li>
            <li>DWG fajlovi spremni za izvođače</li>
            <li>Specifikacije materijala i završnih obrada</li>
            <li>Shopping lista sa referencama proizvoda</li>
            <li>3D prikazi ključnih prostora i detalja</li>
          </ul>
          <p className="text-brand-ink mt-6 text-sm">
            Ovaj sample je skraćena verzija, namenjena da pokaže standard razrade i nivo
            detaljnosti koji dobijate.
          </p>
        </FadeIn>

        <FadeIn>
          <DocumentationGateForm />
          <div className="border-brand-neutral-500/70 bg-brand-neutral-100 mt-6 rounded-2xl border p-5">
            <p className="text-brand-earth text-sm">
              Za dodatna pitanja o dokumentaciji i opsegu isporuka, rezervišite kratke
              konsultacije.
            </p>
            <BookingLink className="mt-4 px-6 py-3 text-sm font-semibold" />
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}

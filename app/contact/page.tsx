import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { TrackedPhoneLink } from "@/src/components/ui/tracked-phone-link";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktirajte ÉLÉMENT studio i zakažite konsultacije. Direktan telefonski kontakt za Beograd i Pančevo.",
  path: "/contact",
});

export default async function ContactPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow={textByLocale(locale, { sr: "Kontakt", en: "Contact", de: "Kontakt" })}
          title={textByLocale(locale, { sr: "Kontakt", en: "Contact", de: "Kontakt" })}
          description={textByLocale(locale, {
            sr: "Za najbrži početak, pozovite nas ili odmah zakažite konsultacije.",
            en: "For the fastest start, call us or schedule a consultation.",
            de: "Für den schnellsten Start rufen Sie uns an oder vereinbaren direkt eine Beratung.",
          })}
        />
      </FadeIn>

      <FadeIn className="border-brand-neutral-500/70 bg-brand-neutral-100 mx-auto mt-10 max-w-3xl rounded-3xl border p-8 md:p-10">
        <h2 className="font-display text-brand-burgundy text-4xl">
          {textByLocale(locale, { sr: "Direktan kontakt", en: "Direct contact", de: "Direkter Kontakt" })}
        </h2>
        <p className="text-brand-earth mt-3 text-sm">
          {textByLocale(locale, {
            sr: "Dostupni za projekte u Beogradu i Pančevu.",
            en: "Available for projects in Belgrade and Pančevo.",
            de: "Verfügbar für Projekte in Belgrad und Pančevo.",
          })}
        </p>

        <ul className="text-brand-ink mt-6 space-y-3 text-base">
          <li>
            {textByLocale(locale, { sr: "Telefon:", en: "Phone:", de: "Telefon:" })}{" "}
            <TrackedPhoneLink
              trackingLocation="contact_page_phone"
              className="decoration-brand-gold underline underline-offset-4"
            />
          </li>
        </ul>

        <div className="mt-8">
          <BookingLink
            className="w-full justify-center px-6 py-3 text-sm font-semibold"
            trackingLocation="contact_page_main"
          />
        </div>
      </FadeIn>
    </Container>
  );
}

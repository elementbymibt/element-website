import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Promocije",
  description: "Aktuelna ponuda studija ÉLÉMENT: 15 minuta besplatnih konsultacija.",
  path: "/promo",
});

export default async function PromoPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow={textByLocale(locale, { sr: "Ponude", en: "Offers", de: "Angebote" })}
          title={textByLocale(locale, { sr: "Aktuelna ponuda", en: "Current offer", de: "Aktuelles Angebot" })}
          description={textByLocale(locale, {
            sr: "Trenutno je aktivna jedna ponuda za nove klijente.",
            en: "One active offer is currently available for new clients.",
            de: "Aktuell ist ein Angebot für neue Kunden aktiv.",
          })}
        />
      </FadeIn>

      <FadeIn className="mt-8 max-w-3xl">
        <article className="border-brand-neutral-500/70 rounded-3xl border bg-white p-7 shadow-[0_18px_40px_rgba(59,13,24,0.06)]">
          <span className="border-brand-gold/50 bg-brand-neutral-100 text-brand-burgundy inline-flex rounded-full border px-3 py-1 text-[11px] tracking-[0.2em] uppercase">
            {textByLocale(locale, { sr: "Aktuelno", en: "Active", de: "Aktiv" })}
          </span>
          <h2 className="font-display text-brand-burgundy mt-4 text-4xl">
            {textByLocale(locale, {
              sr: "15 minuta besplatne konsultacije",
              en: "15-minute free consultation",
              de: "15 Minuten kostenlose Beratung",
            })}
          </h2>
          <p className="text-brand-earth mt-3 text-base">
            {textByLocale(locale, {
              sr: "Rezervišite kratak uvodni poziv i dobijte jasan predlog sledećih koraka za vaš projekat.",
              en: "Book a short intro call and get a clear next-step proposal for your project.",
              de: "Buchen Sie ein kurzes Erstgespräch und erhalten Sie einen klaren Vorschlag für die nächsten Schritte Ihres Projekts.",
            })}
          </p>

          <div className="mt-6">
            <BookingLink
              label={textByLocale(locale, {
                sr: "Rezervišite besplatne konsultacije",
                en: "Book free consultation",
                de: "Kostenlose Beratung buchen",
              })}
              trackingLocation="promo_free_15min"
              className="px-7 py-3 text-sm"
            />
          </div>
        </article>
      </FadeIn>
    </Container>
  );
}

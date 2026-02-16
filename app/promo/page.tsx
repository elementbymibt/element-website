import Link from "next/link";

import { PromoCountdown } from "@/src/components/promo/promo-countdown";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { getPromoOffers } from "@/src/data/site-content-i18n";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Promocije",
  description: "Aktuelne ponude i ograničeni promo paketi studija ÉLÉMENT.",
  path: "/promo",
});

export default async function PromoPage() {
  const locale = await getCurrentLocale();
  const promoOffers = getPromoOffers(locale);

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow={textByLocale(locale, { sr: "Ponude", en: "Offers" })}
          title={textByLocale(locale, { sr: "Aktuelne ponude", en: "Current offers" })}
          description={textByLocale(locale, {
            sr: "Ograničene ponude za klijente koji žele da rezervišu termin u tekućem periodu.",
            en: "Limited offers for clients booking consultation slots in the current period.",
          })}
        />
      </FadeIn>

      <FadeIn className="mt-8">
        <PromoCountdown targetDate="2026-04-30T23:59:59+01:00" />
      </FadeIn>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {promoOffers.map((offer, index) => (
          <FadeIn
            key={offer.title}
            delay={index * 0.05}
            className="border-brand-neutral-500/70 rounded-3xl border bg-white p-6 shadow-[0_18px_40px_rgba(59,13,24,0.06)]"
          >
            <span className="border-brand-gold/50 bg-brand-neutral-100 text-brand-burgundy inline-flex rounded-full border px-3 py-1 text-[11px] tracking-[0.2em] uppercase">
              {offer.badge}
            </span>
            <h2 className="font-display text-brand-burgundy mt-4 text-3xl">
              {offer.title}
            </h2>
            <p className="text-brand-earth mt-2 text-sm">{offer.subtitle}</p>
            <p className="text-brand-ink mt-4 text-sm">{offer.details}</p>
            <Link
              href="/contact"
              className="text-brand-burgundy decoration-brand-gold mt-6 inline-flex text-xs font-semibold underline underline-offset-4"
            >
              {textByLocale(locale, { sr: "Kontaktirajte nas", en: "Contact us" })}
            </Link>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
}

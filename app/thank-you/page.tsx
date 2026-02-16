import Link from "next/link";

import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Hvala",
  description: "Potvrda uspešne prijave ili slanja upita.",
  path: "/thank-you",
});

export default async function ThankYouPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-24">
      <FadeIn className="border-brand-neutral-500/70 mx-auto max-w-3xl rounded-3xl border bg-white p-10 text-center">
        <p className="text-brand-gold text-xs tracking-[0.3em] uppercase">
          {textByLocale(locale, { sr: "Hvala", en: "Thank you" })}
        </p>
        <h1 className="font-display text-brand-burgundy mt-3 text-5xl">
          {textByLocale(locale, { sr: "Hvala!", en: "Thank you!" })}
        </h1>
        <p className="text-brand-earth mt-4">
          {textByLocale(locale, {
            sr: "Analiziraćemo vaše podatke i kontaktirati vas sa personalizovanom ponudom.",
            en: "We’ll review your details and get back with a personalized proposal.",
          })}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="btn-secondary text-brand-burgundy inline-flex rounded-full px-7 py-3 text-sm font-semibold"
          >
            {textByLocale(locale, { sr: "Kontakt", en: "Contact" })}
          </Link>
          <Link
            href="/"
            className="btn-secondary text-brand-burgundy inline-flex rounded-full px-7 py-3 text-sm font-semibold"
          >
            {textByLocale(locale, { sr: "Nazad na početnu", en: "Back to home" })}
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
}

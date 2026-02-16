import Link from "next/link";

import { Container } from "@/src/components/ui/container";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";

export default async function NotFoundPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-24 text-center">
      <p className="text-brand-gold text-xs tracking-[0.3em] uppercase">404</p>
      <h1 className="font-display text-brand-burgundy mt-3 text-5xl">
        {textByLocale(locale, {
          sr: "Stranica nije pronađena",
          en: "Page not found",
          de: "Seite nicht gefunden",
        })}
      </h1>
      <p className="text-brand-earth mt-4">
        {textByLocale(locale, {
          sr: "Traženi sadržaj trenutno nije dostupan.",
          en: "The requested content is currently unavailable.",
          de: "Der angeforderte Inhalt ist derzeit nicht verfügbar.",
        })}
      </p>
      <Link
        href="/"
        className="btn-primary mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold"
      >
        {textByLocale(locale, {
          sr: "Vratite se na početnu",
          en: "Return to home",
          de: "Zurück zur Startseite",
        })}
      </Link>
    </Container>
  );
}

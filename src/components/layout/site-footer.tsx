"use client";

import Link from "next/link";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { NewsletterForm } from "@/src/components/forms/newsletter-form";
import { Container } from "@/src/components/ui/container";
import { pickLocaleText } from "@/src/lib/i18n/config";
import { trackEvent } from "@/src/lib/analytics";
import { siteConfig } from "@/src/lib/site-config";

const legalLinks = [
  { href: "/privacy", label: "Politika privatnosti" },
  { href: "/uslovi-saradnje", label: "Uslovi saradnje" },
  { href: "/contact", label: "Kontakt" },
];

export function SiteFooter() {
  const { locale } = useLocale();

  const localizedLegalLinks =
    locale === "sr"
      ? legalLinks
      : locale === "de"
        ? [
            { href: "/privacy", label: "Datenschutzerklärung" },
            { href: "/uslovi-saradnje", label: "Zusammenarbeitsbedingungen" },
            { href: "/contact", label: "Kontakt" },
          ]
        : [
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/uslovi-saradnje", label: "Collaboration terms" },
            { href: "/contact", label: "Contact" },
          ];

  return (
    <footer className="border-brand-neutral-500/60 bg-brand-neutral-200 mt-24 border-t pt-16 pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-brand-gold text-xs tracking-[0.35em] uppercase">
              {pickLocaleText(locale, { sr: "Novosti", en: "Newsletter", de: "Newsletter" })}
            </p>
            <h3 className="font-display text-brand-burgundy mt-3 text-3xl md:text-4xl">
              {pickLocaleText(locale, {
                sr: "Diskretne novosti, bez buke.",
                en: "Curated updates, no noise.",
                de: "Ausgewählte Updates, ohne Lärm.",
              })}
            </h3>
            <p className="text-brand-earth mt-3 max-w-xl">
              {pickLocaleText(locale, {
                sr: "Dobijajte periodične uvide, trendove i dostupnost novih termina za premium konsultacije.",
                en: "Receive periodic insights, trends and new availability for premium consultations.",
                de: "Erhalten Sie regelmäßig Einblicke, Trends und neue freie Termine für Premium-Konsultationen.",
              })}
            </p>
            <NewsletterForm className="mt-6 max-w-xl" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-brand-gold text-xs tracking-[0.3em] uppercase">
                {pickLocaleText(locale, { sr: "Kontakt", en: "Contact", de: "Kontakt" })}
              </p>
              <ul className="text-brand-earth mt-4 space-y-2 text-sm">
                <li>
                  {pickLocaleText(locale, {
                    sr: siteConfig.location,
                    en: "Serbia",
                    de: "Serbien",
                  })}
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-brand-burgundy"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-brand-burgundy"
                    onClick={() => trackEvent("phone_click", { location: "footer_phone" })}
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-brand-gold text-xs tracking-[0.3em] uppercase">
                {pickLocaleText(locale, { sr: "Linkovi", en: "Links", de: "Links" })}
              </p>
              <ul className="text-brand-earth mt-4 space-y-2 text-sm">
                {localizedLegalLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-brand-burgundy">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-brand-burgundy"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-brand-neutral-500/60 text-brand-earth mt-14 flex flex-col gap-2 border-t pt-6 text-xs tracking-wide md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} ÉLÉMENT (by M·I·B·T).{" "}
            {pickLocaleText(locale, {
              sr: "Sva prava zadržana.",
              en: "All rights reserved.",
              de: "Alle Rechte vorbehalten.",
            })}
          </p>
          <p>
            {pickLocaleText(locale, {
              sr: "Dizajnirano za sofisticiran život.",
              en: "Designed for refined living.",
              de: "Gestaltet für anspruchsvolles Wohnen.",
            })}
          </p>
        </div>
      </Container>
    </footer>
  );
}

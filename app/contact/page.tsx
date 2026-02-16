import { ContactForm } from "@/src/components/forms/contact-form";
import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { IntakeLink } from "@/src/components/ui/intake-link";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";
import { siteConfig } from "@/src/lib/site-config";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktirajte ÉLÉMENT studio i pošaljite detalje projekta. Zakazivanje konsultacija dostupno kroz booking link.",
  path: "/contact",
});

export default async function ContactPage() {
  const locale = await getCurrentLocale();
  const instagramHandle = siteConfig.instagram
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, "")
    .replace(/\/$/, "");

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow={textByLocale(locale, { sr: "Kontakt", en: "Contact" })}
          title={textByLocale(locale, { sr: "Kontakt", en: "Contact" })}
          description={textByLocale(locale, {
            sr: "Pošaljite osnovne informacije o projektu. Vraćamo se sa predlogom narednih koraka.",
            en: "Share the core project details. We will return with a clear next-step proposal.",
          })}
        />
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn className="border-brand-neutral-500/70 bg-brand-neutral-100 rounded-3xl border p-7">
          <h2 className="font-display text-brand-burgundy text-3xl">
            {textByLocale(locale, { sr: "Direktni kanali", en: "Direct channels" })}
          </h2>
          <ul className="text-brand-ink mt-5 space-y-3 text-sm">
            <li>
              Instagram:{" "}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="decoration-brand-gold underline underline-offset-4"
              >
                @{instagramHandle}
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="decoration-brand-gold underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              Telefon:{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="decoration-brand-gold underline underline-offset-4"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href={siteConfig.website}
                target="_blank"
                rel="noreferrer noopener"
                className="decoration-brand-gold underline underline-offset-4"
              >
                {siteConfig.website.replace(/^https?:\/\//, "")}
              </a>
            </li>
          </ul>

          <div className="border-brand-neutral-500/70 mt-8 rounded-2xl border bg-white p-5">
            <p className="text-brand-earth text-sm">
              {textByLocale(locale, {
                sr: "Za brži početak izaberite jedan od dva koraka ispod.",
                en: "For a faster start, choose one of the two options below.",
              })}
            </p>
            <div className="mt-4 space-y-2">
              <BookingLink
                className="w-full justify-center px-6 py-3 text-sm font-semibold"
                trackingLocation="contact_panel"
              />
              <IntakeLink
                label={textByLocale(locale, { sr: "Popunite upitnik", en: "Start intake" })}
                className="w-full justify-center px-6 py-3 text-sm font-semibold"
                trackingLocation="contact_panel"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn className="border-brand-neutral-500/70 rounded-3xl border bg-white p-7">
          <ContactForm />
        </FadeIn>
      </div>
    </Container>
  );
}

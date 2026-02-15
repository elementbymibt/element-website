import { ContactForm } from "@/src/components/forms/contact-form";
import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { buildMetadata } from "@/src/lib/seo";
import { siteConfig } from "@/src/lib/site-config";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktirajte ÉLÉMENT studio i pošaljite detalje projekta. Zakazivanje konsultacija dostupno kroz booking link.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Contact"
          title="Kontakt"
          description="Pošaljite osnovne informacije o projektu. Vraćamo se sa predlogom narednih koraka."
        />
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn className="border-brand-neutral-500/70 bg-brand-neutral-100 rounded-3xl border p-7">
          <h2 className="font-display text-brand-burgundy text-3xl">Direktni kanali</h2>
          <ul className="text-brand-ink mt-5 space-y-3 text-sm">
            <li>
              Instagram:{" "}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="decoration-brand-gold underline underline-offset-4"
              >
                @element.by.mibt
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
              Website:{" "}
              <a
                href={siteConfig.website}
                target="_blank"
                rel="noreferrer noopener"
                className="decoration-brand-gold underline underline-offset-4"
              >
                element-by-mibt.vercel.app
              </a>
            </li>
          </ul>

          <div className="border-brand-neutral-500/70 mt-8 rounded-2xl border bg-white p-5">
            <p className="text-brand-earth text-sm">
              Za brži početak projekta možete direktno rezervisati termin uvodnih
              konsultacija.
            </p>
            <BookingLink className="mt-4 px-6 py-3 text-sm font-semibold" />
          </div>
        </FadeIn>

        <FadeIn className="border-brand-neutral-500/70 rounded-3xl border bg-white p-7">
          <ContactForm />
        </FadeIn>
      </div>
    </Container>
  );
}

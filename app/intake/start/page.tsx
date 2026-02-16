import Link from "next/link";
import Image from "next/image";

import { StartIntakeButton } from "@/src/components/intake/start-intake-button";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Klijentski upitnik",
  description:
    "Kratak upitnik koji nam daje jasan uvid u vaš prostor i preferencije. Popunjavanje traje oko 10-12 minuta.",
  path: "/intake/start",
});

export default async function IntakeStartPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <div className="from-brand-burgundy to-brand-ink rounded-3xl bg-gradient-to-br p-8 text-white md:p-12">
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase">
            {textByLocale(locale, { sr: "Klijentski upitnik", en: "Client intake" })}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
            {textByLocale(locale, {
              sr: "Kratak upitnik za jasan pravac projekta.",
              en: "A short intake for a clear project direction.",
            })}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            {textByLocale(locale, {
              sr: "Za manje od 10 minuta dobijamo ključne informacije: stil, tip prostora i osnovne uslove. Na osnovu toga vraćamo se sa sledećim korakom i predlogom saradnje.",
              en: "In under 10 minutes, we capture the essentials: style, space type and key constraints. Then we return with the next step and a collaboration proposal.",
            })}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <StartIntakeButton
              label={textByLocale(locale, { sr: "Započnite upitnik", en: "Start intake" })}
            />
            <Link
              href="/portfolio"
              className="text-brand-neutral-100 decoration-brand-gold inline-flex min-h-12 items-center justify-center text-sm font-semibold underline underline-offset-4"
            >
              {textByLocale(locale, { sr: "Pogledajte projekte", en: "View projects" })}
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              {
                src: "/intake/step-space.jpg",
                alt: textByLocale(locale, {
                  sr: "Korak 1: izbor stila enterijera – ÉLÉMENT upitnik",
                  en: "Step 1: interior style selection – ÉLÉMENT intake",
                }),
                title: textByLocale(locale, { sr: "Stil", en: "Style" }),
                desc: textByLocale(locale, {
                  sr: "Izaberite smer koji vam je najbliži.",
                  en: "Choose the direction that fits you.",
                }),
              },
              {
                src: "/intake/step-kitchen.jpg",
                alt: textByLocale(locale, {
                  sr: "Korak 2: osnovni podaci prostora – ÉLÉMENT upitnik",
                  en: "Step 2: space basics – ÉLÉMENT intake",
                }),
                title: textByLocale(locale, { sr: "Prostor", en: "Space" }),
                desc: textByLocale(locale, {
                  sr: "Tip prostora i osnovni uslovi.",
                  en: "Property type and key constraints.",
                }),
              },
              {
                src: "/intake/step-bedroom.jpg",
                alt: textByLocale(locale, {
                  sr: "Korak 3: dodatne napomene – ÉLÉMENT upitnik",
                  en: "Step 3: additional notes – ÉLÉMENT intake",
                }),
                title: textByLocale(locale, { sr: "Napomene", en: "Notes" }),
                desc: textByLocale(locale, {
                  sr: "Šta je prioritet i šta izbegavamo.",
                  en: "What matters most and what to avoid.",
                }),
              },
              {
                src: "/intake/step-docs.jpg",
                alt: textByLocale(locale, {
                  sr: "Korak 4: pregled i potvrda – ÉLÉMENT upitnik",
                  en: "Step 4: review and confirmation – ÉLÉMENT intake",
                }),
                title: textByLocale(locale, { sr: "Potvrda", en: "Review" }),
                desc: textByLocale(locale, {
                  sr: "Pregled pre slanja i finalno potvrđivanje.",
                  en: "Review before submit and final confirmation.",
                }),
              },
            ].map((item) => (
              <div key={item.src} className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/0" />
                </div>
                <div className="p-4">
                  <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">{item.title}</p>
                  <p className="mt-2 text-sm text-white/85">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}

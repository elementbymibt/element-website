import Link from "next/link";

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
              sr: "Za 10-12 minuta do jasnog brief-a.",
              en: "In 10-12 minutes: a clear design brief.",
            })}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            {textByLocale(locale, {
              sr: "Odgovorite na nekoliko pitanja o prostoru i preferencijama. Ako niste sigurni, uvek možete izabrati \"Ne znam\".",
              en: "Answer a few questions about your space and preferences. If unsure, you can always choose \"I don't know\".",
            })}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/intake/new"
              className="btn-primary inline-flex min-h-12 items-center justify-center rounded-full px-8 text-sm font-semibold"
            >
              {textByLocale(locale, { sr: "Započnite upitnik", en: "Start intake" })}
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary border-white/50 text-white hover:bg-white/10 inline-flex min-h-12 items-center justify-center rounded-full px-8 text-sm font-semibold"
            >
              {textByLocale(locale, { sr: "Pogledaj projekte", en: "View projects" })}
            </Link>
          </div>

          <div className="mt-8 grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">
                {textByLocale(locale, { sr: "Jednostavno", en: "Simple" })}
              </p>
              <p className="mt-2 text-white/85">
                {textByLocale(locale, {
                  sr: "Kratko i jasno: samo ono što nam je potrebno da razumemo vaš projekat.",
                  en: "Short and clear: only what we need to understand your project.",
                })}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">
                {textByLocale(locale, { sr: "Vođeno", en: "Guided" })}
              </p>
              <p className="mt-2 text-white/85">
                {textByLocale(locale, {
                  sr: "Uvek postoji opcija \"Ne znam\" uz kratke smernice kada zapne.",
                  en: "You always have an \"I don't know\" option with mini guidance.",
                })}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">
                {textByLocale(locale, { sr: "Pregled", en: "Preview" })}
              </p>
              <p className="mt-2 text-white/85">
                {textByLocale(locale, {
                  sr: "Pre slanja dobijate finalni pregled svih izbora, za mirnu potvrdu.",
                  en: "Before submit you get a final review of your choices for calm confirmation.",
                })}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}

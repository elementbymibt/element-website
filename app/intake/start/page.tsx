import Link from "next/link";

import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { getCurrentLocale, textByLocale } from "@/src/lib/i18n/server";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Ultimate Client Intake Wizard",
  description:
    "Pokrenite premium intake proces i kreirajte kompletan dizajn brief za ÉLÉMENT projekat za 10-12 minuta.",
  path: "/intake/start",
});

export default async function IntakeStartPage() {
  const locale = await getCurrentLocale();

  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <div className="from-brand-burgundy to-brand-ink rounded-3xl bg-gradient-to-br p-8 text-white md:p-12">
          <p className="text-brand-gold text-xs tracking-[0.3em] uppercase">Ultimate Intake</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
            You are 10-12 minutes away from a complete design brief.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            {textByLocale(locale, {
              sr: "Ovaj wizard prikuplja hard data, lifestyle navike i estetske preferencije, sa autosave logikom i pametnim helper-ima kad niste sigurni.",
              en: "This wizard collects hard data, lifestyle habits and aesthetic preferences with autosave and smart helper flows.",
            })}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/intake/new"
              className="btn-primary inline-flex min-h-12 items-center justify-center rounded-full px-8 text-sm font-semibold"
            >
              {textByLocale(locale, { sr: "Započni intake", en: "Start intake" })}
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
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">Autosave</p>
              <p className="mt-2 text-white/85">
                {textByLocale(locale, {
                  sr: "Draft se čuva automatski na svakoj promeni i koraku.",
                  en: "The draft is saved automatically on every change and step.",
                })}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">Dummy-proof</p>
              <p className="mt-2 text-white/85">
                {textByLocale(locale, {
                  sr: "Svako pitanje ima \"Ne znam\" opciju i mini pomoć.",
                  en: "Every question includes an \"I don't know\" path and mini helper.",
                })}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-brand-gold text-xs tracking-[0.2em] uppercase">Final Preview</p>
              <p className="mt-2 text-white/85">
                {textByLocale(locale, {
                  sr: "Pre slanja dobijate sažetak: moodboard, budžet i otkrivene kontradikcije.",
                  en: "Before submit you get a summary: moodboard, budget and detected contradictions.",
                })}
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}

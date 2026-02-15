import Link from "next/link";

import { BookingLink } from "@/src/components/ui/booking-link";
import { Container } from "@/src/components/ui/container";
import { FadeIn } from "@/src/components/ui/fade-in";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { processSteps } from "@/src/data/site-content";
import { buildMetadata } from "@/src/lib/seo";

export const metadata = buildMetadata({
  title: "Kako radimo",
  description:
    "Proces rada studija ÉLÉMENT kroz 5 jasnih faza: brief, koncept, razrada, vizualizacija i dokumentacija.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <Container className="py-16 md:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Process"
          title="Kako radimo"
          description="Naš metod je linearan, transparentan i vođen kvalitetom. Svaka etapa ima jasne isporuke."
        />
      </FadeIn>

      <div className="mt-12 space-y-6">
        {processSteps.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.05}>
            <article className="border-brand-neutral-500/70 relative overflow-hidden rounded-3xl border bg-white p-6 md:p-8">
              <div className="from-brand-gold to-brand-burgundy pointer-events-none absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b" />
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xl">
                  <p className="text-brand-gold text-xs tracking-[0.26em] uppercase">
                    Korak 0{index + 1}
                  </p>
                  <h2 className="font-display text-brand-burgundy mt-2 text-4xl">
                    {step.title}
                  </h2>
                  <p className="text-brand-earth mt-3 text-sm">{step.short}</p>
                </div>
                <div className="border-brand-neutral-500/70 bg-brand-neutral-100 rounded-2xl border p-4 md:w-[45%]">
                  <h3 className="text-brand-burgundy text-xs tracking-[0.2em] uppercase">
                    Šta dobijate u ovom koraku
                  </h3>
                  <ul className="text-brand-ink mt-3 space-y-2 text-sm">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="bg-brand-gold mt-1 inline-block h-1.5 w-1.5 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="bg-brand-burgundy text-brand-neutral-100 mt-12 rounded-3xl p-8 md:p-10">
        <h3 className="font-display text-4xl">
          Želite da prođemo kroz vaš projekat korak po korak?
        </h3>
        <p className="text-brand-neutral-200 mt-3 max-w-2xl">
          Rezervišite termin i dobijte jasan predlog procesa, vremenskog okvira i
          isporuka.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <BookingLink className="px-7 py-3 text-sm font-semibold" />
          <Link
            href="/contact"
            className="btn-secondary text-brand-neutral-100 inline-flex rounded-full px-7 py-3 text-sm font-semibold"
          >
            Kontakt
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
}

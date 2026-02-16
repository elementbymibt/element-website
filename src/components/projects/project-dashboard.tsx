"use client";

import Link from "next/link";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { roomLabels } from "@/src/data/intake-content";
import type { IntakeDraft, ProjectRecord, RoomScopeOption } from "@/src/lib/intake/types";

type ProjectDashboardProps = {
  intake: IntakeDraft;
  project: ProjectRecord | null;
};

const roomLabelsEn: Record<RoomScopeOption, string> = {
  living_room: "Living room",
  kitchen: "Kitchen",
  bedroom: "Bedroom",
  bathroom: "Bathroom",
  dining: "Dining",
  hallway: "Hallway",
  office: "Office",
  kids_room: "Kids room",
  terrace: "Terrace",
  meeting_room: "Meeting room",
  reception: "Reception",
  open_space: "Open space",
  conference_room: "Conference room",
  kitchenette: "Kitchenette",
  storage_room: "Storage room",
  wc: "WC",
  commercial_zone: "Commercial zone",
};

function formatBudget(min: number | null, max: number | null, locale: "sr" | "en") {
  if (!min || !max) {
    return locale === "en" ? "Not defined" : "Nedefinisano";
  }

  return `${min.toLocaleString(locale === "en" ? "en-GB" : "sr-RS")} - ${max.toLocaleString(
    locale === "en" ? "en-GB" : "sr-RS",
  )} EUR`;
}

export function ProjectDashboard({ intake, project }: ProjectDashboardProps) {
  const summary = project?.summary;
  const { locale } = useLocale();
  const tx = (sr: string, en: string) => (locale === "en" ? en : sr);

  return (
    <div className="space-y-8">
      <section className="from-brand-burgundy to-brand-ink rounded-3xl bg-gradient-to-r p-8 text-white md:p-10">
        <p className="text-brand-gold text-xs tracking-[0.28em] uppercase">Project Dashboard</p>
        <h1 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
          {summary?.title ?? `${tx("Projekat", "Project")} ${intake.basics.city || intake.id.slice(0, 8)}`}
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-white/80">
          {tx(
            "Intake je završen i spreman za sledeći korak. Ovaj dashboard prikazuje sažetak preferencija, budžeta i status projekta.",
            "Intake is complete and ready for the next phase. This dashboard summarizes preferences, budget and project status.",
          )}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="btn-secondary text-brand-neutral-100 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            {tx("Kontakt", "Contact")}
          </Link>
          <button
            type="button"
            className="btn-primary inline-flex rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            {tx("Generiši predlog", "Generate proposal")}
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-2xl border border-brand-neutral-500/60 bg-white p-4">
          <p className="text-brand-earth text-xs uppercase">{tx("Status", "Status")}</p>
          <p className="text-brand-burgundy mt-2 text-sm font-semibold">{project?.status ?? intake.status}</p>
        </article>
        <article className="rounded-2xl border border-brand-neutral-500/60 bg-white p-4">
          <p className="text-brand-earth text-xs uppercase">{tx("Stil", "Style")}</p>
          <p className="text-brand-burgundy mt-2 text-sm font-semibold">
            {intake.style.selectedStyles.join(", ")}
          </p>
        </article>
        <article className="rounded-2xl border border-brand-neutral-500/60 bg-white p-4">
          <p className="text-brand-earth text-xs uppercase">{tx("Paleta", "Palette")}</p>
          <p className="text-brand-burgundy mt-2 text-sm font-semibold">{intake.color.palette}</p>
        </article>
        <article className="rounded-2xl border border-brand-neutral-500/60 bg-white p-4">
          <p className="text-brand-earth text-xs uppercase">{tx("Budžet", "Budget")}</p>
          <p className="text-brand-burgundy mt-2 text-sm font-semibold">
            {formatBudget(intake.budget.minTotal, intake.budget.maxTotal, locale)}
          </p>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-brand-neutral-500/60 bg-white p-6">
          <h2 className="font-display text-brand-burgundy text-3xl">
            {tx("Intake sažetak", "Intake summary")}
          </h2>
          <div className="text-brand-earth mt-4 grid gap-4 text-sm md:grid-cols-2">
            <div>
              <p className="text-brand-burgundy text-xs tracking-[0.18em] uppercase">
                {tx("Projekt", "Project")}
              </p>
              <p className="mt-1">{intake.basics.propertyType}</p>
              <p>{intake.basics.city || tx("Grad nije unet", "City not provided")}</p>
              <p>{intake.basics.total_m2 ?? "-"} m2</p>
            </div>
            <div>
              <p className="text-brand-burgundy text-xs tracking-[0.18em] uppercase">
                Mood & Lighting
              </p>
              <p className="mt-1">Mood: {intake.mood.selectedMoods.join(", ")}</p>
              <p>Lighting preset: {intake.lighting.presetSuggestion}</p>
              <p>
                {tx("Nivo ambijenta", "Ambience level")}: {intake.lighting.dramaLevel}/10
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-brand-burgundy text-xs tracking-[0.18em] uppercase">
              {tx("Rooms in scope", "Rooms in scope")}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {intake.basics.roomsInScope.map((room) => (
                <span
                  key={room}
                  className="rounded-full border border-brand-neutral-500 px-3 py-1 text-xs"
                >
                  {(locale === "en" ? roomLabelsEn[room] : roomLabels[room])} x
                  {intake.basics.roomQuantities[room] ?? 1}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-brand-burgundy text-xs tracking-[0.18em] uppercase">
              {tx("Prioriteti", "Tradeoffs")}
            </p>
            <div className="mt-2 grid gap-2 text-xs md:grid-cols-2">
              {Object.entries(intake.tradeoffs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded-lg bg-brand-neutral-100 px-3 py-2"
                >
                  <span>{key}</span>
                  <span>{value}%</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        <aside className="space-y-4">
          <article className="rounded-2xl border border-brand-neutral-500/60 bg-white p-5">
            <p className="text-brand-burgundy text-sm font-semibold">{tx("Assets", "Assets")}</p>
            <p className="text-brand-earth mt-2 text-sm">
              {tx("Ukupno upload-ova", "Total uploads")}: <strong>{intake.assets.length}</strong>
            </p>
            <p className="text-brand-earth mt-1 text-sm">
              Inspirations: <strong>{intake.inspirations.inspirationAssetIds.length}</strong>
            </p>
            <p className="text-brand-earth mt-1 text-sm">
              Avoid: <strong>{intake.inspirations.avoidAssetIds.length}</strong>
            </p>
          </article>

          <article className="rounded-2xl border border-brand-neutral-500/60 bg-white p-5">
            <p className="text-brand-burgundy text-sm font-semibold">{tx("Kontradikcije", "Contradictions")}</p>
            {summary?.contradictions.length ? (
              <ul className="text-brand-earth mt-2 list-disc space-y-1 pl-5 text-sm">
                {summary.contradictions.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
            ) : (
              <p className="text-brand-earth mt-2 text-sm">
                {tx("Nema detektovanih kontradikcija.", "No contradictions detected.")}
              </p>
            )}
          </article>

          <article className="rounded-2xl border border-brand-neutral-500/60 bg-white p-5">
            <p className="text-brand-burgundy text-sm font-semibold">{tx("Akcije", "Actions")}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href={`/intake/${intake.id}`}
                className="btn-secondary text-brand-burgundy inline-flex rounded-full px-4 py-2 text-xs font-semibold"
              >
                {tx("Izmeni intake", "Edit intake")}
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-brand-burgundy inline-flex rounded-full px-4 py-2 text-xs font-semibold"
              >
                {tx("Kontakt", "Contact")}
              </Link>
            </div>
          </article>
        </aside>
      </section>
    </div>
  );
}

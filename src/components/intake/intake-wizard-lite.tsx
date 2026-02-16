"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useLocale } from "@/src/components/i18n/locale-provider";
import { trackEvent } from "@/src/lib/analytics";
import type { IntakeDraft } from "@/src/lib/intake/types";
import { cn } from "@/src/lib/utils";

type ApiError = {
  status: "error";
  message: string;
};

type SaveResponse = {
  status: "success";
  savedAt: string;
  intake: IntakeDraft;
};

type SubmitResponse = {
  status: "success";
  message: string;
  redirectTo: string;
};

const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-brand-neutral-300/70">
      <div
        className="bg-brand-gold h-2 rounded-full transition-all"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

const styleCards = [
  {
    id: "japandi",
    title: { sr: "Japandi", en: "Japandi" },
    images: [
      {
        src: "/intake/style-japandi-1.jpg",
        alt: { sr: "Japandi dnevni boravak – ÉLÉMENT stil", en: "Japandi living room – ÉLÉMENT style" },
      },
      {
        src: "/intake/style-japandi-2.jpg",
        alt: { sr: "Japandi detalj – ÉLÉMENT stil", en: "Japandi detail – ÉLÉMENT style" },
      },
    ],
  },
  {
    id: "scandinavian",
    title: { sr: "Skandinavski", en: "Scandinavian" },
    images: [
      {
        src: "/intake/style-scandi-1.jpg",
        alt: { sr: "Skandinavski enterijer – ÉLÉMENT stil", en: "Scandinavian interior – ÉLÉMENT style" },
      },
      {
        src: "/intake/style-scandi-2.jpg",
        alt: { sr: "Skandinavski detalj – ÉLÉMENT stil", en: "Scandinavian detail – ÉLÉMENT style" },
      },
    ],
  },
  {
    id: "soft_industrial",
    title: { sr: "Industrial", en: "Industrial" },
    images: [
      {
        src: "/intake/style-industrial-1.jpg",
        alt: { sr: "Industrial enterijer – ÉLÉMENT stil", en: "Industrial interior – ÉLÉMENT style" },
      },
      {
        src: "/intake/style-industrial-2.jpg",
        alt: { sr: "Industrial detalj – ÉLÉMENT stil", en: "Industrial detail – ÉLÉMENT style" },
      },
    ],
  },
  {
    id: "boho",
    title: { sr: "Boho", en: "Boho" },
    images: [
      {
        src: "/intake/style-boho-1.jpg",
        alt: { sr: "Boho enterijer – ÉLÉMENT stil", en: "Boho interior – ÉLÉMENT style" },
      },
      {
        src: "/intake/style-boho-2.jpg",
        alt: { sr: "Boho detalj – ÉLÉMENT stil", en: "Boho detail – ÉLÉMENT style" },
      },
    ],
  },
] as const;

type WizardStyleId = (typeof styleCards)[number]["id"];

const propertyTypeOptions = [
  { id: "apartment", sr: "Stan", en: "Apartment" },
  { id: "house", sr: "Kuća", en: "House" },
  { id: "business_space", sr: "Poslovni prostor", en: "Business space" },
] as const satisfies Array<{
  id: IntakeDraft["basics"]["propertyType"];
  sr: string;
  en: string;
}>;

type StepId = 0 | 1 | 2 | 3;

const deadlineOptions = [
  { id: "2w", sr: "U naredne 2 nedelje", en: "Within 2 weeks" },
  { id: "1m", sr: "U narednih 30 dana", en: "Within 30 days" },
  { id: "3m", sr: "U naredna 3 meseca", en: "Within 3 months" },
  { id: "6m", sr: "U narednih 6 meseci", en: "Within 6 months" },
  { id: "flexible", sr: "Fleksibilno", en: "Flexible" },
] as const satisfies Array<{
  id: IntakeDraft["basics"]["deadline"];
  sr: string;
  en: string;
}>;

const budgetRangeOptions = [
  {
    id: "unknown",
    sr: "Još ne znam",
    en: "Not sure yet",
    apply: () => ({
      unknownBudget: true,
      tier: "balanced" as const,
      minTotal: 30000,
      maxTotal: 70000,
    }),
  },
  {
    id: "starter",
    sr: "Do 30.000€",
    en: "Up to €30,000",
    apply: () => ({
      unknownBudget: false,
      tier: "starter" as const,
      minTotal: 12000,
      maxTotal: 30000,
    }),
  },
  {
    id: "balanced",
    sr: "30.000€ – 70.000€",
    en: "€30,000 – €70,000",
    apply: () => ({
      unknownBudget: false,
      tier: "balanced" as const,
      minTotal: 30000,
      maxTotal: 70000,
    }),
  },
  {
    id: "premium",
    sr: "70.000€+",
    en: "€70,000+",
    apply: () => ({
      unknownBudget: false,
      tier: "premium" as const,
      minTotal: 70000,
      maxTotal: 180000,
    }),
  },
] as const;

function formatDateTime(iso: string | undefined, locale: "sr" | "en") {
  if (!iso) return "";
  const date = new Date(iso);
  try {
    return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "sr-RS", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  } catch {
    return "";
  }
}

export function IntakeWizardLite({ initialIntake }: { initialIntake: IntakeDraft }) {
  const router = useRouter();
  const { locale } = useLocale();
  const tx = useCallback((sr: string, en: string) => (locale === "en" ? en : sr), [locale]);

  const [draft, setDraft] = useState<IntakeDraft>(initialIntake);
  const [step, setStep] = useState<StepId>(
    Math.max(0, Math.min(3, (initialIntake.currentStep ?? 0) as number)) as StepId,
  );
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("saved");
  const [lastSavedAt, setLastSavedAt] = useState(initialIntake.updatedAt);
  const [saveError, setSaveError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const draftRef = useRef(draft);
  const mountedRef = useRef(false);

  useEffect(() => {
    draftRef.current = draft;
  }, [draft]);

  const stepTitles = useMemo(() => {
    return [
      tx("Izaberite stil enterijera", "Choose an interior style"),
      tx("Osnovni podaci prostora", "Space basics"),
      tx("Dodatne napomene", "Additional notes"),
      tx("Završetak", "Finish"),
    ] as const;
  }, [tx]);

  const progress = useMemo(() => Math.round(((step + 1) / stepTitles.length) * 100), [step, stepTitles.length]);

  const updateDraft = useCallback((updater: (prev: IntakeDraft) => IntakeDraft) => {
    setDraft((prev) => ({
      ...updater(prev),
      currentStep: step,
      updatedAt: new Date().toISOString(),
    }));
  }, [step]);

  const persistDraft = useCallback(async (nextStep: StepId, payload?: IntakeDraft) => {
    setSaveState("saving");
    setSaveError("");

    try {
      const response = await fetch(`/api/intake/${draftRef.current.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentStep: nextStep,
          draft: payload ?? draftRef.current,
        }),
      });

      const result = (await response.json()) as SaveResponse | ApiError;

      if (!response.ok || result.status === "error") {
        throw new Error(result.status === "error" ? result.message : tx("Greška pri snimanju.", "Save error."));
      }

      setSaveState("saved");
      setLastSavedAt(result.savedAt);
    } catch (error) {
      setSaveState("error");
      setSaveError(error instanceof Error ? error.message : tx("Snimanje nije uspelo.", "Save failed."));
    }
  }, [tx]);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    const timeout = window.setTimeout(() => {
      void persistDraft(step);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [draft, step, persistDraft]);

  const canGoNext = useMemo(() => {
    if (step === 0) {
      return (draft.style.selectedStyles?.length ?? 0) >= 1;
    }

    if (step === 1) {
      const hasName = Boolean(draft.client.fullName.trim());
      const hasEmail = emailPattern.test(draft.client.email.trim().toLowerCase());
      const hasProperty = Boolean(draft.basics.propertyType);
      const hasCity = Boolean(draft.basics.city.trim());
      const hasMeasurements = typeof draft.agreements.hasExactMeasurements === "boolean";
      const understandsConcept = draft.agreements.understandsConceptConceptualOnly === true;
      const understandsRevisions = draft.agreements.understandsTwoRevisionsIncluded === true;
      const consent = draft.agreements.privacyConsent === true;

      return (
        hasName &&
        hasEmail &&
        hasProperty &&
        hasCity &&
        hasMeasurements &&
        understandsConcept &&
        understandsRevisions &&
        consent
      );
    }

    return true;
  }, [draft, step]);

  const goToStep = async (next: StepId) => {
    setSubmitError("");
    setStep(next);
    setDraft((prev) => ({ ...prev, currentStep: next }));
    await persistDraft(next, { ...draftRef.current, currentStep: next });
  };

  const onNext = async () => {
    if (step >= 3) return;
    if (!canGoNext) {
      setSubmitError(
        step === 0
          ? tx("Izaberite bar jedan stil.", "Select at least one style.")
          : tx("Molimo popunite obavezna polja.", "Please complete the required fields."),
      );
      return;
    }
    await goToStep((step + 1) as StepId);
  };

  const onBack = async () => {
    if (step <= 0) return;
    await goToStep((step - 1) as StepId);
  };

  const toggleStyle = (styleId: WizardStyleId) => {
    updateDraft((prev) => {
      const current = prev.style.selectedStyles ?? [];
      const exists = current.includes(styleId);
      const next = exists ? current.filter((id) => id !== styleId) : [...current, styleId].slice(0, 2);
      return {
        ...prev,
        style: {
          ...prev.style,
          selectedStyles: next,
        },
      };
    });
  };

  const onSubmit = async () => {
    setSubmitting(true);
    setSubmitError("");

    try {
      // Final guard before submit.
      if (!canGoNext || step !== 3) {
        throw new Error(tx("Molimo proverite obavezna polja.", "Please verify required fields."));
      }

      const response = await fetch(`/api/intake/${draft.id}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          draft: draftRef.current,
        }),
      });

      const result = (await response.json()) as SubmitResponse | ApiError;

      if (!response.ok || result.status === "error") {
        throw new Error(result.status === "error" ? result.message : tx("Došlo je do greške.", "Something went wrong."));
      }

      trackEvent("intake_submit", { id: draft.id, locale });
      router.push(result.redirectTo);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : tx("Došlo je do greške.", "Something went wrong."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <section className="border-brand-neutral-500/60 bg-brand-neutral-100 sticky top-20 z-40 rounded-3xl border p-5 shadow-sm md:p-6">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-brand-gold text-xs tracking-[0.24em] uppercase">
              {tx("Klijentski upitnik", "Client intake")}
            </p>
            <h1 className="font-display text-brand-burgundy mt-2 text-2xl md:text-3xl">
              {stepTitles[step]}
            </h1>
            <p className="text-brand-earth mt-1 text-xs md:text-sm">
              {tx("Korak", "Step")} {step + 1} / {stepTitles.length}
            </p>
          </div>

          <div className="text-right text-xs md:text-sm">
            <p
              className={cn(
                "font-medium",
                saveState === "saved"
                  ? "text-brand-green"
                  : saveState === "saving"
                    ? "text-brand-earth"
                    : saveState === "error"
                      ? "text-red-700"
                      : "text-brand-earth",
              )}
            >
              {saveState === "saved"
                ? `${tx("Sačuvano:", "Saved:")} ${formatDateTime(lastSavedAt, locale)}`
                : saveState === "saving"
                  ? tx("Snimanje...", "Saving...")
                  : saveState === "error"
                    ? tx("Greška pri snimanju", "Save error")
                    : ""}
            </p>
            {saveError ? <p className="mt-1 text-red-700">{saveError}</p> : null}
          </div>
        </div>

        <div className="mt-4">
          <ProgressBar value={progress} />
        </div>
      </section>

      <section className="border-brand-neutral-500/60 rounded-3xl border bg-white p-6 md:p-8">
        {step === 0 ? (
          <div className="space-y-6">
            <div>
              <p className="text-brand-earth text-sm">
                {tx(
                  "Izaberite stil koji vam je najbliži. Možete označiti do dva stila.",
                  "Pick the style that feels closest. You can select up to two.",
                )}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {styleCards.map((card) => {
                const active = draft.style.selectedStyles?.includes(card.id);

                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => toggleStyle(card.id)}
                    className={cn(
                      "border-brand-neutral-500/70 group overflow-hidden rounded-3xl border text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]",
                      active ? "ring-brand-gold ring-2 ring-offset-2" : "hover:border-brand-earth",
                    )}
                    aria-pressed={active}
                  >
                    <div className="relative grid aspect-[16/10] grid-cols-2">
                      {card.images.map((img) => (
                        <div key={img.src} className="relative">
                          <Image
                            src={img.src}
                            alt={locale === "en" ? img.alt.en : img.alt.sr}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-[1.02]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                      <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-white text-xs tracking-[0.28em] uppercase">
                            {tx("Stil", "Style")}
                          </p>
                          <p className="font-display text-white mt-1 text-3xl">
                            {locale === "en" ? card.title.en : card.title.sr}
                          </p>
                        </div>
                        <span
                          className={cn(
                            "border-white/35 bg-black/35 rounded-full border px-3 py-1 text-xs text-white backdrop-blur",
                            active ? "bg-brand-gold/85 text-brand-burgundy border-brand-gold/60" : "",
                          )}
                        >
                          {active ? tx("Izabrano", "Selected") : tx("Izaberi", "Select")}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="space-y-7">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-brand-earth mb-2 block text-sm font-medium" htmlFor="intake-name">
                  {tx("Ime", "Name")}
                </label>
                <input
                  id="intake-name"
                  className="input-field"
                  value={draft.client.fullName}
                  onChange={(e) =>
                    updateDraft((prev) => ({
                      ...prev,
                      client: { ...prev.client, fullName: e.target.value },
                    }))
                  }
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label className="text-brand-earth mb-2 block text-sm font-medium" htmlFor="intake-email">
                  Email
                </label>
                <input
                  id="intake-email"
                  className="input-field"
                  type="email"
                  value={draft.client.email}
                  onChange={(e) =>
                    updateDraft((prev) => ({
                      ...prev,
                      client: { ...prev.client, email: e.target.value },
                    }))
                  }
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div>
              <p className="text-brand-earth mb-2 text-sm font-medium">
                {tx("Tip prostora", "Property type")}
              </p>
              <div className="flex flex-wrap gap-2">
                {propertyTypeOptions.map((option) => {
                  const active = draft.basics.propertyType === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() =>
                        updateDraft((prev) => ({
                          ...prev,
                          basics: { ...prev.basics, propertyType: option.id },
                        }))
                      }
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition",
                        active
                          ? "border-brand-burgundy bg-brand-burgundy text-white"
                          : "border-brand-neutral-500 text-brand-earth hover:border-brand-gold hover:text-brand-burgundy",
                      )}
                      aria-pressed={active}
                    >
                      {locale === "en" ? option.en : option.sr}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-brand-earth mb-2 block text-sm font-medium" htmlFor="intake-city">
                  {tx("Lokacija (grad)", "Location (city)")}
                </label>
                <input
                  id="intake-city"
                  className="input-field"
                  value={draft.basics.city}
                  onChange={(e) =>
                    updateDraft((prev) => ({
                      ...prev,
                      basics: { ...prev.basics, city: e.target.value },
                    }))
                  }
                  autoComplete="address-level2"
                  required
                  placeholder={tx("Npr. Beograd", "e.g. Belgrade")}
                />
              </div>
              <div>
                <p className="text-brand-earth mb-2 text-sm font-medium">
                  {tx("Kada planirate realizaciju?", "When do you plan to realize it?")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {deadlineOptions.map((option) => {
                    const active = draft.basics.deadline === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() =>
                          updateDraft((prev) => ({
                            ...prev,
                            basics: { ...prev.basics, deadline: option.id },
                          }))
                        }
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm transition",
                          active
                            ? "border-brand-burgundy bg-brand-burgundy text-white"
                            : "border-brand-neutral-500 text-brand-earth hover:border-brand-gold hover:text-brand-burgundy",
                        )}
                        aria-pressed={active}
                      >
                        {locale === "en" ? option.en : option.sr}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-brand-neutral-500/70 rounded-3xl border bg-brand-neutral-100 p-5">
              <p className="text-brand-burgundy text-sm font-semibold">
                {tx("Budžetski okvir (orijentaciono)", "Budget range (indicative)")}
              </p>
              <p className="text-brand-earth mt-1 text-sm">
                {tx(
                  "Ovo nam pomaže da predlog bude realan u odnosu na ambicije i obim.",
                  "This helps us keep the proposal realistic versus goals and scope.",
                )}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {budgetRangeOptions.map((option) => {
                  const active =
                    option.id === "unknown"
                      ? draft.budget.unknownBudget === true
                      : draft.budget.tier === option.apply().tier && draft.budget.unknownBudget === false;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        const applied = option.apply();
                        updateDraft((prev) => ({
                          ...prev,
                          budget: {
                            ...prev.budget,
                            unknownBudget: applied.unknownBudget,
                            tier: applied.tier,
                            minTotal: applied.minTotal,
                            maxTotal: applied.maxTotal,
                          },
                        }));
                      }}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition",
                        active
                          ? "border-brand-burgundy bg-brand-burgundy text-white"
                          : "border-brand-neutral-500 text-brand-earth hover:border-brand-gold hover:text-brand-burgundy",
                      )}
                      aria-pressed={active}
                    >
                      {locale === "en" ? option.en : option.sr}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="border-brand-neutral-500/70 rounded-3xl border bg-brand-neutral-100 p-5">
              <p className="text-brand-burgundy text-sm font-semibold">
                {tx("Da li imate tačne mere prostora?", "Do you have accurate measurements?")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    updateDraft((prev) => ({
                      ...prev,
                      agreements: { ...prev.agreements, hasExactMeasurements: true },
                    }))
                  }
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition",
                    draft.agreements.hasExactMeasurements === true
                      ? "border-brand-burgundy bg-brand-burgundy text-white"
                      : "border-brand-neutral-500 text-brand-earth hover:border-brand-gold hover:text-brand-burgundy",
                  )}
                  aria-pressed={draft.agreements.hasExactMeasurements === true}
                >
                  {tx("Da", "Yes")}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    updateDraft((prev) => ({
                      ...prev,
                      agreements: { ...prev.agreements, hasExactMeasurements: false },
                    }))
                  }
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition",
                    draft.agreements.hasExactMeasurements === false
                      ? "border-brand-burgundy bg-brand-burgundy text-white"
                      : "border-brand-neutral-500 text-brand-earth hover:border-brand-gold hover:text-brand-burgundy",
                  )}
                  aria-pressed={draft.agreements.hasExactMeasurements === false}
                >
                  {tx("Ne", "No")}
                </button>
              </div>
              {draft.agreements.hasExactMeasurements === false ? (
                <p className="text-brand-earth mt-3 text-sm">
                  {tx(
                    "Usluga merenja može se posebno ugovoriti.",
                    "Measurement service can be arranged separately.",
                  )}
                </p>
              ) : null}
            </div>

            <div className="space-y-3">
              <label className="text-brand-earth flex items-start gap-3 text-sm leading-relaxed">
                <input
                  type="checkbox"
                  checked={draft.agreements.understandsConceptConceptualOnly}
                  onChange={(e) =>
                    updateDraft((prev) => ({
                      ...prev,
                      agreements: {
                        ...prev.agreements,
                        understandsConceptConceptualOnly: e.target.checked,
                      },
                    }))
                  }
                  className="border-brand-neutral-500 mt-1 h-4 w-4 rounded accent-[var(--brand-gold)]"
                />
                <span>
                  {tx("Razumem da je projekat idejni.", "I understand this is a conceptual design project.")}
                </span>
              </label>

              <label className="text-brand-earth flex items-start gap-3 text-sm leading-relaxed">
                <input
                  type="checkbox"
                  checked={draft.agreements.understandsTwoRevisionsIncluded}
                  onChange={(e) =>
                    updateDraft((prev) => ({
                      ...prev,
                      agreements: {
                        ...prev.agreements,
                        understandsTwoRevisionsIncluded: e.target.checked,
                      },
                    }))
                  }
                  className="border-brand-neutral-500 mt-1 h-4 w-4 rounded accent-[var(--brand-gold)]"
                />
                <span>
                  {tx(
                    "Razumem da su uključene dve objedinjene korekcije.",
                    "I understand two consolidated revision rounds are included.",
                  )}
                </span>
              </label>

              <label className="text-brand-earth flex items-start gap-3 text-sm leading-relaxed">
                <input
                  type="checkbox"
                  checked={draft.agreements.privacyConsent}
                  onChange={(e) =>
                    updateDraft((prev) => ({
                      ...prev,
                      agreements: { ...prev.agreements, privacyConsent: e.target.checked },
                    }))
                  }
                  className="border-brand-neutral-500 mt-1 h-4 w-4 rounded accent-[var(--brand-gold)]"
                />
                <span>
                  {tx("Saglasan/na sam sa ", "I agree to the ")}
                  <Link
                    href="/privacy"
                    className="text-brand-burgundy decoration-brand-gold font-semibold underline underline-offset-4"
                  >
                    {tx("Politikom privatnosti", "Privacy Policy")}
                  </Link>
                  .
                </span>
              </label>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-4">
            <p className="text-brand-earth text-sm">
              {tx(
                "Dodajte sve što smatrate važnim: osećaj koji želite, prioritete, ograničenja ili napomene.",
                "Add anything important: desired feel, priorities, constraints or notes.",
              )}
            </p>
            <textarea
              className="input-field min-h-44 rounded-3xl"
              value={draft.notes}
              onChange={(e) => updateDraft((prev) => ({ ...prev, notes: e.target.value }))}
              placeholder={tx(
                "Npr. „Želimo toplu, mirnu atmosferu. Prioritet su kuhinja i dnevna zona.”",
                "e.g. “Warm, calm mood. Priority is kitchen and living zone.”",
              )}
            />
          </div>
        ) : null}

        {step === 3 ? (
          <div className="space-y-6">
            <div className="border-brand-neutral-500/70 rounded-3xl border bg-brand-neutral-100 p-6">
              <h2 className="font-display text-brand-burgundy text-3xl">
                {tx("Pregled pre slanja", "Review before submit")}
              </h2>
              <p className="text-brand-earth mt-2 text-sm">
                {tx(
                  "Proverite unete podatke. Nakon slanja javljamo se sa jasnim sledećim korakom.",
                  "Review the details. After submit, we’ll return with a clear next step.",
                )}
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/60 bg-white p-4">
                  <p className="text-brand-gold text-xs tracking-[0.22em] uppercase">
                    {tx("Kontakt", "Contact")}
                  </p>
                  <p className="text-brand-ink mt-2 text-sm">
                    {draft.client.fullName || "—"}
                  </p>
                  <p className="text-brand-earth text-sm">{draft.client.email || "—"}</p>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white p-4">
                  <p className="text-brand-gold text-xs tracking-[0.22em] uppercase">
                    {tx("Osnove", "Basics")}
                  </p>
                  <p className="text-brand-ink mt-2 text-sm">
                    {locale === "en"
                      ? propertyTypeOptions.find((x) => x.id === draft.basics.propertyType)?.en
                      : propertyTypeOptions.find((x) => x.id === draft.basics.propertyType)?.sr}
                  </p>
                  <p className="text-brand-earth text-sm">
                    {draft.basics.city || "—"}
                  </p>
                  <p className="text-brand-earth text-sm">
                    {tx("Tačne mere:", "Accurate measurements:")}{" "}
                    {draft.agreements.hasExactMeasurements ? tx("Da", "Yes") : tx("Ne", "No")}
                  </p>
                  <p className="text-brand-earth text-sm">
                    {tx("Rok:", "Timeline:")}{" "}
                    {locale === "en"
                      ? deadlineOptions.find((x) => x.id === draft.basics.deadline)?.en
                      : deadlineOptions.find((x) => x.id === draft.basics.deadline)?.sr}
                  </p>
                  <p className="text-brand-earth text-sm">
                    {tx("Budžet:", "Budget:")}{" "}
                    {draft.budget.unknownBudget
                      ? tx("Još ne znam", "Not sure yet")
                      : draft.budget.tier === "starter"
                        ? tx("Do 30.000€", "Up to €30,000")
                        : draft.budget.tier === "premium"
                          ? tx("70.000€+", "€70,000+")
                          : tx("30.000€ – 70.000€", "€30,000 – €70,000")}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white p-4 md:col-span-2">
                  <p className="text-brand-gold text-xs tracking-[0.22em] uppercase">
                    {tx("Izabrani stil", "Selected style")}
                  </p>
                  <p className="text-brand-ink mt-2 text-sm">
                    {(draft.style.selectedStyles ?? [])
                      .map((id) => {
                        const found = styleCards.find((card) => card.id === id);
                        if (!found) return id;
                        return locale === "en" ? found.title.en : found.title.sr;
                      })
                      .join(", ") || "—"}
                  </p>
                </div>
                {draft.notes?.trim() ? (
                  <div className="rounded-2xl border border-white/60 bg-white p-4 md:col-span-2">
                    <p className="text-brand-gold text-xs tracking-[0.22em] uppercase">
                      {tx("Napomene", "Notes")}
                    </p>
                    <p className="text-brand-earth mt-2 text-sm whitespace-pre-wrap">
                      {draft.notes.trim()}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </section>

      {submitError ? (
        <p className="text-sm text-red-700" role="status">
          {submitError}
        </p>
      ) : null}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => void onBack()}
          disabled={step === 0 || submitting}
          className="btn-secondary text-brand-burgundy disabled:opacity-40 inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold"
        >
          {tx("Nazad", "Back")}
        </button>

        {step < 3 ? (
          <button
            type="button"
            onClick={() => void onNext()}
            disabled={submitting}
            className="btn-primary inline-flex min-h-11 items-center justify-center rounded-full px-7 text-sm font-semibold disabled:opacity-60"
          >
            {tx("Dalje", "Next")}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => void onSubmit()}
            disabled={submitting}
            className="btn-primary inline-flex min-h-11 items-center justify-center rounded-full px-7 text-sm font-semibold disabled:opacity-60"
          >
            {submitting ? tx("Slanje...", "Submitting...") : tx("Pošalji upitnik", "Submit intake")}
          </button>
        )}
      </div>

      <p className="text-brand-earth text-xs">
        {tx(
          "Napomena: Ova usluga je idejna i konsultantska i ne predstavlja tehnički ili izvođački projekat.",
          "Note: This service is conceptual and consultative, not a technical or contractor-ready project.",
        )}
      </p>
    </div>
  );
}

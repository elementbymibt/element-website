import {
  aboutValues,
  faqItems,
  processSteps,
  promoOffers,
  servicePackages,
  testimonials,
  type ServicePackage,
} from "@/src/data/site-content";
import type { SiteLocale } from "@/src/lib/i18n/config";

type ProcessStep = (typeof processSteps)[number];
type FaqItem = (typeof faqItems)[number];
type Testimonial = (typeof testimonials)[number];
type PromoOffer = (typeof promoOffers)[number];

const servicePackagesEn: ServicePackage[] = [
  {
    id: "concept",
    name: "Concept",
    subtitle: "PHASE 1",
    idealFor: "To set a clear project direction before major decisions.",
    includes: [
      "Intro brief and space analysis",
      "Concept layout and functional zones",
      "Moodboard: materials, tones and atmosphere",
      "Guidelines for next decisions",
    ],
  },
  {
    id: "visualization",
    name: "Visualization",
    subtitle: "PHASE 2",
    idealFor: "To gain confidence before implementation and align the final aesthetic.",
    includes: [
      "3D model and renders of key spaces",
      "Material, color and lighting alignment",
      "Two consolidated revision rounds in this phase",
      "Final validation of design decisions",
    ],
  },
  {
    id: "final-package",
    name: "Final package",
    subtitle: "PHASE 3",
    idealFor: "For a clear concept package and documentation for confident execution.",
    includes: [
      "Concept drawings and schemes (PDF)",
      "Lists and specifications (indicative)",
      "Budget framework and purchase prioritization (indicative)",
      "Handover and consistency guidelines",
    ],
  },
];

const faqItemsEn: FaqItem[] = [
  {
    question: "How long does an interior project usually take?",
    answer:
      "Timeline depends on scope and decision speed. After the intake and intro call, we define a clear phase timeline.",
  },
  {
    question: "Do you work on projects outside Belgrade?",
    answer:
      "Yes. Collaboration can be organized remotely, with scheduled site visits when needed.",
  },
  {
    question: "Can I book consultations only?",
    answer:
      "Yes, we offer consultation sessions for clients who want professional guidance before self-managed execution.",
  },
  {
    question: "How do we define the budget?",
    answer:
      "Budget framework is defined together through the intake and priorities. Our goal is strong design aligned with realistic limits.",
  },
  {
    question: "Do you support realization?",
    answer:
      "When needed, we provide consultative support during realization to keep the concept consistent. Contracting and execution are outside concept scope.",
  },
  {
    question: "What if I already own some furniture?",
    answer:
      "Existing pieces can be integrated when they support the concept and quality of the space.",
  },
  {
    question: "Do you offer phased payments?",
    answer:
      "Yes. The project is organized by phases with clearly defined deliverables and timing.",
  },
  {
    question: "How accurate are 3D visualizations?",
    answer:
      "Visualizations are used as a reliable interpretation of the concept and as a key decision tool before execution.",
  },
];

const processStepsEn: ProcessStep[] = [
  {
    title: "Consultation",
    short: "Understanding your lifestyle, priorities and budget framework.",
    deliverables: [
      "Kick-off call and structured project brief",
      "Review of available plans and dimensions",
      "Scope confirmation and phase roadmap",
    ],
  },
  {
    title: "Concept",
    short: "Defining spatial identity, atmosphere and core logic.",
    deliverables: [
      "Functional layout and movement logic",
      "Style direction, palette and material moodboard",
      "Concept alignment before 3D development",
    ],
  },
  {
    title: "Development",
    short: "3D visualization and concept documentation.",
    deliverables: [
      "3D model and renders of key zones",
      "Concept furniture drawings and install guidance",
      "Indicative specification list and budget framework",
    ],
  },
  {
    title: "Realization",
    short: "Consultative support during implementation.",
    deliverables: [
      "Final package: concept drawings, lists and phase guide",
      "Consultative coordination on key implementation decisions",
      "Final concept-consistency check (without technical supervision)",
    ],
  },
];

const testimonialsEn: Testimonial[] = [
  {
    quote:
      "From the first meeting, every detail felt intentional. The result is a calm, luxurious space that truly feels ours.",
    author: "J. M., private residence",
  },
  {
    quote:
      "The process was precise and transparent. The team led with authority, but always with sensitivity to our daily routine.",
    author: "A. N., boutique business space",
  },
];

const promoOffersEn: PromoOffer[] = [
  {
    title: "Spring consultation package",
    subtitle: "90-minute premium session + mini concept",
    details:
      "For new clients: a detailed consultation, functional direction and a priority intervention list.",
    badge: "Limited",
  },
  {
    title: "-10% for bookings by 30.04.",
    subtitle: "For Full Design and Premium Turn-Key",
    details:
      "The discount applies to agreements confirmed by the listed date, under standard phases and collaboration terms.",
    badge: "Active",
  },
  {
    title: "Business Space Audit",
    subtitle: "Fast potential assessment",
    details:
      "Intensive audit for offices and retail: space diagnosis plus 3 strategic recommendations.",
    badge: "New",
  },
];

const aboutValuesEn = [
  "Discreet elegance without visual noise.",
  "Functionality as the base of every aesthetic decision.",
  "Rigorous design development and quality control.",
  "Design that lasts and keeps value over time.",
];

const servicePackagesDe: ServicePackage[] = [
  {
    id: "concept",
    name: "Konzept",
    subtitle: "PHASE 1",
    idealFor: "Für eine klare Projektrichtung vor großen Entscheidungen.",
    includes: [
      "Einführungsbriefing und Raumanalyse",
      "Konzept-Layout und Funktionszonen",
      "Moodboard: Materialien, Tonalität und Atmosphäre",
      "Leitlinien für weitere Entscheidungen",
    ],
  },
  {
    id: "visualization",
    name: "Visualisierung",
    subtitle: "PHASE 2",
    idealFor: "Für Sicherheit vor der Umsetzung und abgestimmte finale Ästhetik.",
    includes: [
      "3D-Modell und Renderings der Schlüsselbereiche",
      "Abstimmung von Materialien, Farben und Licht",
      "Zwei gebündelte Korrekturrunden in dieser Phase",
      "Finale Bestätigung der Designentscheidungen",
    ],
  },
  {
    id: "final-package",
    name: "Finales Paket",
    subtitle: "PHASE 3",
    idealFor: "Für ein klares Konzeptpaket und sichere Umsetzungsdokumentation.",
    includes: [
      "Konzeptzeichnungen und Schemata (PDF)",
      "Listen und Spezifikationen (orientierend)",
      "Budgetrahmen und Einkaufspriorisierung (orientierend)",
      "Übergabe und Leitlinien für konsistente Umsetzung",
    ],
  },
];

const faqItemsDe: FaqItem[] = [
  {
    question: "Wie lange dauert ein Interior-Projekt normalerweise?",
    answer:
      "Der Zeitrahmen hängt vom Umfang und der Geschwindigkeit der Entscheidungen ab. Nach Intake und Erstgespräch definieren wir einen klaren Phasenplan.",
  },
  {
    question: "Arbeitet ihr auch an Projekten außerhalb von Belgrad?",
    answer:
      "Ja. Die Zusammenarbeit kann remote organisiert werden, mit geplanten Vor-Ort-Terminen bei Bedarf.",
  },
  {
    question: "Kann ich nur Beratungen buchen?",
    answer:
      "Ja, wir bieten Beratungssessions für Kunden an, die vor einer eigenen Umsetzung professionelle Orientierung wünschen.",
  },
  {
    question: "Wie wird das Budget definiert?",
    answer:
      "Der Budgetrahmen wird gemeinsam über Intake und Prioritäten festgelegt. Ziel ist starkes Design innerhalb realistischer Grenzen.",
  },
  {
    question: "Begleitet ihr die Umsetzung?",
    answer:
      "Bei Bedarf bieten wir strategische Beratung während der Umsetzung, damit das Konzept konsistent bleibt. Vergabe und Ausführung sind außerhalb des Konzeptumfangs.",
  },
  {
    question: "Was ist, wenn ich bereits Möbel besitze?",
    answer:
      "Vorhandene Stücke können integriert werden, wenn sie das Konzept und die Qualitätslinie des Raums unterstützen.",
  },
  {
    question: "Bietet ihr Zahlungen in Phasen an?",
    answer:
      "Ja. Das Projekt wird in Phasen mit klar definierten Ergebnissen und Zeitpunkten organisiert.",
  },
  {
    question: "Wie präzise sind 3D-Visualisierungen?",
    answer:
      "Visualisierungen dienen als verlässliche Interpretation des Konzepts und als zentrales Entscheidungstool vor der Umsetzung.",
  },
];

const processStepsDe: ProcessStep[] = [
  {
    title: "Konsultation",
    short: "Verständnis Ihres Lebensstils, Ihrer Prioritäten und Ihres Budgetrahmens.",
    deliverables: [
      "Kick-off-Gespräch und strukturiertes Projektbriefing",
      "Review vorhandener Pläne und Maße",
      "Bestätigung des Umfangs und Phasen-Roadmap",
    ],
  },
  {
    title: "Konzept",
    short: "Definition der Raumidentität, Atmosphäre und Kernlogik.",
    deliverables: [
      "Funktionales Layout und Bewegungslogik",
      "Stilrichtung, Palette und Material-Moodboard",
      "Konzeptabstimmung vor der 3D-Ausarbeitung",
    ],
  },
  {
    title: "Ausarbeitung",
    short: "3D-Visualisierung und konzeptionelle Dokumentation.",
    deliverables: [
      "3D-Modell und Renderings der Schlüsselzonen",
      "Konzept-Möbelzeichnungen und Einbauleitlinien",
      "Orientierende Spezifikationsliste und Budgetrahmen",
    ],
  },
  {
    title: "Umsetzung",
    short: "Beratende Unterstützung während der Realisierung.",
    deliverables: [
      "Finales Paket: Konzeptzeichnungen, Listen und Phasenleitfaden",
      "Strategische Abstimmung zentraler Umsetzungsentscheidungen",
      "Finaler Konzept-Konsistenzcheck (ohne technische Bauaufsicht)",
    ],
  },
];

const testimonialsDe: Testimonial[] = [
  {
    quote:
      "Schon ab dem ersten Gespräch wirkte jedes Detail bewusst gesetzt. Das Ergebnis ist ein ruhiger, luxuriöser Raum, der sich wirklich nach uns anfühlt.",
    author: "J. M., Privatresidenz",
  },
  {
    quote:
      "Der Prozess war präzise und transparent. Das Team führte mit Autorität, aber immer mit Feingefühl für unseren Alltag.",
    author: "A. N., Boutique-Gewerberaum",
  },
];

const promoOffersDe: PromoOffer[] = [
  {
    title: "Frühlingspaket für Beratungen",
    subtitle: "90-Minuten-Premium-Session + Mini-Konzept",
    details:
      "Für neue Kunden: detaillierte Beratung, funktionale Richtung und Prioritätenliste für Eingriffe.",
    badge: "Limitiert",
  },
  {
    title: "-10% für Buchungen bis 30.04.",
    subtitle: "Für Full Design und Premium Turn-Key",
    details:
      "Der Rabatt gilt für bestätigte Vereinbarungen bis zum genannten Datum unter Standardphasen und Zusammenarbeitsbedingungen.",
    badge: "Aktiv",
  },
  {
    title: "Business Space Audit",
    subtitle: "Schnelle Potenzialanalyse",
    details:
      "Intensiver Audit für Büros und Retail: Raumdiagnose plus 3 strategische Empfehlungen.",
    badge: "Neu",
  },
];

const aboutValuesDe = [
  "Diskrete Eleganz ohne visuellen Lärm.",
  "Funktionalität als Grundlage jeder ästhetischen Entscheidung.",
  "Strenge Designausarbeitung und Qualitätskontrolle.",
  "Design, das über Zeit Bestand und Wert behält.",
];

export function getServicePackages(locale: SiteLocale) {
  if (locale === "de") return servicePackagesDe;
  if (locale === "en") return servicePackagesEn;
  return servicePackages;
}

export function getFaqItems(locale: SiteLocale) {
  if (locale === "de") return faqItemsDe;
  if (locale === "en") return faqItemsEn;
  return faqItems;
}

export function getProcessSteps(locale: SiteLocale) {
  if (locale === "de") return processStepsDe;
  if (locale === "en") return processStepsEn;
  return processSteps;
}

export function getTestimonials(locale: SiteLocale) {
  if (locale === "de") return testimonialsDe;
  if (locale === "en") return testimonialsEn;
  return testimonials;
}

export function getPromoOffers(locale: SiteLocale) {
  if (locale === "de") return promoOffersDe;
  if (locale === "en") return promoOffersEn;
  return promoOffers;
}

export function getAboutValues(locale: SiteLocale) {
  if (locale === "de") return aboutValuesDe;
  if (locale === "en") return aboutValuesEn;
  return aboutValues;
}

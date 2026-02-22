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
      "Kick-off after complete input data",
      "Style, atmosphere and functional space logic",
      "Conceptual 2D layout and priority zones",
      "Email phase approval as a base for next steps",
    ],
  },
  {
    id: "visualization",
    name: "Visualization",
    subtitle: "PHASE 2",
    idealFor: "To gain confidence before implementation and align the final aesthetic.",
    includes: [
      "3D model of key spaces",
      "Two consolidated revisions within the same concept",
      "Indicative installation layout (informative only)",
      "Phase approval before final package",
    ],
  },
  {
    id: "final-package",
    name: "Final package",
    subtitle: "PHASE 3",
    idealFor: "For a clear concept package and documentation for confident execution.",
    includes: [
      "Final 3D renders of key scenes",
      "Concept furniture drawings (dimensions/divisions)",
      "Equipment and materials list (indicative prices)",
      "Budget framework by room and phased realization",
      "Mini guide and final digital handover",
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
    short: "Kick-off, input data review and scope definition.",
    deliverables: [
      "Kick-off call and structured project brief",
      "Review of plans, dimensions and existing state",
      "Scope confirmation and phase roadmap",
    ],
  },
  {
    title: "Concept",
    short: "Defining spatial identity and functional logic.",
    deliverables: [
      "Conceptual 2D layout and priority zones",
      "Style direction, palette and material moodboard",
      "Email concept approval before 3D development",
    ],
  },
  {
    title: "Development",
    short: "3D modeling and concept refinement.",
    deliverables: [
      "3D model of key zones",
      "Two consolidated revisions within the same concept",
      "Indicative installation layout (informative only)",
    ],
  },
  {
    title: "Realization",
    short: "Final package and consultative support during realization.",
    deliverables: [
      "Final 3D renders with closing documentation",
      "Final package: concept drawings, lists and budget framework",
      "Phased realization plan and mini implementation guide",
      "Consultative support without technical supervision",
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
    title: "15-minute free consultation",
    subtitle: "Short intro call with no obligation",
    details:
      "Book your slot and get a clear proposal for the next steps of your project.",
    badge: "Active",
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
      "Kick-off nach vollständigen Eingangsdaten",
      "Stil, Atmosphäre und funktionale Raumlogik",
      "Konzeptionelles 2D-Layout und Prioritätszonen",
      "Phasenfreigabe per E-Mail als Basis für den nächsten Schritt",
    ],
  },
  {
    id: "visualization",
    name: "Visualisierung",
    subtitle: "PHASE 2",
    idealFor: "Für Sicherheit vor der Umsetzung und abgestimmte finale Ästhetik.",
    includes: [
      "3D-Modell der Schlüsselbereiche",
      "Zwei gebündelte Korrekturen innerhalb desselben Konzepts",
      "Hinweisender Installationsplan (informativ)",
      "Phasenfreigabe vor dem finalen Paket",
    ],
  },
  {
    id: "final-package",
    name: "Finales Paket",
    subtitle: "PHASE 3",
    idealFor: "Für ein klares Konzeptpaket und sichere Umsetzungsdokumentation.",
    includes: [
      "Finale 3D-Renderings der wichtigsten Szenen",
      "Konzept-Möbelzeichnungen (Abmessungen/Aufteilung)",
      "Ausstattungs- und Materialliste (Richtpreise)",
      "Budgetrahmen pro Raum und Umsetzungsphasen",
      "Mini-Guide und finale digitale Übergabe",
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
    short: "Kick-off, Eingangsdaten und klare Umfangsdefinition.",
    deliverables: [
      "Kick-off-Gespräch und strukturiertes Projektbriefing",
      "Prüfung von Plänen, Maßen und Bestand",
      "Bestätigung des Umfangs und Phasen-Roadmap",
    ],
  },
  {
    title: "Konzept",
    short: "Definition von Raumidentität und funktionaler Logik.",
    deliverables: [
      "Konzeptionelles 2D-Layout und Prioritätszonen",
      "Stilrichtung, Palette und Material-Moodboard",
      "E-Mail-Freigabe vor der 3D-Ausarbeitung",
    ],
  },
  {
    title: "Ausarbeitung",
    short: "3D-Modellierung und konzeptionelle Ausarbeitung.",
    deliverables: [
      "3D-Modell der Schlüsselzonen",
      "Zwei gebündelte Korrekturen innerhalb desselben Konzepts",
      "Hinweisende Installationspositionen (informativ)",
    ],
  },
  {
    title: "Umsetzung",
    short: "Finales Paket und beratende Unterstützung in der Umsetzung.",
    deliverables: [
      "Finale 3D-Renderings mit Abschlussdokumentation",
      "Finales Paket: Konzeptzeichnungen, Listen und Budgetrahmen",
      "Umsetzungsphasen und Mini-Guide für die Realisierung",
      "Beratende Unterstützung ohne technische Bauaufsicht",
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
    title: "15 Minuten kostenlose Beratung",
    subtitle: "Kurzes Erstgespräch ohne Verpflichtung",
    details:
      "Buchen Sie einen Termin und erhalten Sie einen klaren Vorschlag für die nächsten Projektschritte.",
    badge: "Aktiv",
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

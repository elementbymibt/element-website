import {
  aboutValues,
  faqItems,
  processSteps,
  promoOffers,
  servicePackages,
  testimonials,
  type ServicePackage,
} from "@/src/data/site-content";

export type SiteLocale = "sr" | "en";

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

export function getServicePackages(locale: SiteLocale) {
  return locale === "en" ? servicePackagesEn : servicePackages;
}

export function getFaqItems(locale: SiteLocale) {
  return locale === "en" ? faqItemsEn : faqItems;
}

export function getProcessSteps(locale: SiteLocale) {
  return locale === "en" ? processStepsEn : processSteps;
}

export function getTestimonials(locale: SiteLocale) {
  return locale === "en" ? testimonialsEn : testimonials;
}

export function getPromoOffers(locale: SiteLocale) {
  return locale === "en" ? promoOffersEn : promoOffers;
}

export function getAboutValues(locale: SiteLocale) {
  return locale === "en" ? aboutValuesEn : aboutValues;
}

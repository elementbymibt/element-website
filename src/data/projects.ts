import type { SiteLocale } from "@/src/lib/i18n/config";

export type ProjectCategory = "Stan" | "Kuća" | "Poslovni prostor";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: number;
  category: ProjectCategory;
  shortDescription: string;
  description: string;
  whatWeDid: string[];
  images: string[];
  coverImage: string;
  featured: boolean;
};

export const projectCategories: Array<ProjectCategory | "Sve"> = [
  "Sve",
  "Stan",
  "Kuća",
  "Poslovni prostor",
];

export const projects: Project[] = [
  {
    slug: "dorcol-residence",
    title: "Dorćol Residence",
    location: "Beograd",
    year: 2025,
    category: "Stan",
    shortDescription: "Savremen gradski stan sa tihim luksuzom i toplim materijalima.",
    description:
      "Koncept je fokusiran na smiren ritam prostora: neutralna baza, tople teksture i precizni detalji koji daju utisak editorial kvaliteta bez viška.",
    whatWeDid: ["Idejno rešenje", "3D vizualizacija", "Finalni paket (idejni crteži + spiskovi)"],
    coverImage: "/projects/p01-01.jpg",
    images: ["/projects/p01-01.jpg", "/projects/p01-02.jpg", "/projects/p01-03.jpg"],
    featured: true,
  },
  {
    slug: "senjak-villa",
    title: "Senjak Villa",
    location: "Beograd",
    year: 2024,
    category: "Kuća",
    shortDescription: "Porodična vila sa čistim linijama i toplom paletom.",
    description:
      "Prostor je organizovan tako da svakodnevni život teče bez trenja, dok materijali i svetlo grade mirnu, luksuznu atmosferu kroz ceo dan.",
    whatWeDid: ["Idejno rešenje", "3D vizualizacija", "Finalni paket (PDF dokumentacija)"],
    coverImage: "/projects/p02-01.jpg",
    images: ["/projects/p02-01.jpg", "/projects/p02-02.jpg", "/projects/p02-03.jpg"],
    featured: true,
  },
  {
    slug: "new-belgrade-penthouse",
    title: "New Belgrade Penthouse",
    location: "Novi Beograd",
    year: 2026,
    category: "Stan",
    shortDescription: "Penthouse sa panoramskim pogledom i monohromatskom elegancijom.",
    description:
      "Neutralna osnova, pažljivo dozirani akcenti i rasveta u slojevima daju osećaj hotelskog komfora u privatnom prostoru.",
    whatWeDid: ["Idejno rešenje", "3D vizualizacija", "Spisak materijala i elemenata"],
    coverImage: "/projects/p03-01.jpg",
    images: ["/projects/p03-01.jpg", "/projects/p03-02.jpg", "/projects/p03-03.jpg"],
    featured: true,
  },
  {
    slug: "zemun-loft-office",
    title: "Zemun Loft Office",
    location: "Zemun",
    year: 2025,
    category: "Poslovni prostor",
    shortDescription: "Office koncept sa jasnim identitetom i fokusom na ergonomiju.",
    description:
      "Cilj je bio da prostor bude reprezentativan i operativno efikasan: jasne zone, akustika pod kontrolom i materijali koji komuniciraju kvalitet.",
    whatWeDid: ["Idejno rešenje", "3D vizualizacija", "Dokumentacija i spiskovi"],
    coverImage: "/projects/p04-01.jpg",
    images: ["/projects/p04-01.jpg", "/projects/p04-02.jpg", "/projects/p04-03.jpg"],
    featured: true,
  },
  {
    slug: "fruska-gora-retreat",
    title: "Fruška Gora Retreat",
    location: "Fruška Gora",
    year: 2023,
    category: "Kuća",
    shortDescription: "Vikend kuća inspirisana prirodom i tihim ritualima.",
    description:
      "Materijali su birani da izdrže vreme i upotrebu: drvo, kamen i teksture koje ostaju relevantne, uz savremenu liniju i diskretnu eleganciju.",
    whatWeDid: ["Idejno rešenje", "3D vizualizacija", "Orijentacioni budžet i prioritizacija"],
    coverImage: "/projects/p05-01.jpg",
    images: ["/projects/p05-01.jpg", "/projects/p05-02.jpg", "/projects/p05-03.jpg"],
    featured: true,
  },
  {
    slug: "vracar-boutique-clinic",
    title: "Vračar Boutique Clinic",
    location: "Vračar",
    year: 2026,
    category: "Poslovni prostor",
    shortDescription: "Boutique klinika sa premium hospitality osećajem.",
    description:
      "Dizajn smanjuje stres korisnika i podržava tok osoblja: mirna paleta, kontrolisano svetlo i detalji koji deluju skupo, ali nenametljivo.",
    whatWeDid: ["Idejno rešenje", "3D vizualizacija", "Finalni paket (PDF + specifikacije)"],
    coverImage: "/projects/p06-01.jpg",
    images: ["/projects/p06-01.jpg", "/projects/p06-02.jpg", "/projects/p06-03.jpg"],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

type LocalizedProjectEntry = {
  shortDescription: {
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  whatWeDid: {
    en: string[];
    de: string[];
  };
};

const localizedProjectText: Record<string, LocalizedProjectEntry> = {
  "dorcol-residence": {
    shortDescription: {
      en: "Contemporary city apartment with quiet luxury and warm materials.",
      de: "Zeitgemäßes Stadtapartment mit stillem Luxus und warmen Materialien.",
    },
    description: {
      en: "The concept focuses on a calm spatial rhythm: a neutral base, warm textures, and precise detailing that delivers editorial quality without excess.",
      de: "Das Konzept setzt auf einen ruhigen Raumrhythmus: neutrale Basis, warme Texturen und präzise Details, die editoriale Qualität ohne Übermaß schaffen.",
    },
    whatWeDid: {
      en: ["Concept design", "3D visualization", "Final package (concept drawings + lists)"],
      de: ["Konzeptdesign", "3D-Visualisierung", "Finales Paket (Konzeptzeichnungen + Listen)"],
    },
  },
  "senjak-villa": {
    shortDescription: {
      en: "Family villa with clean lines and a warm palette.",
      de: "Familienvilla mit klaren Linien und warmer Farbpalette.",
    },
    description: {
      en: "The space was organized so daily life flows effortlessly, while materials and light build a calm, luxurious atmosphere throughout the day.",
      de: "Der Raum wurde so organisiert, dass der Alltag reibungslos funktioniert, während Materialien und Licht den ganzen Tag über eine ruhige, luxuriöse Atmosphäre schaffen.",
    },
    whatWeDid: {
      en: ["Concept design", "3D visualization", "Final package (PDF documentation)"],
      de: ["Konzeptdesign", "3D-Visualisierung", "Finales Paket (PDF-Dokumentation)"],
    },
  },
  "new-belgrade-penthouse": {
    shortDescription: {
      en: "Penthouse with panoramic views and monochrome elegance.",
      de: "Penthouse mit Panoramablick und monochromer Eleganz.",
    },
    description: {
      en: "A neutral base, carefully dosed accents and layered lighting create a hotel-like comfort in a private home.",
      de: "Eine neutrale Basis, gezielt eingesetzte Akzente und mehrschichtige Beleuchtung schaffen hotelähnlichen Komfort im privaten Zuhause.",
    },
    whatWeDid: {
      en: ["Concept design", "3D visualization", "Materials and elements list"],
      de: ["Konzeptdesign", "3D-Visualisierung", "Material- und Elementliste"],
    },
  },
  "zemun-loft-office": {
    shortDescription: {
      en: "Office concept with a clear identity and ergonomic focus.",
      de: "Office-Konzept mit klarer Identität und Ergonomie-Fokus.",
    },
    description: {
      en: "The goal was to make the space representative and operationally efficient: clear zones, controlled acoustics and materials that communicate quality.",
      de: "Ziel war ein repräsentativer und operativ effizienter Raum: klare Zonen, kontrollierte Akustik und Materialien, die Qualität vermitteln.",
    },
    whatWeDid: {
      en: ["Concept design", "3D visualization", "Documentation and specification lists"],
      de: ["Konzeptdesign", "3D-Visualisierung", "Dokumentation und Spezifikationslisten"],
    },
  },
  "fruska-gora-retreat": {
    shortDescription: {
      en: "Weekend house inspired by nature and quiet rituals.",
      de: "Wochenendhaus inspiriert von Natur und ruhigen Ritualen.",
    },
    description: {
      en: "Materials were selected for longevity and use: wood, stone and textures that stay relevant, with a contemporary line and discreet elegance.",
      de: "Die Materialien wurden auf Langlebigkeit und Nutzung abgestimmt: Holz, Stein und Texturen, die zeitlos wirken, mit moderner Linie und diskreter Eleganz.",
    },
    whatWeDid: {
      en: ["Concept design", "3D visualization", "Indicative budget and purchasing priorities"],
      de: ["Konzeptdesign", "3D-Visualisierung", "Orientierungsbudget und Kaufprioritäten"],
    },
  },
  "vracar-boutique-clinic": {
    shortDescription: {
      en: "Boutique clinic with a premium hospitality feel.",
      de: "Boutique-Klinik mit Premium-Hospitality-Charakter.",
    },
    description: {
      en: "The design reduces user stress and supports staff flow: calm palette, controlled lighting and details that feel premium but understated.",
      de: "Das Design reduziert Stress bei Nutzern und unterstützt den Ablauf des Teams: ruhige Palette, kontrolliertes Licht und Details, die hochwertig, aber zurückhaltend wirken.",
    },
    whatWeDid: {
      en: ["Concept design", "3D visualization", "Final package (PDF + specifications)"],
      de: ["Konzeptdesign", "3D-Visualisierung", "Finales Paket (PDF + Spezifikationen)"],
    },
  },
};

export function getLocalizedProjectText(project: Project, locale: SiteLocale) {
  if (locale === "sr") {
    return {
      shortDescription: project.shortDescription,
      description: project.description,
      whatWeDid: project.whatWeDid,
    };
  }

  const entry = localizedProjectText[project.slug];

  if (!entry) {
    return {
      shortDescription: project.shortDescription,
      description: project.description,
      whatWeDid: project.whatWeDid,
    };
  }

  if (locale === "de") {
    return {
      shortDescription: entry.shortDescription.de,
      description: entry.description.de,
      whatWeDid: entry.whatWeDid.de,
    };
  }

  return {
    shortDescription: entry.shortDescription.en,
    description: entry.description.en,
    whatWeDid: entry.whatWeDid.en,
  };
}

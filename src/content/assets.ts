export const heroImages = {
  home: {
    src: "/hero/home-hero.jpg",
    alt: {
      sr: "Luksuzni enterijer dnevne zone – ÉLÉMENT",
      en: "Luxury living area interior – ÉLÉMENT",
    },
  },
  services: {
    src: "/hero/services-hero.jpg",
    alt: {
      sr: "Elegantna spavaća soba – ÉLÉMENT",
      en: "Elegant bedroom interior – ÉLÉMENT",
    },
  },
  portfolio: {
    src: "/hero/portfolio-hero.jpg",
    alt: {
      sr: "Luksuzna kuhinja i open space – ÉLÉMENT",
      en: "Luxury kitchen and open space – ÉLÉMENT",
    },
  },
} as const;

export const intakeStyleCards = [
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
    id: "industrial",
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

export const intakeStepImages = [
  {
    id: "space",
    src: "/intake/step-space.jpg",
    alt: { sr: "Korak 1: izbor stila enterijera – ÉLÉMENT upitnik", en: "Step 1: interior style selection – ÉLÉMENT intake" },
  },
  {
    id: "kitchen",
    src: "/intake/step-kitchen.jpg",
    alt: { sr: "Korak 2: osnovni podaci prostora – ÉLÉMENT upitnik", en: "Step 2: space basics – ÉLÉMENT intake" },
  },
  {
    id: "bedroom",
    src: "/intake/step-bedroom.jpg",
    alt: { sr: "Korak 3: dodatne napomene – ÉLÉMENT upitnik", en: "Step 3: additional notes – ÉLÉMENT intake" },
  },
  {
    id: "docs",
    src: "/intake/step-docs.jpg",
    alt: { sr: "Korak 4: pregled i potvrda – ÉLÉMENT upitnik", en: "Step 4: review and confirmation – ÉLÉMENT intake" },
  },
] as const;

export const projectPlaceholders = [
  {
    id: "p01",
    cover: "/projects/p01-01.jpg",
    gallery: ["/projects/p01-01.jpg", "/projects/p01-02.jpg", "/projects/p01-03.jpg"],
    alt: { sr: "Minimalistički enterijer – inspiracija 01", en: "Minimal interior – inspiration 01" },
  },
  {
    id: "p02",
    cover: "/projects/p02-01.jpg",
    gallery: ["/projects/p02-01.jpg", "/projects/p02-02.jpg", "/projects/p02-03.jpg"],
    alt: { sr: "Minimalistički enterijer – inspiracija 02", en: "Minimal interior – inspiration 02" },
  },
  {
    id: "p03",
    cover: "/projects/p03-01.jpg",
    gallery: ["/projects/p03-01.jpg", "/projects/p03-02.jpg", "/projects/p03-03.jpg"],
    alt: { sr: "Minimalistički enterijer – inspiracija 03", en: "Minimal interior – inspiration 03" },
  },
  {
    id: "p04",
    cover: "/projects/p04-01.jpg",
    gallery: ["/projects/p04-01.jpg", "/projects/p04-02.jpg", "/projects/p04-03.jpg"],
    alt: { sr: "Minimalistički enterijer – inspiracija 04", en: "Minimal interior – inspiration 04" },
  },
  {
    id: "p05",
    cover: "/projects/p05-01.jpg",
    gallery: ["/projects/p05-01.jpg", "/projects/p05-02.jpg", "/projects/p05-03.jpg"],
    alt: { sr: "Minimalistički enterijer – inspiracija 05", en: "Minimal interior – inspiration 05" },
  },
  {
    id: "p06",
    cover: "/projects/p06-01.jpg",
    gallery: ["/projects/p06-01.jpg", "/projects/p06-02.jpg", "/projects/p06-03.jpg"],
    alt: { sr: "Minimalistički enterijer – inspiracija 06", en: "Minimal interior – inspiration 06" },
  },
] as const;


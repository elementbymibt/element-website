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


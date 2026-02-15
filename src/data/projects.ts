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
    slug: "dorcol-residence-01",
    title: "Dorćol Residence 01",
    location: "Beograd",
    year: 2025,
    category: "Stan",
    shortDescription: "Savremen gradski stan sa toplim materijalima i tihim luksuzom.",
    description:
      "Klijent je želeo elegantan prostor sa snažnim karakterom i jasnim osećajem mira. Kroz balans burgundy tonova, prirodnog kamena i diskretnih zlatnih detalja, kreirali smo enterijer koji je podjednako impresivan i svakodnevno funkcionalan.",
    whatWeDid: [
      "Prostorna reorganizacija dnevne zone",
      "Izrada kompletne tehničke dokumentacije",
      "Custom komadi nameštaja po meri",
      "Kuracija rasvete i dekorativnih elemenata",
    ],
    coverImage: "/projects/p1.jpg",
    images: [
      "/projects/p1-1.jpg",
      "/projects/p1-2.jpg",
      "/projects/p1-3.jpg",
      "/projects/p1-4.jpg",
      "/projects/p1-5.jpg",
    ],
    featured: true,
  },
  {
    slug: "senjak-villa-atelier",
    title: "Senjak Villa Atelier",
    location: "Beograd",
    year: 2024,
    category: "Kuća",
    shortDescription: "Porodična vila sa editorial kompozicijom i fluidnim zonama.",
    description:
      "Polazna tačka bila je potreba za domom koji odiše reprezentativnošću, ali ostaje topao i intiman. Definisali smo ritam prostora kroz dvospratni dnevni trakt, skulpturalno stepenište i pažljivo odabrane teksture.",
    whatWeDid: [
      "Koncept enterijera kompletne kuće",
      "3D vizualizacije i materijal boardovi",
      "Koordinacija izvođača na licu mesta",
      "Final styling i art kuracija",
    ],
    coverImage: "/projects/p2.jpg",
    images: [
      "/projects/p2-1.jpg",
      "/projects/p2-2.jpg",
      "/projects/p2-3.jpg",
      "/projects/p2-4.jpg",
      "/projects/p2-5.jpg",
    ],
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
      "Projektovali smo prostor koji se oslanja na svetlo i horizont. Neutralna osnova, bronzani detalji i luksuzni tekstili daju osećaj hotelskog komfora u privatnom domu.",
    whatWeDid: [
      "Planiranje zona za dnevni život i entertaining",
      "Rasvetni scenario po ambijentima",
      "Specifikacije završnih obrada",
      "Nabavka i logistika opremanja",
    ],
    coverImage: "/projects/p3.jpg",
    images: [
      "/projects/p3-1.jpg",
      "/projects/p3-2.jpg",
      "/projects/p3-3.jpg",
      "/projects/p3-4.jpg",
      "/projects/p3-5.jpg",
    ],
    featured: true,
  },
  {
    slug: "zemun-loft-office",
    title: "Zemun Loft Office",
    location: "Zemun",
    year: 2025,
    category: "Poslovni prostor",
    shortDescription: "Kreativni office koncept sa snažnim identitetom brenda.",
    description:
      "Cilj je bio da kancelarija bude funkcionalna, inspirativna i vizuelno prepoznatljiva. Integrisali smo fleksibilne radne zone, tihi lounge i premium materijalizaciju koja komunicira kvalitet.",
    whatWeDid: [
      "Brending prostora kroz materijale i boje",
      "Dizajn recepcije i meeting zona",
      "Akustička optimizacija",
      "FF&E lista sa budžetskim nivoima",
    ],
    coverImage: "/projects/p4.jpg",
    images: [
      "/projects/p4-1.jpg",
      "/projects/p4-2.jpg",
      "/projects/p4-3.jpg",
      "/projects/p4-4.jpg",
      "/projects/p4-5.jpg",
    ],
    featured: true,
  },
  {
    slug: "belgrade-waterfront-suite",
    title: "Belgrade Waterfront Suite",
    location: "Beograd na vodi",
    year: 2024,
    category: "Stan",
    shortDescription: "Kompaktna luksuzna jedinica za poslovni boravak.",
    description:
      "Rešenje je fokusirano na maksimalnu funkcionalnost malog formata bez kompromisa u estetici. Uvedeni su multifunkcionalni elementi, skriveni storage i suptilna materijalna dramaturgija.",
    whatWeDid: [
      "Optimizacija layout-a male kvadrature",
      "Custom kuhinjski i garderobni sistemi",
      "Detaljne radioničke skice",
      "Nadzor implementacije",
    ],
    coverImage: "/projects/p5.jpg",
    images: [
      "/projects/p5-1.jpg",
      "/projects/p5-2.jpg",
      "/projects/p5-3.jpg",
      "/projects/p5-4.jpg",
      "/projects/p5-5.jpg",
    ],
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
      "Klijent je tražio spokojan ambijent za povlačenje iz gradskog ritma. Fokus je stavljen na prirodno drvo, kamene površine i tople zemljane tonove uz savremene linije.",
    whatWeDid: [
      "Koncept enterijera i terase",
      "Detalji po meri za dnevni trakt",
      "Rasveta niske kolor temperature",
      "Shopping lista sa lokalnim dobavljačima",
    ],
    coverImage: "/projects/p6.jpg",
    images: [
      "/projects/p6-1.jpg",
      "/projects/p6-2.jpg",
      "/projects/p6-3.jpg",
      "/projects/p6-4.jpg",
      "/projects/p6-5.jpg",
    ],
    featured: true,
  },
  {
    slug: "vracar-boutique-clinic",
    title: "Vračar Boutique Clinic",
    location: "Vračar",
    year: 2026,
    category: "Poslovni prostor",
    shortDescription: "Medical boutique prostor sa premium hospitality iskustvom.",
    description:
      "Transformisali smo standardni medicinski prostor u smirenu i sofisticiranu celinu. Dizajn smanjuje stres korisnika i podržava efikasan tok osoblja.",
    whatWeDid: [
      "UX planiranje korisničkog toka",
      "Dizajn čekaonice i tretmanskih soba",
      "Specifikacija higijenski pogodnih materijala",
      "Koordinacija izvođenja i finalna kontrola",
    ],
    coverImage: "/projects/p7.jpg",
    images: [
      "/projects/p7-1.jpg",
      "/projects/p7-2.jpg",
      "/projects/p7-3.jpg",
      "/projects/p7-4.jpg",
      "/projects/p7-5.jpg",
    ],
    featured: false,
  },
  {
    slug: "nis-family-house",
    title: "Niš Family House",
    location: "Niš",
    year: 2024,
    category: "Kuća",
    shortDescription: "Topao porodični dom sa naglašenim zonama zajedništva.",
    description:
      "Enterijer je razvijen oko porodičnih navika i dnevnih rituala. Poseban akcenat stavljen je na ergonomiju, trajne materijale i kontinuitet između enterijera i eksterijera.",
    whatWeDid: [
      "Programska analiza potreba porodice",
      "Funkcionalno zoniranje prizemlja i sprata",
      "Ugradni nameštaj i skladišni sistemi",
      "Tekstil i dekorativni sloj",
    ],
    coverImage: "/projects/p8.jpg",
    images: [
      "/projects/p8-1.jpg",
      "/projects/p8-2.jpg",
      "/projects/p8-3.jpg",
      "/projects/p8-4.jpg",
      "/projects/p8-5.jpg",
    ],
    featured: false,
  },
  {
    slug: "novi-sad-concept-store",
    title: "Novi Sad Concept Store",
    location: "Novi Sad",
    year: 2025,
    category: "Poslovni prostor",
    shortDescription: "Retail prostor koji spaja galerijski minimalizam i prodaju.",
    description:
      "Izazov je bio omogućiti česte promene postavke uz stalan high-end doživljaj. Modularni display sistemi i svetlosni akcenti daju fleksibilnost bez gubitka identiteta.",
    whatWeDid: [
      "Dizajn modularnog display sistema",
      "Rasvetni plan za proizvode i zone",
      "Wayfinding elementi",
      "Operativni priručnik za održavanje vizuelnog standarda",
    ],
    coverImage: "/projects/p9.jpg",
    images: [
      "/projects/p9-1.jpg",
      "/projects/p9-2.jpg",
      "/projects/p9-3.jpg",
      "/projects/p9-4.jpg",
      "/projects/p9-5.jpg",
    ],
    featured: false,
  },
  {
    slug: "savski-venac-private-floor",
    title: "Savski Venac Private Floor",
    location: "Beograd",
    year: 2023,
    category: "Stan",
    shortDescription: "Privatni sprat transformisan u miran, reprezentativan apartman.",
    description:
      "Ovaj projekat je primer kako se postojeća struktura može podići na novi nivo bez agresivnih građevinskih intervencija. Fokus je bio na proporciji, svetlu i preciznom detalju.",
    whatWeDid: [
      "Rekontekstualizacija postojećih elemenata",
      "Materijalna i kolor korekcija",
      "Novi rasvetni i elektro plan",
      "Finalni set tehničke dokumentacije",
    ],
    coverImage: "/projects/p10.jpg",
    images: [
      "/projects/p10-1.jpg",
      "/projects/p10-2.jpg",
      "/projects/p10-3.jpg",
      "/projects/p10-4.jpg",
      "/projects/p10-5.jpg",
    ],
    featured: false,
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 6);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

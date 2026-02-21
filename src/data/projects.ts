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
];

export const projects: Project[] = [
  {
    slug: "novi-sad-102",
    title: "Novi Sad – 102 m²",
    location: "Novi Sad",
    year: 2026,
    category: "Stan",
    shortDescription: "Porodični trosoban stan sa bordo akcentima, mermerom i toplim metalnim detaljima.",
    description:
      "Ovaj enterijer razvijen je kao idejno i konsultantsko rešenje u skladu sa definisanim budžetom, funkcionalnim zahtevima i estetskim smernicama klijenta.\n\nSnažna bordo nijansa uvedena je kao centralni akcenat prostora, dok su mermerne površine, tamno drvo i kamen pažljivo balansirani kako bi se postigla harmonija tekstura i materijala. Bronzani detalji u rasveti i opremi dodatno naglašavaju sofisticiran karakter enterijera.\n\nDnevna zona osmišljena je bez televizora, sa fokusom na kamin kao centralnu tačku okupljanja i stvaranja atmosfere. Prostor je koncipiran tako da podstiče komunikaciju, mir i osećaj doma, uz jasno definisane funkcionalne tokove i logiku korišćenja.\n\nKupatilo prati istu estetsku liniju: mermer, bordo elementi i topli metalni akcenti objedinjeni su u kompaktnu, ali luksuznu celinu.\n\nPrikazani renderi predstavljaju vizuelno-idejni prikaz koncepta, dok realizacija zavisi od finalnog izbora materijala, dostupnosti proizvoda i kvaliteta izvođenja radova, u skladu sa ugovorenim obimom usluge.",
    whatWeDid: ["Idejno rešenje enterijera", "3D vizualizacija ključnih zona", "Konsultantske smernice za realizaciju"],
    coverImage: "/projects/p1-1.jpg",
    images: ["/projects/p1-1.jpg", "/projects/p1-2.jpg", "/projects/p1-3.jpg", "/projects/p1-4.jpg"],
    featured: true,
  },
  {
    slug: "nis-76",
    title: "Niš – 76 m²",
    location: "Niš",
    year: 2026,
    category: "Stan",
    shortDescription: "Porodični trosoban stan oblikovan kroz balans funkcionalnosti, svetlosti i topline.",
    description:
      "U ovom projektu akcenat je stavljen na balans funkcionalnosti, svetlosti i svakodnevne udobnosti. Dnevni boravak, trpezarija i kuhinja oblikovani su kao jedinstvena, otvorena celina u kojoj se prirodna svetlost susreće sa toplim drvenim teksturama i mirnim, neutralnim tonovima.\n\nTV zid sa vertikalnim drvenim oblogama i integrisanim policama postaje centralna tačka prostora, dok kamin unosi dodatnu toplinu i atmosferu doma. Rasveta je pažljivo pozicionirana kako bi naglasila zone boravka i omogućila različite scenarije korišćenja tokom dana.\n\nSpavaća soba koncipirana je kao mirna, taktilna oaza: meke teksture, diskretno ambijentalno osvetljenje i svedena paleta boja doprinose osećaju smirenosti i intime. Dečija soba je projektovana tako da prati rast deteta, uz kombinaciju funkcionalnog skladišnog prostora i nežnih, toplih tonova koji stvaraju bezbedan i prijatan ambijent.\n\nUlazni deo stana organizovan je kroz čiste linije, skrivene skladišne kapacitete i jasno definisanu zonu odlaganja, čime se postiže uredan i logičan tok kretanja kroz ceo prostor.\n\nEnterijer je razvijen kao idejno i konsultantsko rešenje, sa jasno definisanom organizacijom prostora, estetikom i budžetskim okvirima, u skladu sa potrebama savremene porodične svakodnevice.",
    whatWeDid: ["Idejno rešenje enterijera", "3D vizualizacija ključnih zona", "Konsultantske smernice za realizaciju"],
    coverImage: "/projects/p2-1.jpg",
    images: ["/projects/p2-1.jpg", "/projects/p2-2.jpg", "/projects/p2-3.jpg", "/projects/p2-4.jpg"],
    featured: true,
  },
  {
    slug: "beograd-82-master-zona",
    title: "Beograd – 82 m²",
    location: "Beograd",
    year: 2026,
    category: "Stan",
    shortDescription: "Master zona kao sekvenca prostora: spavaća soba, garderober i kupatilo u kontinuitetu.",
    description:
      "Za nas, master zona nikada nije samo spavaća soba. To je pažljivo projektovana sekvenca prostora koja prati ritam svakodnevnog života – od prvog jutarnjeg koraka do trenutka potpunog opuštanja uveče.\n\nSpavaća soba oblikovana je kao mirna, taktilna celina u neutralnoj paleti tonova, gde teksture i ambijentalno osvetljenje stvaraju osećaj topline i intime. Zidna obloga iza uzglavlja dodatno naglašava vertikalu prostora, dok rasveta definiše atmosferu bez vizuelnog opterećenja.\n\nWalk-in garderober projektovan je kao prirodan nastavak sobe – transparentne staklene pregrade čuvaju svetlost i otvorenost, a organizacija odlaganja prati realne potrebe korisnika, bez suvišnih elemenata.\n\nKupatilo je koncipirano kao produžetak istog ambijenta. Prirodni materijali, čiste linije i integrisano osvetljenje stvaraju utisak hotelskog komfora, ali sa toplinom domaćeg prostora.\n\nSvaki prelaz između zona osmišljen je tako da nema osećaja prekida – prostor teče logično, mirno i funkcionalno, u skladu sa navikama i životnim stilom korisnika.",
    whatWeDid: ["Idejno rešenje enterijera", "3D vizualizacija ključnih zona", "Konsultantske smernice za realizaciju"],
    coverImage: "/projects/p3-1.jpg",
    images: ["/projects/p3-1.jpg", "/projects/p3-2.jpg", "/projects/p3-3.jpg", "/projects/p3-4.jpg"],
    featured: true,
  },
  {
    slug: "novi-beograd-76",
    title: "Novi Beograd – 76 m²",
    location: "Novi Beograd",
    year: 2026,
    category: "Stan",
    shortDescription: "Jednosoban stan sa svetlom bazom, kontrolisanim kontrastima i toplim drvenim tonovima.",
    description:
      "Svetao prostor sa jasnom osnovom i pažljivo kontrolisanim kontrastima. U ovom jednosobnom stanu fokus je bio na ravnoteži između topline i elegancije. Tamni tonovi drveta definišu vertikale i daju dubinu prostoru, dok neutralne nijanse frontova i zidova unose lakoću i svetlost.\n\nKuhinja je organizovana linearno sa ostrvom koje postaje centralna tačka – funkcionalna radna zona, ali i mesto okupljanja. Kombinacija mermerne radne ploče i toplog drveta daje sofisticiran, ali nenametljiv karakter.\n\nDnevni boravak oblikovan je oko ugaone garniture u zelenom tonu koja prostoru daje identitet. Upravo ovakvi akcenti omogućavaju fleksibilnost – boja se u budućnosti može promeniti, dok baza enterijera ostaje bezvremenska i stabilna.\n\nSpavaća soba prati istu logiku materijala – drvene obloge, ambijentalno osvetljenje i mirna paleta stvaraju atmosferu odmora, bez vizuelnog zasićenja.\n\nProjektovan kao kompaktan, ali promišljen sistem, ovaj stan pokazuje kako 76 m² može funkcionisati prostrano kada su proporcije, materijali i osvetljenje u ravnoteži.",
    whatWeDid: ["Idejno rešenje enterijera", "3D vizualizacija ključnih zona", "Konsultantske smernice za realizaciju"],
    coverImage: "/projects/p4-1.jpg",
    images: ["/projects/p4-1.jpg", "/projects/p4-2.jpg", "/projects/p4-3.jpg", "/projects/p4-4.jpg"],
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
  "novi-sad-102": {
    shortDescription: {
      en: "Three-bedroom family apartment with burgundy accents, marble and warm metal details.",
      de: "Familienwohnung mit drei Schlafzimmern, bordeauxfarbenen Akzenten, Marmor und warmen Metalldetails.",
    },
    description: {
      en: "This interior was developed as a concept and consulting solution aligned with budget, functional needs and the client’s aesthetic direction. A strong burgundy tone acts as the main accent, balanced with marble, dark wood and stone. Bronze details in lighting and fittings reinforce the refined character. The living zone was intentionally designed without a TV, centered around the fireplace as the key gathering point. The bathroom follows the same line with marble, burgundy elements and warm metallic accents in a compact yet luxurious composition.",
      de: "Dieses Interieur wurde als konzeptionelle und beratende Lösung entwickelt, abgestimmt auf Budget, funktionale Anforderungen und die ästhetische Richtung des Kunden. Ein kräftiger Bordeaux-Ton bildet den zentralen Akzent und wird mit Marmor, dunklem Holz und Stein ausbalanciert. Bronze-Details in Beleuchtung und Ausstattung unterstreichen den anspruchsvollen Charakter. Der Wohnbereich wurde bewusst ohne TV gestaltet und um den Kamin als zentralen Treffpunkt organisiert. Das Bad folgt derselben Linie mit Marmor, bordeauxfarbenen Elementen und warmen Metallakzenten in einer kompakten, luxuriösen Komposition.",
    },
    whatWeDid: {
      en: ["Concept design", "3D visualization of key zones", "Consulting guidelines for implementation"],
      de: ["Konzeptdesign", "3D-Visualisierung der Kernbereiche", "Beratungsleitlinien für die Umsetzung"],
    },
  },
  "nis-76": {
    shortDescription: {
      en: "Three-bedroom family apartment shaped by balance between function, light and comfort.",
      de: "Familienwohnung mit drei Schlafzimmern, geprägt von Balance aus Funktion, Licht und Komfort.",
    },
    description: {
      en: "The project focuses on functional balance, natural light and everyday comfort. The living room, dining area and kitchen form one open composition where warm wood textures meet a calm neutral palette. A custom TV wall with vertical wooden cladding and integrated shelving anchors the space, while the fireplace adds atmosphere. The bedroom is designed as a tactile retreat, and the children’s room supports long-term use with functional storage and soft tones.",
      de: "Das Projekt fokussiert funktionale Balance, Tageslicht und alltäglichen Komfort. Wohnbereich, Esszone und Küche bilden eine offene Einheit, in der warme Holztexturen auf eine ruhige neutrale Palette treffen. Eine TV-Wand mit vertikaler Holzverkleidung und integrierten Regalen bildet den räumlichen Fokus, während der Kamin zusätzliche Atmosphäre schafft. Das Schlafzimmer ist als taktiler Rückzugsort gestaltet, das Kinderzimmer unterstützt langfristige Nutzung mit funktionalem Stauraum und sanften Tönen.",
    },
    whatWeDid: {
      en: ["Concept design", "3D visualization of key zones", "Consulting guidelines for implementation"],
      de: ["Konzeptdesign", "3D-Visualisierung der Kernbereiche", "Beratungsleitlinien für die Umsetzung"],
    },
  },
  "beograd-82-master-zona": {
    shortDescription: {
      en: "Master zone conceived as one continuous sequence: bedroom, walk-in closet and bathroom.",
      de: "Master-Zone als durchgängige Sequenz aus Schlafzimmer, Ankleide und Bad.",
    },
    description: {
      en: "For us, a master zone is never just a bedroom. It is a continuous sequence of spaces that follows daily rhythm from first morning steps to evening calm. Neutral tones, layered lighting and tactile materials create warmth without visual noise. The walk-in closet continues naturally from the bedroom, preserving light and openness, while the bathroom extends the same language for a refined hotel-like comfort with domestic warmth.",
      de: "Für uns ist eine Master-Zone nie nur ein Schlafzimmer. Sie ist eine zusammenhängende Raumsequenz, die den Tagesrhythmus vom ersten Morgenmoment bis zur abendlichen Ruhe begleitet. Neutrale Töne, mehrschichtige Beleuchtung und taktile Materialien schaffen Wärme ohne visuelle Unruhe. Die Ankleide setzt den Raumfluss natürlich fort und bewahrt Licht und Offenheit, während das Bad dieselbe Sprache für anspruchsvollen Hotelkomfort mit Wohnlichkeit aufgreift.",
    },
    whatWeDid: {
      en: ["Concept design", "3D visualization of key zones", "Consulting guidelines for implementation"],
      de: ["Konzeptdesign", "3D-Visualisierung der Kernbereiche", "Beratungsleitlinien für die Umsetzung"],
    },
  },
  "novi-beograd-76": {
    shortDescription: {
      en: "One-bedroom apartment with a bright base, controlled contrasts and warm wood tones.",
      de: "Einzimmerwohnung mit heller Basis, kontrollierten Kontrasten und warmen Holztönen.",
    },
    description: {
      en: "This compact apartment was developed around balance between elegance and warmth. Dark wood tones define verticals and depth, while neutral fronts and wall tones keep the space bright. The linear kitchen with island works as both an operational core and a social point. The living zone uses a green sectional as the key identity accent, while the bedroom follows the same calm material logic with ambient lighting and restrained tones.",
      de: "Diese kompakte Wohnung wurde auf der Balance zwischen Eleganz und Wärme aufgebaut. Dunkle Holztöne definieren Vertikalen und Tiefe, während neutrale Fronten und Wandtöne den Raum hell halten. Die lineare Küche mit Insel funktioniert als funktionaler Kern und sozialer Mittelpunkt. Der Wohnbereich nutzt ein grünes Sofa als identitätsstiftenden Akzent, während das Schlafzimmer dieselbe ruhige Materiallogik mit Ambientelicht und reduzierter Farbigkeit fortführt.",
    },
    whatWeDid: {
      en: ["Concept design", "3D visualization of key zones", "Consulting guidelines for implementation"],
      de: ["Konzeptdesign", "3D-Visualisierung der Kernbereiche", "Beratungsleitlinien für die Umsetzung"],
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

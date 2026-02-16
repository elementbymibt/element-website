export const signaturePoints = [
  "Editorial pristup koji prostoru daje identitet, ne samo dekoraciju.",
  "Precizna ravnoteža estetike, funkcionalnosti i dugoročne vrednosti.",
  "Diskretan, ali rigorozan projektni menadžment od ideje do realizacije.",
  "Kuriran izbor materijala i komada koji stvaraju tih luksuz.",
];

export type ServicePackage = {
  id: string;
  name: string;
  subtitle: string;
  idealFor: string;
  includes: string[];
};

export const servicePackages: ServicePackage[] = [
  {
    id: "concept",
    name: "Concept",
    subtitle: "Jasan dizajn pravac i estetika",
    idealFor: "Klijente koji žele profesionalan koncept pre izvođenja",
    includes: [
      "Uvodni brief i analiza prostora",
      "Koncept layout-a i funkcionalne zone",
      "Moodboard + predlog materijala",
      "Osnovna 3D atmosfera prostora",
    ],
  },
  {
    id: "full-design",
    name: "Full Design",
    subtitle: "Kompletna razrada enterijera",
    idealFor: "Stanove i kuće gde je potreban celovit projekat",
    includes: [
      "Sve iz Concept paketa",
      "Detaljni nacrti po prostorijama",
      "Rasveta, elektro i nameštaj po meri",
      "Shopping lista i tehničke specifikacije",
    ],
  },
  {
    id: "turn-key",
    name: "Premium Turn-Key",
    subtitle: "Od ideje do finalnog useljenja",
    idealFor: "Klijente koji žele full-service bez operativnog opterećenja",
    includes: [
      "Kompletan Full Design scope",
      "Nabavka i koordinacija dobavljača",
      "Autorski nadzor i kontrola kvaliteta",
      "Final styling i predaja spremnog prostora",
    ],
  },
  {
    id: "business",
    name: "Business Space",
    subtitle: "Premium poslovni enterijeri",
    idealFor: "Boutique kancelarije, ordinacije i concept retail",
    includes: [
      "Brend integracija u prostor",
      "UX tok korisnika i zaposlenih",
      "Tehnička dokumentacija za izvođenje",
      "Operativne smernice za održavanje standarda",
    ],
  },
];

export const packageComparisonRows = [
  {
    feature: "Moodboard i koncept",
    values: ["Da", "Da", "Da", "Da"],
  },
  {
    feature: "Detaljna tehnička dokumentacija",
    values: ["Osnovno", "Da", "Da", "Da"],
  },
  {
    feature: "3D vizualizacije",
    values: ["1-2 scene", "Po zonama", "Kompletan paket", "Po potrebama"],
  },
  {
    feature: "Koordinacija nabavke",
    values: ["Ne", "Opcionalno", "Da", "Da"],
  },
  {
    feature: "Autorski nadzor",
    values: ["Ne", "Opcionalno", "Da", "Da"],
  },
  {
    feature: "Rok projekta",
    values: ["2-4 nedelje", "4-8 nedelja", "8+ nedelja", "Po obimu"],
  },
];

export const faqItems = [
  {
    question: "Koliko traje izrada projekta enterijera?",
    answer:
      "U zavisnosti od obima, od 2 nedelje za koncept do 8+ nedelja za kompletan premium paket sa dokumentacijom.",
  },
  {
    question: "Da li radite projekte van Beograda?",
    answer:
      "Da. Radimo projekte širom Srbije i regiona, uz kombinaciju online koordinacije i terenskih poseta.",
  },
  {
    question: "Da li je moguće angažovati samo konsultacije?",
    answer:
      "Da, nudimo konsultativne sesije za klijente koji žele profesionalni smer pre samostalne realizacije.",
  },
  {
    question: "Kako se definiše budžet?",
    answer:
      "Budžet se formira nakon brief-a, kroz transparentan okvir za građevinske radove, opremanje i dekorativni sloj.",
  },
  {
    question: "Da li uključujete izvođače?",
    answer:
      "Po potrebi uključujemo proverene partnere i koordiniramo komunikaciju kako bi realizacija bila u skladu sa projektom.",
  },
  {
    question: "Šta ako već imam deo nameštaja?",
    answer:
      "Postojeći komadi mogu biti integrisani ukoliko podržavaju koncept i kvalitet prostora.",
  },
  {
    question: "Da li nudite plaćanje po fazama?",
    answer:
      "Da. Projekat se ugovara fazno, sa jasno definisanim isporukama i rokovima po svakoj etapi.",
  },
  {
    question: "Koliko su precizne 3D vizualizacije?",
    answer:
      "Vizualizacije služe kao verna interpretacija projekta i ključni alat za donošenje odluka pre izvođenja.",
  },
];

export const processSteps = [
  {
    title: "Brief & Strategija",
    short: "Razumevanje ciljeva, navika i budžeta.",
    deliverables: [
      "Inicijalni upitnik i konsultacije",
      "Analiza prostora i potencijala",
      "Projektni okvir i timeline",
    ],
  },
  {
    title: "Koncept",
    short: "Definisanje identiteta prostora.",
    deliverables: [
      "Konceptualni layout",
      "Moodboard i materijal board",
      "Stilski pravac i vizuelni ton",
    ],
  },
  {
    title: "Razrada",
    short: "Prevođenje ideje u precizan projekat.",
    deliverables: [
      "Tehnički nacrti",
      "Rasveta, elektro i nameštaj po meri",
      "Predmer i specifikacije",
    ],
  },
  {
    title: "Vizualizacija",
    short: "Realističan pregled pre realizacije.",
    deliverables: [
      "3D renderi ključnih zona",
      "Varijante materijala po potrebi",
      "Potvrda dizajnerskih odluka",
    ],
  },
  {
    title: "Dokumentacija & Podrška",
    short: "Kontrolisana realizacija do finalnog izgleda.",
    deliverables: [
      "Završni dokumentacioni paket",
      "Koordinacija dobavljača i izvođača",
      "Autorski nadzor i final styling",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Od prvog sastanka je bilo jasno da je svaki detalj promišljen. Rezultat je prostor koji izgleda smireno, luksuzno i potpuno naš.",
    author: "J. M., privatna rezidencija",
  },
  {
    quote:
      "Proces je bio precizan i transparentan. Tim je vodio projekat sa autoritetom, ali i sa osećajem za našu svakodnevicu.",
    author: "A. N., boutique poslovni prostor",
  },
];

export const caseStudy = {
  title: "Case Study: Vračar Boutique Clinic",
  problem:
    "Klinika je imala neujednačen korisnički tok, visok nivo stresa kod pacijenata i vizuelni identitet koji nije pratio premium uslugu.",
  solution:
    "Redizajnirali smo raspored kretanja, definisali mirnu materijalnu paletu i uveli hospitality principe u recepciju i zone čekanja.",
  result:
    "Percepcija brenda je podignuta, vreme zadržavanja u čekanju subjektivno smanjeno, a tim dobio efikasniji operativni tok.",
};

export const promoOffers = [
  {
    title: "Prolećni paket konsultacija",
    subtitle: "90-min premium sesija + mini koncept",
    details:
      "Za nove klijente: detaljna konsultacija, funkcionalni predlog i lista prioritetnih intervencija.",
    badge: "Limited",
  },
  {
    title: "-10% za rezervacije do 30.04.",
    subtitle: "Za Full Design i Premium Turn-Key",
    details:
      "Popust se odnosi na ugovore zaključene do navedenog datuma, uz standardne faze i uslove realizacije.",
    badge: "Aktuelno",
  },
  {
    title: "Business Space Audit",
    subtitle: "Brza procena potencijala prostora",
    details:
      "Intenzivni audit za kancelarije i retail: dijagnostika prostora + 3 strateške preporuke.",
    badge: "Novo",
  },
];

export const aboutValues = [
  "Diskretna elegancija bez vizuelnog šuma.",
  "Funkcionalnost kao osnova svakog estetskog izbora.",
  "Rigorozna tehnička razrada i kontrola kvaliteta.",
  "Dizajn koji traje i zadržava vrednost kroz vreme.",
];

export const teamMembers = [
  {
    name: "Milos B. T.",
    role: "Creative Director",
    bio: "Vodi konceptualni pravac i autorski nadzor svakog premium projekta.",
  },
  {
    name: "A. Petrović",
    role: "Lead Interior Architect",
    bio: "Specijalizovana za tehničku razradu i kompleksne stambene projekte.",
  },
  {
    name: "N. Jovanović",
    role: "Project & Procurement Manager",
    bio: "Koordinacija izvođača, dobavljača i logistike od početka do predaje.",
  },
];

export const pressMentions = [
  "Architectural Living / Editorial feature (placeholder)",
  "Design Serbia / Studio profile (placeholder)",
  "Interior Daily / Project spotlight (placeholder)",
];

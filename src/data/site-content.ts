export const signaturePoints = [
  "Editorial pristup koji prostoru daje identitet, ne samo dekoraciju.",
  "Ravnoteža proporcije, svetla i materijala, bez vizuelnog šuma.",
  "Jasno vođen proces koji skraćuje odlučivanje i štiti kvalitet.",
  "Kurirani predlozi koji ostaju relevantni i nakon godina korišćenja.",
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
    name: "Koncept",
    subtitle: "FAZA 1",
    idealFor: "Za jasan pravac projekta pre velikih odluka.",
    includes: [
      "Kick-off nakon kompletnih ulaznih podataka",
      "Stil, atmosfera i funkcionalna logika prostora",
      "Idejni 2D raspored i prioritetne zone",
      "Potvrda faze email-om kao osnova za dalji rad",
    ],
  },
  {
    id: "visualization",
    name: "Vizuelizacija",
    subtitle: "FAZA 2",
    idealFor: "Za sigurnost pre realizacije i finalno usklađivanje estetike.",
    includes: [
      "3D model ključnih prostora",
      "Dve objedinjene korekcije unutar istog koncepta",
      "Pokazni raspored instalacija (informativno)",
      "Potvrda faze pre finalnog paketa",
    ],
  },
  {
    id: "final-package",
    name: "Finalni paket",
    subtitle: "FAZA 3",
    idealFor: "Za jasan idejni set smernica i dokumentaciju za sigurnu realizaciju.",
    includes: [
      "Finalni 3D renderi ključnih kadrova",
      "Idejni crteži nameštaja po meri (gabariti/podela)",
      "Spiskovi opreme i materijala (orijentacione cene)",
      "Budžetski okvir po prostorijama i fazna realizacija",
      "Mini vodič i finalna digitalna predaja",
    ],
  },
];

export const packageComparisonRows = [
  {
    feature: "Stilska tabla i koncept",
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
      "Rok zavisi od obima i brzine donošenja odluka. Nakon upitnika i uvodnih konsultacija dajemo precizan vremenski okvir po fazama.",
  },
  {
    question: "Da li radite projekte van Beograda?",
    answer:
      "Da. Saradnja može biti organizovana i van Beograda, uz kombinaciju online koordinacije i dogovorenih obilazaka po potrebi.",
  },
  {
    question: "Da li je moguće angažovati samo konsultacije?",
    answer:
      "Da, nudimo konsultativne sesije za klijente koji žele profesionalni smer pre samostalne realizacije.",
  },
  {
    question: "Kako se definiše budžet?",
    answer:
      "Budžetski okvir definišemo zajedno na osnovu upitnika i prioriteta. Naš cilj je da predlog bude estetski jak, ali realan u odnosu na budžet.",
  },
  {
    question: "Da li pomažete u realizaciji?",
    answer:
      "Po potrebi pružamo konsultantsku podršku tokom realizacije kako bi koncept ostao dosledan. Realizacija i ugovaranje izvođenja su van okvira idejne usluge.",
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
    title: "Konsultacije",
    short: "Kick-off, ulazni podaci i jasno definisanje opsega.",
    deliverables: [
      "Uvodni sastanak i strukturisan brief",
      "Pregled planova, mera i postojećeg stanja",
      "Definisanje opsega i plana rada po fazama",
    ],
  },
  {
    title: "Koncept",
    short: "Definisanje identiteta prostora i funkcionalne logike.",
    deliverables: [
      "Idejni 2D raspored i prioritetne zone",
      "Stil, paleta i moodboard materijala",
      "Email potvrda koncepta pre 3D razrade",
    ],
  },
  {
    title: "Razrada",
    short: "3D vizuelizacija i idejna razrada ključnih elemenata.",
    deliverables: [
      "3D model ključnih zona",
      "Dve objedinjene korekcije u istom konceptu",
      "Pokazne pozicije instalacija (informativno)",
    ],
  },
  {
    title: "Realizacija",
    short: "Finalni paket i konsultantska podrška tokom realizacije.",
    deliverables: [
      "Finalni 3D renderi uz završnu dokumentaciju",
      "Finalni paket: idejni crteži, spiskovi i budžetski okvir",
      "Fazna realizacija i mini vodič za realizaciju",
      "Konsultantska podrška bez tehničkog nadzora i izvođenja",
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
  title: "Studija slučaja: Vračar Boutique Clinic",
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
    badge: "Ograničeno",
  },
  {
    title: "-10% za rezervacije do 30.04.",
    subtitle: "Za Full Design i Premium Turn-Key",
    details:
      "Popust se odnosi na ugovore zaključene do navedenog datuma, uz standardne faze i uslove realizacije.",
    badge: "Aktuelno",
  },
  {
    title: "Audit poslovnog prostora",
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

// Team/press sadržaj je namerno izostavljen iz javnog sajta dok ne budu dostupni stvarni podaci.

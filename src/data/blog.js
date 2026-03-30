export const articles = [
  {
    slug: 'ako-vybrat-vstavanu-ruru',
    category: 'Sprievodca',
    title: 'Ako vybrať vstavanú rúru v roku 2026',
    perex: 'Rozmery, energetická trieda, typ čistenia a čo porovnať pred kúpou. Kompletný sprievodca pre každého.',
    readTime: '6 min čítania',
  },
  {
    slug: 'bosch-vs-electrolux-umyvacky',
    category: 'Porovnanie',
    title: 'Bosch vs Electrolux umývačky: ktorá sa oplatí?',
    perex: 'Porovnáme dva najpopulárnejšie rady v strednej cenovej kategórii. Kedy zvoliť Bosch a kedy Electrolux.',
    readTime: '5 min čítania',
  },
  {
    slug: 'rozmery-pre-zabudovanie-checklist',
    category: 'Checklist',
    title: 'Rozmery pre zabudovanie: checklist pred kúpou',
    perex: 'Zmerali ste výklenok? Skontrolujte týchto 8 rozmerov pred objednaním vstavaného spotrebiča. Ušetríte si problémy.',
    readTime: '4 min čítania',
  },
  {
    slug: 'najcastejsie-chyby-pri-vybere-chladnicky',
    category: 'Sprievodca',
    title: '5 najčastejších chýb pri výbere chladničky',
    perex: 'Objem, trieda energie, hlučnosť, rozmery a servis. Tieto chyby ľudia robia najčastejšie a ako sa im vyhnúť.',
    readTime: '5 min čítania',
  },
  {
    slug: 'pracka-susicka-alebo-kombinacia',
    category: 'Porovnanie',
    title: 'Práčka a sušička alebo kombinácia? Čo sa oplatí viac?',
    perex: 'Kombinácia šetrí miesto, ale oplatí sa to? Porovnáme výhody, nevýhody a typické situácie pre každý typ.',
    readTime: '5 min čítania',
  },
  {
    slug: 'kuchynsky-set-ako-setrit',
    category: 'Tip',
    title: 'Kuchynský set: ako nakúpiť viac spotrebičov a ušetriť',
    perex: 'Rúra, doska, digestor a umývačka naraz. Kedy sa oplatí kúpiť v sete a ako na to v Sentone.',
    readTime: '3 min čítania',
  },
  {
    slug: 'energeticka-trieda-spotrebice-2026',
    category: 'Sprievodca',
    title: 'Energetická trieda spotrebičov: čo znamenajú písmená v 2026',
    perex: 'Nové označenie A až G je iné ako predtým. Vysvetlíme čo znamená A a kedy sa oplatí priplatiť za vyššiu triedu.',
    readTime: '4 min čítania',
  },
  {
    slug: 'odvoz-stareho-spotrebica-ako-funguje',
    category: 'Služby',
    title: 'Odvoz starého spotrebiča: ako to funguje pri Senton doručení',
    perex: 'Ekologická likvidácia, kedy je odvoz zahrnutý a kedy spoplatnený. Všetko čo potrebujete vedieť vopred.',
    readTime: '3 min čítania',
  },
  {
    slug: 'umyvacka-riadu-do-malej-kuchyne',
    category: 'Sprievodca',
    title: 'Umývačka riadu do malej kuchyne: aké rozmery vybrať',
    perex: 'Plnorozmerná, užšia alebo stolová? Pre každú kuchyňu existuje riešenie. Porovnáme typy a odporúčame modely.',
    readTime: '5 min čítania',
  },
  {
    slug: 'reklamacia-spotrebica-postup',
    category: 'Servis',
    title: 'Reklamácia spotrebiča: krok za krokom čo robiť',
    perex: 'Porucha v záruke, čo robiť ako prvé, kontakty na servis a ako prebieha oprava priamo u vás doma.',
    readTime: '4 min čítania',
  },
]

const categoryColors = {
  'Sprievodca': 'var(--blue)',
  'Porovnanie': '#7c3aed',
  'Checklist':  '#059669',
  'Tip':        'var(--orange)',
  'Služby':     '#0891b2',
  'Servis':     '#dc2626',
}

export function categoryColor(cat) {
  return categoryColors[cat] || 'var(--muted)'
}

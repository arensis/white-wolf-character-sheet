/**
 * Languages for *Vampiro: La Mascarada* (V20, escenario moderno). Every
 * character knows one native language for free; additional languages come from
 * the Language Merit (1 freebie point each — see the finishing step). This is a
 * modern list, grouped by region. Spanish content (content phase).
 */

export interface LanguageItem {
  id: string;
  name: string;
  /** Short modern note: where it is spoken / rough number of speakers. */
  text: string;
}

export interface LanguageGroup {
  continent: string;
  languages: LanguageItem[];
}

export const LANGUAGE_GROUPS: LanguageGroup[] = [
  {
    continent: 'Más habladas',
    languages: [
      { id: 'english', name: 'Inglés', text: 'Lengua franca global de negocios, ciencia e Internet.' },
      { id: 'mandarin', name: 'Chino mandarín', text: 'El idioma con más hablantes nativos del mundo.' },
      { id: 'spanish', name: 'Español', text: 'España y casi toda Hispanoamérica.' },
      { id: 'hindi', name: 'Hindi', text: 'Norte de la India; una de las lenguas más habladas.' },
      { id: 'arabic', name: 'Árabe', text: 'Oriente Medio y norte de África; lengua del islam.' },
      { id: 'portuguese', name: 'Portugués', text: 'Brasil, Portugal y África lusófona.' },
      { id: 'russian', name: 'Ruso', text: 'Rusia y buena parte del espacio postsoviético.' },
      { id: 'french', name: 'Francés', text: 'Francia, Canadá, África francófona y diplomacia.' },
    ],
  },
  {
    continent: 'Europa',
    languages: [
      { id: 'german', name: 'Alemán', text: 'Alemania, Austria y Suiza; potencia económica europea.' },
      { id: 'italian', name: 'Italiano', text: 'Italia; arte, moda y gastronomía.' },
      { id: 'dutch', name: 'Neerlandés', text: 'Países Bajos y Flandes.' },
      { id: 'polish', name: 'Polaco', text: 'Polonia y comunidades de Europa central.' },
      { id: 'ukrainian', name: 'Ucraniano', text: 'Ucrania.' },
      { id: 'greek', name: 'Griego moderno', text: 'Grecia y Chipre.' },
      { id: 'swedish', name: 'Sueco', text: 'Suecia y parte de Finlandia.' },
      { id: 'romanian', name: 'Rumano', text: 'Rumanía y Moldavia.' },
    ],
  },
  {
    continent: 'Asia',
    languages: [
      { id: 'japanese', name: 'Japonés', text: 'Japón; tecnología y cultura pop.' },
      { id: 'korean', name: 'Coreano', text: 'Corea del Sur y del Norte.' },
      { id: 'bengali', name: 'Bengalí', text: 'Bangladés y este de la India.' },
      { id: 'indonesian', name: 'Indonesio', text: 'Indonesia; lengua franca del archipiélago.' },
      { id: 'vietnamese', name: 'Vietnamita', text: 'Vietnam.' },
      { id: 'thai', name: 'Tailandés', text: 'Tailandia.' },
      { id: 'urdu', name: 'Urdu', text: 'Pakistán y comunidades del sur de Asia.' },
      { id: 'tagalog', name: 'Tagalo (filipino)', text: 'Filipinas.' },
    ],
  },
  {
    continent: 'Oriente Medio y África',
    languages: [
      { id: 'persian', name: 'Persa (farsi)', text: 'Irán, Afganistán y Tayikistán.' },
      { id: 'turkish', name: 'Turco', text: 'Turquía y comunidades de los Balcanes.' },
      { id: 'hebrew', name: 'Hebreo', text: 'Israel.' },
      { id: 'swahili', name: 'Suajili', text: 'Lengua franca de África oriental.' },
      { id: 'amharic', name: 'Amárico', text: 'Etiopía.' },
      { id: 'hausa', name: 'Hausa', text: 'Comercio en el oeste y centro de África.' },
      { id: 'yoruba', name: 'Yoruba', text: 'Nigeria y África occidental.' },
    ],
  },
  {
    continent: 'América',
    languages: [
      { id: 'haitianCreole', name: 'Criollo haitiano', text: 'Haití y su diáspora.' },
      { id: 'quechua', name: 'Quechua', text: 'Zonas andinas de Perú, Bolivia y Ecuador.' },
      { id: 'guarani', name: 'Guaraní', text: 'Paraguay; cooficial con el español.' },
      { id: 'navajo', name: 'Navajo', text: 'Suroeste de EE. UU.' },
    ],
  },
];

const LANGUAGE_BY_ID: Record<string, LanguageItem> = LANGUAGE_GROUPS.reduce(
  (acc, group) => {
    group.languages.forEach((lang) => (acc[lang.id] = lang));
    return acc;
  },
  {} as Record<string, LanguageItem>
);

export const getLanguageName = (id: string): string => LANGUAGE_BY_ID[id]?.name ?? id;

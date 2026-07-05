/**
 * Languages for *Edad Oscura: Vampiro*. Every character knows one native
 * language for free; the Linguistics knowledge grants additional languages
 * (1/2/4/8/16 at dots 1-5). Structured by continent with the historical use
 * each language had. Spanish content (content phase).
 */

export interface LanguageItem {
  id: string;
  name: string;
  text: string;
}

export interface LanguageGroup {
  continent: string;
  languages: LanguageItem[];
}

/** Additional languages granted by Linguistics dots (index 0-5). */
export const LANGUAGES_BY_LINGUISTICS = [0, 1, 2, 4, 8, 16];

export const LANGUAGE_GROUPS: LanguageGroup[] = [
  {
    continent: 'Europa',
    languages: [
      { id: 'latin', name: 'Latín medieval', text: 'Administración, Iglesia, ciencia y universidades en todo el continente.' },
      { id: 'lowGerman', name: 'Bajo alemán', text: 'Idioma oficial de la Liga Hanseática para el comercio en el norte y el Báltico.' },
      { id: 'oil', name: 'Lenguas de oïl (francés medio)', text: 'Cortes reales, diplomacia y literatura caballeresca.' },
      { id: 'italic', name: 'Dialectos itálicos (veneciano y genovés)', text: 'Rutas comerciales marítimas por todo el Mediterráneo.' },
      { id: 'castilian', name: 'Castellano', text: 'Expansión jurídica y comercial en la Península Ibérica.' },
      { id: 'byzantineGreek', name: 'Griego bizantino', text: 'Administración y comercio en el Mediterráneo oriental.' },
    ],
  },
  {
    continent: 'Asia',
    languages: [
      { id: 'arabicAsia', name: 'Árabe', text: 'Comercio en la Ruta de la Seda marítima, el océano Índico y Oriente Medio.' },
      { id: 'persian', name: 'Persa', text: 'Lengua de la alta cultura, diplomacia y comercio terrestre en Asia Central.' },
      { id: 'chinese', name: 'Chino (mandarín temprano)', text: 'Burocracia, exámenes imperiales y comercio en Extremo Oriente.' },
      { id: 'sanskrit', name: 'Sánscrito', text: 'Textos sagrados, leyes y liturgia en el sur y sureste asiático.' },
      { id: 'oldMalay', name: 'Malayo antiguo', text: 'Comercio marítimo en el estrecho de Malaca y el archipiélago malayo.' },
      { id: 'anatolianTurkish', name: 'Turco de Anatolia', text: 'Expansión militar, comercial y administrativa en Asia Menor.' },
    ],
  },
  {
    continent: 'África',
    languages: [
      { id: 'arabicAfrica', name: 'Árabe', text: 'Comercio transahariano, rutas del oro y del islam en el norte y el oeste.' },
      { id: 'swahili', name: 'Suajili temprano', text: 'Comercio marítimo en la costa índica oriental con Asia.' },
      { id: 'geez', name: "Ge'ez", text: 'Religión, registros reales y administración en el Imperio Etíope.' },
      { id: 'mande', name: 'Lenguas mandingas', text: 'Comercio, política y administración en el Imperio de Malí.' },
      { id: 'berber', name: 'Lenguas bereberes', text: 'Rutas comerciales terrestres y caravanas en el desierto del Sáhara.' },
    ],
  },
  {
    continent: 'América',
    languages: [
      { id: 'nahuatl', name: 'Náhuatl clásico', text: 'Comercio, tributos y administración en el Imperio Mexica (Azteca).' },
      { id: 'quechua', name: 'Quechua clásico', text: 'Administración, red de caminos y control estatal en el Imperio Inca.' },
      { id: 'mayan', name: 'Lenguas mayas', text: 'Redes de comercio regional de obsidiana, cacao y jade en Mesoamérica.' },
      { id: 'chibchan', name: 'Lenguas chibchas', text: 'Comercio de oro y sal entre Centroamérica y los Andes septentrionales.' },
    ],
  },
  {
    continent: 'Oceanía',
    languages: [
      { id: 'polynesian', name: 'Lenguas polinesias', text: 'Navegación, trueque y alianzas tribales entre islas del Pacífico.' },
      { id: 'melanesian', name: 'Lenguas melanesias', text: 'Comercio marítimo local y redes de intercambio de canoas y conchas.' },
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

/** Additional languages allowed for the given Linguistics dots. */
export const languageAllowance = (linguisticsDots: number): number =>
  LANGUAGES_BY_LINGUISTICS[Math.max(0, Math.min(5, linguisticsDots))] ?? 0;

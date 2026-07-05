import { InfoDialogLevel } from '../components/info-dialog/info-dialog.component';

export interface BackgroundContent {
  description: string;
  levels: InfoDialogLevel[];
}

const DOTS = ['•', '••', '•••', '••••', '•••••'];

function levels(entries: string[]): InfoDialogLevel[] {
  return entries.map((text, i) => ({ dots: DOTS[i] ?? String(i + 1), text }));
}

export const BACKGROUND_CONTENT: Record<string, BackgroundContent> = {
  allies: {
    description:
      'Hombres y mujeres mortales que apoyan al personaje voluntariamente: familia, amigos, compañeros de organización u otros. Proporcionan ayuda activa (no solo información), aunque no siempre están disponibles y no se sacrificarán suicidamente. Sus detalles dependen de la imaginación del jugador y la aprobación del Narrador.',
    levels: levels([
      'Un aliado de influencia y poder moderados en la comunidad inmediata.',
      'Dos aliados, ambos de poder moderado localmente y de alguna influencia en el condado o región.',
      'Tres aliados, uno de los cuales ejerce un poder significativo, oficial u otro.',
      'Cuatro aliados, uno de los cuales es extremadamente influyente.',
      'Cinco aliados, uno de los cuales es una fuerza mayor en una institución importante y puede proporcionar ayuda a gran distancia.',
    ]),
  },

  contacts: {
    description:
      'Gente dispuesta a proporcionar información, aunque rara vez servicios más allá de eso. Cada nivel incluye un individuo concreto más un "halo" de contactos secundarios de menor nivel a su alrededor. Para información urgente tira Astucia + Contactos (dif. 7); para información paulatina, Carisma + Contactos (dif. 7), una pieza por semana.',
    levels: levels([
      'Un contacto principal y dos o tres contactos secundarios.',
      'Dos contactos principales y cerca de cinco contactos secundarios.',
      'Tres contactos principales y de ocho a 10 contactos secundarios.',
      'Cuatro contactos principales y de 10 a 15 contactos secundarios.',
      'Cinco contactos principales y una gran cantidad de contactos secundarios (casi cualquiera en el área puede proporcionar alguna información).',
    ]),
  },

  retainers: {
    description:
      'Sirvientes y compañeros con lazos personales de lealtad: sirvientes, veteranos de cruzada, miembros de sectas monásticas, amigos de infancia u otros. Pueden ser ghouls o mortales. El señorío feudal implica obligaciones mutuas: abusar de los criados puede acarrear escándalo o represalias legales.',
    levels: levels([
      'Un criado.',
      'Dos criados, o uno inusualmente competente (tres Atributos con tres círculos, la mayoría de las Habilidades profesionales con tres círculos, y una con cuatro).',
      'Tres criados, o dos por encima de la media, o un criado notable (creado con el mismo total que un personaje inicial).',
      'Cuatro criados, o dos por encima de la media y uno típico, o uno notable y dos típicos.',
      'Cinco criados, o tres por encima de la media, o dos notables.',
    ]),
  },

  domain: {
    description:
      'Territorio físico —casi siempre dentro de un pueblo o ciudad— cuyo acceso controla el personaje para alimentarse. Cada círculo reduce en 1 la dificultad de las tiradas de alimentación dentro del dominio y suma 1 al punto de sangre inicial. La seguridad del dominio puede elevarse con la opción del Narrador, penalizando la intrusión ajena.',
    levels: levels([
      'Un hogar familiar o una granja y sus propiedades colindantes: refugio básico.',
      'Una iglesia u otra estructura grande, un embarcadero y almacén, o un puente y vado: acceso conveniente pero fácilmente controlable.',
      'Una manzana de casas o los edificios en torno a un cruce de caminos: más ocultación, seguridad menos completa.',
      'Un laberinto, red de cisternas, tierras en una colina dominante o posadas en un paso montañoso: perspectivas y seguridad combinadas.',
      'Un arrabal, guarnición fronteriza autosuficiente o granjas multifamiliares.',
    ]),
  },

  generation: {
    description:
      'Mide el número de vampiros en línea directa entre el personaje y Caín. La mayoría de los nuevos vampiros medievales son de la 12ª generación; cada punto de este Trasfondo reduce la generación en uno y aumenta la reserva de sangre y los puntos de sangre gastables por turno.',
    levels: levels([
      '11ª generación. Reserva de sangre 12; 1 punto de sangre por turno; rasgo máximo 5.',
      '10ª generación. Reserva de sangre 13; 1 punto de sangre por turno; rasgo máximo 5.',
      '9ª generación. Reserva de sangre 14; 2 puntos de sangre por turno; rasgo máximo 5.',
      '8ª generación. Reserva de sangre 15; 3 puntos de sangre por turno; rasgo máximo 5.',
      '7ª generación. Reserva de sangre 20; 4 puntos de sangre por turno; rasgo máximo 6.',
    ]),
  },

  herd: {
    description:
      'Mortales que voluntariamente dejan beber de su sangre al personaje. No son aliados ni contactos salvo que se compren también esos Trasfondos. Cada nivel proporciona un punto de sangre automático la noche en que el personaje elija alimentarse de ellos, además de los azares de la caza regular.',
    levels: levels([
      '3–5 recipientes fiables.',
      '7–10 recipientes fiables.',
      '15–25 recipientes fiables.',
      '30–50 recipientes fiables.',
      '75–100 recipientes fiables.',
    ]),
  },

  influence: {
    description:
      'Grado en que el personaje puede hacer valer sus deseos en la sociedad mortal, logrado mediante persuasión, sobornos, intimidación o manipulación directa. Cada círculo reduce en 1 la dificultad de las tiradas sociales relevantes en el campo y zona donde el personaje tenga influencia.',
    levels: levels([
      'Moderadamente influyente: significativa en los asuntos de una villa o parroquia.',
      'Bien relacionado: significativa en los asuntos de un condado o diócesis.',
      'Posición influyente: una fuerza con la que contar en varios condados o en una archidiócesis.',
      'Gran poder personal: una fuerza en la vida de una nación o en una orden internacional.',
      'Vasta influencia: el poder tras el trono de la Iglesia, o detrás de más de un trono nacional.',
    ]),
  },

  mentor: {
    description:
      'Vampiro más viejo que se interesa por el personaje: proporciona consejo, perspectiva histórica, cartas de presentación y otra asistencia específica. No es un recadero ni una solución mágica; si percibe que el personaje es un necio, retirará su apoyo. A menudo es el propio sire, aunque puede ser cualquier antiguo conocido.',
    levels: levels([
      'Un ancilla con poca influencia, aunque buena sabiduría.',
      'Un antiguo respetado.',
      'Un Cainita influyente y bien relacionado de la zona.',
      'Un antiguo con poder significativo en la sociedad mortal circundante y fuertes conexiones con otras comunidades Cainitas.',
      'Uno de los vampiros destacados de la época (es probable que aún no te hayas dado cuenta de su plena importancia).',
    ]),
  },

  resources: {
    description:
      'Bienes de valor cuya disposición controla el personaje: tierras, derechos de pasto, animales, tributos, moneda o cualquier otro activo. Los recursos vampíricos van sobre todo a pagar lujos y a desarrollar Posición, Influencia y otros Trasfondos.',
    levels: levels([
      'Suficiente. Residencia típica sin parecer pobre; puedes mantener un sirviente o contratar ayuda puntual.',
      'Moderado. Miembro de buena posición con regalos y caprichos ocasionales. Pequeña plantilla. Fracción disponible como letras de crédito: nivel 1 en cualquier lugar hasta seis meses.',
      'Acomodado. Tierras y propiedades; crédito en términos generosos. Puedes mantener nivel 1 dondequiera que estés indefinidamente.',
      'Rico. Los trovadores cantan tu riqueza. Más activos que muchas autoridades locales. En viaje: nivel 3 hasta un año, nivel 2 indefinidamente.',
      'Extremadamente rico. Vastos activos diversificados y personal a todos los niveles. Viajes con nivel 3 mínimo. Los reyes y cardenales acuden a ti para pedir préstamos.',
    ]),
  },

  status: {
    description:
      'Reputación y posición del personaje dentro de la sociedad Cainita. Al principio refleja el prestigio heredado del sire. La afiliación de clan, las profesiones y los Trasfondos mortales también pueden contribuir, así como los logros personales a lo largo del juego.',
    levels: levels([
      'Conocido: un neonato ejemplar o un ancilla típico.',
      'Respetado: uno de los neonatos más notables de la zona, o un ancilla de logros significativos.',
      'Honrado: un ancilla de éxito excepcional o un antiguo típico.',
      'Poderoso: un antiguo con posición además de logros, como un consejero del príncipe o un actor importante en la sociedad mortal a gran escala.',
      'Reverenciado: un príncipe de éxito u otro caudillo dentro de la sociedad Cainita.',
    ]),
  },
};

export function getBackgroundContent(key: string): BackgroundContent | undefined {
  return BACKGROUND_CONTENT[key];
}

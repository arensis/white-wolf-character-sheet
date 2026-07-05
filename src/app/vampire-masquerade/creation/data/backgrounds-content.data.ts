import { InfoDialogLevel } from '../components/info-dialog/info-dialog.component';

export interface BackgroundContent {
  description: string;
  levels: InfoDialogLevel[];
}

const DOTS = ['•', '••', '•••', '••••', '•••••'];

function levels(entries: string[]): InfoDialogLevel[] {
  return entries.map((text, i) => ({ dots: DOTS[i] ?? String(i + 1), text }));
}

/**
 * V20 backgrounds with concise level ladders (own-words summaries of the
 * mechanical scope of each rating).
 */
export const BACKGROUND_CONTENT: Record<string, BackgroundContent> = {
  allies: {
    description:
      'Mortales que te apoyan de forma voluntaria y activa: familia, amigos o colegas. Ayudan de verdad, pero tienen vida propia y límites.',
    levels: levels([
      'Un aliado de influencia moderada.',
      'Dos aliados de influencia moderada.',
      'Tres aliados, uno de ellos bastante influyente.',
      'Cuatro aliados, uno de ellos muy influyente.',
      'Cinco aliados, uno de ellos una figura de primer nivel.',
    ]),
  },
  alternateIdentity: {
    description:
      'Una identidad falsa con su documentación, historia y reputación propias. Útil para infiltrarse en otras sectas o en la sociedad mortal.',
    levels: levels([
      'Identidad nueva y frágil: papeles básicos.',
      'Identidad asentada con historial verificable.',
      'Identidad sólida, conocida en ciertos círculos.',
      'Identidad respetada con reputación establecida.',
      'Identidad impecable: ni una investigación a fondo la desmonta.',
    ]),
  },
  blackHandMembership: {
    description:
      '(Sabbat) Perteneces a la Mano Negra y puedes recurrir a sus miembros, con las obligaciones que ello implica.',
    levels: levels([
      'Recluta reciente: contactos puntuales.',
      'Miembro probado: puedes pedir ayuda menor.',
      'Miembro respetado: apoyo operativo real.',
      'Veterano con voz propia dentro de la Mano.',
      'Figura clave: recursos y efectivos considerables a tu llamada.',
    ]),
  },
  contacts: {
    description:
      'Gente que te pasa información, no servicios. Cada nivel añade un contacto principal y un halo de contactos menores.',
    levels: levels([
      'Un contacto principal.',
      'Dos contactos principales.',
      'Tres contactos principales.',
      'Cuatro contactos principales.',
      'Cinco contactos principales: pocas cosas escapan a tu red.',
    ]),
  },
  domain: {
    description:
      'Territorio de caza reconocido por la Estirpe local, con la seguridad y el sustento que proporciona.',
    levels: levels([
      'Un edificio o manzana: caza justa.',
      'Unas pocas manzanas: sustento estable.',
      'Un vecindario definido y defendible.',
      'Un distrito amplio con presas abundantes.',
      'Una zona extensa y próspera que otros codician.',
    ]),
  },
  fame: {
    description:
      'Eres conocido entre los mortales: abre puertas y facilita la manipulación de la opinión pública... y complica pasar desapercibido.',
    levels: levels([
      'Conocido en una subcultura local.',
      'Rostro reconocible en la ciudad.',
      'Fama regional: la prensa local te sigue.',
      'Fama nacional en tu ámbito.',
      'Celebridad internacional: todos te ponen cara.',
    ]),
  },
  generation: {
    description:
      'La pureza de tu Sangre y tu cercanía a Caín. Cada punto reduce en uno tu generación desde la 13ª, mejorando reserva y gasto de sangre.',
    levels: levels([
      'Duodécima generación: reserva 11, 1 punto por turno.',
      'Undécima generación: reserva 12, 1 punto por turno.',
      'Décima generación: reserva 13, 1 punto por turno.',
      'Novena generación: reserva 14, 2 puntos por turno.',
      'Octava generación: reserva 15, 3 puntos por turno.',
    ]),
  },
  herd: {
    description:
      'Recipientes de los que te alimentas con seguridad y sin esfuerzo: un culto, un club, devotos...',
    levels: levels([
      'Tres recipientes.',
      'Siete recipientes.',
      'Quince recipientes.',
      'Treinta recipientes.',
      'Sesenta recipientes.',
    ]),
  },
  influence: {
    description:
      'Tu peso en la sociedad mortal: política, medios, instituciones. Permite condicionar procesos y opiniones.',
    levels: levels([
      'Influencia moderada: un dedo en el ayuntamiento.',
      'Bien conectado: se te escucha en la ciudad.',
      'Posición e influencia notables.',
      'Gran influencia: mueves hilos del condado o región.',
      'Poder real sobre la política de la zona.',
    ]),
  },
  mentor: {
    description:
      'Un Vástago (o grupo) que te aconseja y protege. Su ayuda tiene un precio: lealtad, recados, discreción.',
    levels: levels([
      'Mentor de poca influencia, pero útil.',
      'Mentor respetado en la ciudad.',
      'Mentor influyente, quizá del Primogenato.',
      'Mentor con gran poder, quizá el Príncipe.',
      'Mentor extraordinariamente poderoso, quizá un Justicar o un Antiguo.',
    ]),
  },
  resources: {
    description:
      'Dinero, propiedades e ingresos. Determina tu nivel de vida y lo que puedes comprar o mantener.',
    levels: levels([
      'Pequeños ahorros: apartamento modesto y lo justo.',
      'Clase media: piso propio y fondos para imprevistos.',
      'Desahogado: buena casa, inversiones, algún lujo.',
      'Rico: patrimonio grande, personal a tu servicio.',
      'Multimillonario: fortunas, empresas y propiedades múltiples.',
    ]),
  },
  retainers: {
    description:
      'Sirvientes leales: ghouls o mortales condicionados que te obedecen. Fieles, pero necesitan dirección.',
    levels: levels([
      'Un criado.',
      'Dos criados.',
      'Tres criados.',
      'Cuatro criados.',
      'Cinco criados.',
    ]),
  },
  rituals: {
    description:
      '(Sabbat) Tu conocimiento de las Ritae de la Espada de Caín y tu autoridad para oficiarlas.',
    levels: levels([
      'Conoces las ritae básicas.',
      'Puedes oficiar los ritos comunes de manada.',
      'Dominio amplio de las ritae; se te consulta.',
      'Auctoritas ritae casi al completo.',
      'Maestro ritualista reconocido por la secta.',
    ]),
  },
  status: {
    description:
      'Tu posición en la sociedad vampírica de tu secta. Los Caitiff no pueden comprarlo en la creación.',
    levels: levels([
      'Conocido: un neonato aceptado.',
      'Respetado: tu voz cuenta.',
      'Influyente: quizá parte del Primogenato.',
      'Poderoso: cargos como Sheriff, Senescal o similar.',
      'Luminaria: Príncipe, Arzobispo o equivalente.',
    ]),
  },
};

export function getBackgroundContent(key: string): BackgroundContent | undefined {
  return BACKGROUND_CONTENT[key];
}

/**
 * Per-attribute info for V20 (Capítulo Tres). Each attribute lists a short
 * description, the meaning of its five dots and its common specialties.
 * Shown in the sheet's attribute info modal (mirrors abilities-content).
 *
 * Spanish-only (content phase, Spanish-first). Keyed by the attribute member
 * as stored in the sheet model (physical/social/mental).
 */

export interface AttributeContent {
  description: string;
  /** Meaning of dots 1-5, in order. */
  levels: string[];
  /** Comma-separated common specialties. */
  specialties?: string;
}

const L = (
  ...levels: [string, string, string, string, string]
): string[] => levels;

export const ATTRIBUTE_CONTENT: Record<string, AttributeContent> = {
  // ---- Físicos ----
  strength: {
    description:
      'Potencia física bruta. Determina cuánto peso levantas o empujas y la fuerza de tus golpes: se suma a la reserva de daño en combate cuerpo a cuerpo, y se usa para romper, levantar, transportar o saltar.',
    levels: L(
      'Malo: Puedes levantar algo menos de 20 kg.',
      'Normal: Puedes levantar cerca de 50 kg.',
      'Bueno: Puedes levantar poco más de 100 kg.',
      'Excepcional: Puedes levantar casi 200 kg.',
      'Sobresaliente: Levantas unos 300 kg y aplastas cráneos como si fueran uvas.'
    ),
    specialties: 'Agarre Fuerte, Brazos Potentes, Reservas de Fuerza, Violento.',
  },
  dexterity: {
    description:
      'Pericia general: rapidez, agilidad y velocidad, más la capacidad de manipular objetos con control y precisión. Incluye la coordinación ojo-mano, los reflejos y la gracia de movimientos.',
    levels: L(
      'Malo: Eres bastante torpe. Baja esa pistola antes de hacerte daño.',
      'Normal: No eres patoso, pero tampoco una bailarina.',
      'Bueno: Tienes cierto potencial atlético.',
      'Excepcional: Si quisieras podrías ser acróbata.',
      'Sobresaliente: Tus movimientos son líquidos e hipnóticos, casi sobrehumanos.'
    ),
    specialties: 'Preciso, Veloz, Gracia Felina, Reflejos Rápidos.',
  },
  stamina: {
    description:
      'Salud, aguante y vigor. Indica cuánto puedes forzarte y cuánto castigo soportas antes de sufrir un trauma físico; incluye una fortaleza mental que representa tu tenacidad.',
    levels: L(
      'Malo: No soportas un viento fuerte.',
      'Normal: Estás en buena forma y aguantas un par de puñetazos.',
      'Bueno: Tu condición física es muy buena y apenas padeces enfermedades.',
      'Excepcional: Podrías correr (y quizá ganar) cualquier maratón que quisieras.',
      'Sobresaliente: Tu constitución es realmente hercúlea.'
    ),
    specialties: 'Infatigable, Decidido, Duro Como el Acero, Vigoroso.',
  },

  // ---- Sociales ----
  charisma: {
    description:
      'Capacidad de agradar a los demás mediante tu personalidad. Sirve para ganarte su simpatía o su confianza, encantar e influir, y convencerlos de tus puntos de vista (seas un embaucador de pico de oro o un matón sarcástico).',
    levels: L(
      'Malo: No tienes mucha personalidad.',
      'Normal: Sueles caer bien y tienes algunos amigos.',
      'Bueno: La gente siempre confía en ti.',
      'Excepcional: Posees un gran magnetismo personal.',
      'Sobresaliente: Culturas enteras podrían seguir tu liderazgo.'
    ),
    specialties: 'Elegante, Labia, Convincente, Sofisticado, Agudo, Elocuente, Embaucador.',
  },
  manipulation: {
    description:
      'Conseguir que los demás compartan tus puntos de vista o sigan tus dictados: influir, engañar, embaucar, confundir o coaccionar. A diferencia del Carisma, no importa que les gustes; los fallos, eso sí, pueden ganarte enemigos.',
    levels: L(
      'Malo: Una persona de pocas (y a menudo ineficaces) palabras.',
      'Normal: A veces puedes engañar a otros, como casi todo el mundo.',
      'Bueno: Siempre consigues descuentos.',
      'Excepcional: Podrías ser político o líder de una secta.',
      'Sobresaliente: «¡Por supuesto! ¡Le diré al Príncipe que fui yo quien intentó estacarlo!»'
    ),
    specialties: 'Persuasivo, Seductor, Razonable, Liante, Invocador de "Hechos".',
  },
  appearance: {
    description:
      'Cómo de buena es la primera impresión que das: atractivo convencional o rasgos distintivos (aire de confianza, porte imponente, estilo). En situaciones de primera impresión, tus reservas de dados Sociales pueden quedar limitadas a tu Apariencia.',
    levels: L(
      'Malo: Tus ropas apestan, la gente te evita, o simplemente eres muy feo.',
      'Normal: No destacas en una multitud, para bien o para mal.',
      'Bueno: «Déjame invitarte a un trago».',
      'Excepcional: La gente se desvía de su camino para conocerte.',
      'Sobresaliente: La gente nunca se olvida de ti.'
    ),
    specialties: 'Estilo Poco Convencional, Fotogénico, Sentido de la Moda, Rostro Inolvidable, Pose Memorable.',
  },

  // ---- Mentales ----
  perception: {
    description:
      'Tu capacidad de observar el entorno, de forma consciente o intuitiva. Advierte emboscadas, distingue una pista entre la basura y desvela cualquier detalle oculto o camuflado, físico o de otra naturaleza.',
    levels: L(
      'Malo: Estás absorto en ti mismo o eres un cabeza hueca; ¡cuidado con ese coche!',
      'Normal: Las sutilezas se te escapan, pero captas la imagen general.',
      'Bueno: Percibes ambientes, texturas y cambios minúsculos en tu entorno.',
      'Excepcional: Prácticamente nada se te escapa.',
      'Sobresaliente: Observas al instante cosas casi imperceptibles para los sentidos humanos.'
    ),
    specialties: 'Atento, Perspicaz, Cuidadoso, Sagaz, Táctico.',
  },
  intelligence: {
    description:
      'Tu capacidad de aprehender hechos y conocimientos, razonar, resolver problemas y evaluar situaciones, con pensamiento crítico y flexible. No incluye la experiencia, la sabiduría ni el sentido común.',
    levels: L(
      'Malo: No eres el más listo de la clase.',
      'Normal: Lo bastante listo como para saberte normal.',
      'Bueno: Más despierto que las masas.',
      'Excepcional: No solo eres listo, sino realmente brillante.',
      'Sobresaliente: Auténtico genio.'
    ),
    specialties: 'Conocimiento Teórico, Creativo, Analítico, Resolución de Problemas, Autoridad en una Materia.',
  },
  wits: {
    description:
      'Tu habilidad para pensar sobre la marcha y reaccionar rápido ante una situación, además del ingenio general. Te permite dar con un plan de inmediato, adaptarte al entorno y mantener la calma bajo presión.',
    levels: L(
      'Malo: Tírame del dedo.',
      'Normal: Sabes cuándo apostar y cuándo plantarte en el póquer.',
      'Bueno: No suelen sorprenderte ni dejarte sin palabras.',
      'Excepcional: De esos que hacen que al día siguiente todos piensen: «debería haber dicho...».',
      'Sobresaliente: Piensas y respondes más rápido de lo que actúas.'
    ),
    specialties: 'Llevar la Iniciativa, Ocurrente, Cambios de Estrategia, Emboscadas.',
  },
};

export function getAttributeContent(key: string): AttributeContent | undefined {
  return ATTRIBUTE_CONTENT[key];
}

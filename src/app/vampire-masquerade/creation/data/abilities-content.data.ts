/**
 * Per-ability info for V20 (Capítulo Tres). Each ability lists a short
 * description, the meaning of its five dots and its common specialties.
 * Shown in the sheet's ability info modal.
 *
 * Spanish-only (content phase, Spanish-first), matching the other data files.
 * Keyed by the ability member as stored in the sheet model.
 */

export interface AbilityContent {
  description: string;
  /** Meaning of dots 1-5, in order. */
  levels: string[];
  /** Comma-separated common specialties. */
  specialties?: string;
}

const L = (
  ...levels: [string, string, string, string, string]
): string[] => levels;

export const ABILITY_CONTENT: Record<string, AbilityContent> = {
  // ---- Talentos ----
  alertness: {
    description:
      'Tu capacidad de percibir lo que sucede a tu alrededor sin buscarlo activamente. Suele usarse con Percepción para captar estímulos físicos.',
    levels: L(
      'Novato: No eres un zángano descerebrado.',
      'Entrenado: Cotilla habitual.',
      'Competente: Mantienes un ojo avizor en tu entorno.',
      'Experto: Sea sentido común o paranoia, rara vez te pillan con la guardia baja.',
      'Maestría: Tus sentidos están a la par con los de los animales salvajes.'
    ),
    specialties: 'Ruidos, Escuchar a Escondidas, Detalles Sutiles, Armas Ocultas, Multitudes, Bosques, Animales.',
  },
  athletics: {
    description:
      'Capacidad atlética básica y entrenamiento deportivo: correr, saltar, lanzar, nadar y similares. No incluye levantar peso ni lo cubierto por otra Habilidad.',
    levels: L(
      'Novato: Tuviste una infancia activa.',
      'Ejercitado: Atleta de instituto.',
      'Competente: Aficionado de toda la vida con talento.',
      'Experto: Atleta profesional.',
      'Maestro: Medallista olímpico.'
    ),
    specialties: 'Natación, Escalada, Acrobacias, Danza, Parkour, Deportes Específicos.',
  },
  awareness: {
    description:
      'Reacción innata a la presencia de lo sobrenatural. Distinta de Alerta (mundano) y Ocultismo (conocimiento). Da corazonadas subconscientes, no dice qué es lo raro.',
    levels: L(
      'Novato: De vez en cuando sientes que algo no está bien.',
      'Ejercitado: A veces percibes vibraciones desde cierta dirección o zona.',
      'Competente: Entras en una habitación y sabes si algo inusual sucede dentro.',
      'Experto: Concentrándote, sientes si alguien o algo en un grupo es sobrenatural.',
      'Maestro: Sabes instintivamente si algo o alguien es mundano o sobrenatural.'
    ),
    specialties: 'Actividad Fantasmal, Objetos Místicos, Alguien Está en mi Cabeza, Desenmascarar.',
  },
  brawl: {
    description:
      'Lo bien que luchas sin armas, por entrenamiento marcial o pura experiencia. Coordinación, aguante al dolor, rapidez y crueldad.',
    levels: L(
      'Novato: Te acosaban cuando eras niño.',
      'Ejercitado: Alguna trifulca de bar ocasional.',
      'Competente: Combates con regularidad y sueles acabar mejor que tus rivales.',
      'Experto: Serio competidor de artes marciales mixtas.',
      'Maestro: Hay un vídeo tuyo derribando a 3 hombres en 4 segundos.'
    ),
    specialties: 'Pelear Sucio, Golpes, Lanzamientos, Llaves de Sumisión, Artes Marciales Específicas.',
  },
  emptahy: {
    description:
      'Entiendes las emociones ajenas: simpatizar, fingir comprensión o manipularlas. Detectas motivaciones y mentiras, pero puedes contagiarte de los sentimientos de otros.',
    levels: L(
      'Novato: Ocasionalmente dejas que lloren sobre tu hombro.',
      'Ejercitado: A veces sientes literalmente el sufrimiento ajeno.',
      'Competente: Tienes intuiciones precisas de las motivaciones de los demás.',
      'Experto: Es casi imposible mentirte.',
      'Maestro: El alma humana no tiene secretos para ti.'
    ),
    specialties: 'Emociones, Intuición, Motivaciones, Ganarse la Confianza.',
  },
  expression: {
    description:
      'Explicar tu punto de vista con claridad, ya sea en conversación, poesía o escritura. Opiniones que no se pueden ignorar. Elige Especialidad aunque tengas menos de 4.',
    levels: L(
      'Novato: Tu talento maduró desde los poemas en tu libreta.',
      'Ejercitado: Podrías dirigir un equipo de debate universitario.',
      'Competente: Podrías ser un escritor de éxito.',
      'Experto: Tu trabajo es digno de un Pulitzer.',
      'Maestro: Te piden la presentación estelar de un nuevo dispositivo.'
    ),
    specialties: 'Actuar, Poesía, Ficción, Improvisación, Conversación, Medios de Comunicación.',
  },
  intimidation: {
    description:
      'Amenaza directa, violencia física o simple fuerza de personalidad. Conoces el método correcto para cada ocasión.',
    levels: L(
      'Novato: Adolescente chungo.',
      'Ejercitado: Matón cabeza rapada.',
      'Competente: Sargento instructor.',
      'Experto: Tu aire autoritario acobarda a los transeúntes.',
      'Maestro: Asustas a animales violentos.'
    ),
    specialties: 'Amenazas Veladas, Abusar del Rango, Coacción Física, Chantaje, Internet.',
  },
  leadership: {
    description:
      'Ser un ejemplo que otros quieren seguir (más Carisma que Manipulación). Cualquiera lleva a un grupo al conflicto; un buen líder los trae de vuelta intactos.',
    levels: L(
      'Novato: Capitán de tu equipo de alevines.',
      'Ejercitado: Presidente estudiantil.',
      'Competente: Director ejecutivo eficiente.',
      'Experto: Hecho para ser presidente.',
      'Maestro: Podrías ser el adorado dictador de una nación.'
    ),
    specialties: 'Oratoria, Irresistible, Amistoso, Transparente, Noble, Militar, Multimedia.',
  },
  streetwise: {
    description:
      'El lenguaje de la calle: mezclarte con el ambiente local, enterarte de rumores, comprender la jerga o iniciarte en asuntos criminales.',
    levels: L(
      'Novato: Sabes dónde buscar.',
      'Ejercitado: Te has ganado respeto en la calle.',
      'Competente: Podrías liderar tu propia banda.',
      'Experto: No temes ni los peores barrios.',
      'Maestro: Si no lo has oído, nadie lo ha dicho.'
    ),
    specialties: 'Bienes Robados, Drogas Ilegales, Armas Ilegales, Bandas, Lista de Invitados, Jerga Local.',
  },
  subterfuge: {
    description:
      'Ocultar tus motivaciones y proyectar las que quieres; desvelar las ajenas y usarlas en su contra. Intriga, secretos e hipocresía.',
    levels: L(
      'Novato: A veces cuentas mentiras piadosas.',
      'Ejercitado: Vampiro.',
      'Competente: Abogado criminalista.',
      'Experto: Agente encubierto.',
      'Maestro: Eres la última persona de quien alguien sospecharía.'
    ),
    specialties: 'Seducción, Mentiras Impecables, Fingir Mortalidad, El Timo de la Estampita.',
  },

  // ---- Técnicas ----
  animalKen: {
    description:
      'Entender la conducta animal: predecir reacciones, entrenar criaturas domesticadas o intentar calmar o provocar a un animal.',
    levels: L(
      'Novato: Un caballo domesticado te deja acariciarlo.',
      'Ejercitado: Puedes educar a un cachorro.',
      'Competente: Podrías entrenar un perro guía.',
      'Experto: Entrenador de circo.',
      'Maestro: Domas bestias salvajes sin poderes sobrenaturales.'
    ),
    specialties: 'Perros, Entrenar Para Atacar, Grandes Felinos, Caballos, Animales de Granja, Cetrería.',
  },
  crafts: {
    description:
      'Crear o arreglar cosas con las manos: carpintería, cuero, textiles, mecánica. Elige siempre una especialización.',
    levels: L(
      'Novato: Carpintería de instituto.',
      'Ejercitado: Empiezas a desarrollar tu estilo propio.',
      'Competente: Podrías abrir tu propia tienda.',
      'Experto: Has escrito manuales de tu campo de especialización.',
      'Maestro: Tu labor y perspicacia casi no tienen parangón.'
    ),
    specialties: 'Cerámica, Costura, Chapuzas del Hogar, Carpintería, Tasación, Carburadores.',
  },
  drive: {
    description:
      'Conducir un coche y quizá otros vehículos. No implica automáticamente vehículos complejos como tanques o camiones articulados.',
    levels: L(
      'Novato: Sabes usar la transmisión automática.',
      'Ejercitado: Puedes conducir con cambio manual.',
      'Competente: Camionero profesional.',
      'Experto: Loco de la NASCAR o conductor de tanques.',
      'Maestro: Sea Fiat o Ferrari, lo haces cantar.'
    ),
    specialties: 'Fuera de Carretera, Motocicletas, Alta Velocidad, Atascos, Evitar Policía de Tráfico.',
  },
  etiquette: {
    description:
      'Las sutilezas de las buenas maneras, en la sociedad mortal y en la cultura de la Estirpe. Saber el momento y la forma de intervenir.',
    levels: L(
      'Novato: Sabes cuándo cerrar la boca.',
      'Ejercitado: Has estado en un par de eventos de gala.',
      'Competente: Buenas maneras, incluso con cubertería exótica.',
      'Experto: Su Majestad te consideraría encantador.',
      'Maestro: Podrías acabar guerras (o empezarlas) en una cena.'
    ),
    specialties: 'En el Elíseo, Negocios, Alta Sociedad, Protocolo Sabbat.',
  },
  firearms: {
    description:
      'Familiaridad con armas de fuego, de pistolas de bolsillo a ametralladoras: limpiar, reparar, reconocer y disparar con precisión. Desencasquillar: Astucia + Armas de Fuego.',
    levels: L(
      'Novato: Tuviste una pistola de aire comprimido de niño.',
      'Ejercitado: De vez en cuando pasas una hora en el club de tiro.',
      'Competente: Has sobrevivido a uno o dos tiroteos.',
      'Experto: Podrías eliminar gente para ganarte la vida.',
      'Maestro: Practicas desde el nacimiento del Winchester.'
    ),
    specialties: 'Desenfundado Rápido, Armería, Pistolas, Puntería, Revólveres, Escopetas.',
  },
  larceny: {
    description:
      'Manipulación física de corte criminal: forzar cerraduras y cajas, falsificación manual, puentear coches, allanamiento y juegos de manos. La seguridad electrónica es Tecnología.',
    levels: L(
      'Novato: Puedes abrir una cerradura sencilla.',
      'Ejercitado: Podrías hacer de trilero en la esquina.',
      'Competente: Abres desde fuera una ventana cerrada estándar.',
      'Experto: Puedes "arreglar" un pasaporte o Documento de Identidad.',
      'Maestro: Entrarías (o saldrías) de la bóveda de un banco internacional.'
    ),
    specialties: 'Forzar Cajas Fuertes, Despistar, Abrir Cerraduras, Puentear, Carterismo.',
  },
  melee: {
    description:
      'Armas de cuerpo a cuerpo en todas sus formas: espadas, bates, parafernalia de artes marciales... y siempre hay lugar para una estaca de madera.',
    levels: L(
      'Novato: Sabes la forma correcta de empuñar un cuchillo.',
      'Ejercitado: Has estado en alguna pelea callejera.',
      'Competente: Podrías dirigir un equipo de esgrima universitario.',
      'Experto: Podrías mantener el orden en la corte del Príncipe.',
      'Maestro: Tus enemigos preferirían un SWAT antes que tu espada.'
    ),
    specialties: 'Cuchillos, Espadas, Armas Improvisadas, Estocadas, Desarmar.',
  },
  performance: {
    description:
      'Competencia artística: cantar, bailar, actuar o tocar. Casi siempre estarás especializado. También da sentido para leer y responder al público.',
    levels: L(
      'Novato: Podrías cantar en el coro de la iglesia.',
      'Ejercitado: Tus vídeos tienen más de cien mil visitas.',
      'Competente: Casi siempre tienes un bolo apalabrado.',
      'Experto: Talento para ser una sensación nacional.',
      'Maestro: Eres un virtuoso sin par.'
    ),
    specialties: 'Danza, Canto, Rock and Roll, Actuación, Solos de Guitarra, Karaoke Borracho.',
  },
  stealth: {
    description:
      'Evitar ser detectado, escondiéndote o moviéndote. Suele enfrentarse a la Percepción + Alerta ajena. También sirve para ocultar objetos.',
    levels: L(
      'Novato: Puedes esconderte en una habitación oscura.',
      'Ejercitado: Puedes seguir a alguien de farola en farola.',
      'Competente: Encuentras presa de un anochecer a otro sin problema.',
      'Experto: Te mueves en silencio sobre hojarasca seca.',
      'Maestro: Antiguo Nosferatu.'
    ),
    specialties: 'Esconderse, Movimiento Silencioso, Seguir a Alguien, Multitudes.',
  },
  survival: {
    description:
      'Encontrar cobijo, orientarte, rastrear una presa, montar un refugio improvisado y evitar peligros sobrenaturales. También en zonas duras de las ciudades modernas.',
    levels: L(
      'Novato: Puedes sobrevivir una noche fuera.',
      'Ejercitado: Las has "pasado canutas" con regularidad.',
      'Competente: Distingues el forraje comestible del venenoso.',
      'Experto: Vivirías meses en el ambiente que eligieses.',
      'Maestro: Desnudo en medio de los Andes, te las apañarías.'
    ),
    specialties: 'Rastrear, Bosques, Jungla, Vida Callejera, Cazar, Exploración Urbana.',
  },

  // ---- Conocimientos ----
  academics: {
    description:
      'Erudición en humanidades: literatura, historia, arte, filosofía. Impresiona en el Elíseo y aporta pistas sobre la Jyhad. Elige Especialidad aunque tengas menos de 4.',
    levels: L(
      'Estudiante: Sabes que 1492 probablemente no es un PIN.',
      'Licenciado: Citas a los clásicos y distingues Ming de Moghul.',
      'Posgraduado: Podrías publicar en una revista académica.',
      'Doctorado: Profesor Emérito.',
      'Erudito: Reconocido mundialmente como uno de los mayores expertos.'
    ),
    specialties: 'Postestructuralismo, Pintura Impresionista, Roma Imperial, Teoría del Color, Lingüística.',
  },
  computer: {
    description:
      'Usar y programar computadoras, incluidos dispositivos portátiles. La mayoría de usos implican familiaridad con Internet.',
    levels: L(
      'Estudiante: Te orientas en pantallas táctiles e interfaces de señalar y pulsar.',
      'Licenciado: Sabes usar varias aplicaciones e Internet.',
      'Posgraduado: Sabes qué hacer con una pantalla de comandos.',
      'Doctorado: Vives como consultor sin problemas.',
      'Erudito: Dominas SDKs y estructuras de datos de muchos lenguajes.'
    ),
    specialties: 'Lenguajes de Programación, Internet, Bases de Datos, Interacción Humano-Informática, Virus.',
  },
  finance: {
    description:
      'Los entresijos del comercio: valorar bienes, seguir divisas, negociar y jugar en bolsa. Nivel alto eleva tu nivel de vida.',
    levels: L(
      'Estudiante: Has dado unas pocas clases de negocios.',
      'Licenciado: Experiencia práctica; cuentas al día.',
      'Posgraduado: Serías un buen corredor de bolsa.',
      'Doctorado: Las corporaciones siguen tu liderazgo bursátil.',
      'Erudito: Conviertes un billete de 20 en una fortuna millonaria.'
    ),
    specialties: 'Mercado de Valores, Blanqueo, Tasaciones, Divisas, Contabilidad, Corporaciones.',
  },
  investigation: {
    description:
      'Percibir detalles que otros pasan por alto, hacer pesquisas y seguir pistas (búsquedas en la Red, hemerotecas, libros de derecho).',
    levels: L(
      'Estudiante: Puedes hacer una búsqueda amplia de pistas por la Red.',
      'Licenciado: Oficial de policía.',
      'Posgraduado: Detective privado.',
      'Doctorado: Agente federal.',
      'Erudito: Sherlock Holmes.'
    ),
    specialties: 'Ciencia Forense, Ocultación, Buscar, Decoloraciones, Búsquedas en Base de Datos.',
  },
  law: {
    description:
      'Los estatutos legales y los procedimientos para defenderlos. También las leyes de los Vástagos: más de uno ha salvado su no-vida por un vacío legal en una Tradición.',
    levels: L(
      'Estudiante: Pagaste una multa y sabes cómo declararte la próxima vez.',
      'Licenciado: Estudias o acabas de aprobar la oposición.',
      'Posgraduado: Vives ejerciendo la ley.',
      'Doctorado: Serás socio pronto, si no lo eres ya.',
      'Erudito: Encontrarías vacíos legales en los contratos del diablo.'
    ),
    specialties: 'Derecho Criminal, Pleitos, Protocolo del Juzgado, Contratos, Las Tradiciones, El Código de Milán.',
  },
  medicine: {
    description:
      'Cómo funciona el cuerpo humano (y en menor medida el vampírico): fármacos, dolencias, primeros auxilios, diagnóstico y tratamiento.',
    levels: L(
      'Estudiante: Has hecho un curso de reanimación.',
      'Licenciado: Estudiante de medicina o enfermería.',
      'Posgraduado: Médico de cabecera.',
      'Doctorado: Puedes realizar trasplantes.',
      'Erudito: Pionero respetado por la comunidad médica mundial.'
    ),
    specialties: 'Trasplantes, Atención de Emergencia, Venenos, Patología, Fármacos, La Condición Vampírica.',
  },
  occult: {
    description:
      'Misticismo, maldiciones, magia, folclore y, sobre todo, cultura vampírica. No son hechos probados: rumores, mitos y especulación separados de la verdad durante siglos.',
    levels: L(
      'Estudiante: Tienes un blog sobre lo extraño y misterioso.',
      'Licenciado: Hay verdad inquietante en algunos rumores que oíste.',
      'Posgraduado: Has oído mucho y visto unas cuantas cosas.',
      'Doctorado: Reconoces fuentes falsas y haces conjeturas fundadas.',
      'Erudito: Conoces muchas de las verdades básicas del mundo oculto.'
    ),
    specialties: 'Cultura de la Estirpe, Rituales, Infernalismo, Brujas, Saber Nodista.',
  },
  politics: {
    description:
      'La política del momento, la gente de poder y cómo llegaron a él. Influir en políticos mortales y comprender la estructura de poder Cainita local.',
    levels: L(
      'Estudiante: Activista; puedes pagar una multa online.',
      'Licenciado: Ciencias políticas; sabes presentar una solicitud de información.',
      'Posgraduado: Director de campaña o tertuliano.',
      'Doctorado: Senador.',
      'Erudito: Podrías elegir al próximo Presidente.'
    ),
    specialties: 'Urbana, Autonómica, Federal, Burocracia, Dogma, Radical, Camarilla.',
  },
  science: {
    description:
      'Comprensión de las ciencias físicas: química, biología, física, geología. Se recomienda (no es obligatorio) elegir una Especialidad.',
    levels: L(
      'Estudiante: Sabes lo básico de secundaria.',
      'Licenciado: Estás familiarizado con las teorías fundamentales.',
      'Posgraduado: Podrías enseñar ciencia en el instituto.',
      'Doctorado: Capacitado para hacer avanzar el conocimiento de tu campo.',
      'Erudito: Tu premio Nobel te está esperando.'
    ),
    specialties: 'Química, Biología, Geología, Física, Astronomía.',
  },
  technology: {
    description:
      'Agudeza con la electrónica: procesadores y circuitos, seguridad electrónica, móviles, radios. Lo eléctrico-mecánico simple es Artesanía. Elige siempre una especialización.',
    levels: L(
      'Estudiante: Modificaciones o reparaciones simples.',
      'Licenciado: Vives del ensamblaje o la reparación.',
      'Posgraduado: Diseñas tecnología a partir de un conjunto de requisitos.',
      'Doctorado: No te preguntas "¿puede hacerse?" sino "¿cómo?".',
      'Erudito: Un visionario que da forma a cómo la gente usa el mundo.'
    ),
    specialties: 'Telecomunicaciones, Computadoras, Seguridad, Comunicaciones, Soluciones Improvisadas, Espionaje Industrial.',
  },
};

export function getAbilityContent(key: string): AbilityContent | undefined {
  return ABILITY_CONTENT[key];
}

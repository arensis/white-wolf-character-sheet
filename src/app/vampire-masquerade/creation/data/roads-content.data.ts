/**
 * Content for Humanity and the V20 Paths of Enlightenment, shown inline in
 * the concept step when a Path is selected. Sin hierarchies are condensed
 * own-words summaries of each rating's threshold. Spanish-only for now.
 */

export interface RoadSin {
  score: number;
  sin: string;
  reason: string;
}

export interface RoadSendero {
  name: string;
  text: string;
}

export interface RoadContent {
  latin: string;
  nickname: string;
  description: string;
  aura: string;
  virtues: string;
  ethics: string[];
  senderos: RoadSendero[];
  sinsTitle: string;
  sins: RoadSin[];
}

export const ROAD_CONTENT: Record<string, RoadContent> = {
  humanity: {
    latin: '',
    nickname: 'Humanidad',
    description:
      'El código moral por defecto de los Vástagos: aferrarse a lo que fuiste en vida para mantener a raya a la Bestia. La inmensa mayoría de los vampiros (y todos los mortales) se rigen por ella.',
    aura: 'Normalidad: cuanto más alta, más fácil pasar por mortal.',
    virtues: 'Conciencia, Autocontrol',
    ethics: [
      'Valora la vida y evita matar.',
      'Aliméntate sin destruir.',
      'Conserva tus lazos con el mundo mortal.',
      'Siente remordimiento por el mal causado.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados de la Humanidad',
    sins: [
      { score: 10, sin: 'Pensamientos egoístas', reason: 'La santidad exige pureza incluso de intención.' },
      { score: 9, sin: 'Actos egoístas menores', reason: 'Anteponer tu interés ya es una grieta.' },
      { score: 8, sin: 'Dañar a otro por accidente', reason: 'La negligencia también corrompe.' },
      { score: 7, sin: 'Robo o vandalismo', reason: 'Tomar lo ajeno degrada.' },
      { score: 6, sin: 'Daño intencionado', reason: 'Herir a sabiendas te acerca a la Bestia.' },
      { score: 5, sin: 'Destrucción gratuita', reason: 'Destruir sin necesidad es cosa del monstruo.' },
      { score: 4, sin: 'Daño pasional', reason: 'Dejar que la ira gobierne tus manos.' },
      { score: 3, sin: 'Asesinato premeditado', reason: 'Matar con frialdad y planificación.' },
      { score: 2, sin: 'Crueldad desenfrenada', reason: 'El sufrimiento ajeno como fin.' },
      { score: 1, sin: 'Depravación absoluta', reason: 'Ya casi nada te separa de la Bestia.' },
    ],
  },
  honorableAccord: {
    latin: '',
    nickname: 'Caballeros',
    description:
      'La senda del deber y la palabra dada: un código marcial de honor que sustituye a la moral humana. Común entre vampiros de vocación castrense o caballeresca.',
    aura: 'Devoción.',
    virtues: 'Conciencia, Autocontrol',
    ethics: [
      'Cumple tu palabra y tus juramentos.',
      'Sirve a tu causa y a tus superiores legítimos.',
      'Trata con honor incluso al enemigo.',
      'La disciplina es el escudo contra la Bestia.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados del Acuerdo Honorable',
    sins: [
      { score: 10, sin: 'Incumplir los preceptos del grupo', reason: 'El código es la base de todo.' },
      { score: 9, sin: 'Negar hospitalidad a los aliados', reason: 'La cortesía sostiene la hermandad.' },
      { score: 8, sin: 'Tratarse con los indignos', reason: 'Las malas compañías manchan el honor.' },
      { score: 7, sin: 'Ausentarse de los rituales del grupo', reason: 'La comunidad exige presencia.' },
      { score: 6, sin: 'Desobedecer al líder', reason: 'La cadena de mando es sagrada.' },
      { score: 5, sin: 'No proteger a los aliados', reason: 'El deber es mutuo.' },
      { score: 4, sin: 'Anteponer lo personal al deber', reason: 'El deber da propósito al vampiro.' },
      { score: 3, sin: 'Mostrar cobardía', reason: 'El valor es la medida del caballero.' },
      { score: 2, sin: 'Matar sin razón', reason: 'La violencia sin causa deshonra.' },
      { score: 1, sin: 'Romper la palabra dada o un juramento', reason: 'Sin palabra no hay honor alguno.' },
    ],
  },
  caine: {
    latin: '',
    nickname: 'Noddistas',
    description:
      'La búsqueda de la verdad del Primer Vampiro: aceptar la condición vampírica como herencia de Caín y estudiar sus enseñanzas.',
    aura: 'Fe.',
    virtues: 'Convicción, Instinto',
    ethics: [
      'Estudia el Libro de Nod y la historia de la Estirpe.',
      'Acepta lo que eres: ni humano ni bestia sin más.',
      'Pon a prueba tus límites vampíricos.',
      'Difunde la sabiduría de Caín entre los dignos.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados de la Senda de Caín',
    sins: [
      { score: 10, sin: 'Descuidar el estudio y la investigación', reason: 'La verdad exige dedicación.' },
      { score: 9, sin: 'No instruir a otros vampiros en la Senda', reason: 'La sabiduría de Caín debe difundirse.' },
      { score: 8, sin: 'Intimar o convivir con humanos', reason: 'El vampiro fue apartado de los mortales.' },
      { score: 7, sin: 'Faltar al respeto a otros estudiosos de Caín', reason: 'Los buscadores merecen respeto.' },
      { score: 6, sin: 'No cabalgar la ola del Frenesí', reason: 'La Bestia también es herencia de Caín.' },
      { score: 5, sin: 'Sucumbir al Rötschreck', reason: 'El miedo ciego es indigno del linaje.' },
      { score: 4, sin: 'No diabolizar a un vampiro "humano"', reason: 'Los débiles de sangre traicionan el legado.' },
      { score: 3, sin: 'No poner a prueba los propios límites', reason: 'Conocerse exige explorarse.' },
      { score: 2, sin: 'No perseguir el saber sobre la condición vampírica', reason: 'Todo conocimiento acerca a Caín.' },
      { score: 1, sin: 'Negarse las propias necesidades vampíricas', reason: 'Renegar de lo que se es es el mayor pecado.' },
    ],
  },
  cathari: {
    latin: '',
    nickname: 'Albigenses',
    description:
      'Dualistas que ven el mundo material como dominio del mal y su condición como un papel a interpretar: la tentación y el exceso son su liturgia.',
    aura: 'Seducción.',
    virtues: 'Convicción, Instinto',
    ethics: [
      'Disfruta del mundo material: es tu escenario.',
      'Tienta a otros hacia el exceso.',
      'La riqueza y el placer son herramientas.',
      'No destruyas aquello que puedas corromper.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados de la Senda de los Cátaros',
    sins: [
      { score: 10, sin: 'Practicar la moderación', reason: 'El exceso es la liturgia del mundo material.' },
      { score: 9, sin: 'Mostrar confianza', reason: 'La sospecha es la actitud del corrupto sabio.' },
      { score: 8, sin: 'No transmitir la Maldición a quien la merece', reason: 'El mal se sirve engendrando más mal.' },
      { score: 7, sin: 'No cabalgar la ola del Frenesí', reason: 'La Bestia es parte del papel a interpretar.' },
      { score: 6, sin: 'Actuar contra otro albigense', reason: 'La secta se protege a sí misma.' },
      { score: 5, sin: 'Asesinar por pasión', reason: 'Matar debe ser elección, no arrebato.' },
      { score: 4, sin: 'Sacrificar la propia gratificación por otros', reason: 'El placer propio es el propósito.' },
      { score: 3, sin: 'Abstenerse del propio deleite', reason: 'Negarse el placer es negar el credo.' },
      { score: 2, sin: 'Asesinar arbitrariamente', reason: 'La muerte también debe servir al mal con sentido.' },
      { score: 1, sin: 'Predicar la moderación a otros', reason: 'Corromper es el deber; moderar, la traición.' },
    ],
  },
  feralHeart: {
    latin: '',
    nickname: 'Salvajes',
    description:
      'Abrazar a la Bestia como un depredador natural: instinto, territorio y supervivencia sin la hipocresía de la civilización.',
    aura: 'Amenaza.',
    virtues: 'Convicción, Instinto',
    ethics: [
      'Sobrevive; lo demás es accesorio.',
      'Caza como un depredador, no como un carnicero.',
      'Respeta el territorio y la fuerza.',
      'No mates lo que no necesites matar.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados del Corazón Salvaje',
    sins: [
      { score: 10, sin: 'Cazar por medios ajenos a los propios', reason: 'El depredador se vale de sí mismo.' },
      { score: 9, sin: 'Enredarse en política', reason: 'Las intrigas son jaulas de la civilización.' },
      { score: 8, sin: 'Permanecer ante el fuego o el sol', reason: 'El instinto manda huir de la muerte.' },
      { score: 7, sin: 'Actuar con crueldad innecesaria', reason: 'La fiera no tortura: caza.' },
      { score: 6, sin: 'No cazar estando hambriento', reason: 'Negar el hambre es negar la naturaleza.' },
      { score: 5, sin: 'No apoyar a la manada o aliados', reason: 'La manada es supervivencia.' },
      { score: 4, sin: 'Matar sin necesidad', reason: 'La muerte debe tener propósito.' },
      { score: 3, sin: 'Desoír los propios instintos', reason: 'El instinto es el único maestro.' },
      { score: 2, sin: 'Matar por razones ajenas al sustento', reason: 'El sentido de una muerte es alimentar.' },
      { score: 1, sin: 'Negarse a matar para sobrevivir', reason: 'Sobrevivir está por encima de todo.' },
    ],
  },
  bones: {
    latin: '',
    nickname: 'Estudiosos de la Muerte',
    description:
      'La contemplación fría de la muerte y la no-vida: entender qué significa estar muerto y qué queda al otro lado.',
    aura: 'Silencio.',
    virtues: 'Convicción, Autocontrol',
    ethics: [
      'Estudia la muerte en todas sus formas.',
      'La emoción nubla la observación.',
      'Cada muerte debe enseñar algo.',
      'El cuerpo es materia; la consciencia, el misterio.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados de la Senda de los Huesos',
    sins: [
      { score: 10, sin: 'Mostrar miedo a la muerte', reason: 'La muerte es objeto de estudio, no de temor.' },
      { score: 9, sin: 'No estudiar una muerte presenciada', reason: 'Cada muerte es una lección.' },
      { score: 8, sin: 'Matar por accidente', reason: 'La muerte debe ser deliberada y observada.' },
      { score: 7, sin: 'Posponer la alimentación con hambre', reason: 'El cuerpo es un instrumento que mantener.' },
      { score: 6, sin: 'Sucumbir al Frenesí', reason: 'La emoción arruina la observación.' },
      { score: 5, sin: 'No matar cuando surge la oportunidad', reason: 'La ocasión de aprender no se desaprovecha.' },
      { score: 4, sin: 'Decidir movido por la emoción', reason: 'Solo la razón fría revela la verdad.' },
      { score: 3, sin: 'Incomodarse en beneficio de otro', reason: 'El estudio propio es prioritario.' },
      { score: 2, sin: 'Impedir una muerte innecesariamente', reason: 'Interferir es corromper el experimento.' },
      { score: 1, sin: 'Evitar activamente una muerte', reason: 'Negar la muerte es negar el sentido de la Senda.' },
    ],
  },
  lilith: {
    latin: '',
    nickname: 'Bahari',
    description:
      'El culto a la Madre Oscura: crecer a través del dolor y la prueba, despertar mediante el sufrimiento fértil.',
    aura: 'Tribulación.',
    virtues: 'Convicción, Instinto',
    ethics: [
      'El dolor enseña; la comodidad adormece.',
      'Honra a Lilith y sus misterios.',
      'Pon a prueba a los demás como a ti mismo.',
      'Cultiva la creación que nace de la herida.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados de la Senda de Lilith',
    sins: [
      { score: 10, sin: 'Alimentarse de inmediato al tener hambre', reason: 'La privación también enseña.' },
      { score: 9, sin: 'Perseguir riqueza o poder mundanos', reason: 'Lo temporal distrae del despertar.' },
      { score: 8, sin: 'No corregir los errores ajenos sobre Lilith', reason: 'La verdad de la Madre debe defenderse.' },
      { score: 7, sin: 'Sentir remordimiento por causar dolor', reason: 'El dolor es un regalo que se entrega.' },
      { score: 6, sin: 'No participar en un ritual bahari', reason: 'El culto exige comunión.' },
      { score: 5, sin: 'Temer a la muerte', reason: 'El miedo cierra las puertas del jardín.' },
      { score: 4, sin: 'Matar a un ser vivo o no muerto', reason: 'La muerte corta el aprendizaje del dolor.' },
      { score: 3, sin: 'No buscar las enseñanzas de Lilith', reason: 'La Senda exige peregrinar hacia la Madre.' },
      { score: 2, sin: 'No dispensar dolor o angustia', reason: 'Quien no hiere, no cultiva.' },
      { score: 1, sin: 'Rehuir el dolor', reason: 'Sin herida no hay despertar.' },
    ],
  },
  metamorphosis: {
    latin: '',
    nickname: 'Metamorfosistas',
    description:
      'Senda Tzimisce: el cuerpo y el alma como materia a trascender. El vampirismo es una crisálida hacia algo superior.',
    aura: 'Inhumanidad.',
    virtues: 'Convicción, Instinto',
    ethics: [
      'La carne es arcilla: moldéala.',
      'Trasciende los límites de lo humano.',
      'El conocimiento justifica el experimento.',
      'La quietud es estancamiento.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados de la Metamorfosis',
    sins: [
      { score: 10, sin: 'Posponer la alimentación estando hambriento', reason: 'El cuerpo debe estar a punto para el cambio.' },
      { score: 9, sin: 'Dejarse llevar por el placer', reason: 'El goce distrae de la obra.' },
      { score: 8, sin: 'Pedir conocimiento a otro', reason: 'El saber se conquista, no se mendiga.' },
      { score: 7, sin: 'Compartir conocimiento con otro', reason: 'Cada uno debe recorrer su propia crisálida.' },
      { score: 6, sin: 'No matar cuando hay algo que ganar', reason: 'Antes de trascender hay que dominar la muerte.' },
      { score: 5, sin: 'No cabalgar el Frenesí', reason: 'La Bestia es materia que moldear.' },
      { score: 4, sin: 'Considerar las necesidades ajenas', reason: 'El otro es, como mucho, material.' },
      { score: 3, sin: 'No experimentar, aun con riesgo', reason: 'Solo el experimento revela la Senda.' },
      { score: 2, sin: 'Descuidar la alteración del propio cuerpo', reason: 'La carne inmutable es estancamiento.' },
      { score: 1, sin: 'Mostrar compasión', reason: 'La compasión ata a lo que se debe superar.' },
    ],
  },
  night: {
    latin: '',
    nickname: 'Nihilistas',
    description:
      'Senda Lasombra: la condenación como certeza y la oscuridad como única verdad. Cada uno da sentido propio a su condena.',
    aura: 'Oscuridad.',
    virtues: 'Convicción, Instinto',
    ethics: [
      'Estás condenado: actúa en consecuencia.',
      'La oscuridad es maestra y refugio.',
      'El poder no necesita justificación.',
      'No finjas una virtud que no posees.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados de la Senda de la Noche',
    sins: [
      { score: 10, sin: 'Matar a un mortal para alimentarse', reason: 'Hasta el ganado merece más imaginación.' },
      { score: 9, sin: 'Actuar en interés de otro', reason: 'Cada cual carga su propia condena.' },
      { score: 8, sin: 'No innovar en las propias depredaciones', reason: 'La rutina embota al monstruo.' },
      { score: 7, sin: 'Pedir ayuda', reason: 'El condenado camina solo.' },
      { score: 6, sin: 'Matar por accidente', reason: 'Incluso el mal exige control.' },
      { score: 5, sin: 'Doblegarse a la voluntad de otro', reason: 'Solo la oscuridad manda en el nihilista.' },
      { score: 4, sin: 'Asesinar con intención o pasión', reason: 'La muerte debe ser elección fría.' },
      { score: 3, sin: 'Ayudar a otros', reason: 'La ayuda es una cadena disfrazada.' },
      { score: 2, sin: 'Aceptar la superioridad de alguien', reason: 'Nadie está por encima del condenado.' },
      { score: 1, sin: 'Arrepentirse del propio comportamiento', reason: 'El arrepentimiento es negar la propia verdad.' },
    ],
  },
  paradox: {
    latin: '',
    nickname: 'Paradojistas',
    description:
      'Senda Ravnos: el mundo es ilusión (maya) y el vampiro tiene un papel en su rueda. Romper la ilusión ajena es un deber.',
    aura: 'Confianza.',
    virtues: 'Convicción, Autocontrol',
    ethics: [
      'El mundo es ilusión: no te apegues.',
      'Cumple tu papel en la rueda.',
      'Engaña para enseñar.',
      'El cambio es la única constante.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados de la Paradoja',
    sins: [
      { score: 10, sin: 'Abrazar a una mujer', reason: 'Contraviene el papel asignado en la rueda.' },
      { score: 9, sin: 'Abrazar fuera de la jati', reason: 'Cada linaje tiene su lugar en el ciclo.' },
      { score: 8, sin: 'Destruir a otro shilmulo', reason: 'El linaje propio es parte del orden.' },
      { score: 7, sin: 'Matar a un mortal para alimentarse', reason: 'Se puede beber sin romper el ciclo.' },
      { score: 6, sin: 'No destruir a un vampiro fuera del ciclo', reason: 'Lo que rompe la rueda debe caer.' },
      { score: 5, sin: 'Matar a un mortal sin razón de peso', reason: 'La muerte gratuita perturba maya.' },
      { score: 4, sin: 'No ayudar al svadharma ajeno', reason: 'Cada ser debe poder cumplir su papel.' },
      { score: 3, sin: 'Descuidar los propios asuntos', reason: 'El deber propio es lo primero.' },
      { score: 2, sin: 'Ser vinculado por sangre', reason: 'Atarse a otro es traicionar el papel propio.' },
      { score: 1, sin: 'Abrazar sin necesidad o por capricho', reason: 'Crear vampiros altera la rueda entera.' },
    ],
  },
  powerInnerVoice: {
    latin: '',
    nickname: 'Unificadores',
    description:
      'El poder como fin y medida: mandar, someter y no responder ante nadie. Popular entre los Lasombra y los tiranos del Sabbat.',
    aura: 'Mandato.',
    virtues: 'Convicción, Instinto',
    ethics: [
      'El poder es la única moneda real.',
      'La debilidad merece ser gobernada.',
      'Jamás sirvas sin obtener más de lo que das.',
      'El miedo es una herramienta legítima.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados del Poder y la Voz Interior',
    sins: [
      { score: 10, sin: 'Rehuir la responsabilidad de los propios actos', reason: 'Quien manda responde de lo suyo.' },
      { score: 9, sin: 'Maltratar a los subordinados', reason: 'Las herramientas se mantienen afiladas.' },
      { score: 8, sin: 'No respetar a los superiores', reason: 'El poder legítimo se reconoce... por ahora.' },
      { score: 7, sin: 'Ayudar sin beneficio propio', reason: 'El altruismo es un lujo de los débiles.' },
      { score: 6, sin: 'Aceptar la derrota', reason: 'Rendirse es morir en vida.' },
      { score: 5, sin: 'No matar cuando conviene', reason: 'El escrúpulo inoportuno cuesta imperios.' },
      { score: 4, sin: 'Someterse a los errores ajenos', reason: 'Seguir al necio es compartir su ruina.' },
      { score: 3, sin: 'No usar la herramienta más eficaz', reason: 'El poder se toma con resolución.' },
      { score: 2, sin: 'No castigar el fallo', reason: 'La indulgencia invita a la traición.' },
      { score: 1, sin: 'Dejar pasar la oportunidad de poder', reason: 'El poder personal es el medio para todo fin.' },
    ],
  },
  blood: {
    latin: '',
    nickname: 'Seguidores de la Sangre',
    description:
      'Senda Assamita: la sangre como sacramento y la diablerie de los indignos como deber sagrado hacia Haqim.',
    aura: 'Resolución.',
    virtues: 'Convicción, Autocontrol',
    ethics: [
      'La vitae es sagrada: no la desperdicies.',
      'Juzga a los indignos y reclama su sangre.',
      'Sirve a Haqim y a las tradiciones del Clan.',
      'La disciplina del cuerpo refleja la del alma.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados de la Senda de la Sangre',
    sins: [
      { score: 10, sin: 'Matar a un mortal para alimentarse', reason: 'El sustento no exige la muerte.' },
      { score: 9, sin: 'Romper la palabra dada a un miembro del Clan', reason: 'La palabra entre hermanos es sagrada.' },
      { score: 8, sin: 'No ofrecer a un no assamita la conversión', reason: 'Los dignos merecen conocer la verdad.' },
      { score: 7, sin: 'No destruir a un Vástago infiel', reason: 'Los indignos deben ser juzgados.' },
      { score: 6, sin: 'Sucumbir al Frenesí', reason: 'La disciplina del cuerpo refleja la del alma.' },
      { score: 5, sin: 'No buscar la sabiduría de Khayyin', reason: 'El estudio es deber sagrado.' },
      { score: 4, sin: 'No exigir sangre como pago', reason: 'La vitae es la moneda del juicio.' },
      { score: 3, sin: 'Negar ayuda a un hermano más avanzado', reason: 'La jerarquía de la Senda se sirve.' },
      { score: 2, sin: 'Fallar en el diezmo de sangre', reason: 'Lo debido a Haqim no se retiene.' },
      { score: 1, sin: 'Actuar contra otro assamita', reason: 'El Clan es un solo cuerpo.' },
    ],
  },
  typhon: {
    latin: '',
    nickname: 'Teofidios',
    description:
      'Senda Setita: servir a Set, buscar su resurrección y liberar a otros de sus ataduras mediante la corrupción iluminadora.',
    aura: 'Devoción.',
    virtues: 'Convicción, Autocontrol',
    ethics: [
      'Sirve a Set en todo.',
      'Libera a otros corrompiendo sus cadenas.',
      'Los secretos son poder: acumúlalos.',
      'La luz ciega; la sombra revela.',
    ],
    senderos: [],
    sinsTitle: 'Jerarquía de Pecados de la Senda de Tifón',
    sins: [
      { score: 10, sin: 'Buscar la satisfacción personal ante todo', reason: 'El placer propio distrae del servicio a Set.' },
      { score: 9, sin: 'Negar ayuda a otro seguidor de la Senda', reason: 'La obra del dios exige cooperación.' },
      { score: 8, sin: 'No destruir a un vampiro en Golconda', reason: 'La falsa salvación insulta a Set.' },
      { score: 7, sin: 'Incumplir un ritual religioso', reason: 'El culto sostiene la fe.' },
      { score: 6, sin: 'No socavar el orden social vigente', reason: 'Las cadenas ajenas deben romperse.' },
      { score: 5, sin: 'No hacer lo necesario para corromper', reason: 'La corrupción es la herramienta sagrada.' },
      { score: 4, sin: 'No perseguir el saber arcano', reason: 'Los secretos son el tesoro del dios.' },
      { score: 3, sin: 'Obstaculizar a otro setita', reason: 'La serpiente no se muerde a sí misma.' },
      { score: 2, sin: 'No aprovechar la debilidad ajena', reason: 'No hay compasión en los planes de Set.' },
      { score: 1, sin: 'Negarse a ayudar a la resurrección de Set', reason: 'Ese es el fin de toda la Senda.' },
    ],
  },
};

export const getRoadContent = (id: string): RoadContent | undefined => ROAD_CONTENT[id];

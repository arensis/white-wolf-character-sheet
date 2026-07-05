export type MeritFlawCategory = 'physical' | 'mental' | 'social' | 'supernatural';
export type MeritFlawType = 'merit' | 'flaw';

export interface MeritFlawEntry {
  id: string;
  name: string;
  type: MeritFlawType;
  category: MeritFlawCategory;
  cost: number;
  description: string;
  note?: string;
}

export interface MeritFlawCategoryInfo {
  id: MeritFlawCategory;
  label: string;
  description: string;
}

export const MERIT_FLAW_CATEGORIES: MeritFlawCategoryInfo[] = [
  {
    id: 'physical',
    label: 'Físicos',
    description:
      'Representan características especiales de la forma no muerta del personaje con impacto directo en sus capacidades físicas, más allá de lo reflejado en Atributos y Habilidades básicos.',
  },
  {
    id: 'mental',
    label: 'Mentales',
    description:
      'Definen ciertos hechos especiales sobre la forma de pensar del personaje y su visión del mundo, que no están ya cubiertos por los Atributos y Habilidades básicos.',
  },
  {
    id: 'social',
    label: 'Sociales',
    description:
      'Representan datos sobre el trasfondo y creencias del vampiro que afectan a sus relaciones con otros, generando respeto o desaprobación antes incluso de conocerle.',
  },
  {
    id: 'supernatural',
    label: 'Sobrenaturales',
    description:
      'Reflejan la diversidad de la Maldición de Caín: variaciones individuales en la condena vampírica que van más allá de las debilidades y dones de clan.',
  },
];

export const MERITS_FLAWS: MeritFlawEntry[] = [
  // ─── Físicos: Méritos ───────────────────────────────────────────────────────
  {
    id: 'ambidextro',
    name: 'Ambidextro',
    type: 'merit',
    category: 'physical',
    cost: 1,
    description:
      'Puedes actuar con tu mano mala sin penalización. Sigues debiendo aplicar las reglas de acciones múltiples, pero no sufres penalización por usar dos armas o verte obligado a usar la mano no dominante.',
  },
  {
    id: 'consumir_comida',
    name: 'Consumir Comida',
    type: 'merit',
    category: 'physical',
    cost: 1,
    description:
      'Puedes ingerir y saborear comida para aparentar ser mortal. No obtienes alimento de ella, así que en algún momento deberás vomitarla.',
  },
  {
    id: 'color_saludable',
    name: 'Color Saludable',
    type: 'merit',
    category: 'physical',
    cost: 2,
    description:
      'Conservas el color de los vivos y tu piel solo es algo fría al tacto, lo que facilita mezclarte con humanos.',
    note: 'No disponible para Capadocios ni Nosferatu.',
  },
  {
    id: 'digestion_eficaz',
    name: 'Digestión Eficaz',
    type: 'merit',
    category: 'physical',
    cost: 3,
    description:
      'Obtienes un punto de sangre adicional por cada dos que consumas al alimentarte. No te permite sobrepasar tu reserva de sangre máxima.',
  },
  {
    id: 'corpulento',
    name: 'Corpulento',
    type: 'merit',
    category: 'physical',
    cost: 4,
    description:
      'Mides al menos 2 m y pesas más de 150 kg. Ganas un nivel de salud Magullado adicional y puedes tener bonificaciones para forcejeos, abrir puertas atrancadas o resistir derribo.',
  },

  // ─── Físicos: Defectos ──────────────────────────────────────────────────────
  {
    id: 'bajo',
    name: 'Bajo',
    type: 'flaw',
    category: 'physical',
    cost: 1,
    description:
      'Mides 1,20 m o menos. Tienes dificultad para alcanzar objetos de tamaño adulto y tu velocidad corriendo es la mitad de la normal.',
  },
  {
    id: 'hedor_tumba',
    name: 'Hedor de la Tumba',
    type: 'flaw',
    category: 'physical',
    cost: 1,
    description:
      'Exudas olor a tierra húmeda que ningún perfume puede enmascarar. La dificultad de la mayoría de tiradas Sociales con mortales aumenta en uno. Los personajes en el Camino de la Humanidad restan uno de su aura.',
  },
  {
    id: 'generacion_13',
    name: '13ª Generación',
    type: 'flaw',
    category: 'physical',
    cost: 2,
    description:
      'Tu sire era de la 12ª generación. Preocupas a los antiguos creyentes en profecías y eres mal visto entre los Altos Clanes. Debes tomar además el Defecto Abrazo Estéril y casi todos sufren Sangre Débil.',
  },
  {
    id: 'mordisco_infeccioso',
    name: 'Mordisco Infeccioso',
    type: 'flaw',
    category: 'physical',
    cost: 2,
    description:
      'No puedes lamer las heridas que causas al alimentarte, dejando marcas visibles. Hay una posibilidad entre cinco de que la herida cause infección.',
  },
  {
    id: 'leproso_2',
    name: 'Leproso',
    type: 'flaw',
    category: 'physical',
    cost: 2,
    description:
      'Tu Apariencia no puede superar 2. Tu carne está desfigurada por llagas y úlceras visibles. Las autoridades mortales te prohíben entrar a las ciudades. (Versión no contagiosa.)',
    note: 'Solo vale 1 punto para Nosferatu (versión contagiosa).',
  },
  {
    id: 'leproso_3',
    name: 'Leproso (contagioso)',
    type: 'flaw',
    category: 'physical',
    cost: 3,
    description:
      'Como Leproso de 2 pts, pero además tu condición sigue siendo contagiosa y puedes transmitirla a aquellos de quienes te alimentas.',
    note: 'Solo vale 1 punto para Nosferatu.',
  },
  {
    id: 'adiccion',
    name: 'Adicción',
    type: 'flaw',
    category: 'physical',
    cost: 3,
    description:
      'Necesitas una sustancia específica (alcohol, extracto de plantas, adrenalina…) presente en la sangre que bebas. Dicha sustancia te incapacita de algún modo (ver "Drogas y Venenos").',
  },
  {
    id: 'cojera',
    name: 'Cojera',
    type: 'flaw',
    category: 'physical',
    cost: 3,
    description:
      'Necesitas bastón o muletas para caminar. Tu velocidad caminando es un cuarto de lo normal y es imposible que corras.',
  },
  {
    id: 'curacion_lenta',
    name: 'Curación Lenta',
    type: 'flaw',
    category: 'physical',
    cost: 3,
    description:
      'Necesitas dos puntos de sangre para recuperar un nivel de salud de daño normal. El daño agravado tarda cinco días en sanar (además del coste normal de cinco puntos de sangre y Fuerza de Voluntad).',
  },
  {
    id: 'herida_permanente',
    name: 'Herida Permanente',
    type: 'flaw',
    category: 'physical',
    cost: 3,
    description:
      'Sufriste heridas en el Abrazo que no sanaron. Al inicio de cada noche te despiertas en el nivel de salud Herido, aunque puedes recuperarte gastando sangre.',
  },
  {
    id: 'monstruoso',
    name: 'Monstruoso',
    type: 'flaw',
    category: 'physical',
    cost: 3,
    description:
      'Tu forma física quedó deformada en el Abrazo, reflejando la Bestia interior. Tu Apariencia es 0.',
    note: 'Los Nosferatu no pueden tomar este Defecto, pues ya lo tienen como debilidad de clan.',
  },
  {
    id: 'nino',
    name: 'Niño',
    type: 'flaw',
    category: 'physical',
    cost: 4,
    description:
      'Fuiste Abrazado entre los 5 y 10 años. No puedes tener más de 2 puntos en Fuerza y Resistencia salvo gastando sangre. La dificultad para dirigir adultos mortales aumenta en dos. Incluye el efecto del Defecto Bajo.',
  },
  {
    id: 'mudo',
    name: 'Mudo',
    type: 'flaw',
    category: 'physical',
    cost: 4,
    description:
      'No puedes hablar. Solo te comunicas por escrito o con un lenguaje de signos común (Lingüística).',
  },
  {
    id: 'sordo',
    name: 'Sordo',
    type: 'flaw',
    category: 'physical',
    cost: 4,
    description:
      'No puedes oír. Puedes ser inmune a algunas aplicaciones de Dominación, pero tienes grandes dificultades de comunicación. La dificultad de cualquier tirada de Alerta auditiva aumenta en tres.',
  },
  {
    id: 'carne_cadaverica',
    name: 'Carne Cadavérica',
    type: 'flaw',
    category: 'physical',
    cost: 5,
    description:
      'Tu piel conserva los cortes y heridas después de sanar hasta la funcionalidad. Dependiendo del daño, puede complicar enormemente las relaciones sociales.',
  },
  {
    id: 'ciego',
    name: 'Ciego',
    type: 'flaw',
    category: 'physical',
    cost: 6,
    description:
      'No puedes ver. La dificultad de todas las tiradas de Destreza aumenta en dos. Auspex 2 (Visión del Alma) sigue funcionando, interpretándose con otros sentidos.',
  },

  // ─── Mentales: Méritos ──────────────────────────────────────────────────────
  {
    id: 'concentracion',
    name: 'Concentración',
    type: 'merit',
    category: 'mental',
    cost: 1,
    description:
      'No te afectan las penalizaciones por distracciones (ruidos fuertes, posiciones incómodas, etc.) cuando realizas acciones que requieren concentración.',
  },
  {
    id: 'sentido_comun',
    name: 'Sentido Común',
    type: 'merit',
    category: 'mental',
    cost: 1,
    description:
      'El Narrador puede advertirte o darte sugerencias cuando tu personaje vaya a actuar de manera contraria al buen juicio. Especialmente útil para jugadores noveles.',
  },
  {
    id: 'sintonía_celestial',
    name: 'Sintonía Celestial',
    type: 'merit',
    category: 'mental',
    cost: 1,
    description:
      'Tienes un sentido innato del tiempo y los cuerpos celestes. Puedes estimar con precisión de minutos cuánto queda para el amanecer o el ocaso, y seguir las fases lunares mentalmente.',
  },
  {
    id: 'memoria_eidética',
    name: 'Memoria Eidética',
    type: 'merit',
    category: 'mental',
    cost: 2,
    description:
      'Recuerdas con todo detalle lo que has visto y oído. En condiciones de tensión, una tirada de Percepción + Alerta (dificultad 6) te permite absorber lo que perciben tus sentidos.',
  },
  {
    id: 'sueño_ligero',
    name: 'Sueño Ligero',
    type: 'merit',
    category: 'mental',
    cost: 2,
    description:
      'Te despiertas de inmediato ante cualquier señal de peligro. Puedes ignorar las restricciones que el valor del Camino impone sobre los dados disponibles durante el día.',
  },

  // ─── Mentales: Defectos ─────────────────────────────────────────────────────
  {
    id: 'exclusion_presa',
    name: 'Exclusión de Presa',
    type: 'flaw',
    category: 'mental',
    cost: 1,
    description:
      'Te niegas a cazar un tipo concreto de presa (campesinos, mujeres, sacerdotes…). Si lo haces por accidente, entras en frenesí y debes tirar contra pérdida de Camino (dificultad 7).',
  },
  {
    id: 'pesadillas',
    name: 'Pesadillas',
    type: 'flaw',
    category: 'mental',
    cost: 1,
    description:
      'Sufres pesadillas cada vez que duermes. Al despertar debes superar una tirada de Fuerza de Voluntad (dificultad 7) o pierdes un dado en todas las acciones esa noche.',
  },
  {
    id: 'sueño_profundo',
    name: 'Sueño Profundo',
    type: 'flaw',
    category: 'mental',
    cost: 1,
    description:
      'La dificultad de cualquier tirada para despertarte durante el día aumenta en dos.',
  },
  {
    id: 'amnesia',
    name: 'Amnesia',
    type: 'flaw',
    category: 'mental',
    cost: 2,
    description:
      'No recuerdas ningún detalle de tu pasado. Los orígenes de tu amnesia los determina el Narrador, y pueden regresar para ajustar cuentas contigo.',
  },
  {
    id: 'trastornado',
    name: 'Trastornado',
    type: 'flaw',
    category: 'mental',
    cost: 2,
    description:
      'Sufres un trastorno mental grave (ver la lista de la página 261). Es posible superarlo durante el juego, aunque es una tarea ardua.',
    note: 'Los Malkavian pueden tomarlo para representar un trastorno adicional al de su sangre.',
  },
  {
    id: 'territorial',
    name: 'Territorial',
    type: 'flaw',
    category: 'mental',
    cost: 2,
    description:
      'Marcas zonas como tu dominio y reaccionas agresivamente ante intrusos. Debes tirar contra el frenesí si otro vampiro entra sin invitación; si fallas, atacas hasta que muera o huya. Te resistes a abandonar tu dominio salvo en emergencias.',
  },
  {
    id: 'vengativo',
    name: 'Vengativo',
    type: 'flaw',
    category: 'mental',
    cost: 2,
    description:
      'Tienes una cuenta pendiente obsesiva de tus días mortales o posterdores al Abrazo. La venganza es tu prioridad absoluta cuando te encuentras con el objetivo. Resistirla temporalmente cuesta un punto de Fuerza de Voluntad.',
  },
  {
    id: 'prohibicion_religiosa_2',
    name: 'Prohibición Religiosa',
    type: 'flaw',
    category: 'mental',
    cost: 2,
    description:
      'Tu fe prohíbe beber sangre. En la versión de 2 pts restringes tu alimentación a animales o sangre extraída ritualmente (halal o kosher), pero tu conciencia te atormenta cada vez.',
  },
  {
    id: 'prohibicion_religiosa_4',
    name: 'Prohibición Religiosa (severa)',
    type: 'flaw',
    category: 'mental',
    cost: 4,
    description:
      'En la versión de 4 pts rehúsas alimentarte salvo en emergencia inmediata (reserva de sangre ≤ 3), y aún así puedes caer en depresión y auto-aborrecimiento durante varias noches.',
  },
  {
    id: 'devorador_carne',
    name: 'Devorador de Carne',
    type: 'flaw',
    category: 'mental',
    cost: 4,
    description:
      'Crees que debes consumir también el corazón, hígado y otros tejidos de tus víctimas, lo que exige casi siempre matarlas. Requiere tomar además el Mérito Consumir Comida.',
  },

  // ─── Sociales: Méritos ──────────────────────────────────────────────────────
  {
    id: 'cruzado',
    name: 'Cruzado',
    type: 'merit',
    category: 'social',
    cost: 1,
    description:
      'Cumpliste tu deber en la Tierra Santa como cruzado, lo que te otorga prestigio especial entre caballeros y señores que nunca hicieron el viaje. Los juglares te piden historias y otros tu opinión sobre el reino latino.',
  },
  {
    id: 'sire_prestigioso',
    name: 'Sire Prestigioso',
    type: 'merit',
    category: 'social',
    cost: 1,
    description:
      'Tu sire tiene o tenía gran posición en su secta o clan, reportándote un grado de prestigio. Puede ayudarte con antiguos y neonatos, aunque también puede engendrar celos.',
  },
  {
    id: 'deuda_gratitud_1',
    name: 'Deuda de Gratitud (menor)',
    type: 'merit',
    category: 'social',
    cost: 1,
    description:
      'Un antiguo te debe un favor concreto por algo que tú o tu sire hicisteis por él.',
  },
  {
    id: 'deuda_gratitud_2',
    name: 'Deuda de Gratitud (moderada)',
    type: 'merit',
    category: 'social',
    cost: 2,
    description:
      'Un antiguo te debe una deuda de gratitud significativa por algo que tú o tu sire hicisteis por él.',
  },
  {
    id: 'deuda_gratitud_3',
    name: 'Deuda de Gratitud (profunda)',
    type: 'merit',
    category: 'social',
    cost: 3,
    description:
      'Un antiguo te debe la no-vida o una deuda equivalente de máxima importancia.',
  },

  // ─── Sociales: Defectos ─────────────────────────────────────────────────────
  {
    id: 'confusion_identidad',
    name: 'Confusión de Identidad',
    type: 'flaw',
    category: 'social',
    cost: 1,
    description:
      'Te pareces a las descripciones de otro vampiro, provocando confusión de identidad. Puede dar lugar a situaciones incómodas o peligrosas, especialmente si tu "gemelo" tiene mala reputación.',
  },
  {
    id: 'secreto_oscuro',
    name: 'Secreto Oscuro',
    type: 'flaw',
    category: 'social',
    cost: 1,
    description:
      'Guardas un secreto que, de descubrirse, te convertiría en un paria: haber asesinado a un antiguo, ser miembro secreto de la Herejía Cainita, etc.',
  },
  {
    id: 'sire_infame',
    name: 'Sire Infame',
    type: 'flaw',
    category: 'social',
    cost: 1,
    description:
      'Tu sire es visto con desconfianza y desagrado. Como consecuencia, nadie confía en ti. El estigma te sigue aunque repudies a tu sire.',
  },
  {
    id: 'sire_resentido',
    name: 'Sire Resentido',
    type: 'flaw',
    category: 'social',
    cost: 1,
    description:
      'Tu sire no te tiene aprecio y desea tu caída. Haría lo posible por dañarte si tuviese ocasión, y sus aliados trabajan contra ti.',
  },
  {
    id: 'enemigo_1',
    name: 'Enemigo (menor)',
    type: 'flaw',
    category: 'social',
    cost: 1,
    description:
      'Tienes un enemigo de poder moderado que trata de dañarte activamente.',
  },
  {
    id: 'enemigo_2',
    name: 'Enemigo (2 pts)',
    type: 'flaw',
    category: 'social',
    cost: 2,
    description:
      'Tienes un enemigo o grupo de enemigos de notable poder que trata de dañarte.',
  },
  {
    id: 'enemigo_3',
    name: 'Enemigo (3 pts)',
    type: 'flaw',
    category: 'social',
    cost: 3,
    description:
      'Tienes un enemigo poderoso —quizá un ancilla o primogénito— que trata de dañarte.',
  },
  {
    id: 'enemigo_4',
    name: 'Enemigo (4 pts)',
    type: 'flaw',
    category: 'social',
    cost: 4,
    description:
      'Tienes un enemigo muy poderoso —quizá un anciano— que trata de dañarte.',
  },
  {
    id: 'enemigo_5',
    name: 'Enemigo (5 pts) — Metusalén',
    type: 'flaw',
    category: 'social',
    cost: 5,
    description:
      'Eres objeto de la ira de un Metusalén, un archimago u otro poderoso enemigo sobrenatural.',
  },
  {
    id: 'apostata',
    name: 'Apóstata',
    type: 'flaw',
    category: 'social',
    cost: 2,
    description:
      'Abjuraste públicamente de un camino anterior de forma espectacular, ridiculizando a tus antiguos maestros. Cargas el estigma de traidor entre los de antes y desconfianza entre los de ahora.',
  },
  {
    id: 'perjuro',
    name: 'Perjuro',
    type: 'flaw',
    category: 'social',
    cost: 4,
    description:
      'Eres un desertor conocido que traicionó a su señor. Antiguos, ancillae e incluso neonatos te tratan con desconfianza u hostilidad, y tu reputación puede salpicar a quienes traten contigo.',
  },
  {
    id: 'perseguido',
    name: 'Perseguido',
    type: 'flaw',
    category: 'social',
    cost: 4,
    description:
      'Un cazador fanático te acosa creyéndote (quizá con razón) un peligro. Todos los que se asocien contigo, mortales o Cainitas, sufrirán también su persecución.',
  },
  {
    id: 'hereje_pagano',
    name: 'Hereje o Pagano Impenitente',
    type: 'flaw',
    category: 'social',
    cost: 4,
    description:
      'No eres cristiano o sigues una herejía condenada (cátaros, bogomilos…). Estás marcado como infiel en la cultura cristiana medieval y afrontas discriminación, acusaciones y persecuciones regulares, incluso entre Cainitas del Camino del Cielo.',
  },

  // ─── Sobrenaturales: Méritos ────────────────────────────────────────────────
  {
    id: 'inofensivo_animales_1',
    name: 'Inofensivo Para los Animales (1 especie)',
    type: 'merit',
    category: 'supernatural',
    cost: 1,
    description:
      'Los animales de una especie concreta no reaccionan con hostilidad ante ti y te tratan como a un humano ordinario.',
  },
  {
    id: 'inofensivo_animales_2',
    name: 'Inofensivo Para los Animales (todas las criaturas)',
    type: 'merit',
    category: 'supernatural',
    cost: 2,
    description:
      'Ninguna criatura ordinaria reacciona con hostilidad ante ti. Los animales asociados a lo sobrenatural (gatos negros, búhos) pueden seguir comportándose de manera inusual, a discreción del Narrador.',
  },
  {
    id: 'medium',
    name: 'Médium',
    type: 'merit',
    category: 'supernatural',
    cost: 2,
    description:
      'Sientes y oyes espíritus, fantasmas y apariciones. Aunque no los veas, eres consciente de su presencia, puedes hablar con ellos y llamarlos mediante súplicas. Siempre existe un precio por su ayuda.',
  },
  {
    id: 'resistencia_arcana_2',
    name: 'Resistencia Arcana (un tipo)',
    type: 'merit',
    category: 'supernatural',
    cost: 2,
    description:
      'Eres resistente a una única forma de práctica mágica (Hechicería Assamita, Koldúnica, Setita, Mortis, Taumaturgia o una escuela mortal). La dificultad de esa magia dirigida contra ti aumenta en dos. Nunca podrás aprender ninguna forma de magia.',
  },
  {
    id: 'resistencia_arcana_4',
    name: 'Resistencia Arcana (toda magia de no-muertos y mortales)',
    type: 'merit',
    category: 'supernatural',
    cost: 4,
    description:
      'Eres resistente a todas las magias tanto de vampiros como de mortales. La dificultad de cualquier magia dirigida contra ti aumenta en dos. Nunca podrás aprender ninguna forma de magia.',
  },
  {
    id: 'resistencia_arcana_5',
    name: 'Resistencia Arcana (universal)',
    type: 'merit',
    category: 'supernatural',
    cost: 5,
    description:
      'Eres resistente a toda magia sin excepción. La dificultad de cualquier magia dirigida contra ti aumenta en dos. Nunca podrás aprender ninguna forma de magia.',
  },
  {
    id: 'dotes_oraculo',
    name: 'Dotes de Oráculo',
    type: 'merit',
    category: 'supernatural',
    cost: 3,
    description:
      'Puedes sentir e interpretar señales y presagios. Tirada de Percepción + Ocultismo para percibir la profecía; luego Inteligencia + Ocultismo para interpretarla. Las dificultades dependen de lo críptico del presagio.',
  },
  {
    id: 'afortunado',
    name: 'Afortunado',
    type: 'merit',
    category: 'supernatural',
    cost: 3,
    description:
      'Puedes repetir hasta tres tiradas fallidas por historia, incluyendo fracasos. Solo una repetición por tirada.',
  },
  {
    id: 'espiritu_mentor',
    name: 'Espíritu Mentor',
    type: 'merit',
    category: 'supernatural',
    cost: 3,
    description:
      'Un espíritu compañero y guía puede ser llamado en situaciones difíciles. Su identidad y poderes los determina el Narrador.',
  },
  {
    id: 'invinculable',
    name: 'Invinculable',
    type: 'merit',
    category: 'supernatural',
    cost: 3,
    description:
      'Eres inmune al Juramento de Sangre. Dominación, Presencia y otras formas de influencia te afectan igual que a cualquier otro vampiro.',
    note: 'Los Tremere no pueden tener este Mérito.',
  },
  {
    id: 'amor_verdadero',
    name: 'Amor Verdadero',
    type: 'merit',
    category: 'supernatural',
    cost: 4,
    description:
      'Has encontrado el amor verdadero en un mortal que se ha convertido en el centro de tu existencia. Obtienes un éxito automático en todas las tiradas de Fuerza de Voluntad (que solo puede negarse por un fracaso). Tu amor necesitará protección y rescate ocasional.',
  },
  {
    id: 'nueve_vidas',
    name: 'Nueve Vidas',
    type: 'merit',
    category: 'supernatural',
    cost: 6,
    description:
      'El Destino te concede nueve oportunidades de sobrevivir a lo que debería ser tu Muerte Definitiva. Cuando una tirada provocaría tu muerte, se vuelve a lanzar. Se repite hasta que tengas éxito o se consuman las nueve vidas.',
  },

  // ─── Sobrenaturales: Defectos ───────────────────────────────────────────────
  {
    id: 'iniciado_camino',
    name: 'Iniciado del Camino',
    type: 'flaw',
    category: 'supernatural',
    cost: 1,
    description:
      'Eres un recién llegado a tu camino de iluminación, sin haber superado aún tu primer momento de verdad. No tienes el aura característica y sufres +1 a la dificultad para resistir el frenesí y el Rötschreck.',
  },
  {
    id: 'repulsion_ajo',
    name: 'Repulsión al Ajo',
    type: 'flaw',
    category: 'supernatural',
    cost: 1,
    description:
      'La menor bocanada de ajo puede hacerte abandonar una estancia si no superas una tirada de Fuerza de Voluntad (la dificultad depende de la intensidad del olor).',
  },
  {
    id: 'toque_escarcha',
    name: 'Toque de Escarcha',
    type: 'flaw',
    category: 'supernatural',
    cost: 1,
    description:
      'Las plantas se marchitan a tu contacto. Cuando atraviesas bosques o campos dejas pequeñas zonas de follaje muerto, otorgando a quien te rastree −2 a la dificultad.',
  },
  {
    id: 'sin_reflejo',
    name: 'Sin Reflejo',
    type: 'flaw',
    category: 'supernatural',
    cost: 1,
    description:
      'No proyectas reflejo alguno, lo que dificulta enormemente hacerte pasar por humano.',
    note: 'Los Lasombra tienen este Defecto automáticamente sin beneficio en puntos.',
  },
  {
    id: 'presencia_inquietante',
    name: 'Presencia Inquietante',
    type: 'flaw',
    category: 'supernatural',
    cost: 1,
    description:
      'Los mortales perciben inconscientemente tu naturaleza no muerta y se ponen nerviosos. La dificultad de todas las tiradas de interacción social con mortales aumenta en dos.',
  },
  {
    id: 'endemoniado_1',
    name: 'Endemoniado (menor)',
    type: 'flaw',
    category: 'supernatural',
    cost: 1,
    description:
      'Un diablillo menor se interesa por ti. Es un demonio molesto incapaz de gran cosa: roba pequeños objetos, te distrae y suplica almas. Sus planes son frustrantes pero no imponentes.',
  },
  {
    id: 'endemoniado_2',
    name: 'Endemoniado (2 pts)',
    type: 'flaw',
    category: 'supernatural',
    cost: 2,
    description:
      'Un demonio de poder moderado te acosa, empleando amenazas, sobornos y favores para ganarte para su causa. Nunca sirve a tus intereses; eventualmente tratará de librarse de ti.',
  },
  {
    id: 'endemoniado_3',
    name: 'Endemoniado (3 pts)',
    type: 'flaw',
    category: 'supernatural',
    cost: 3,
    description:
      'Un demonio notable te acosa. Sus planes son más elaborados y dañinos. En algún momento de la crónica intentará librarse de ti de una forma seguramente muy desagradable.',
  },
  {
    id: 'endemoniado_4',
    name: 'Endemoniado (mayor)',
    type: 'flaw',
    category: 'supernatural',
    cost: 4,
    description:
      'Una criatura mayor es tu igual físico y puede trazar planes horriblemente tortuosos para convertirte en su esclavo.',
  },
  {
    id: 'maldicion_1',
    name: 'Maldición (1 pt)',
    type: 'flaw',
    category: 'supernatural',
    cost: 1,
    description:
      'Ejemplo: si revelas un secreto que se te confió, la traición se volverá contra ti para dañarte de algún modo.',
  },
  {
    id: 'maldicion_2',
    name: 'Maldición (2 pts)',
    type: 'flaw',
    category: 'supernatural',
    cost: 2,
    description:
      'Ejemplo: tartamudeas de forma incontrolable cuando intentas describir lo que has visto u oído.',
  },
  {
    id: 'maldicion_3',
    name: 'Maldición (3 pts)',
    type: 'flaw',
    category: 'supernatural',
    cost: 3,
    description:
      'Ejemplo: las herramientas se estropean o no funcionan cuando tratas de usarlas.',
  },
  {
    id: 'maldicion_4',
    name: 'Maldición (4 pts)',
    type: 'flaw',
    category: 'supernatural',
    cost: 4,
    description:
      'Ejemplo: estás condenado a hacer enemigos de aquellos que amas o admiras.',
  },
  {
    id: 'maldicion_5',
    name: 'Maldición (5 pts)',
    type: 'flaw',
    category: 'supernatural',
    cost: 5,
    description:
      'Ejemplo: todos tus logros y triunfos terminarán mancillados o fracasarán de algún modo.',
  },
  {
    id: 'abrazo_esteril',
    name: 'Abrazo Estéril',
    type: 'flaw',
    category: 'supernatural',
    cost: 2,
    description:
      'No puedes transmitir la Maldición de Caín: ningún mortal que desangres se alzará como vampiro por mucha vitae que reciba. Sigues pudiendo crear ghouls y juramentos de sangre.',
  },
  {
    id: 'repulsivo_animales',
    name: 'Repulsivo Para los Animales',
    type: 'flaw',
    category: 'supernatural',
    cost: 2,
    description:
      'Todo animal natural entra en pánico o ataca automáticamente ante tu presencia. No puedes apaciguarlos con Trato con Animales; hace falta Animalismo o vínculos de sangre.',
  },
  {
    id: 'demencia_sangre_2',
    name: 'Demencia de Sangre',
    type: 'flaw',
    category: 'supernatural',
    cost: 2,
    description:
      'Cuando pruebas sangre Cainita debes tirar Autocontrol (dificultad 8) o caes en frenesí de hambre, haciendo lo que sea para atracarte de sangre vampírica.',
    note: 'Se encuentra principalmente entre la casta guerrera de los Assamitas.',
  },
  {
    id: 'demencia_sangre_4',
    name: 'Demencia de Sangre (Instinto)',
    type: 'flaw',
    category: 'supernatural',
    cost: 4,
    description:
      'Si sigues un camino que enseñe Instinto, te pierdes automáticamente en el frenesí de hambre al probar sangre Cainita. No hay tirada posible.',
    note: 'Se encuentra principalmente entre la casta guerrera de los Assamitas.',
  },
  {
    id: 'embrujado',
    name: 'Embrujado',
    type: 'flaw',
    category: 'supernatural',
    cost: 3,
    description:
      'Un espíritu furioso (probablemente una de tus primeras víctimas) te acosa y trata de frustrarte cuando te alimentas. El Narrador determina sus poderes y si puede llegar a descansar en paz.',
  },
  {
    id: 'rios_infranqueables',
    name: 'Ríos Infranqueables',
    type: 'flaw',
    category: 'supernatural',
    cost: 4,
    description:
      'No puedes cruzar masas acuáticas en movimiento (≥ 0,5 m de ancho) sin tirar Coraje (dificultad 6–8). Fallo = rehúsas cruzar; fracaso = Rötschreck. Con éxito sufres 1 nivel de daño contundente por turno (agravado si vadeas).',
  },
  {
    id: 'presa_condenacion',
    name: 'Presa de Condenación',
    type: 'flaw',
    category: 'supernatural',
    cost: 4,
    description:
      'No hay éxtasis en tu Abrazo, solo terror y dolor. Los mortales luchan y gritan mientras te alimentas, obligándote a sujetarlos. Puede requerir tirada de Humanidad a discreción del Narrador.',
  },
  {
    id: 'sino_aciago',
    name: 'Sino Aciago',
    type: 'flaw',
    category: 'supernatural',
    cost: 5,
    description:
      'Estás condenado a la Muerte Definitiva u otra agonía eterna, sin posibilidad de evitarlo. Tienes premoniciones periódicas de tu fin; no gastar un punto temporal de Fuerza de Voluntad te hace perder un dado en todas tus acciones esa noche.',
  },
  {
    id: 'sensible_luz',
    name: 'Sensible a la Luz',
    type: 'flaw',
    category: 'supernatural',
    cost: 5,
    description:
      'El sol te causa el doble de daño. La luz de la luna directa sobre tu piel puede infligirte daño letal similar al solar.',
    note: 'Los Seguidores de Set y Lasombra doblan el daño aumentado de su debilidad de clan.',
  },
  {
    id: 'sangre_debil',
    name: 'Sangre Débil',
    type: 'flaw',
    category: 'supernatural',
    cost: 5,
    description:
      'Tu sangre es muy débil. Se doblan todos los costes en puntos de sangre (Disciplinas, curación). Nunca puedes aprender una Disciplina por encima de 4 puntos. Hacen falta 6 tragos para vincular a un esclavo. No puedes crear ghouls ni progenie. Incluye el efecto de Abrazo Estéril.',
  },
  {
    id: 'aura_debil_merit',
    name: 'Aura Débil',
    type: 'merit',
    category: 'supernatural',
    cost: 2,
    description:
      'Tu aura de Camino es muy débil y apenas afecta involuntariamente a otros. Modificador de aura: 10–9 = −1 dificultad, 8–3 = sin modificador, 2–1 = +1 dificultad. Mérito si tu Camino inicial es 4 o menos.',
  },
  {
    id: 'aura_debil_flaw',
    name: 'Aura Débil',
    type: 'flaw',
    category: 'supernatural',
    cost: 2,
    description:
      'Tu aura de Camino es muy débil. Modificador de aura: 10–9 = −1 dificultad, 8–3 = sin modificador, 2–1 = +1 dificultad. Defecto si tu Camino inicial es 5 o más.',
  },
  {
    id: 'aura_poderosa_merit',
    name: 'Aura Poderosa',
    type: 'merit',
    category: 'supernatural',
    cost: 3,
    description:
      'Tu aura de Camino es especialmente intensa. Modificador de aura: 10 = −3, 9–8 = −2, 7–6 = −1, 5 = sin mod., 4–3 = +1, 2 = +2, 1 = +3. Mérito si tu Camino inicial es 5 o más.',
  },
  {
    id: 'aura_poderosa_flaw',
    name: 'Aura Poderosa',
    type: 'flaw',
    category: 'supernatural',
    cost: 3,
    description:
      'Tu aura de Camino es especialmente intensa, afectando a otros con facilidad inquietante. Modificador de aura: 10 = −3, 9–8 = −2, 7–6 = −1, 5 = sin mod., 4–3 = +1, 2 = +2, 1 = +3. Defecto si tu Camino inicial es 4 o menos.',
  },
];

export function getMeritFlaw(id: string): MeritFlawEntry | undefined {
  return MERITS_FLAWS.find((e) => e.id === id);
}

export function getMeritFlawsByCategory(
  category: MeritFlawCategory,
  type?: MeritFlawType
): MeritFlawEntry[] {
  return MERITS_FLAWS.filter(
    (e) => e.category === category && (type === undefined || e.type === type)
  );
}

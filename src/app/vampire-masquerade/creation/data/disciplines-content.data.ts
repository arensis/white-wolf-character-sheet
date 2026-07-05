/**
 * Per-level discipline content for V20 (Capítulo Cuatro). Each level lists
 * the power name plus a concise summary of what it does. Passive disciplines
 * (Celeridad, Potencia, Fortaleza) use `passive`; path-based disciplines
 * (Nigromancia, Taumaturgia) list `paths`.
 *
 * Spanish-only for now (content phase, Spanish-first).
 */

export interface DisciplineLevel {
  name: string;
  text: string;
}

export interface DisciplineRitual {
  level: number;
  name: string;
  text: string;
}

export interface DisciplinePathInfo {
  name: string;
  /** Optional intro line for the path. */
  text?: string;
  /** The path's own level 1-5 powers. */
  levels: DisciplineLevel[];
}

export interface DisciplineContent {
  levels?: DisciplineLevel[];
  /** For passive disciplines with no discrete powers. */
  passive?: string;
  /** Rules summary for path-based disciplines (shown in the info modal). */
  howItWorks?: string;
  /** For path-based disciplines (Nigromancia, Taumaturgia). */
  paths?: DisciplinePathInfo[];
  pathsNote?: string;
  /** Rituals attached to path-based disciplines. */
  rituals?: DisciplineRitual[];
  ritualsNote?: string;
}

export const DISCIPLINE_CONTENT: Record<string, DisciplineContent> = {
  animalism: {
    levels: [
      { name: 'Susurros Salvajes', text: 'Hablas con un animal mirándolo a los ojos y puedes pedirle favores sencillos.' },
      { name: 'La Llamada', text: 'Atraes con un aullido o grito a los animales de una especie de los alrededores.' },
      { name: 'Canción de Serenidad', text: 'Adormeces la Bestia de un ser: calmas frenesíes o apagas el instinto de lucha.' },
      { name: 'Poseer el Alma Salvaje', text: 'Trasladas tu consciencia al cuerpo de un animal y lo controlas a distancia.' },
      { name: 'Doblegar el Alma', text: 'Manipulas la Bestia de otro vampiro: puedes provocarle el frenesí o arrebatárselo.' },
    ],
  },
  auspex: {
    levels: [
      { name: 'Sentidos Agudizados', text: 'Amplificas tus cinco sentidos muy por encima de lo humano; los estímulos intensos pueden aturdirte.' },
      { name: 'Percepción del Aura', text: 'Lees el aura de un ser: estado emocional, salud y naturaleza sobrenatural.' },
      { name: 'El Toque del Espíritu', text: 'Tocando un objeto percibes impresiones psíquicas de su historia y sus dueños.' },
      { name: 'Telepatía', text: 'Lees pensamientos superficiales y proyectas los tuyos en otras mentes.' },
      { name: 'Proyección Psíquica', text: 'Separas tu mente del cuerpo y viajas incorpóreo a gran velocidad.' },
    ],
  },
  celerity: {
    passive: 'Cada punto de Celeridad puede añadir un dado a las tiradas de Destreza, o gastarse (1 punto de sangre por nivel) para obtener acciones físicas adicionales en el turno.',
  },
  chimerstry: {
    levels: [
      { name: 'Ignis Fatuus', text: 'Creas una ilusión menor estática que afecta a un solo sentido.' },
      { name: 'Fata Morgana', text: 'Creas una ilusión estática que afecta a todos los sentidos.' },
      { name: 'Apariencia', text: 'Das movimiento a tus ilusiones y puedes moverlas mientras te concentras.' },
      { name: 'Permanencia', text: 'Tus ilusiones persisten sin necesidad de tu presencia ni concentración.' },
      { name: 'Realidad Horrenda', text: 'Conviertes una ilusión en algo capaz de dañar de verdad la mente de la víctima.' },
    ],
  },
  dementation: {
    levels: [
      { name: 'Pasión', text: 'Exaltas o apagas las emociones presentes de la víctima hasta extremos irracionales.' },
      { name: 'La Obsesión', text: 'Ocultas un objeto o mensaje que solo ciertos tipos de mente perciben, o siembras una fijación.' },
      { name: 'Los Ojos del Caos', text: 'Percibes pautas ocultas: lees la locura y la verdadera naturaleza de las cosas.' },
      { name: 'Voz de la Locura', text: 'Tu voz desata frenesíes e histeria en quienes te escuchan.' },
      { name: 'Mente Total', text: 'Rompes de forma duradera la mente de la víctima, infligiéndole trastornos.' },
    ],
  },
  dominate: {
    levels: [
      { name: 'Orden', text: 'Impones una orden de una palabra o frase breve que la víctima obedece al instante.' },
      { name: 'Mesmerismo', text: 'Implantas instrucciones complejas o sugestiones que se activan más tarde.' },
      { name: 'La Mente Olvidadiza', text: 'Robas, alteras o reescribes los recuerdos de la víctima.' },
      { name: 'Condicionamiento', text: 'Con sesiones prolongadas conviertes a la víctima en un sirviente dócil y leal.' },
      { name: 'Posesión', text: 'Expulsas la mente de un mortal y ocupas su cuerpo con tu consciencia.' },
    ],
  },
  fortitude: {
    passive: 'Cada punto de Fortaleza añade un dado a las tiradas de absorción, incluso contra fuego y luz solar, y puede sumar a la Resistencia para resistir daño.',
  },
  necromancy: {
    howItWorks: 'La Nigromancia se organiza en sendas y rituales. La Senda Primaria (casi siempre la del Sepulcro) sube al ritmo de la disciplina y otorga un ritual de nivel 1. Para aprender una senda secundaria hacen falta 3 niveles de la primaria, y dominarla al completo antes de una tercera. Las tiradas varían según el poder. Los rituales se tiran con Inteligencia + Ocultismo (dif. 3 + nivel).',
    paths: [
      { name: 'Senda del Sepulcro', text: 'La senda habitual de inicio: ver, convocar, forzar y castigar fantasmas. Un objeto significativo para el fantasma facilita mucho el trabajo.', levels: [
        { name: 'Testigo de la Muerte', text: 'Percibes a los fantasmas del entorno durante una escena (Percepción + Consciencia).' },
        { name: 'Invocar Alma', text: 'Llamas a un fantasma concreto para conversar; necesitas su nombre y un objeto que tocara en vida.' },
        { name: 'Compeler Alma', text: 'Obligas a un fantasma a obedecerte; los éxitos marcan cuántas tareas y cuán peligrosas.' },
        { name: 'Embrujo', text: 'Atas a un fantasma a un lugar u objeto; huir puede destruirlo.' },
        { name: 'Tormento', text: 'Golpeas la forma ectoplásmica de un fantasma desde el mundo real sin exponerte.' },
      ]},
      { name: 'Cadáver dentro del Monstruo', text: 'Explorar lo cadavérico como puente entre vida y muerte (antigua senda de Mortis).', levels: [
        { name: 'Máscara de Muerte', text: 'Adoptas (o impones) el aspecto de un cadáver: intimida y permite pasar por muerto.' },
        { name: 'Frío de la Tumba', text: 'Frialdad de cadáver: ignoras penalizaciones por heridas y resistes mejor la manipulación emocional.' },
        { name: 'Maldición de la Vida', text: 'Impones a otro no-muerto las miserias de estar vivo: hambre, excreciones, distracción constante.' },
        { name: 'Don del Cadáver', text: 'Unos turnos como cadáver animado: inmune a fe, frenesí y estacas; el sol y el fuego apenas dañan.' },
        { name: 'Don de la Vida', text: 'Por 12 puntos de sangre vives un día casi humano: comida, sexo, sol… y la Bestia se cobra la deuda después.' },
      ]},
      { name: 'Senda de las Cenizas', text: 'Espiar y adentrarse en las tierras de los muertos; la senda más peligrosa de aprender.', levels: [
        { name: 'Visión del Manto', text: 'Ves a través del Manto: paisaje, objetos y espíritus del Inframundo.' },
        { name: 'Lenguas sin Vida', text: 'Conversas sin esfuerzo con los habitantes del Inframundo.' },
        { name: 'Mano Muerta', text: 'Interactúas físicamente con lo fantasmal… y lo fantasmal contigo.' },
        { name: 'Ex Nihilo', text: 'Entras en persona en el Inframundo a través de un portal dibujado; morir allí es perderse para siempre.' },
        { name: 'Dominio del Manto', text: 'Engrosas o adelgazas el Manto para facilitar o impedir el paso de los fantasmas.' },
      ]},
      { name: 'Senda del Cenotafio', text: 'Hallar y forjar los vínculos que unen a los muertos con el mundo de los vivos.', levels: [
        { name: 'Toque de Muerte', text: 'Detectas con un toque si un fantasma ha influido en una persona u objeto.' },
        { name: 'Revelar las Catene', text: 'Identificas los Grilletes: los objetos que anclan a un fantasma al mundo.' },
        { name: 'Caminar sobre la Tumba', text: 'Sientes cuán cerca están las Tierras de las Sombras en un lugar.' },
        { name: 'Toque de Difuntos', text: 'Percibes cada nueva alma que se convierte en fantasma cerca de ti y puedes rastrearla.' },
        { name: 'Atadura Efímera', text: 'Conviertes un objeto o persona ungidos con tu sangre en un Grillete artificial.' },
      ]},
      { name: 'Senda de los Cuatro Humores', text: 'Manipular los humores del cuerpo no muerto: sangre, flema y las dos bilis (senda de las Lamias).', levels: [
        { name: 'Susurrarle al Alma', text: 'Un susurro bilioso que inflige pesadillas e irritabilidad durante días.' },
        { name: 'Beso de la Madre Oscura', text: 'Tu vitae se vuelve veneno: tu próximo mordisco duplica el daño agravado.' },
        { name: 'Humores Oscuros', text: 'Exudas un humor a elegir que impone su emoción extrema a quien lo toca o ingiere.' },
        { name: 'Aferrar el Manto', text: 'Bebiendo sangre de cadáver te acercas a la muerte: absorbes mejor y hablas con fantasmas.' },
        { name: 'Hálito Negro', text: 'Exhalas una niebla de melancolía que empuja a los mortales al suicidio y a los Vástagos al letargo.' },
      ]},
      { name: 'Senda del Osario', text: 'Los cadáveres y el retorno de las almas: de las sacudidas post mortem a los zombis.', levels: [
        { name: 'Tremens', text: 'Haces que la carne de un cadáver se mueva una vez, con condiciones si hay éxitos de sobra.' },
        { name: 'Escobas del Aprendiz', text: 'Levantas cadáveres para tareas simples y no violentas hasta acabarlas.' },
        { name: 'Hordas Tambaleantes', text: 'Alzas zombis capaces de atacar o custodiar un lugar, esperando años si hace falta.' },
        { name: 'Robo de Alma', text: 'Arrancas temporalmente el alma de un mortal vivo, dejando el cuerpo catatónico.' },
        { name: 'Posesión Demoníaca', text: 'Introduces un alma dispuesta en un cadáver reciente como hogar temporal.' },
      ]},
      { name: 'Podredumbre de la Tumba', text: 'Canalizar la descomposición que todo lo alcanza… salvo a los Vástagos (senda capadocia).', levels: [
        { name: 'Destruir la Cáscara', text: 'Reduces un cadáver humano a polvo en unos turnos.' },
        { name: 'Rígor Mortis', text: 'Congelas a la víctima en la rigidez de la muerte, como si estuviera estacada.' },
        { name: 'Marchitar', text: 'Con un toque atrofias un miembro, un rasgo o un sentido; incurable en mortales.' },
        { name: 'Corromper la Carne No-Muerta', text: 'Infectas a un no-muerto con una gripe virulenta y contagiosa que debilita y hace vomitar la sangre.' },
        { name: 'Disolver la Carne', text: 'Tu vitae arrojada convierte en ceniza la carne de otro Vástago, herida a herida.' },
      ]},
      { name: 'Senda Vítrea', text: 'Manipular la entropía y las energías de la muerte (senda de los Nagaraja).', levels: [
        { name: 'Ojos de los Muertos', text: 'Ves con la Visión de Muerte: salud, maldiciones y hasta el probable fin de una persona.' },
        { name: 'Aura de Descomposición', text: 'Rompes objetos y máquinas a tu alrededor reforzando la entropía.' },
        { name: 'Banquete de Almas', text: 'Te alimentas de la energía de lugares de muerte o directamente de un fantasma.' },
        { name: 'Hálito de Tánatos', text: 'Exhalas entropía: cebo para Espectros o ponzoña que enferma a un objetivo.' },
        { name: 'Alarido Nocturno', text: 'Un grito de caos que hiere con daño agravado o bendice a varios objetivos a la vez.' },
      ]},
    ],
    rituals: [
      { level: 1, name: 'Espejo Humeante', text: 'Un espejo de obsidiana afilado que muestra auras (Visión de Vida) o el Inframundo (Visión de Muerte).' },
      { level: 1, name: 'Faro Ultraterreno', text: 'Una esfera de cera verde que señala a su portador ante los poderes de los fantasmas.' },
      { level: 1, name: 'Llamada de los Muertos Hambrientos', text: 'Quemando un cabello, la víctima oye las voces del otro lado del Manto.' },
      { level: 1, name: 'Minestra di Morte', text: 'Un guiso ritual con carne de un cadáver revela si su alma es fantasma, Espectro o ambos.' },
      { level: 1, name: 'Piedra Sapiente', text: 'Marcas el espíritu de una persona para saber siempre dónde está, incluso muerta.' },
      { level: 1, name: 'Última Visión', text: 'Lees en los ojos de un cadáver lo último que vio antes de morir.' },
      { level: 2, name: 'Dos Céntimos', text: '"Matas" ceremonialmente a un mortal para que visite el Inframundo y te lo describa.' },
      { level: 2, name: 'Mano de Gloria', text: 'Una mano momificada cuyas llamas sumen en sueño profundo a los mortales de una casa.' },
      { level: 2, name: "Occhio d'Uomo Morto", text: 'Sustituyes tu ojo por el de un cadáver: Visión del Manto permanente, con un precio.' },
      { level: 2, name: 'Ojos de la Tumba', text: 'La víctima sufre visiones aleatorias de su propia muerte durante una semana.' },
      { level: 2, name: 'Ritual de Pochtli', text: 'Varios necromantes unen sus éxitos en un mismo ritual bebiendo de un recipiente mortal.' },
      { level: 2, name: 'Títere', text: 'Preparas a un individuo para que un fantasma lo posea con facilidad.' },
      { level: 3, name: 'Danza de la Sangre', text: 'Permite a un fantasma comunicarse durante una hora con un familiar vivo.' },
      { level: 3, name: 'Estruendo de los Condenados', text: 'Proteges una sala de escuchas: los espías solo oyen los lamentos del Inframundo.' },
      { level: 3, name: 'Grillete Desenterrado', text: 'Una falange del fantasma se vuelve brújula hacia el objeto que lo ata al mundo.' },
      { level: 3, name: 'Signo Divino', text: 'Con la fecha de nacimiento predices las acciones del objetivo; a los fantasmas los expone como un Grillete.' },
      { level: 3, name: 'Tambores de Pesadilla', text: 'Pactas con los muertos para que infesten de pesadillas los sueños de tu enemigo.' },
      { level: 3, name: 'Tempesta Scudo', text: 'Danza y sangre escupida en círculo que entorpece las acciones de los fantasmas dentro.' },
      { level: 4, name: 'Bastone Diabolico', text: 'Un bastón de hueso y plomo que castiga a los muertos vivientes y drena la Pasión de los fantasmas.' },
      { level: 4, name: 'Escudriñar más allá del Manto', text: 'Cornezuelo encantado que otorga Visión del Manto a quien lo ingiere.' },
      { level: 4, name: 'Muñeco Funesto', text: 'Un muñeco ligado al alma de la víctima: herirlo o destruirlo la daña a distancia.' },
      { level: 4, name: 'Toque del Cadáver', text: 'Fundiendo una figura de cera, un mortal adquiere el aspecto y la frialdad de un muerto viviente.' },
      { level: 4, name: 'Ritual de Xipe Totec', text: 'Vistes la piel desollada de una víctima viva como disfraz casi perfecto.' },
      { level: 5, name: 'Aferrar lo Fantasmal', text: 'Traes una reliquia del Inframundo al mundo real a cambio de masa equivalente.' },
      { level: 5, name: 'Esilio', text: 'Cinco sílabas abren en tu pecho un vórtice que despedaza fantasmas; cada uso te cuesta Humanidad.' },
      { level: 5, name: 'Frío del Olvido', text: 'Infunde el frío de la tumba: el fuego pasa a ser daño letal y puedes sofocarlo con la voluntad.' },
      { level: 5, name: 'Mano de Hombre Muerto', text: 'Una mano cortada que pudre a la víctima a medida que ella misma se descompone.' },
    ],
  },
  obfuscate: {
    levels: [
      { name: 'Capa de Sombras', text: 'Te vuelves inadvertido mientras permanezcas quieto, en silencio y con algo de cobertura.' },
      { name: 'Presencia Invisible', text: 'Te mueves sin ser percibido; la mente de los testigos te ignora.' },
      { name: 'Máscara de las Mil Caras', text: 'Haces que los demás te perciban con un aspecto distinto al tuyo.' },
      { name: 'Desvanecerse de la Mente', text: 'Desapareces de la vista incluso mientras te observan.' },
      { name: 'Ocultar', text: 'Extiendes tu Ofuscación a otras personas u objetos cercanos.' },
    ],
  },
  obtenebration: {
    levels: [
      { name: 'Juego de Sombras', text: 'Manipulas las sombras existentes para ocultarte o inquietar.' },
      { name: 'Mortaja de la Noche', text: 'Creas una nube de oscuridad absoluta que ahoga luz y sonido.' },
      { name: 'Brazos del Abismo', text: 'Invocas tentáculos de sombra que agarran y estrujan a tus enemigos.' },
      { name: 'Metamorfosis Negra', text: 'Te transformas en un horror de sombras semimaterial.' },
      { name: 'Forma Tenebrosa', text: 'Te conviertes en oscuridad viviente, intangible y aterradora.' },
    ],
  },
  potence: {
    passive: 'Cada punto de Potencia añade un dado a las tiradas de Fuerza, o puede gastarse (1 punto de sangre) para convertir los dados en éxitos automáticos de Fuerza durante el turno.',
  },
  presence: {
    levels: [
      { name: 'Temor Reverencial', text: 'Atraes y fascinas a quienes te rodean, que desean acercarse y agradarte.' },
      { name: 'Mirada Aterradora', text: 'Infundes un miedo paralizante con tu sola mirada.' },
      { name: 'Trance', text: 'Fascinas a una víctima concreta, que queda pendiente de tu voluntad.' },
      { name: 'Invocación', text: 'Llamas a cualquier persona que te haya visto para que acuda a ti, esté donde esté.' },
      { name: 'Majestad', text: 'Tu presencia impone tal reverencia que nadie osa actuar contra ti.' },
    ],
  },
  protean: {
    levels: [
      { name: 'Ojos de la Bestia', text: 'Tus ojos brillan y ves perfectamente en la oscuridad total.' },
      { name: 'Garras Salvajes', text: 'Tus manos se transforman en garras que infligen daño agravado.' },
      { name: 'Fusión con la Tierra', text: 'Te hundes en la tierra y descansas protegido en su seno.' },
      { name: 'Forma de la Bestia', text: 'Te transformas en lobo o en murciélago (u otras formas animales pactadas).' },
      { name: 'Forma de Niebla', text: 'Tu cuerpo se convierte en niebla inmune al daño físico.' },
    ],
  },
  quietus: {
    levels: [
      { name: 'Silencio de la Muerte', text: 'Creas una zona de silencio absoluto a tu alrededor.' },
      { name: 'Toque de Escorpión', text: 'Conviertes tu sangre en veneno que debilita a quien toca.' },
      { name: 'El Beso de Dagón', text: 'Ahogas a la víctima en su propia sangre con solo tocarla y concentrarte.' },
      { name: 'Caricia de Bali', text: 'Tu sangre se vuelve corrosiva: quema la carne que toca.' },
      { name: 'Sabor de la Muerte', text: 'Escupes tu sangre cáustica a distancia como un arma.' },
    ],
  },
  serpentis: {
    levels: [
      { name: 'Los Ojos de la Serpiente', text: 'Tu mirada hipnótica inmoviliza a los mortales que la cruzan.' },
      { name: 'La Lengua del Áspid', text: 'Tu lengua se alarga como la de una serpiente; su caricia extrae sangre y da placer.' },
      { name: 'La Piel de la Víbora', text: 'Tu piel se cubre de escamas: más resistente y flexible.' },
      { name: 'La Forma de la Cobra', text: 'Te transformas en una enorme cobra negra.' },
      { name: 'El Corazón de las Tinieblas', text: 'Extraes tu propio corazón y lo escondes, volviéndote casi imposible de estacar.' },
    ],
  },
  thaumaturgy: {
    howItWorks: 'La Taumaturgia se organiza en sendas. La primera aprendida es la Senda Primaria: sube al ritmo de la disciplina y otorga un ritual de nivel 1. Las secundarias se aprenden por separado (desde nivel 2 de la primaria) y deben ir al menos un punto por debajo de ella hasta dominarla. Usar un poder de senda cuesta 1 punto de sangre y una tirada de Fuerza de Voluntad (dif. nivel del poder + 3). Los rituales se tiran con Inteligencia + Ocultismo (dif. 3 + nivel).',
    paths: [
      { name: 'Senda de la Sangre', text: 'La senda primaria habitual de los Tremere: el dominio de la vitae.', levels: [
        { name: 'Sabor de la Sangre', text: 'Al tocar la sangre de un sujeto conoces su reserva, generación aproximada y si ha cometido diablerie.' },
        { name: 'Furia de Sangre', text: 'Tocando a otro vampiro le obligas a gastar sangre; cada éxito también acerca su frenesí.' },
        { name: 'Sangre de Potencia', text: 'Concentras tu vitae y rebajas tu generación efectiva durante horas, una vez por noche.' },
        { name: 'Robo de Vitae', text: 'Extraes sangre a distancia (hasta ~15 m) de un objetivo a la vista; muy escandaloso para la Mascarada.' },
        { name: 'Caldero de Sangre', text: 'Haces hervir la sangre de la víctima con un toque: daño agravado por punto hervido; letal para mortales.' },
      ]},
      { name: 'Senda de la Conjuración', text: 'Materializar objetos de la nada; siempre genéricos y sin defectos, nunca mayores que el conjurador.', levels: [
        { name: 'Invocar la Forma Sencilla', text: 'Creas objetos simples de un solo material; se desvanecen si no gastas Voluntad cada turno.' },
        { name: 'Permanencia', text: 'Tus objetos simples se vuelven permanentes invirtiendo tres puntos de sangre.' },
        { name: 'Magia del Herrero', text: 'Conjuras objetos complejos con piezas móviles (permanentes, cinco puntos de sangre).' },
        { name: 'Revertir Conjuración', text: 'Deshaces objetos conjurados, propios o ajenos, acumulando los éxitos de su creación.' },
        { name: 'Poder sobre la Vida', text: 'Creas simulacros de criaturas o personas sin voluntad propia que duran una semana.' },
      ]},
      { name: 'Contramagia Taumatúrgica', text: 'Resistir la Taumaturgia. Se considera una disciplina aparte: no puede ser primaria, no da rituales y no puede elegirse en la creación.', levels: [
        { name: 'Contramagia (2 dados)', text: 'Cancelas éxitos de poderes o rituales que te afecten directamente a ti o a lo que llevas.' },
        { name: 'Contramagia (4 dados)', text: 'Mayor reserva para cancelar la magia que te afecta.' },
        { name: 'Contramagia (6 dados)', text: 'Puedes proteger también a quien esté en contacto contigo.' },
        { name: 'Contramagia (8 dados)', text: 'Reserva aún mayor para anular Magia de Sangre.' },
        { name: 'Contramagia (10 dados)', text: 'Cancelas magia dirigida a cualquier cosa en un radio igual a tu Fuerza de Voluntad en metros.' },
      ]},
      { name: 'Control del Clima', text: 'Manipular el tiempo atmosférico en un área de pocos kilómetros; los éxitos marcan la rapidez del cambio.', levels: [
        { name: 'Niebla, brisa o temperatura menor', text: 'Cambios sutiles: niebla que amortigua visión y sonido, brisas, ±5 °C.' },
        { name: 'Lluvia o nieve', text: 'Precipitaciones que dificultan la percepción y la conducción.' },
        { name: 'Vientos fuertes', text: 'Rachas de ~50 km/h que penalizan ataques a distancia y pueden derribar.' },
        { name: 'Tormenta', text: 'Combina los efectos de lluvia y vientos fuertes.' },
        { name: 'Rayo', text: 'Descarga dirigida: 10 dados de daño letal que la armadura no absorbe.' },
      ]},
      { name: 'Senda de la Corrupción', text: 'Torcer gradualmente mentes y morales. Tu nivel en esta senda no puede superar tu Subterfugio.', levels: [
        { name: 'Contradecir', text: 'Interrumpes la decisión de la víctima y la fuerzas a hacer algo más negativo que lo que pretendía.' },
        { name: 'Subvertir', text: 'Con contacto visual liberas los deseos reprimidos y autodestructivos del objetivo durante un tiempo.' },
        { name: 'Disociar', text: 'Con un toque rompes lazos sociales: la víctima pierde tres dados en tiradas sociales una temporada.' },
        { name: 'Adicción', text: 'Con un toque creas una dependencia psicológica hacia una sustancia, sensación o acto.' },
        { name: 'Dependencia', text: 'Atas el alma de la víctima: apatía lejos de ti y media reserva para resistir tus poderes.' },
      ]},
      { name: 'Dominio Elemental', text: 'Conexión y control limitado sobre objetos inanimados y espíritus elementales.', levels: [
        { name: 'Fuerza Elemental', text: 'Tomas de la tierra tres puntos a repartir entre Fuerza y Resistencia durante unos turnos.' },
        { name: 'Lenguas de Madera', text: 'Hablas con el espíritu de un objeto inanimado y le sonsacas lo que ha "visto".' },
        { name: 'Animar lo Inmóvil', text: 'Das movimiento a objetos (hasta tamaño humano), tantos a la vez como tu Inteligencia.' },
        { name: 'Forma Elemental', text: 'Adoptas la forma de un objeto inanimado de masa similar a la tuya.' },
        { name: 'Invocar Elemental', text: 'Convocas y tratas de controlar una salamandra, sílfide, gnomo u ondina.' },
      ]},
      { name: 'El Encanto de las Llamas', text: 'Conjurar fuego místico que no daña al invocador hasta ser liberado.', levels: [
        { name: 'Vela', text: 'Una llama pequeña (dif. 3 de absorber, 1 agravado por turno).' },
        { name: 'Mano de fuego', text: 'Llamas del tamaño de una palma (dif. 4, 1 agravado).' },
        { name: 'Fogata', text: 'Fuego considerable (dif. 5, 2 agravados por turno).' },
        { name: 'Pira', text: 'Gran hoguera (dif. 7, 2 agravados).' },
        { name: 'Infierno', text: 'Un incendio devastador (dif. 9, 3 agravados por turno).' },
      ]},
      { name: 'Manos de la Destrucción', text: 'Descomponer y destruir la materia; senda de fama infernal, común entre taumaturgos del Sabbat.', levels: [
        { name: 'Deterioro', text: 'Envejeces 10 años por minuto de contacto un objeto inanimado.' },
        { name: 'Retorcer la Madera', text: 'Con la mirada combas y deformas madera hasta inutilizarla.' },
        { name: 'Toque Corrosivo', text: 'Segregas un ácido que corroe metal, madera y carne (daño agravado).' },
        { name: 'Atrofia', text: 'Marchitas un miembro de la víctima; permanente en mortales.' },
        { name: 'Convertir en Polvo', text: 'Cada éxito envejece 10 años a la víctima mortal con solo tocarla.' },
      ]},
      { name: 'Senda de Marte', text: 'Magia de guerra del Sabbat: bendiciones marciales para el combate.', levels: [
        { name: 'Grito de Guerra', text: 'Un alarido que suma 1 a tu Coraje y refuerza tu Voluntad frente a poderes hostiles una escena.' },
        { name: 'Golpe Certero', text: 'Tu siguiente ataque de Pelea o Pelea con Armas impacta automáticamente.' },
        { name: 'Danza del Viento', text: 'Esquivas cualquier número de ataques con la reserva completa durante una escena.' },
        { name: 'Corazón Intrépido', text: '+1 a Fuerza, Destreza y Resistencia durante una escena; luego exige reposo.' },
        { name: 'Compañeros de Armas', text: 'Extiendes los poderes anteriores a tus compañeros de manada con un toque.' },
      ]},
      { name: 'Movimiento Mental', text: 'Telequinesis mediante la sangre; a nivel 3 permite levitar y "volar".', levels: [
        { name: 'Medio kilo', text: 'Manipulas a distancia objetos muy ligeros.' },
        { name: 'Diez kilos', text: 'Mueves objetos pequeños con soltura.' },
        { name: 'Cien kilos', text: 'Puedes levitar y desplazarte volando a velocidad de carrera.' },
        { name: 'Doscientos cincuenta kilos', text: 'Lanzas objetos con Fuerza igual a tu nivel de senda.' },
        { name: 'Quinientos kilos', text: 'Manejas grandes masas con la sola voluntad.' },
      ]},
      { name: 'Poder de Neptuno', text: 'Manipular el agua, sobre todo estancada; a nivel 3 puedes especializarte en dulce o salada.', levels: [
        { name: 'Ojos del Mar', text: 'Observas en una masa de agua sucesos pasados ocurridos a su alrededor.' },
        { name: 'Prisión de Agua', text: 'El agua cobra vida y aprisiona a tu objetivo.' },
        { name: 'Sangre en Agua', text: 'Con un toque transmutas la sangre de la víctima en agua; letal para mortales.' },
        { name: 'Muro Fluido', text: 'Alzas una barrera de agua casi infranqueable, incluso para seres incorpóreos.' },
        { name: 'Deshidratar', text: 'Extraes el agua del cuerpo de la víctima a la vista: daño letal no absorbible.' },
      ]},
      { name: 'Senda de la Tecnomancia', text: 'Control místico de los aparatos electrónicos; la senda más reciente del canon Tremere.', levels: [
        { name: 'Análisis', text: 'Tocando un aparato comprendes temporalmente su propósito y manejo.' },
        { name: 'Sobrecarga', text: 'Fríes la alimentación de un dispositivo, hasta dejarlo inservible.' },
        { name: 'Cifrado/Descifrado', text: 'Sellas místicamente aparatos o datos para que solo tú los uses.' },
        { name: 'Acceso Remoto', text: 'Manejas un dispositivo a la vista sin tocarlo, con la mente.' },
        { name: 'Teletrabajo', text: 'Proyectas tu consciencia por Internet y usas la senda sobre lo que encuentres.' },
      ]},
      { name: 'Senda de la Venganza del Padre', text: 'Justicia cainita basada en el Libro de Nod: condenas recitadas que solo afectan a vampiros.', levels: [
        { name: 'Letanía de Zillah', text: 'Revela los vínculos de sangre y vinculi del objetivo.' },
        { name: 'Orgullo de la Bruja', text: 'Reduce la Apariencia del objetivo a cero durante una noche.' },
        { name: 'Banquete de Cenizas', text: 'La víctima solo puede alimentarse de cenizas durante una semana.' },
        { name: 'Censura de Uriel', text: 'La luz atormenta y hiere al objetivo durante una semana.' },
        { name: 'Despedida', text: 'Devuelve al diablerista a su generación original durante una semana.' },
      ]},
      { name: 'Senda Verde', text: 'Manipular la materia vegetal, viva o muerta.', levels: [
        { name: 'Sabiduría Vegetal', text: 'Con un toque conversas con el espíritu de una planta.' },
        { name: 'Acelerar el Paso de las Estaciones', text: 'Aceleras el crecimiento o la descomposición de una planta.' },
        { name: 'Danza de las Enredaderas', text: 'Animas vegetación hasta tu propia masa, también para el combate.' },
        { name: 'Refugio Verde', text: 'Tejes un refugio vegetal que bloquea los elementos e incluso el sol.' },
        { name: 'Despertar a los Gigantes del Bosque', text: 'Animas árboles enteros que obedecen tus órdenes por un tiempo.' },
      ]},
    ],
    rituals: [
      { level: 1, name: 'Atar la Lengua Acusadora', text: 'Impide a la víctima hablar mal de ti mientras no supere tu conjuro.' },
      { level: 1, name: 'Comunicación con el Sire del Vástago', text: 'Hablas telepáticamente con tu Sire a cualquier distancia.' },
      { level: 1, name: 'Defensa del Refugio Sagrado', text: 'La luz solar no entra en un radio de seis metros mientras permanezcas dentro.' },
      { level: 1, name: 'Despertar con la Frescura de la Tarde', text: 'Despiertas de día ante el peligro y actúas sin penalización dos turnos.' },
      { level: 1, name: 'Desviación de la Muerte de Madera', text: 'La primera estaca que fuese a empalarte se desintegra.' },
      { level: 1, name: 'Disponer la Vasija de Transferencia', text: 'Un recipiente sellado intercambia su sangre con la de quien lo toca.' },
      { level: 1, name: 'Dominó de la Vida', text: 'Simulas un rasgo humano (respirar, comer, calor...) durante una noche.' },
      { level: 1, name: 'Ensalmo del Pastor', text: 'Localizas a todos los miembros de tu Rebaño en kilómetros a la redonda.' },
      { level: 1, name: 'Éxtasis de Sangre', text: 'Sensación de alimentarte sin beber: aplaca el frenesí por hambre una hora.' },
      { level: 1, name: 'Iluminar el Rastro de la Presa', text: 'El camino de tu presa reluce, solo ante tus ojos.' },
      { level: 1, name: 'Pureza de la Carne', text: 'Expulsas de tu cuerpo toda sustancia extraña: drogas, venenos, balas...' },
      { level: 1, name: 'Rencor de la Viuda', text: 'Con una muñeca infliges dolor o escozor a distancia, sin daño real.' },
      { level: 1, name: 'Toque del Diablo', text: 'Marcas a un mortal para que todos lo traten con desprecio una noche.' },
      { level: 2, name: 'Bombardeo de Máquinas', text: 'Detienes cualquier máquina mientras te concentres.' },
      { level: 2, name: 'Camino de la Sangre', text: 'De una muestra de vitae extraes linaje, generación y vínculos del dueño.' },
      { level: 2, name: 'Círculo de Protección contra Ghouls', text: 'Círculo ritual que los ghouls no pueden cruzar sin dolor.' },
      { level: 2, name: 'Filo Ardiente', text: 'Un arma de cuerpo a cuerpo inflige daño agravado en sus próximos golpes.' },
      { level: 2, name: 'Foco Principal de Infusión de Vitae', text: 'Guardas un punto de sangre en un objeto pequeño para liberarlo a voluntad.' },
      { level: 2, name: 'Ojos del Halcón Nocturno', text: 'Ves y oyes a través de un ave rapaz que diriges mentalmente.' },
      { level: 2, name: 'Ponerse la Máscara de Sombras', text: 'Vuelves translúcidos y silenciosos a uno o más sujetos.' },
      { level: 2, name: 'Protección contra Ghouls', text: 'Un glifo sobre un objeto que abrasa a los ghouls que lo tocan.' },
      { level: 2, name: 'Remedio de la Patria', text: 'Ungüento de tierra natal y sangre que cura una herida agravada por noche.' },
      { level: 3, name: 'Adherencia del Insecto', text: 'Trepas por muros y techos con una araña bajo la lengua.' },
      { level: 3, name: 'Asistente Sanguíneo', text: 'Conjuras un pequeño ayudante animado, leal e inmune al control mental.' },
      { level: 3, name: 'Astil de Sosiego Retardado', text: 'La punta de una estaca de serbal se abre camino sola hacia el corazón.' },
      { level: 3, name: 'Carne de Roce Ígneo', text: 'Quien toque tu piel a propósito sufre quemaduras agravadas hasta el alba.' },
      { level: 3, name: 'Espejo de la Segunda Visión', text: 'Un espejo que refleja la verdadera forma de lo sobrenatural.' },
      { level: 3, name: 'Paso Incorpóreo', text: 'Te vuelves inmaterial en trayectoria recta: muros, puertas, ataduras.' },
      { level: 3, name: 'Pavés de la Presencia Inmunda', text: 'Los poderes de Presencia dirigidos contra ti rebotan en su invocador.' },
      { level: 3, name: 'Protección contra Lupinos', text: 'Glifo con polvo de plata que castiga el toque de los hombres lobo.' },
      { level: 4, name: 'Astilla Servidora', text: 'Una estaca animada que persigue por sí sola el corazón de tu objetivo.' },
      { level: 4, name: 'Caminante sobre Fuego', text: 'Resistencia antinatural al fuego durante una hora: lo absorbes con Resistencia (+Fortaleza).' },
      { level: 4, name: 'Corazón de Piedra', text: 'Tu corazón se vuelve piedra: casi inmune al estacamiento, a costa de tus emociones.' },
      { level: 4, name: 'Hueso de Mentiras', text: 'Un hueso centenario que fuerza a decir la verdad a quien lo sostiene.' },
      { level: 4, name: 'Círculo de Protección contra Vástagos', text: 'Círculo ritual que los vampiros no pueden cruzar.' },
      { level: 5, name: 'Carne de Papel', text: 'Reduce a 1 la Resistencia (y Fortaleza) de la víctima durante una noche.' },
      { level: 5, name: 'Contrato de Sangre', text: 'Un pacto escrito y firmado con sangre, inquebrantable hasta cumplirse o arder.' },
      { level: 5, name: 'Encantar Talismán', text: 'Creas tu talismán personal: amplifica tu senda primaria, rituales y defensa mágica.' },
      { level: 5, name: 'Escapar hacia un Verdadero Amigo', text: 'Un círculo grabado que te teletransporta junto a tu amigo más querido.' },
      { level: 5, name: 'Círculo de Protección contra Espíritus y Fantasmas', text: 'Círculos rituales que vedan el paso a seres incorpóreos (versiones para espíritus, fantasmas y demonios).' },
    ],
  },
  vicissitude: {
    levels: [
      { name: 'Rostro Maleable', text: 'Remodelas tus propios rasgos como arcilla: cambias tu aspecto al tacto.' },
      { name: 'Moldear la Carne', text: 'Esculpes la carne de otros con las manos, para embellecer o desfigurar.' },
      { name: 'Moldear los Huesos', text: 'Extiendes tu arte al hueso: reestructuras cuerpos enteros.' },
      { name: 'Forma Horrenda', text: 'Te conviertes en un monstruo de pesadilla optimizado para el combate.' },
      { name: 'Forma de Sangre', text: 'Tu cuerpo entero se vuelve vitae viva y consciente.' },
    ],
  },
};

export const getDisciplineContent = (key: string): DisciplineContent | undefined =>
  DISCIPLINE_CONTENT[key];

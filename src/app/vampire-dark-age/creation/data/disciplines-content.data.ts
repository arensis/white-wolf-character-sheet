/**
 * Per-level discipline content for *Edad Oscura: Vampiro* (Capítulo Seis).
 * Each level lists the power name plus a concise summary of what it does and
 * the roll/cost involved. Passive disciplines (Celerity, Potence, Fortitude)
 * use `passive`; path-based disciplines (Mortis, Thaumaturgy) list `paths`.
 *
 * Spanish-only for now (content phase, Spanish-first). English/i18n migration
 * is a follow-up.
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
  /** For path-based disciplines (Mortis, Thaumaturgy). */
  paths?: DisciplinePathInfo[];
  pathsNote?: string;
  /** Rituals attached to path-based disciplines. */
  rituals?: DisciplineRitual[];
  ritualsNote?: string;
}

export const DISCIPLINE_CONTENT: Record<string, DisciplineContent> = {
  animalism: {
    levels: [
      { name: 'Habla Salvaje', text: 'Te comunicas con un animal y le pides favores sencillos. Tirada de Manipulación + Trato con Animales.' },
      { name: 'La Llamada de Noé', text: 'Atraes a los animales de los alrededores, que acuden a ti. Carisma + Supervivencia; el entorno determina qué acude.' },
      { name: 'Intimidación de la Bestia', text: 'Sojuzgas la Bestia de un ser: calmas un frenesí o lo provocas. Manipulación + Intimidación resistida por la Fuerza de Voluntad del objetivo.' },
      { name: 'Cabalgar la Mente Salvaje', text: 'Posees y controlas el cuerpo de un animal a distancia mientras el tuyo queda inerte. Manipulación + Trato con Animales.' },
      { name: 'Transmitir a la Bestia', text: 'Arrancas la Bestia de un vampiro o ghoul y lo lanzas al frenesí (o se la calmas). Manipulación + Empatía.' },
    ],
  },
  auspex: {
    levels: [
      { name: 'Sentidos Aguzados', text: 'Agudizas tus cinco sentidos muy por encima de lo normal. Percepción + Alerta; los estímulos intensos pueden cegarte o aturdirte.' },
      { name: 'Visión del Alma', text: 'Lees el aura de alguien: emociones, salud y naturaleza sobrenatural. Percepción + Empatía.' },
      { name: 'El Toque del Espíritu', text: 'Al tocar un objeto percibes impresiones de su pasado y sus dueños. Percepción + Investigación.' },
      { name: 'Robo de Secretos', text: 'Telepatía: lees pensamientos superficiales o proyectas los tuyos. Inteligencia + Subterfugio resistida por Fuerza de Voluntad.' },
      { name: 'Viaje del Ánima', text: 'Proyectas tu mente fuera del cuerpo para viajar incorpóreo. Percepción + Ocultismo.' },
    ],
  },
  celerity: {
    passive:
      'Velocidad sobrehumana. Gastando un punto de sangre por turno sumas tu puntuación de Celeridad a tu iniciativa, esquiva y número de acciones. Disciplina pasiva de niveles 1 a 5.',
  },
  potence: {
    passive:
      'Fuerza física inhumana. Cada nivel añade un dado automático (un éxito seguro) a las tiradas de Fuerza y de daño cuerpo a cuerpo. Disciplina pasiva de niveles 1 a 5.',
  },
  fortitude: {
    passive:
      'Resistencia sobrenatural. Cada nivel añade un dado automático a las tiradas de absorber daño, y permite absorber incluso daño agravado (fuego, sol, garras). Disciplina pasiva de niveles 1 a 5.',
  },
  dominate: {
    levels: [
      { name: 'Observancia de la Palabra Pronunciada', text: 'Una orden de una sola palabra que la víctima obedece al instante; exige contacto visual. Manipulación + Intimidación, dificultad = Fuerza de Voluntad del objetivo.' },
      { name: 'Murmullo de la Falsa Voluntad', text: 'Órdenes habladas más complejas, incluso diferidas a un suceso futuro. Manipulación + Liderazgo, dificultad = Fuerza de Voluntad.' },
      { name: 'Memoria del Juerguista', text: 'Borras o reescribes recuerdos recientes de la víctima. Manipulación + Subterfugio; los éxitos miden cuánto puedes alterar.' },
      { name: 'Tentación de la Sugerencia Sutil', text: 'Implantas una orden latente que se activa más tarde, condicionando su conducta. Carisma + Liderazgo.' },
      { name: 'Recipiente', text: 'Expulsas la mente de la víctima y posees su cuerpo. Carisma + Subterfugio resistido por Fuerza de Voluntad.' },
    ],
  },
  obfuscate: {
    levels: [
      { name: 'Capa de Sombras', text: 'Te ocultas en sombras y rincones volviéndote imperceptible mientras no te muevas ni actúes. Sin tirada en condiciones normales.' },
      { name: 'Presencia Invisible', text: 'Te mueves sin ser visto incluso a plena vista, mientras no llames la atención. Sin tirada salvo que actúes de forma notoria.' },
      { name: 'Máscara de las Mil Caras', text: 'Alteras tu apariencia para parecer otra persona anodina o concreta. Manipulación + Interpretación.' },
      { name: 'Desvanecimiento', text: 'Desapareces de la vista de quien te observa directamente. Carisma + Sigilo resistido por la Fuerza de Voluntad del testigo.' },
      { name: 'Encubrimiento de la Concurrencia', text: 'Extiendes tu ocultación a un grupo de personas a tu alrededor. Carisma + Sigilo.' },
    ],
  },
  presence: {
    levels: [
      { name: 'Pasión', text: 'Avivas una emoción en los presentes, atrayéndolos o sobrecogiéndolos. Carisma + Empatía.' },
      { name: 'Mirada Aterradora', text: 'Una mirada que llena de terror a la víctima y la hace huir o someterse. Carisma + Intimidación resistido por Fuerza de Voluntad.' },
      { name: 'Encantamiento', text: 'Haces que el objetivo te admire y desee complacerte durante un tiempo. Apariencia + Empatía resistido por Fuerza de Voluntad.' },
      { name: 'Invocación', text: 'Llamas a un sujeto sobre el que ya has usado Presencia y acudirá a ti desde cualquier distancia. Carisma + Subterfugio.' },
      { name: 'Majestad', text: 'Irradias una presencia tan imponente que nadie osa atacarte ni desafiarte. Carisma + Intimidación; los demás deben superar tu Fuerza de Voluntad para actuar contra ti.' },
    ],
  },
  protean: {
    levels: [
      { name: 'Testigo de las Tinieblas', text: 'Tus ojos brillan y ves en la oscuridad total. Sin tirada; gasto de un punto de sangre.' },
      { name: 'Garras de la Bestia', text: 'Te crecen garras que causan daño agravado. Gasto de un punto de sangre; sin tirada para activarlas.' },
      { name: 'Enterramiento', text: 'Te fundes con la tierra para descansar protegido del sol. Sin tirada; requiere contacto con tierra desnuda.' },
      { name: 'Forma de la Bestia', text: 'Te transformas en lobo o murciélago, con sus capacidades. Gasto de sangre; sin tirada salvo interrupciones.' },
      { name: 'Cuerpo de Espíritu', text: 'Disuelves tu cuerpo en niebla, inmune a daños físicos. Gasto de sangre; sin tirada.' },
    ],
  },
  dementation: {
    levels: [
      { name: 'Pasión del Íncubo', text: 'Avivas o apagas una emoción de la víctima hasta el delirio. Carisma + Empatía resistido por Fuerza de Voluntad.' },
      { name: 'Embrujar el Alma', text: 'Siembras un fragmento de locura temporal en la mente del objetivo. Manipulación + Subterfugio.' },
      { name: 'Ojos del Caos', text: 'Percibes el patrón oculto de la locura e intuyes verdades y secretos. Percepción + Empatía.' },
      { name: 'Silenciar la Mente Cuerda', text: 'Sumes a la víctima en alucinaciones que la incapacitan. Manipulación + Intimidación resistido por Fuerza de Voluntad.' },
      { name: 'Locura Aullante', text: 'Provocas una psicosis total y temporal en el objetivo. Carisma + Liderazgo resistido por Fuerza de Voluntad.' },
    ],
  },
  chimerstry: {
    levels: [
      { name: 'Ignis Fatuus', text: 'Creas una ilusión menor que afecta a un solo sentido. Manipulación + Subterfugio.' },
      { name: 'Dweomer', text: 'Tu ilusión afecta a todos los sentidos y a varios testigos. Manipulación + Subterfugio.' },
      { name: 'Aparición', text: 'Das movimiento y aparente vida a tus ilusiones. Manipulación + Subterfugio.' },
      { name: 'Permanencia', text: 'Tus ilusiones perduran sin tu concentración hasta que algo las desmiente. Gasto de fuerza de voluntad.' },
      { name: 'Realidad Horrenda', text: 'La ilusión se vuelve tan real que puede causar daño verdadero a quien la cree. Manipulación + Subterfugio resistido por Fuerza de Voluntad.' },
    ],
  },
  serpentis: {
    levels: [
      { name: 'Ojos de Serpiente', text: 'Tu mirada paraliza e hipnotiza a quien la cruza. Carisma + Intimidación resistido por Fuerza de Voluntad.' },
      { name: 'Lengua de Áspid', text: 'Tu lengua se alarga y endurece como un aguijón que causa daño agravado. Gasto de un punto de sangre.' },
      { name: 'Piel de Víbora', text: 'Tu piel se vuelve escamosa y resbaladiza, difícil de agarrar y resistente. Gasto de sangre.' },
      { name: 'Forma de Cobra', text: 'Te transformas en una gran serpiente con sus sentidos y veneno. Gasto de sangre.' },
      { name: 'Engañar a la Balanza de Anubis', text: 'Robas y atesoras el corazón propio o ajeno, ganando control sobre esa criatura. Ritual prolongado.' },
    ],
  },
  vicissitude: {
    levels: [
      { name: 'Semblante Maleable', text: 'Remodelas tu propio rostro y cuerpo como arcilla. Inteligencia + Medicina; permanente hasta nueva alteración.' },
      { name: 'Transmutar la Arcilla Mortal', text: 'Esculpes la carne de otra criatura tocándola. Destreza + Medicina; el objetivo debe estar inmovilizado o consentir.' },
      { name: 'Desgarrar la Estructura Ósea', text: 'Moldeas el hueso: lo afilas en armas o lo deformas. Fuerza + Medicina.' },
      { name: 'Despertar la Forma Zulo', text: 'Adoptas una forma monstruosa de combate, mayor y con garras óseas. Gasto de sangre.' },
      { name: 'Influjo del Humor Sanguíneo', text: 'Reconfiguras tu cuerpo a voluntad, fluyendo entre formas. Gasto de sangre y fuerza de voluntad.' },
    ],
  },
  obtenebration: {
    levels: [
      { name: 'Juego de Sombras', text: 'Manipulas las sombras existentes para asustar, distraer u ocultar. Manipulación + Ocultismo.' },
      { name: 'Nocturno', text: 'Envuelves una zona en oscuridad sobrenatural impenetrable. Manipulación + Ocultismo.' },
      { name: 'Los Brazos de Ahriman', text: 'Das forma a las sombras como tentáculos que agarran y atacan. Manipulación + Ocultismo; daño según los éxitos.' },
      { name: 'Sombras Nocturnas', text: 'Te conviertes parcialmente en sombra, deslizándote y resistiendo lo físico. Gasto de sangre.' },
      { name: 'Avatar Tenebroso', text: 'Te transformas por completo en una entidad de oscuridad viviente. Gasto de sangre y fuerza de voluntad.' },
    ],
  },
  quietus: {
    levels: [
      { name: 'Silencio de la Sangre Ardiente', text: 'Creas una esfera de silencio absoluto a tu alrededor. Manipulación + Sigilo.' },
      { name: 'Toque del Escorpión', text: 'Tu sangre se vuelve un veneno corrosivo al tacto o en la bebida. Gasto de sangre; resistencia por Resistencia del objetivo.' },
      { name: 'La Llamada de Dagon', text: 'Potencias tu sangre venenosa para efectos más letales. Gasto de sangre.' },
      { name: 'La Caricia de Baal', text: 'Tu sangre venenosa causa daño agravado al contacto en combate. Gasto de sangre.' },
      { name: 'Esencia de Sangre', text: 'Dominio total sobre tu vitae como arma y herramienta. Gasto de sangre.' },
    ],
  },
  mortis: {
    howItWorks:
      'Mortis progresa por tres sendas; al coger el primer punto eliges una como primaria (los Capadocios pueden elegir cualquiera de las tres). La senda primaria siempre está al mismo nivel que tu puntuación de Mortis y sube con ella; las sendas secundarias se compran aparte pero quedan por debajo de la primaria hasta que la domines (5). Ninguna senda pasa de 5. Los rituales se aprenden por separado: puedes conocer cualquier ritual de nivel igual o inferior a tu puntuación de Mortis (niveles 1-6) y empiezas con uno de nivel 1.',
    pathsNote: 'Las tres sendas de Mortis. Cada una se despliega del nivel 1 al 5.',
    paths: [
      {
        name: 'La Podredumbre de la Tumba',
        text: 'Canaliza sobre la carne la fuerza del deterioro.',
        levels: [
          { name: 'Destruir la Cáscara', text: 'Conviertes un cadáver humano en unos 15 kg de polvo. Gasta 1 sangre + Inteligencia + Medicina (dif 6); tarda (5 − éxitos) turnos.' },
          { name: 'Rigor Mortis', text: 'Vuelves rígido a un ser vivo o no muerto (como estacado). Gasta 1 Fuerza de Voluntad + Manipulación + Medicina (dif 7); cada éxito lo congela un turno. Blanco visible a 25 m o menos.' },
          { name: 'Marchitar', text: 'Atrofias e inutilizas un miembro del blanco. Gasta 1 Fuerza de Voluntad y tócalo (Destreza + Pelea si se resiste); inflige 2 heridas agravadas que dejan el miembro tullido hasta curarlas.' },
          { name: 'Corromper la Carne No Muerta', text: 'Contagias una enfermedad virulenta. Manipulación + Medicina (dif 6) + 1 Fuerza de Voluntad; blanco a 20 m o menos. La víctima resiste con Resistencia (+Fortaleza) vs dif = tu Fuerza de Voluntad.' },
          { name: 'Disolver la Carne', text: 'Reduces a cenizas la carne de un vampiro (como quemada). Gasta 2 sangre + 1 Fuerza de Voluntad y rocía tu vitae; Fuerza de Voluntad vs dif = Resistencia +3 de la víctima; cada éxito, 1 herida agravada.' },
        ],
      },
      {
        name: 'El Cadáver Dentro del Monstruo',
        text: 'Aplica a un vampiro los rasgos del cadáver.',
        levels: [
          { name: 'Máscara de la Muerte', text: 'Asumes (o impones a otro) un aspecto cadavérico: −2 Destreza y Apariencia. Gasta 1 sangre; para infligirla, toca + Resistencia + Medicina (dif = Resistencia +3). Quieto, pasas por cadáver.' },
          { name: 'Frío de la Tumba', text: 'Adoptas la insensibilidad de la muerte. Gasta 1 Fuerza de Voluntad: durante la escena ignoras penalizaciones por heridas y +1 dado a resistir manipulación emocional, pero −1 dado para manipular a otros.' },
          { name: 'Maldición de la Vida', text: 'Impones a un no muerto los rasgos molestos de los vivos. 1 Fuerza de Voluntad + Inteligencia + Medicina (dif 8); blanco a 20 m o menos: +2 a la dif de todas sus tiradas hasta la próxima puesta de sol.' },
          { name: 'Don del Cadáver', text: 'Ignoras brevemente las debilidades vampíricas (sol, estaca, frenesí). 1 Fuerza de Voluntad + Resistencia + Ocultismo (dif 8); cada éxito, 1 turno en estado de cadáver animado.' },
          { name: 'Don de la Vida', text: 'Recuperas lo positivo de la vida (comer, el sol no quema). Gasta 12 puntos de sangre + Resistencia + Ocultismo (dif 6), basta 1 éxito. Dura hasta medianoche; luego la Bestia se cobra venganza 6 noches.' },
        ],
      },
      {
        name: 'Animación Cadavérica',
        text: 'Hace que los muertos imiten los hábitos de la vida.',
        levels: [
          { name: 'Rastro de Vida', text: 'Haces que un cadáver muestre signos de vida (espasmos, pulso). Manipulación + Ocultismo (dif 6); cadáver en un radio de 10 m.' },
          { name: 'Invocar al Sirviente Homúnculo', text: 'Animas una pequeña parte de un cadáver (una mano) con sentidos y telepatía hasta 400 m. Gasta 1 sangre + Destreza + Ocultismo (dif 7).' },
          { name: 'Animar al Sirviente Cadavérico', text: 'Levantas un cadáver como sirviente (no combatiente). Gasta 1 sangre + Manipulación + Ocultismo (dif 6); 3 turnos; activo 1 día por éxito.' },
          { name: 'Llamar al Athanatos', text: 'Conviertes un cadáver en un guerrero no muerto asesino. Gasta 2 sangre + Resistencia + Ocultismo (dif 8); 5 min. Mantén el control con Fuerza de Voluntad (dif 7).' },
          { name: 'Convocar al Ejército de Cadáveres', text: 'Animas varios guerreros (2 por éxito). Gasta 3 sangre + Resistencia + Ocultismo (dif 8); 10 min. Control con Fuerza de Voluntad (dif 9).' },
        ],
      },
    ],
    ritualsNote: 'Los rituales de Mortis usan Inteligencia + Ocultismo (dif 4 + nivel del ritual) y unos 5 min por nivel. Empiezas con un ritual de nivel 1.',
    rituals: [
      { level: 1, name: 'Última Visión', text: 'Ves la última imagen que el cadáver contempló en vida mirando sus ojos (que se consumen). 5 min.' },
      { level: 1, name: 'Revivir la Vitae Fría', text: 'Refrescas la sangre de un cadáver para alimentarte sin cazar. Media hora; revives puntos de sangre = éxitos (Inteligencia + Ocultismo).' },
      { level: 2, name: 'Ojos de la Tumba', text: 'Atormentas a la víctima con visiones de su propia muerte durante una semana. 2 horas; requiere un objeto suyo.' },
      { level: 5, name: 'Caminar a Través del Manto', text: 'Tu alma deja el cuerpo y cruza al limbo de los muertos, con capacidad de regresar. Inteligencia + Ocultismo; del ocaso a medianoche.' },
    ],
  },
  thaumaturgy: {
    howItWorks:
      'La Taumaturgia se despliega en sendas; al coger el primer punto eliges una como primaria (los Tremere pueden elegir cualquiera). La senda primaria siempre está al mismo nivel que tu puntuación de Taumaturgia; las sendas secundarias se compran aparte pero quedan por debajo de la primaria hasta que la domines (5). Ninguna senda pasa de 5. Al usar un poder de senda gastas 1 punto de sangre y tiras Fuerza de Voluntad (dif = nivel del poder +3). Los rituales se aprenden por separado: puedes conocer cualquier ritual de nivel igual o inferior a tu puntuación (niveles 1-6) y empiezas con uno de nivel 1.',
    pathsNote: 'Las sendas de Taumaturgia. Cada una se despliega del nivel 1 al 5.',
    paths: [
      {
        name: 'Rego Vitae (Senda de la Sangre)',
        text: 'Controlar y analizar la vitae. Senda primaria habitual de los Tremere.',
        levels: [
          { name: 'Sabor de la Sangre', text: 'Al probar una gota conoces generación, frescura y cantidad de esa sangre (o si un mortal es ghoul o está enfermo). Más éxitos, más detalle.' },
          { name: 'Furia de la Sangre', text: 'Tocando al blanco le fuerzas a gastar su sangre y agitas su Bestia. Cada éxito: gasta 1 punto de sangre (curar o subir Físico) y +1 dif para resistir el frenesí.' },
          { name: 'Sangre del Poder', text: 'Espesas tu sangre bajando tu generación efectiva. Cada éxito: −1 a tu generación efectiva o +1 hora de duración (afecta a Dominación, gasto y reserva de sangre).' },
          { name: 'Robo de Vitae', text: 'Robas sangre a distancia (15 m): salta por el aire hacia ti. Cada éxito roba 1 punto de sangre; un mortal sufre 1 daño letal por punto.' },
          { name: 'Caldero de Sangre', text: 'Hierves la sangre dentro de la víctima. Tócala (Destreza + Pelea) y tira Fuerza de Voluntad + sangre; cada éxito destruye 1 punto de sangre y causa 1 daño agravado. Un éxito mata a un mortal.' },
        ],
      },
      {
        name: 'Creo Ignem (Conjuración del Fuego)',
        text: 'Invocas fuego frío en la mano que, al arrojarlo, arde y causa daño agravado. Gasta sangre y tira; cada éxito sostiene la llama 1 min antes de lanzarla (apuntar: Percepción + Alerta).',
        levels: [
          { name: 'Vela', text: 'Llama del tamaño de una vela (dif. para absorberla 3, 1 dado de daño/turno).' },
          { name: 'Antorcha', text: 'Tamaño de una antorcha (dif. 4, 1 dado/turno).' },
          { name: 'Fogata', text: 'Tamaño de una fogata (dif. 5, 2 dados/turno).' },
          { name: 'Pira', text: 'Tamaño de una pira (dif. 7, 2 dados/turno).' },
          { name: 'Incendio', text: 'Conflagración enorme (dif. 9, 3 dados/turno).' },
        ],
      },
      {
        name: 'Rego Tempestas (Control del Clima)',
        text: 'Dominas el clima. Gasta sangre y tira; los éxitos determinan la rapidez del cambio (de 12 h con 1 éxito a 1 turno con 5).',
        levels: [
          { name: 'Niebla', text: 'Convocas o disipas niebla.' },
          { name: 'Lluvia', text: 'Provocas o detienes la lluvia.' },
          { name: 'Viento', text: 'Levantas vientos fuertes.' },
          { name: 'Tormenta', text: 'Desatas una tormenta con truenos.' },
          { name: 'Relámpago', text: 'Llamas a un rayo contra un blanco: Percepción + Ocultismo para impactar, 10 dados de daño letal.' },
        ],
      },
      {
        name: 'Rego Motus (Movimiento)',
        text: 'Mueves objetos y personas a distancia (no más rápido que tú). Gasta sangre y tira; controlas 1 turno por éxito (la escena entera con 5). El nivel marca el peso máximo.',
        levels: [
          { name: 'Medio kilo', text: 'Pasar las páginas de un libro, apartar una cortina ligera.' },
          { name: '10 kilos', text: 'Esgrimir una daga o porra ligera, abrir una puerta.' },
          { name: '100 kilos', text: 'Volar tú mismo, abrir una puerta cerrada con llave.' },
          { name: '250 kilos', text: 'Levantar una carreta cargada, derribar un árbol.' },
          { name: '500 kilos', text: 'Levantar un caballo, derribar parte de un muro de piedra.' },
        ],
      },
      {
        name: 'Rego Elementum (Elementos)',
        text: 'Comulgas con tierra, aire, fuego y agua (no afecta a seres vivos).',
        levels: [
          { name: 'Fuerza de la Tierra', text: 'Extraes vigor de la tierra: reparte 3 círculos temporales entre Fuerza y Resistencia mientras pises el suelo. Los éxitos = turnos de duración.' },
          { name: 'Lengua de Madera', text: 'Despiertas el espíritu de un objeto inerte para hablar con él. Los éxitos marcan la calidad de la información.' },
          { name: 'Animar lo Inmóvil', text: 'Animas un objeto inanimado para que se mueva a tu voluntad. 1 Fuerza de Voluntad + 1 sangre; controlas tantos objetos como tu Inteligencia, hasta 1 hora.' },
          { name: 'Forma Elemental', text: 'Transformas tu cuerpo en tierra, aire o agua. Los éxitos determinan lo completa que es la forma; dura la noche.' },
          { name: 'Invocar Elemental', text: 'Invocas un elemental (salamandra, silfo, gnomo u ondina). Debes estar cerca del elemento; lo controlas con Manipulación + Ocultismo.' },
        ],
      },
      {
        name: 'Transitus Velociter (Viaje Veloz)',
        text: 'Desplazas a un grupo a gran velocidad en largas distancias (no es la Celeridad de combate). Gasta sangre y tira; cada éxito = 50 km/h durante 1 hora. El nivel marca a cuántos afectas.',
        levels: [
          { name: 'Una criatura', text: 'Una montura o un humano a pie.' },
          { name: 'Hasta 6 monturas', text: 'O una carreta cargada.' },
          { name: 'Hasta 12 monturas', text: 'O cuatro carros de suministros.' },
          { name: 'Hasta 24 monturas', text: 'O ocho carros, o una máquina de asedio.' },
          { name: 'Hasta 48 monturas', text: 'O 16 carros, o cuatro máquinas de asedio.' },
        ],
      },
    ],
    ritualsNote: 'Los rituales de Taumaturgia usan Inteligencia + Ocultismo (dif 3 + nivel del ritual) y unos 5 min por nivel. Empiezas con un ritual de nivel 1.',
    rituals: [
      { level: 1, name: 'Comunicación con el Sire', text: 'Contacto mental con tu sire a cualquier distancia (si él lo permite). Requiere un objeto suyo; 30 min; cada éxito, 10 min de conversación.' },
      { level: 1, name: 'Defensa del Refugio Sagrado', text: 'Impide que la luz del sol entre en un área de 6 m de radio. Escribe signos con vitae en los accesos; dura hasta que dejes el área.' },
      { level: 1, name: 'Desviación de la Muerte de Madera', text: 'Protege tu corazón contra una estaca (que se deshace en polvo). Astilla bajo la lengua + círculo de madera 1 hora; dura hasta la próxima puesta de sol.' },
      { level: 1, name: 'Toque del Diablo', text: 'Maldición sobre un mortal: todos reaccionan con hostilidad (+4 dif a sus tiradas Sociales). Le colocas una moneda; dura hasta el amanecer.' },
      { level: 1, name: 'Despertar con la Frescura de la Tarde', text: 'Te despierta (incluso de día) plenamente alerta si un peligro se acerca. Esparces cenizas de plumas quemadas.' },
      { level: 2, name: 'Revelación del Linaje de Sangre', text: 'Descubres el linaje y lazos de sangre de un vampiro. 3 horas (−15 min/éxito) + 1 punto de su sangre; cada éxito, una generación atrás.' },
      { level: 2, name: 'Portar la Máscara de Sombras', text: 'Vuelve translúcido y silencioso al sujeto (como Ofuscación 3). Hasta tantos sujetos como tu Ocultismo; dura horas = éxitos.' },
      { level: 2, name: 'Foco de Infusión de Vitae', text: 'Infunde 1 punto de sangre en un objeto pequeño para liberarlo después como un charco de sangre.' },
      { level: 2, name: 'Protección Contra Ghouls', text: 'Marcas un objeto: cualquier ghoul que lo toque sufre 3 dados de daño letal. 1 sangre + 10 min; activo en 10 horas.' },
      { level: 3, name: 'Carne de Roce Ígneo', text: 'Quien toque tu piel sufre quemaduras (1 daño agravado). Tragas una brasa (1 daño agravado); 2 horas; dura hasta la puesta de sol.' },
      { level: 3, name: 'Paso Incorpóreo', text: 'Te vuelves insustancial: atraviesas paredes e invulnerable a lo físico. Astucia + Supervivencia (dif 6); dura horas = éxitos; lleva un fragmento de espejo.' },
      { level: 3, name: 'Astilla del Sosiego Retardado', text: 'Encantas una estaca de serbal que, al clavarse, avanza sola hacia el corazón (15 éxitos acumulados = letal). 5 horas (−30 min/éxito) + 3 sangre.' },
      { level: 4, name: 'Corazón de Piedra', text: 'Transmutas tu corazón en roca: casi inmune a la estaca, pero tu empatía y trato social se desploman. 9 horas (−1 h/éxito); sobre ti mismo.' },
      { level: 4, name: 'Protección Contra Cainitas', text: 'Como Protección Contra Ghouls, pero hiere a los vampiros que tocan el objeto. Requiere 1 punto de tu sangre.' },
      { level: 5, name: 'Contrato de Sangre', text: 'Creas un contrato inviolable entre firmantes (exige dominar Rego Vitae). Escrito con tu sangre; 3 noches.' },
      { level: 5, name: 'Escapar Hacia un Amigo Fiel', text: 'Te transporta junto a la persona en quien más confías al pronunciar su verdadero nombre. Círculo de 1 m; 6 h × 6 noches + 3 sangre/noche.' },
      { level: 5, name: 'Protección Contra Espíritus', text: 'Como Protección Contra Ghouls, pero hiere a espíritus naturales y elementales (sal marina). También existen versiones Contra Fantasmas y Contra Demonios.' },
    ],
  },
};

export const getDisciplineContent = (key: string): DisciplineContent | undefined =>
  DISCIPLINE_CONTENT[key];

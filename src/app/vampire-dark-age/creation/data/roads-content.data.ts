/**
 * Rich content for the Roads (Caminos) of *Edad Oscura: Vampiro*, shown
 * inline in the concept step when a Road is selected. Includes the Hierarchy
 * of Sins table for each Road. Spanish-only for now (content phase).
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
  beast: {
    latin: 'Via Bestiae',
    nickname: 'Fieras',
    description:
      'Aceptan su destino como los más grandes cazadores: parientes del lobo y el león que viven en lugares salvajes y se rinden al hambre y al salvajismo para saciar a la Bestia. Existen en el momento, sin remordimiento ni planes; matan sólo por necesidad, rápido y sin piedad. Valoran su libertad por encima de todo y respetan únicamente a los fuertes.',
    aura: 'Amenaza (a tiradas para aterrorizar o intimidar a un adversario).',
    virtues: 'Convicción, Instinto',
    ethics: [
      'Existe de acuerdo con las necesidades de la Bestia.',
      'Haz lo que debas para sobrevivir. Ni más, ni menos.',
      'La clemencia es para los débiles. Sólo los fuertes sobreviven.',
      'El pasado está muerto, el futuro no ha nacido. El momento es tuyo.',
      'Respeta sólo a los fuertes y no jures vasallaje a nadie.',
    ],
    senderos: [
      { name: 'Sendero del Cazador', text: 'Eres un depredador, y todos los demás son tu presa.' },
      { name: 'Sendero del Nómada', text: 'La civilización es esclavitud. Corre libre y salvaje.' },
      { name: 'Sendero del Salvaje', text: 'Abraza tu odio y furia, y úsalos para destruir a los débiles.' },
    ],
    sinsTitle: 'Jerarquía de Pecados contra la Bestia',
    sins: [
      { score: 10, sin: 'Arriesgarte innecesariamente.', reason: 'La supervivencia es lo más importante.' },
      { score: 9, sin: 'No desafiar a un caudillo débil.', reason: 'Sólo los más fuertes deberían dirigir.' },
      { score: 8, sin: 'Matar por cualquier razón que no sea la supervivencia.', reason: 'El asesinato es una creación de la sociedad.' },
      { score: 7, sin: 'Evitar el contacto con la naturaleza.', reason: 'En la naturaleza está la fuerza; la civilización es blanda y débil.' },
      { score: 6, sin: 'Tortura o crueldad innecesaria.', reason: 'Sólo la gente «civilizada» hace esas cosas.' },
      { score: 5, sin: 'Hacer un sacrificio por alguien sin relación contigo.', reason: 'No debes nada a otros.' },
      { score: 4, sin: 'Rehusar matar cuando sea importante para tu supervivencia.', reason: 'Nada es más importante que sobrevivir.' },
      { score: 3, sin: 'Fracasar en defender tu territorio.', reason: 'Lo que no defiendas te será arrebatado.' },
      { score: 2, sin: 'Mostrar clemencia a un enemigo.', reason: 'La clemencia es para los débiles.' },
      { score: 1, sin: 'Abstenerse de alimentarse estando hambriento.', reason: 'La Bestia debe ser satisfecha.' },
    ],
  },
  heaven: {
    latin: 'Via Caeli',
    nickname: 'Los Fieles',
    description:
      'Aceptan la carga que Dios ha puesto sobre ellos y buscan un propósito en ella, creyendo que Dios prueba su fe como probó a Abraham y a Job. Rechazan a la Bestia como la voz de Satán, siguen los sacramentos de la Iglesia y se reúnen en congregaciones guiadas por sacerdotes cenicientos. Sus sectas y herejías son numerosas.',
    aura: 'Santidad (a tiradas Sociales basadas en parecer un ser santo y divino).',
    virtues: 'Conciencia, Autocontrol',
    ethics: [
      'Dios puso su marca sobre Caín y sus chiquillos como parte de su gran plan.',
      'La palabra de Dios es la ley. Desafiar a Dios es un pecado que lleva a la perdición.',
      'Nadie está por encima de la Ley de Dios.',
      'Ama y sirve a Dios en todas las cosas.',
      'Niega al Diablo negando la Bestia y a todas las criaturas del Infierno.',
    ],
    senderos: [
      { name: 'Sendero de la Divinidad', text: 'Estás entre los elegidos y deberías ser adorado como tal.' },
      { name: 'Sendero de la Penitencia', text: 'Tu existencia condenada es un castigo por tus pecados.' },
      { name: 'Sendero del Justo Castigo', text: 'Eres el ángel de la venganza de Dios y azote de los pecadores.' },
    ],
    sinsTitle: 'Jerarquía de Pecados contra el Cielo',
    sins: [
      { score: 10, sin: 'Violar cualquiera de los Diez Mandamientos, por cualquier motivo.', reason: 'La palabra de Dios es la ley.' },
      { score: 9, sin: 'No denunciar la corrupción y el pecado.', reason: 'Todo lo que el Diablo necesita es que los fieles no hagan nada.' },
      { score: 8, sin: 'Actuar movido por el orgullo, la avaricia, la gula u otro impulso pecaminoso.', reason: 'El pecado es el camino hacia la Bestia.' },
      { score: 7, sin: 'Hurto, robo, vandalismo voluntario.', reason: 'No robarás.' },
      { score: 6, sin: 'Causar daño a una persona pía y virtuosa.', reason: 'Dios lo ve todo y castiga tales pecados.' },
      { score: 5, sin: 'Alimentarse de un inocente sin permiso.', reason: 'Dios protege a los inocentes.' },
      { score: 4, sin: 'Actos blasfemos o heréticos.', reason: 'No tendrás otros dioses aparte de Mí.' },
      { score: 3, sin: 'Permitir que un crimen o pecado importante quede sin castigo.', reason: '«La venganza es mía», dijo el Señor.' },
      { score: 2, sin: 'El asesinato de inocentes.', reason: 'No matarás. No repitas el pecado de Caín.' },
      { score: 1, sin: 'Ayudar a un demonio u otro agente sobrenatural del mal.', reason: 'Sirve al mal y servirás a la Bestia.' },
    ],
  },
  humanity: {
    latin: 'Via Humanitatis',
    nickname: 'Pródigos',
    description:
      'Se ven no distintos en mente o alma de sus congéneres humanos y se aferran a los vestigios de su humanidad. Hallan la salvación en simples actos de compasión y en el propio acto de vivir; su razón y conciencia los guían. Cometen pecados pequeños para prevenir otros mayores y buscan redimirse. Encarnan el ideal Brujah de convivencia entre Cainitas y mortales.',
    aura: 'Normalidad (a intentos de ganar simpatía y parecer normal).',
    virtues: 'Conciencia, Autocontrol',
    ethics: [
      'A un hombre se le mide por sus palabras, obras y corazón, no por un accidente de nacimiento.',
      'La capacidad de razonar distingue al hombre de la bestia.',
      'Haz a otros lo que te gustaría que te hicieran a ti.',
      'Todos los hombres son hermanos.',
      'La libertad se gana con dignidad y justicia.',
    ],
    senderos: [
      { name: 'Sendero del Aliento', text: 'Actúa como un hombre para ser un hombre: respira, trabaja, goza y vive.' },
      { name: 'Sendero de la Comunidad', text: 'A solas estás condenado; en compañía puedes salvarte. Sirve a otros.' },
      { name: 'Sendero del Vigor', text: 'Detenerse es marchitarse y morir. Muévete y vivirás.' },
    ],
    sinsTitle: 'Jerarquía de Pecados contra la Humanidad',
    sins: [
      { score: 10, sin: 'Pensamientos egoístas.', reason: 'Los pensamientos deben ser tan buenos como las obras.' },
      { score: 9, sin: 'Actos egoístas menores.', reason: 'La compasión nos distingue de las bestias.' },
      { score: 8, sin: 'Herir a otra persona (deliberadamente o no).', reason: 'Sigue la Regla de Oro.' },
      { score: 7, sin: 'Hurto y robo.', reason: 'Respeta la propiedad de otros.' },
      { score: 6, sin: 'Violación accidental de otro (p. ej., beber hasta dejar seco a un recipiente por hambre).', reason: 'La ignorancia no disculpa la crueldad.' },
      { score: 5, sin: 'Destrucción sin motivo.', reason: 'El hombre crea, la Bestia destruye.' },
      { score: 4, sin: 'Violación apasionada de otro (p. ej., matar en frenesí).', reason: 'Quien actúa como bestia se convierte en bestia.' },
      { score: 3, sin: 'Violación premeditada de otro (p. ej., asesinato).', reason: 'Si te rindes a la Bestia, te conviertes en su esclavo.' },
      { score: 2, sin: 'Violación sin motivo de otro (p. ej., matar por capricho).', reason: 'Los otros merecen tu respeto.' },
      { score: 1, sin: 'Los actos más atroces y demenciales.', reason: '¿Eres hombre o bestia?' },
    ],
  },
  kings: {
    latin: 'Via Regalis',
    nickname: 'Descendientes',
    description:
      'Creen que el poder y el gobierno son su patrimonio por derecho divino, afirmado por la fuerza de las armas y la habilidad cortesana. Para gobernar a otros, primero deben dominar la Bestia interior. Aprecian los vínculos feudales y la caballería; muchos sirven como vasallos, jueces o caballeros antes de aspirar al trono.',
    aura: 'Mando (a tiradas para mandar o dirigir a otros).',
    virtues: 'Convicción, Autocontrol',
    ethics: [
      'Sólo hay dos papeles en este mundo: el de amo y el de servidor.',
      'Eres superior a los mortales, creado para reinar.',
      'Para dominar a otros, primero debes dominarte a ti mismo y a la Bestia.',
      'Sólo quienes toman el poder lo obtienen; sólo quienes lo usan lo mantienen.',
      'Tu palabra te ata. Sin ella no eres nada.',
    ],
    senderos: [
      { name: 'Sendero de la Caballería', text: 'El honor y el servicio lo son todo; cumple el código de la caballería.' },
      { name: 'Sendero del Tirano', text: 'Es mejor reinar en el infierno que servir en el Cielo.' },
      { name: 'Sendero del Visir', text: 'El poder es un juego sutil; conviértete en el poder tras el trono.' },
    ],
    sinsTitle: 'Jerarquía de Pecados contra la Realeza',
    sins: [
      { score: 10, sin: 'Descuidar tu deber.', reason: 'Quien no cumple sus responsabilidades a menudo las pierde.' },
      { score: 9, sin: 'Faltar el respeto a uno de tus pares.', reason: 'Un jefe se gana el respeto actuando con respeto.' },
      { score: 8, sin: 'Tratar a un inferior como un igual.', reason: 'Todos deben conocer su lugar, tú incluido.' },
      { score: 7, sin: 'Romper la palabra dada a uno de tus pares.', reason: 'La confianza se gana siendo digno de ella.' },
      { score: 6, sin: 'Comportarse vergonzosamente ante tus pares.', reason: 'El honor y la reputación lo son todo.' },
      { score: 5, sin: 'Mostrar debilidad ante inferiores.', reason: 'Un jefe debe parecer fuerte.' },
      { score: 4, sin: 'No responder a un desafío a tu honor.', reason: 'El honor debe mantenerse; los desafíos no quedan sin respuesta.' },
      { score: 3, sin: 'Faltar al respeto a un superior.', reason: 'A los superiores se les debe el debido respeto.' },
      { score: 2, sin: 'Romper la palabra dada a tus superiores.', reason: 'Tu palabra te ata; si no vale nada, tú tampoco.' },
      { score: 1, sin: 'Romper un juramento.', reason: 'Los juramentos de fidelidad mantienen unido el mundo.' },
    ],
  },
  sin: {
    latin: 'Via Peccati',
    nickname: 'Pecadores',
    description:
      'Dan rienda suelta a los oscuros deseos que brotan en ellos: en vez de suplicar perdón, se regocijan en su poder. Dominan a la Bestia satisfaciéndola y alimentándola; el egoísmo es el núcleo de su camino. Lo único verdaderamente prohibido es negar su necesidad de desenfreno, pues la negación fortalece a la Bestia. Pocos son infernalistas; la mayoría sigue su propia voluntad.',
    aura: 'Seducción (a tiradas para tentar y seducir a otros).',
    virtues: 'Convicción, Instinto',
    ethics: [
      'Ya estás Condenado, así que nada te está prohibido.',
      'Domina la Bestia y hazla tuya; no dejes que te domine.',
      'La noche es tuya: toma lo que desees y haz lo que quieras.',
      'Actúa cuando otros vacilan; no te atan las leyes del hombre ni las de Dios.',
      'En lo más oscuro de tu corazón está el placer, si tienes el valor de liberarlo.',
    ],
    senderos: [
      { name: 'Sendero del Diablo', text: 'Estás condenado y sirves al Infierno en la Tierra.' },
      { name: 'Sendero de la Crueldad', text: 'Inflige tu dolor y odio en otros y alívialo en ti.' },
      { name: 'Sendero del Placer', text: 'Satisface todos tus deseos, pues te conducen a tu yo verdadero.' },
    ],
    sinsTitle: 'Jerarquía de Pecados contra la Infamia',
    sins: [
      { score: 10, sin: 'Reconocer cualquier limitación moral.', reason: 'Estás por encima de esas debilidades.' },
      { score: 9, sin: 'No satisfacer un nuevo deseo.', reason: 'Ningún placer te está negado.' },
      { score: 8, sin: 'No cabalgar la ola de un frenesí.', reason: 'La negación sólo fortalece a la Bestia.' },
      { score: 7, sin: 'Rehusar tentar a los virtuosos.', reason: 'La virtud es una mentira que debes poner al descubierto.' },
      { score: 6, sin: 'Evitar herir a otros a costa de tu propio placer.', reason: 'Ningún dolor es más importante que tu placer.' },
      { score: 5, sin: 'Rechazar una oportunidad de ganancia material.', reason: 'Tus necesidades pesan más que las de los demás.' },
      { score: 4, sin: 'Actuar en contra de tu propio interés.', reason: 'Sólo los necios se sacrifican.' },
      { score: 3, sin: 'Rehusar matar cuando es en tu propio interés.', reason: 'Ninguna vida es más importante que la tuya.' },
      { score: 2, sin: 'Rehusar alimentarse cuando surja la oportunidad.', reason: 'No rehúses tu mayor placer y necesidad.' },
      { score: 1, sin: 'Animar la virtud o ayudar a agentes de la virtud.', reason: 'La virtud es una mentira y una prisión para el espíritu.' },
    ],
  },
};

export const getRoadContent = (id: string): RoadContent | undefined => ROAD_CONTENT[id];

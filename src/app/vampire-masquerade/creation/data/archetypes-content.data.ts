/**
 * Full Nature & Demeanor archetype info for V20 (Capítulo Tres). Each entry has
 * a description and the condition to regain a Willpower point (acting according
 * to your Nature). Shown in the archetype info modal in the creator and sheet.
 *
 * Spanish-only (content phase, Spanish-first). Keyed by the archetype id used
 * in ARCHETYPES / creationVtm.archetypeNames.
 */

export interface ArchetypeContent {
  description: string;
  /** When the character regains a Willpower point acting as this Nature. */
  willpower: string;
}

export const ARCHETYPE_CONTENT: Record<string, ArchetypeContent> = {
  thrillSeeker: {
    description:
      'Vive por la emoción del peligro. Se lanza a actividades arriesgadas y potencialmente mortales, no por afán suicida, sino por el estímulo del desastre inminente.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando superas con éxito una tarea peligrosa que aceptaste deliberadamente. El Narrador puede no premiar el riesgo gratuito buscado solo para cosechar Fuerza de Voluntad.',
  },
  architect: {
    description:
      'Tiene un sentido del propósito mayor que él mismo y solo está satisfecho cuando crea algo de valor perdurable para los demás. La gente siempre necesitará cosas, y él obtiene satisfacción proporcionándolas.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando estableces algo de importancia o valor duradero.',
  },
  autocrat: {
    description:
      'Quiere estar al mando. Codicia el poder y el control por sí mismos, no por el buen fin de la operación ni por tener las mejores ideas (aunque crea que las tiene).',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando logras el control sobre un grupo u organización involucrando a otros individuos.',
  },
  rogue: {
    description:
      'Solo le importa una cosa: él mismo. Autosuficiente y con sus intereses siempre presentes; si los demás no saben protegerse, ese es su problema. No tiene por qué ser un matón, simplemente no sucumbe a las quejas ajenas.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando tu egoísmo te reporta una gran ganancia, material o de otro tipo. A discreción del Narrador, acumular ganancias sin exponer tus debilidades puede dar dos puntos. También al beneficiar a un grupo propio a expensas de otro.',
  },
  bravo: {
    description:
      'Matón y tipo duro que a menudo disfruta atormentando a los débiles. Para él el poder otorga derechos, y las amenazas son un modo razonable de lograr cooperación. Prefiere el poder físico, pero cualquiera sirve.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que consigues lo que quieres mediante la fuerza bruta o la intimidación (no necesariamente física: también social o verbal).',
  },
  chameleon: {
    description:
      'Independiente y seguro, estudia con cuidado el comportamiento y los modales de todos para luego hacerse pasar por otra persona. Puede llegar a resultar irreconocible incluso para su propio Sire.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que engañas a alguien haciéndole creer que eres otra persona, en tu beneficio (o el de tu manada o coterie).',
  },
  capitalist: {
    description:
      'El mercenario definitivo: sabe que siempre hay mercados que desarrollar y que todo está a la venta. Manipula a mortales y Cainitas para que crean necesitar un bien o servicio.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando cierras una "venta" o intercambias un producto. No tiene por qué ser algo físico: también información, favores u otros intangibles.',
  },
  celebrant: {
    description:
      'Goza con su causa —la batalla, el fervor religioso, el arte, derrotar a sus rivales— y ese placer le da fuerzas contra la adversidad. A diferencia del Fanático, actúa por entusiasmo, no por deber.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando persigues tu causa o conviertes a otro a tu pasión. Por el contrario, pierdes un punto temporal cuando se te niega tu pasión o sufres una severa derrota.',
  },
  scientist: {
    description:
      'Para él la existencia es un rompecabezas que se puede volver a montar. Examina metódicamente cada situación buscando resultados y pautas lógicas, e impone un sistema al mundo (aunque sea absurdo) y se aferra a él.',
    willpower:
      'Recuperas Fuerza de Voluntad siempre que un enfoque lógico y sistemático de un problema te ayuda a resolverlo, o si la información recopilada así es útil en otra situación similar.',
  },
  competitor: {
    description:
      'Disfruta enormemente persiguiendo la victoria. Cada tarea es un nuevo reto y una prueba que vencer, una oportunidad de demostrar que es el mejor.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que vences en una prueba o reto. Debe ser algo más que una tirada de dados: una situación dramática completa. Las victorias muy difíciles pueden dar más puntos.',
  },
  conniver: {
    description:
      '¿Por qué trabajar para conseguir algo si puedes engañar a otros para que lo hagan por ti? Siempre busca el modo más fácil y el atajo hacia la riqueza y el éxito; sabe que los demás le harían lo mismo, solo que él lo hace primero.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que logras que alguien haga algo por ti, o cuando convences a alguien de que te ayude en contra de sus propios intereses.',
  },
  conformist: {
    description:
      'Un seguidor que marcha tras la senda de otro y se siente seguro cumpliendo órdenes. Prefiere no mandar; se funde con el grupo y presta su apoyo, atraído por la personalidad más dinámica o "la mejor".',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que tu grupo o el líder al que sigues logra un éxito gracias a tu apoyo.',
  },
  deviant: {
    description:
      'Pensador independiente que no cuadra en el status quo por sus gustos, preferencias o ideologías extrañas. Suele sentir que el mundo está en su contra y rechaza la moral tradicional.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que te burlas de la moral social sin ser reprendido.',
  },
  dilettante: {
    description:
      'Interesado en todo pero concentrado en nada. Revolotea de idea en idea, de pasión en pasión y de proyecto en proyecto sin acabar nada, arrastrando a otros con su entusiasmo para dejarlos plantados en cuanto pasa a otra cosa.',
    willpower:
      'Recuperas Fuerza de Voluntad cuando encuentras un nuevo entusiasmo y abandonas por completo el anterior.',
  },
  director: {
    description:
      'Para él no hay nada peor que el caos y el desorden. Trata de tomar el control con una actitud de "a mi manera o fuera"; lo que le importa es restaurar el orden, y no necesita encabezar un grupo para guiarlo.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando tu influencia guía a un grupo hacia la consecución de un objetivo difícil.',
  },
  enigma: {
    description:
      'Tus actos son incomprensibles, extraños e inexplicables para todos salvo para ti. Tu comportamiento errático sugiere excentricidad o locura, pero puede ser el modo más efectivo de cumplir tu deber.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que alguien queda totalmente perplejo ante una acción tuya que termina siendo provechosa.',
  },
  fanatic: {
    description:
      'Un propósito consume su existencia. Se vuelca por completo en su causa y se siente culpable si se desvía; el fin justifica los medios y la causa importa más que quienes la sirven. Debes elegir una causa concreta.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando logras algún objetivo relacionado con tu causa.',
  },
  gallant: {
    description:
      'Alma extravagante que siempre busca la atención y la oportunidad de ser la estrella. Su motivación es asombrar a un público, y la búsqueda suele importar tanto como el logro.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando logras asombrar a otras personas. El Narrador decide si lo has conseguido.',
  },
  guru: {
    description:
      'Tu iluminación atrae a los demás hacia ti: los motivas a dedicarse a objetivos espirituales o ideológicos. Tus iguales te consideran calmado, centrado y con "algo" especial.',
    willpower:
      'Recuperas Fuerza de Voluntad cuando alguien busca tu ayuda espiritual y tu guía lo lleva a una acción reveladora que no habría considerado, o cuando logras una epifanía relacionada con tu filosofía.',
  },
  bonVivant: {
    description:
      'Sabe que la vida (y la no-vida) está vacía y carece de significado, así que ha decidido disfrutarla al máximo. No es necesariamente irresponsable, solo está dispuesto a pasarlo bien siempre que puede; suele tener un Autocontrol bajo.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que disfrutas al máximo y te sientes completamente exultante. El Narrador puede conceder varios puntos por una juerga especialmente épica.',
  },
  curmudgeon: {
    description:
      'Amargado y cínico, le encuentra defectos a todo y carece de humor. Pesimista y fatalista, tiene a todo el mundo en muy baja estima: para él el vaso nunca está más que medio lleno.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando alguien comete la estupidez que predijiste. Debes anunciar y cuantificar el fracaso en voz alta como advertencia (o susurrárselo al Narrador).',
  },
  idealist: {
    description:
      'Cree verdadera y profundamente en una meta o moral superior, desde el triunfo de la Camarilla hasta el bien absoluto. Intenta reconciliar sus creencias con la existencia vampírica, a menudo actuando con altruismo.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que una acción en busca de tus ideales sirve para acercarte a tus objetivos.',
  },
  judge: {
    description:
      'No deja de intentar mejorar el sistema mediante la razón y los hechos. Respeta la justicia como el modelo más eficiente para resolver cualquier asunto, y prefiere los modelos probados a la introspección.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando resuelves correctamente un problema sopesando las evidencias, o cuando tus argumentos logran la unidad en un grupo fracturado.',
  },
  martyr: {
    description:
      'Padece por su causa y soporta toda penuria convencido de que su sufrimiento mejorará el destino de los demás. Unos solo buscan atención o simpatía; otros son sinceros y afrontan las penalidades con fe inquebrantable.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando sufres cierta cantidad de daño o pérdida de recursos por tus ideales o por el bien ajeno.',
  },
  masochist: {
    description:
      'Vive para probar sus límites y ver cuánto dolor soporta antes de derrumbarse. Se regocija en la humillación, la negación y el dolor físico, y se define por su capacidad de sentir incomodidad.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando tu propio sufrimiento te reporta un beneficio tangible, y dos puntos cada vez que experimentas un dolor verdaderamente único.',
  },
  monster: {
    description:
      'Se sabe una criatura de la oscuridad y actúa en consecuencia. La maldad y el sufrimiento son herramientas; no obra el mal por placer, sino como medio para comprender aquello en lo que se ha convertido. Debes elegir una atrocidad específica.',
    willpower:
      'Recuperas Fuerza de Voluntad cada vez que cometes la atrocidad que elegiste (p. ej. hacer que alguien obre mal, o dudar de su fe). El Narrador debe premiar con cuidado: no en cada combate, sino cuando la destrucción sin sentido impulse tu descenso hacia la Bestia.',
  },
  child: {
    description:
      'Personalidad y temperamento inmaduros: lo quiere todo ya y prefiere que otro se lo dé. Aunque suele saber cuidarse, le gusta tener quien atienda sus caprichos; algunos son más inocentes que inmaduros. No implica haber sido Abrazado de niño.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que convences a alguien para que te ayude sin dar nada a cambio, o para que cuide de ti.',
  },
  eyeOfTheStorm: {
    description:
      'Pese a tu aspecto calmado y sutil, el caos y el desastre parecen seguirte. Desde ciudades ardiendo hasta tormentas emocionales, la muerte y la destrucción vuelan a tu alrededor mientras la incertidumbre aguarda tras cada esquina.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que a tu alrededor se produce un tumulto, una revuelta o un fenómeno menos violento pero igualmente caótico.',
  },
  pedagogue: {
    description:
      'Lo sabe todo y se empeña en informar a los demás, en detalle si hace falta, ya por deseo de ayudar o como un fin en sí mismo. Va del mentor bienintencionado al pedante insoportable que adora su propia voz.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que observas o sabes que alguien se ha beneficiado de la sabiduría que compartiste con él.',
  },
  penitent: {
    description:
      'Vive para expiar el terrible pecado de su mera existencia. Con baja autoestima o marcado por un trauma, se siente impelido a buscar el perdón por cargar al mundo con su presencia; no siempre por motivos religiosos.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando crees haber logrado la absolución por un agravio. La redención debe ser de la misma magnitud que la transgresión: cuanto mayor el crimen, mayor la penitencia (el Narrador arbitra).',
  },
  perfectionist: {
    description:
      'No admite más que aquello que carece de fallos. Un trabajo poco entusiasta no le satisface, y espera de los demás el mismo compromiso y atención al detalle que se exige a sí mismo; lo que le mueve es el cumplimiento del objetivo.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando logras un objetivo sin defectos ni impedimentos constatables, y también cuando motivas a otro a triunfar siendo un ejemplo brillante para él.',
  },
  caregiver: {
    description:
      'Todo el mundo necesita un hombro en el que llorar. Se siente cómodo consolando a los demás, que acuden a él con sus problemas, y suele tratar de proteger incluso a los mortales de los que se alimenta.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que logras proteger o cuidar de alguien.',
  },
  rebel: {
    description:
      'Un descontento que nunca está satisfecho con el status quo ni con el sistema. Odia la autoridad y hace todo lo posible por retarla y socavarla, ya por ideales, ya por una injusticia pasada. Elige contra qué o quién te rebelas.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que tus acciones perjudican a la oposición que elegiste. El Narrador debe vigilar la rebelión contra "toda autoridad" y premiar solo actos de insurgencia cada vez más extremos.',
  },
  creepShow: {
    description:
      'Tratas de impactar y desagradar a todos con acciones injustificadas y una conducta ostentosamente "malvada". Sabes que es un espectáculo para intimidar y controlar; la gente te ve como el diablo encarnado, y disfrutas con ello.',
    willpower:
      'Recuperas Fuerza de Voluntad cada vez que alguien retrocede horrorizado o reacciona ante ti con miedo.',
  },
  sadist: {
    description:
      'Vives para infligir dolor y sufrimiento. Matar es demasiado fácil: la tortura es el mejor modo de dañar de verdad, así que buscas los métodos más lentos y dolorosos. El dolor ajeno te proporciona un inmenso placer.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que infliges dolor a alguien sin más razón que tu propio placer.',
  },
  sociopath: {
    description:
      'Crees que todos los seres inferiores, vivos o no-muertos, deberían ser exterminados para lograr una existencia armoniosa. Probablemente no sientes remordimientos al matar; al contrario, lo ves como un glorioso servicio a la comunidad.',
    willpower:
      'Recuperas Fuerza de Voluntad cada vez que eres el mayor causante de bajas cuando todo ha acabado. También cuando eres el único asesino, y no hace falta que sea un combate masivo.',
  },
  soldier: {
    description:
      'No es un seguidor ciegamente leal: recibe órdenes pero no las acepta incondicionalmente. Más independiente que un Conformista, aplica sus propias técnicas a los objetivos de otros, y sus ambiciones caben dentro de la jerarquía.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando logras los objetivos que se te ordenaron. Cuanto más difíciles, mejor. Un éxito espectacular o una misión larga pueden valer puntos adicionales.',
  },
  loner: {
    description:
      'Destaca hasta en una multitud, porque es evidente que no forma parte de ella. Los demás lo ven como un paria distante, pero él prefiere su propia compañía; desdeña a la gente, y el sentimiento suele ser recíproco.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando logras por tu cuenta algo que además beneficia de algún modo a la coterie.',
  },
  survivor: {
    description:
      'No importa lo que suceda ni las adversidades: siempre logra salir adelante. Su absoluta incapacidad de aceptar la derrota marca la diferencia entre el éxito y el fracaso, y le frustra que otros se resignen a "lo que depara el destino".',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando sobrevives a una situación peligrosa gracias a tu tenacidad, o cuando, gracias a tu consejo, otro persevera pese a la adversidad.',
  },
  traditionalist: {
    description:
      'Le satisfacen las costumbres ortodoxas y prefiere conseguir sus objetivos con métodos ya probados. Encuentra aceptable el status quo y lo prefiere a un cambio de resultados impredecibles.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando los métodos tradicionales demuestran ser los mejores, o cuando te adhieres a uno de tus principios y compruebas que era el curso más sensato.',
  },
  trickster: {
    description:
      'Ve el absurdo en todo. Por triste que sea la (no-)vida, siempre encuentra un modo de reírse de ella; se niega a rendirse a la pena y anima a los que lo rodean, a veces cuestionando el dogma y exponiendo sus defectos con burla.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cada vez que logras animar a los demás, especialmente si en el proceso niegas tu propio dolor.',
  },
  visionary: {
    description:
      'Es lo bastante fuerte para ver más allá de lo mundano y percibir lo realmente maravilloso. Tantea los límites aceptados y busca lo que otros solo se atreven a imaginar; anima al mundo a ofrecer lo que podría tener, aunque la sociedad suela rechazarlo.',
    willpower:
      'Recuperas un punto de Fuerza de Voluntad cuando convences a otros de creer en tus sueños y seguir un curso de acción dictado por tu visión. La clave es obtener apoyo, no necesariamente triunfar.',
  },
};

export function getArchetypeContent(key: string): ArchetypeContent | undefined {
  return ARCHETYPE_CONTENT[key];
}

# V20 — Habilidades (Talentos, Técnicas, Conocimientos)

> Resumen del material del manual aportado por el usuario (Cap. Tres). Ver 00-indice.md.
> 30 Habilidades: 10 Talentos + 10 Técnicas + 10 Conocimientos. Cada una: descripción + 5 niveles.
> **Talentos** (intuitivos, sin penalización si tienes 0). **Técnicas** (aprendidas; +1 dif. si tienes 0). **Conocimientos** (mentales; no puedes tirar con 0 salvo permiso del Narrador).
> Especialidad recomendada aunque tengas <4 puntos en: Expresión, Artesanía, Interpretación, Academicismo, Leyes, Ciencias, Tecnología.

## Especialidades (regla V20 — IMPORTANTE, difiere de Edad Oscura)

Un personaje con un **Atributo o Habilidad de 4 o más** puede elegir una **Especialidad** para ese Rasgo: una subcategoría en la que destaca (p. ej. Fuerza 5 → «levantar pesos muertos»; Interpretación 4 → «canto»). Cada vez que haga una tirada de una actividad cubierta por su especialización, **cualquier dado que saque un 10 cuenta como dos éxitos** en lugar de uno.

**Diferencias entre los dos asistentes (hay que respetarlas en la creación de la ficha):**

| | Vampiro: La Mascarada (V20) | Vampiro: Edad Oscura |
|---|---|---|
| Especialidades en **Atributos** | **Sí**, con 4+ | No |
| Especialidades en **Habilidades** | Sí, con 4+ | Sí |
| Campos de Experiencia | **No existen** (solo especialidades) | Sí (habilidades genéricas) |
| Beneficio | Los 10 cuentan como 2 éxitos | +1 dado (mecánica de Edad Oscura) |

- En **Mascarada** solo hay «especialidad», disponible tanto en Atributos como en Habilidades de 4+. Una por Rasgo, gratuita en la creación (es un beneficio del 4+, no se compra con puntos gratuitos).
- En **Edad Oscura** las especialidades son solo de Habilidad y además existen los «campos de experiencia»; ese sistema NO debe usarse en Mascarada.
- Implementación en la app: la lógica de creación de Mascarada (`vampire-masquerade/creation`) es independiente de la de Edad Oscura (`vampire-dark-age/creation`), así que cada asistente aplica su propia regla.

## Correspondencia libro ES ↔ claves de la app (VTM)

| Libro (ES) | Grupo | Clave app |
|---|---|---|
| Alerta | Talento | alertness |
| Atletismo | Talento | athletics |
| Consciencia | Talento | awareness |
| Pelea | Talento | brawl |
| Empatía | Talento | emptahy *(typo en modelo)* |
| Expresión | Talento | expression |
| Intimidación | Talento | intimidation |
| Liderazgo | Talento | leadership |
| Callejeo | Talento | streetwise |
| Subterfugio | Talento | subterfuge |
| Trato con Animales | Técnica | animalKen |
| Artesanía | Técnica | crafts |
| Conducir | Técnica | drive |
| Etiqueta | Técnica | etiquette |
| Armas de Fuego | Técnica | firearms |
| Latrocinio | Técnica | larceny |
| Pelea con Armas | Técnica | melee |
| Interpretación | Técnica | performance |
| Sigilo | Técnica | stealth |
| Supervivencia | Técnica | survival |
| Academicismo | Conocimiento | academics |
| Informática | Conocimiento | computer |
| Finanzas | Conocimiento | finance |
| Investigación | Conocimiento | investigation |
| Leyes | Conocimiento | law |
| Medicina | Conocimiento | medicine |
| Ocultismo | Conocimiento | occult |
| Política | Conocimiento | politics |
| Ciencias | Conocimiento | science |
| Tecnología | Conocimiento | technology |

> **Ojo:** en Edad Oscura el listado difiere (p. ej. Esquivar, Prestidigitación, Interpretación/Hurto distintos). Este fichero es SOLO para Mascarada.
> Nota: el modelo VTM tiene `awareness` en talentos y `technology` en conocimientos, y `emptahy` está mal escrito en el estado; respetar esas claves al mapear i18n.

---

## Talentos

### Alerta (alertness)
Capacidad de percibir lo que sucede alrededor sin buscarlo activamente. Suele usarse con Percepción; sobre todo estímulos físicos (no estados de ánimo ni pistas).
- • Novato: No eres un zángano descerebrado.
- •• Entrenado: Cotilla habitual.
- ••• Competente: Mantienes un ojo avizor en tu entorno.
- •••• Experto: Sea sentido común o paranoia, raro es que te pillen con la guardia baja.
- ••••• Maestría: Tus sentidos están a la par con los de los animales salvajes.
- Especialidades: Ruidos, Escuchar a Escondidas, Detalles Sutiles, Armas Ocultas, Multitudes, Bosques, Animales.

### Atletismo (athletics)
Capacidad atlética básica y entrenamiento deportivo: correr, saltar, lanzar, nadar, deportes. No incluye levantar peso ni lo cubierto por otra Habilidad (p. ej. Pelea con Armas).
- • Novato: Tuviste una infancia activa.
- •• Ejercitado: Atleta de instituto.
- ••• Competente: Aficionado de toda la vida con talento.
- •••• Experto: Atleta profesional.
- ••••• Maestro: Medallista olímpico.
- Especialidades: Natación, Escalada, Acrobacias, Danza, Parkour, Deportes Específicos.

### Consciencia (awareness)
Reacción innata a lo sobrenatural. Distinta de Alerta (mundano) y Ocultismo (conocimiento concreto). Suele ser exclusiva de seres sobrenaturales (o mortales con Fe Verdadera). Da corazonadas subconscientes; no dice *qué* es lo raro.
- • Novato: De vez en cuando tienes la sensación de que algo no está bien.
- •• Ejercitado: A veces percibes vibraciones desde cierta dirección o zona.
- ••• Competente: Entras en una habitación y sabes si algo inusual sucede dentro.
- •••• Experto: Concentrándote, sientes si alguien/algo en un grupo es sobrenatural.
- ••••• Maestro: Sabes instintivamente si algo o alguien es mundano o sobrenatural.
- Especialidades: Actividad Fantasmal, Objetos Místicos, Alguien Está en mi Cabeza, Desenmascarar.

### Pelea (brawl)
Combate sin armas (artes marciales o experiencia bruta). Coordinación, resistencia al dolor, rapidez y crueldad.
- • Novato: Te acosaban cuando eras niño.
- •• Ejercitado: Alguna trifulca de bar ocasional.
- ••• Competente: Has combatido de forma regular y sueles acabar mejor que tus rivales.
- •••• Experto: Serio competidor de MMA.
- ••••• Maestro: Hay un vídeo tuyo derribando a 3 hombres en 4 segundos.
- Especialidades: Pelear Sucio, Golpes, Lanzamientos, Llaves de Sumisión, Estilos/Artes Marciales.

### Empatía (emptahy)
Entiendes las emociones ajenas: simpatizar, fingir comprensión o manipular. Detectas motivaciones y mentiras, pero puedes contagiarte de las emociones de otros.
- • Novato: Ocasionalmente dejas que lloren sobre tu hombro.
- •• Ejercitado: A veces sientes literalmente el sufrimiento ajeno.
- ••• Competente: Intuiciones precisas de las motivaciones de los demás.
- •••• Experto: Es casi imposible mentirte.
- ••••• Maestro: El alma humana no tiene secretos para ti.
- Especialidades: Emociones, Intuición, Motivaciones, Ganarse la Confianza.

### Expresión (expression)
Explicar tu punto de vista con claridad (conversación, poesía, escritura, actuación). Opiniones que no se pueden ignorar.
- • Novato: Tu talento maduró desde los poemas en tu libreta.
- •• Ejercitado: Podrías dirigir un equipo de debate universitario.
- ••• Competente: Podrías ser un escritor de éxito.
- •••• Experto: Tu trabajo es digno de un Pulitzer.
- ••••• Maestro: Steve Jobs te pide una presentación para su próximo dispositivo.
- Especialidades: Actuar, Poesía, Ficción, Improvisación, Conversación, Medios de Comunicación.

### Intimidación (intimidation)
Amenaza directa, violencia o fuerza de personalidad. Conoces el método correcto para cada ocasión.
- • Novato: Adolescente chungo.
- •• Ejercitado: Matón cabeza rapada.
- ••• Competente: Sargento instructor.
- •••• Experto: Tu aire autoritario acobarda a los transeúntes.
- ••••• Maestro: Asustas a animales violentos.
- Especialidades: Amenazas Veladas, Abusar del Rango, Coacción Física, Chantaje, Internet.

### Liderazgo (leadership)
Ser un ejemplo que otros quieren seguir (más Carisma que Manipulación). Un buen líder los trae de vuelta intactos.
- • Novato: Capitán de tu equipo de alevines.
- •• Ejercitado: Presidente estudiantil.
- ••• Competente: Director Ejecutivo eficiente.
- •••• Experto: Hecho para ser presidente.
- ••••• Maestro: Podrías ser el adorado dictador de una nación.
- Especialidades: Oratoria, Irresistible, Amistoso, Transparente, Noble, Militar, Multimedia.

### Callejeo (streetwise)
El lenguaje de la calle: mezclarte, rumores, jerga, iniciarte en el crimen.
- • Novato: Sabes dónde buscar.
- •• Ejercitado: Te has ganado respeto en la calle.
- ••• Competente: Podrías liderar tu propia banda.
- •••• Experto: No temes ni los peores barrios.
- ••••• Maestro: Si no lo has oído, nadie lo ha dicho.
- Especialidades: Bienes Robados, Drogas Ilegales, Armas Ilegales, WiFi Gratis, Bandas, Lista de Invitados, Jerga Local.

### Subterfugio (subterfuge)
Ocultar tus motivaciones y proyectar las que quieres; usar las ajenas en su contra. Intriga, secretos, hipocresía.
- • Novato: A veces cuentas mentiras piadosas.
- •• Ejercitado: Vampiro.
- ••• Competente: Abogado criminalista.
- •••• Experto: Agente encubierto.
- ••••• Maestro: Eres la última persona de quien alguien sospecharía.
- Especialidades: Seducción, Mentiras Impecables, Fingir Mortalidad, El Timo de la Estampita.

*(Talento Afición: categoría comodín autodidacta y práctica; niveles Novato→Maestro. Sugeridas: Alternar, Diplomacia, Adivinación, Negociación, Gorronear.)*

---

## Técnicas

### Trato con Animales (animalKen)
Entender la conducta animal: predecir reacciones, entrenar, calmar o provocar.
- • Novato: Un caballo domesticado te deja acariciarlo.
- •• Ejercitado: Puedes educar a un cachorro.
- ••• Competente: Podrías entrenar un perro guía.
- •••• Experto: Entrenador de circo.
- ••••• Maestro: Domas bestias salvajes sin poderes sobrenaturales.
- Especialidades: Perros, Entrenar Para Atacar, Grandes Felinos, Caballos, Animales de Granja, Cetrería.

### Artesanía (crafts)
Crear o arreglar con las manos: carpintería, cuero, textiles, mecánica. Elige siempre una especialización.
- • Novato: Carpintería de instituto.
- •• Ejercitado: Empiezas a desarrollar tu estilo.
- ••• Competente: Podrías abrir tu propia tienda.
- •••• Experto: Has escrito manuales de tu campo.
- ••••• Maestro: Tu labor casi no tiene parangón.
- Especialidades: Cerámica, Costura, Chapuzas del Hogar, Carpintería, Tasación, Carburadores.

### Conducir (drive)
Conducir coches y quizá otros vehículos. No implica vehículos complejos (tanques, tráileres) automáticamente.
- • Novato: Transmisión automática.
- •• Ejercitado: Cambio manual.
- ••• Competente: Camionero profesional.
- •••• Experto: Loco de la NASCAR o conductor de tanques.
- ••••• Maestro: Sea Fiat o Ferrari, lo haces cantar.
- Especialidades: Fuera de Carretera, Motocicletas, Alta Velocidad, Atascos, Evitar Policía de Tráfico.

### Etiqueta (etiquette)
Buenas maneras en la sociedad mortal y de la Estirpe. Saber el momento y la forma de intervenir.
- • Novato: Sabes cuándo cerrar la boca.
- •• Ejercitado: Un par de eventos de gala.
- ••• Competente: Buenas maneras, incluso con cubertería exótica.
- •••• Experto: Su Majestad te consideraría encantador.
- ••••• Maestro: Podrías acabar guerras (o empezarlas) en una cena.
- Especialidades: En el Elíseo, Negocios, Alta Sociedad, Protocolo Sabbat.

### Armas de Fuego (firearms)
Familiaridad con armas de fuego (de pistolas de bolsillo a ametralladoras): limpiar, reparar, reconocer, disparar. Desencasquillar: Astucia + Armas de Fuego.
- • Novato: Pistola de aire comprimido de niño.
- •• Ejercitado: Alguna hora en el club de tiro.
- ••• Competente: Has sobrevivido a uno o dos tiroteos.
- •••• Experto: Podrías eliminar gente para ganarte la vida.
- ••••• Maestro: Practicas desde el nacimiento del Winchester.
- Especialidades: Desenfundado Rápido, Armería, Pistolas, Puntería, Revólveres, Escopetas.

### Latrocinio (larceny)
Manipulación física criminal: forzar cerraduras/cajas, falsificación manual, puentear, allanamiento, juegos de manos. La seguridad avanzada/electrónica es Tecnología.
- • Novato: Abres una cerradura sencilla.
- •• Ejercitado: Trilero de esquina.
- ••• Competente: Abres desde fuera una ventana cerrada estándar.
- •••• Experto: «Arreglas» un pasaporte o DNI.
- ••••• Maestro: Entras (o sales) de la bóveda de un banco internacional.
- Especialidades: Forzar Cajas Fuertes, Despistar, Abrir Cerraduras, Puentear, Carterismo.

### Pelea con Armas (melee)
Armas de cuerpo a cuerpo: espadas, bates, sai, nunchaku… y la estaca de madera.
- • Novato: Sabes empuñar un cuchillo.
- •• Ejercitado: Alguna pelea callejera.
- ••• Competente: Podrías dirigir un equipo de esgrima universitario.
- •••• Experto: Podrías mantener el orden en la corte del Príncipe.
- ••••• Maestro: Tus enemigos preferirían un SWAT antes que tu espada.
- Especialidades: Cuchillos, Espadas, Armas Improvisadas, Estocadas, Desarmar.

### Interpretación (performance)
Cantar, bailar, actuar, tocar. Elige una Especialidad; también da sentido para leer al público.
- • Novato: Coro de iglesia.
- •• Ejercitado: Vídeos con +100.000 visitas.
- ••• Competente: Casi siempre tienes un bolo apalabrado.
- •••• Experto: Talento para ser sensación nacional.
- ••••• Maestro: Virtuoso sin par.
- Especialidades: Danza, Canto, Rock and Roll, Actuación, Solos de Guitarra, Karaoke Borracho.

### Sigilo (stealth)
Evitar ser detectado (esconderse o moverse). Se enfrenta a Percepción + Alerta. También ocultar objetos.
- • Novato: Te escondes en una habitación oscura.
- •• Ejercitado: Sigues a alguien de farola en farola.
- ••• Competente: Encuentras presa de un anochecer a otro sin problema.
- •••• Experto: Te mueves silencioso sobre hojarasca seca.
- ••••• Maestro: Antiguo Nosferatu.
- Especialidades: Esconderse, Movimiento Silencioso, Seguir a Alguien, Multitudes.

### Supervivencia (survival)
Cobijo, orientación, rastreo, refugio improvisado, evitar peligros sobrenaturales. También en entornos urbanos duros.
- • Novato: Sobrevives una noche fuera.
- •• Ejercitado: Las has «pasado canutas» a menudo.
- ••• Competente: Distingues forraje comestible de venenoso.
- •••• Experto: Vivirías meses en el ambiente que elijas.
- ••••• Maestro: Desnudo en los Andes, te apañarías.
- Especialidades: Rastrear, Bosques, Jungla, Vida Callejera, Cazar, Exploración Urbana.

*(Técnica Profesional: comodín enseñado y activo. Sugeridas: Herrería, Cocinar, Duelo, Falsificación, Jugar, Armería, Navegación, Tortura.)*

---

## Conocimientos

### Academicismo (academics)
Humanidades: literatura, historia, arte, filosofía. Elige Especialidad aunque tengas <4.
- • Estudiante: Sabes que 1492 no es un PIN.
- •• Licenciado: Citas clásicos y distingues Ming de Moghul.
- ••• Posgraduado: Podrías publicar en una revista académica.
- •••• Doctorado: Profesor Emérito.
- ••••• Erudito: Reconocido mundialmente como gran experto.
- Especialidades: Postestructuralismo, Pintura Impresionista, Roma Imperial, Teoría del Color, Lingüística.

### Informática (computer)
Usar y programar computadoras y dispositivos portátiles; familiaridad con Internet.
- • Estudiante: Pantallas táctiles e interfaces de señalar y pulsar.
- •• Licenciado: Varias aplicaciones e Internet.
- ••• Posgraduado: Sabes qué hacer con una pantalla de comandos.
- •••• Doctorado: Vives como consultor sin problemas.
- ••••• Erudito: Todos los SDKs y estructuras de datos de muchos lenguajes.
- Especialidades: «Los YouTubes», Lenguajes de Programación, Internet, Bases de Datos, IHI, Virus, Programas Específicos.

### Finanzas (finance)
Comercio, valor de bienes, divisas, negociar, bolsa. Nivel alto sube tu nivel de vida.
- • Estudiante: Unas clases de negocios.
- •• Licenciado: Experiencia práctica, cuentas al día.
- ••• Posgraduado: Buen corredor de bolsa.
- •••• Doctorado: Las corporaciones siguen tu liderazgo bursátil.
- ••••• Erudito: Conviertes 20 en una fortuna millonaria.
- Especialidades: Mercado de Valores, Blanqueo, Tasaciones, Divisas, Contabilidad, Perista, Corporaciones, Rescates del Gobierno.

### Investigación (investigation)
Percibir detalles, hacer pesquisas y seguir pistas (Internet, biblioteca, forense).
- • Estudiante: Búsqueda amplia de pistas por la Red.
- •• Licenciado: Oficial de policía.
- ••• Posgraduado: Detective privado.
- •••• Doctorado: Agente federal.
- ••••• Erudito: Sherlock Holmes.
- Especialidades: Ciencia Forense, Ocultación, Buscar, Decoloraciones, Búsquedas en Base de Datos.

### Leyes (law)
Estatutos y procedimientos legales; también las leyes de los Vástagos (Tradiciones). Especialidad opcional.
- • Estudiante: Pagaste una multa y sabes cómo declararte.
- •• Licenciado: Estudias o acabas de aprobar la oposición.
- ••• Posgraduado: Vives ejerciendo la ley.
- •••• Doctorado: Socio pronto, si no ya.
- ••••• Erudito: Encontrarías vacíos legales en los contratos del diablo.
- Especialidades: Derecho Criminal, Pleitos, Protocolo del Juzgado, Contratos, Procedimiento Policial, Las Tradiciones, El Código de Milán.

### Medicina (medicine)
Cuerpo humano (y algo el vampírico): fármacos, dolencias, primeros auxilios, diagnóstico.
- • Estudiante: Curso de reanimación.
- •• Licenciado: Estudiante de medicina o enfermería.
- ••• Posgraduado: Médico de cabecera.
- •••• Doctorado: Realizas trasplantes.
- ••••• Erudito: Pionero respetado mundialmente.
- Especialidades: Trasplantes, Atención de Emergencia, Venenos, Patología, Fármacos, La Condición Vampírica.

### Ocultismo (occult)
Misticismo, maldiciones, magia, folclore y cultura vampírica. No son hechos probados: rumores, mitos, especulación.
- • Estudiante: Blog sobre lo extraño.
- •• Licenciado: Verdad inquietante en algunos rumores.
- ••• Posgraduado: Has oído mucho y visto algo.
- •••• Doctorado: Reconoces fuentes falsas y conjeturas fundadas.
- ••••• Erudito: Conoces muchas verdades básicas del mundo oculto.
- Especialidades: Cultura de la Estirpe, Rituales, Infernalismo, Brujas, Saber Nodista.

### Política (politics)
Política actual, gente de poder y burocracias; influir en políticos mortales; estructura de poder Cainita local.
- • Estudiante: Activista; pagas una multa online.
- •• Licenciado: Ciencias políticas; solicitudes de información.
- ••• Posgraduado: Director de campaña o tertuliano.
- •••• Doctorado: Senador.
- ••••• Erudito: Podrías elegir al próximo Presidente.
- Especialidades: Urbana, Autonómica, Federal, Burocracia, Dogma, Radical, Camarilla.

### Ciencias (science)
Ciencias físicas: química, biología, física, geología. Especialidad recomendada (no obligatoria).
- • Estudiante: Lo básico de secundaria.
- •• Licenciado: Teorías fundamentales.
- ••• Posgraduado: Enseñarías ciencia en el instituto.
- •••• Doctorado: Capacitado para hacer avanzar tu campo.
- ••••• Erudito: Tu Nobel te espera.
- Especialidades: Química, Biología, Geología, Física, Astronomía.

### Tecnología (technology)
Agudeza con electrónica: procesadores, circuitos, seguridad electrónica, móviles, radio. Lo eléctrico-mecánico simple es Artesanía. Elige siempre especialización.
- • Estudiante: Modificaciones/reparaciones simples.
- •• Licenciado: Vives del ensamblaje o reparación.
- ••• Posgraduado: Diseñas tecnología a partir de requisitos.
- •••• Doctorado: No es «¿puede hacerse?» sino «¿cómo?».
- ••••• Erudito: Visionario que da forma a cómo interactúa la gente con el mundo.
- Especialidades: Telecomunicaciones, Computadoras, Seguridad, Comunicaciones, Soluciones Improvisadas, Espionaje Industrial.

*(Conocimiento Experto: comodín intelectual y estudiado. Sugeridos: Arqueología, Teoría del Juego, Ciencia Militar, Psicología.)*

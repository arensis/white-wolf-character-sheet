# V20 — Creación de personaje y Arquetipos (Naturaleza y Conducta)

> Resumen del material del manual aportado por el usuario (Cap. Tres). Ver 00-indice.md. Solo Mascarada.

## Proceso de creación (5 pasos) — verificado en el asistente de Mascarada

Constantes en `src/app/vampire-masquerade/creation/data/creation-rules.ts`. Todas coinciden con el libro:

1. **Concepto de personaje** — Concepto, Clan, Naturaleza y Conducta.
2. **Atributos** — Prioriza Físicos/Sociales/Mentales en **7/5/3** (cada Atributo empieza con 1 punto; tope 5).
3. **Habilidades** — Prioriza Talentos/Técnicas/Conocimientos en **13/9/5**; ninguna Habilidad puede superar **3** en este paso (se supera luego con puntos gratuitos).
4. **Ventajas** — **Disciplinas 3** (de Clan; Caitiff cualquiera), **Trasfondos 5**, **Virtudes 7** (cada Virtud empieza con 1). *Opcional «Vampiros más inhumanos»: el Narrador puede permitir empezar con 4 puntos de Disciplinas en vez de Trasfondos (típico del Sabbat). No implementado en el asistente.*
5. **Toques finales** — Humanidad = Conciencia + Autocontrol; Fuerza de Voluntad = Coraje; **reserva de Sangre inicial = 1d10** (única tirada de la creación; el asistente la calcula en `build()`). Gasta **15 puntos gratuitos**. Opcional: Méritos y Defectos, máx. **7 puntos** de cada.

### Costes de puntos gratuitos (tabla del libro)
| Rasgo | Coste por círculo |
|---|---|
| Atributo | 5 |
| Habilidad | 2 |
| Disciplina | 7 |
| Trasfondo | 1 |
| Virtud | 2 |
| Humanidad/Senda | 2 |
| Fuerza de Voluntad | 1 |

> Nota V20: las **especialidades** son gratuitas en la creación (beneficio de tener el rasgo a 4+), no se compran con gratuitos, y en Mascarada **no** hay campos de experiencia (ver 09-habilidades.md).

### Idiomas (difiere de Edad Oscura)
En **Mascarada** el idioma nativo es gratis y los idiomas adicionales se compran con el **Mérito Idioma** (1 punto gratuito por idioma); **no** existe una habilidad Lingüística (eso es de Edad Oscura). En el asistente: el idioma nativo se escribe en el paso Ventajas y los adicionales se eligen en Toques Finales (cada uno resta 1 punto gratuito). La lista es **moderna** (idiomas actuales por región), no medieval, y la misma lista alimenta el diálogo «Añadir idioma» de la ficha. Datos en `creation/data/languages.data.ts`.

## Ejemplos de Concepto (lo que el personaje era antes del Abrazo)
Artista, Chico, Criatura de la noche, Criminal, Forastero, Hombre/Mujer de Mundo, Intelectual, Investigador, Político, Profesional, Reportero, Soldado, Operario, Vagabundo. (Sin efecto mecánico; ancla narrativa. El Caitiff se escribe «Caitiff» en el campo Clan.)

## Naturaleza y Conducta (Arquetipos)

La **Naturaleza** es el yo real del personaje (y sirve para recuperar Fuerza de Voluntad cuando actúa conforme a ella, con permiso del Narrador). La **Conducta** es la máscara que muestra al mundo (sin efecto mecánico). Ambas se eligen de la misma lista.

- Contenido completo (descripción + condición de recuperar Fuerza de Voluntad) en `src/app/vampire-masquerade/creation/data/archetypes-content.data.ts`, mostrado con el botón «i» en el creador (paso Concepto) y en la ficha (Naturaleza/Conducta).
- La app tiene **42 arquetipos** (id → nombre). Nota de traducción: el id `bonVivant` se muestra como **Hedonista** (así lo llama el libro ES); se añadió **Diletante** (`dilettante`), que el libro trata como arquetipo aparte.

### Lista de arquetipos (resumen de una línea, como en el desplegable)
| id | Nombre | Resumen |
|---|---|---|
| thrillSeeker | Ansioso de Emociones | Vives para la adrenalina. |
| architect | Arquitecto | Construyes algo que te sobreviva. |
| autocrat | Autócrata | Necesitas llevar las riendas. |
| rogue | Bellaco | Todo gira en torno a ti. |
| bravo | Bravucón | La fuerza resuelve tus discusiones. |
| chameleon | Camaleón | Encajas en cualquier ambiente. |
| capitalist | Capitalista | Todo tiene un precio, y tú lo pones. |
| celebrant | Celebrante | Tu causa te llena de alegría. |
| scientist | Científico | Todo es un problema que resolver. |
| competitor | Competidor | Solo vale ser el mejor. |
| conniver | Confabulador | Los demás existen para servirte. |
| conformist | Conformista | Sigues la corriente y apoyas. |
| deviant | Depravado | Las normas son para el rebaño. |
| dilettante | Diletante | Todo gira en torno a tu nueva pasión. |
| director | Director | Ordenas el caos a tu alrededor. |
| enigma | Enigma | Nadie termina de entenderte, y así te gusta. |
| fanatic | Fanático | Solo la causa importa. |
| gallant | Gallardo | Eres el espectáculo. |
| guru | Gurú | Los demás buscan tu guía espiritual. |
| bonVivant | Hedonista | La no-vida está para disfrutarla. |
| curmudgeon | Hosco | A todo le encuentras defectos. |
| idealist | Idealista | Crees en algo más grande que tú. |
| judge | Juez | Tu criterio mejora las cosas. |
| martyr | Mártir | Sufres por un bien mayor. |
| masochist | Masoquista | El dolor te recuerda que existes. |
| monster | Monstruo | Estás condenado: actúa como tal. |
| child | Niño | Buscas quien cuide de ti. |
| eyeOfTheStorm | Ojo de la Tormenta | El caos te rodea sin tocarte. |
| pedagogue | Pedagogo | Salvas a otros con el conocimiento. |
| penitent | Penitente | Tu existencia es una culpa que expiar. |
| perfectionist | Perfeccionista | Nada alcanza nunca tu listón. |
| caregiver | Protector | Cuidar de otros da sentido a tu existencia. |
| rebel | Rebelde | No aceptas las reglas de nadie. |
| creepShow | Repulsivo | Disfrutas asqueando a los demás. |
| sadist | Sádico | Existes para causar dolor. |
| sociopath | Sociópata | Los inferiores sobran. |
| soldier | Soldado | Cumples órdenes, a tu manera. |
| loner | Solitario | Vas por tu propio camino. |
| survivor | Superviviente | Nada consigue acabar contigo. |
| traditionalist | Tradicionalista | Lo probado es lo correcto. |
| trickster | Truhán | La risa amansa el dolor. |
| visionary | Visionario | Hay algo más allá de todo esto. |

## Clanes (resumen de una línea, Capítulo Dos)
- **Assamita** (assamite): justicieros de un culto sangriento; maestros del asesinato y la hechicería.
- **Brujah** (brujah): rebeldes apasionados contra la tiranía (a veces la suya propia).
- **Gangrel** (gangrel): nómadas feroces y salvajes, cercanos a la Bestia.
- **Giovanni** (giovanni): nigromantes incestuosos que comercian con sangre, dinero y almas.
- **Lasombra** (lasombra): guardianes perversos que lideran nominalmente el Sabbat; señores de la oscuridad.
- **Malkavian** (malkavian): dementes con un sorprendente entendimiento.
- **Nosferatu** (nosferatu): deformes «Ratas de Alcantarilla» que reúnen secretos.
- **Ravnos** (ravnos): embusteros maestros de la ilusión.
- **Seguidores de Set** (followersOfSet): guardianes de secretos oscuros; serpientes seductoras.
- **Toreador** (toreador): amantes de la estética atrapados en el estancamiento.
- **Tremere** (tremere): hechiceros de la Sangre, temidos y desconfiados.
- **Tzimisce** (tzimisce): nobles caídos de Europa del Este, escultores de carne, alma del Sabbat.
- **Ventrue** (ventrue): aristocracia que hace cumplir Tradiciones y Mascarada.
- **Caitiff** (caitiff): sin Clan; marginados sin características comunes.

## Disciplinas (resumen de una línea)
Animalismo (afinidad y control de animales), Auspex (percepción extrasensorial), Celeridad (rapidez), Dementación (provocar locura), Dominación (control mental por la mirada), Extinción/Quietus (el arte del asesinato), Fortaleza (resistencia sobrenatural), Necromancia (invocar/controlar muertos), Obtenebración (control de sombras), Ofuscación (permanecer oculto), Potencia (fuerza física), Presencia (atraer/controlar multitudes), Protean (cambio de forma), Quimerismo (ilusiones), Serpentis (poderes reptilianos), Taumaturgia (magia de Sangre), Vicisitud (esculpir la carne). Detalle completo en 01-08.

## Trasfondos (resumen de una línea)
Aliados, Contactos, Criados, Dominio, Estatus, Fama, Generación, Identidad Alternativa, Influencia, Mentor, Miembro de la Mano Negra (Sabbat), Rebaño, Recursos, Rituales (Sabbat). Detalle con niveles en 10-trasfondos-virtudes.md.

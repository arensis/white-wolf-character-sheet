# V20 — Atributos

> Resumen del material del manual aportado por el usuario (Cap. Tres, págs. ~96-100). Ver 00-indice.md. Solo Mascarada.
> 9 Atributos en 3 grupos (Físicos, Sociales, Mentales). Escala 1 (Malo) a 5 (Sobresaliente); casi todo el mundo tiene 1-3. Los vampiros pueden gastar Sangre para subir temporalmente **solo los Físicos** (pág. 269).
> Especialidades: cualquier Atributo (o Habilidad) de 4+ puede tener una especialidad; en las tiradas que cubra, cada 10 cuenta como dos éxitos (ver 09-habilidades.md, sección Especialidades).

## Correspondencia libro ES ↔ clave app (VTM)

| Libro (ES) | Grupo | Clave app |
|---|---|---|
| Fuerza | Físico | strength |
| Destreza | Físico | dexterity |
| Resistencia | Físico | stamina |
| Carisma | Social | charisma |
| Manipulación | Social | manipulation |
| Apariencia | Social | appearance |
| Percepción | Mental | perception |
| Inteligencia | Mental | intelligence |
| Astucia | Mental | wits |

> El contenido completo (descripción + 5 niveles + especialidades por atributo) está en `src/app/vampire-masquerade/creation/data/attributes-content.data.ts` y se muestra en el modal de info de la ficha (botón «i»).

## Físicos

### Fuerza (strength)
Potencia física bruta: cuánto peso levantas/empujas y la fuerza de tus golpes. Se suma a la reserva de daño en cuerpo a cuerpo; se usa para romper, levantar, transportar o saltar.
- • Malo: levantas <20 kg. •• Normal: ~50 kg. ••• Bueno: ~100 kg. •••• Excepcional: casi 200 kg. ••••• Sobresaliente: ~300 kg, aplastas cráneos como uvas.
- Especialidades: Agarre Fuerte, Brazos Potentes, Reservas de Fuerza, Violento.

### Destreza (dexterity)
Pericia general: rapidez, agilidad, velocidad, manipular objetos con precisión; coordinación ojo-mano, reflejos, gracia.
- • Malo: torpe. •• Normal: ni patoso ni bailarín. ••• Bueno: potencial atlético. •••• Excepcional: podrías ser acróbata. ••••• Sobresaliente: movimientos líquidos, casi sobrehumanos.
- Especialidades: Preciso, Veloz, Gracia Felina, Reflejos Rápidos.

### Resistencia (stamina)
Salud, aguante y vigor: cuánto te fuerzas y cuánto castigo soportas; incluye fortaleza mental (tenacidad).
- • Malo: no soportas un viento fuerte. •• Normal: aguantas un par de puñetazos. ••• Bueno: apenas enfermas. •••• Excepcional: ganarías un maratón. ••••• Sobresaliente: constitución hercúlea.
- Especialidades: Infatigable, Decidido, Duro Como el Acero, Vigoroso.

## Sociales

### Carisma (charisma)
Agradar mediante la personalidad: ganarte simpatía y confianza, encantar, influir, convencer. No define *cómo* eres carismático (interpretación/especialidades).
- • Malo: poca personalidad. •• Normal: caes bien, algunos amigos. ••• Bueno: la gente confía en ti. •••• Excepcional: gran magnetismo. ••••• Sobresaliente: culturas enteras te seguirían.
- Especialidades: Elegante, Labia, Convincente, Sofisticado, Agudo, Elocuente, Embaucador.

### Manipulación (manipulation)
Que otros compartan tus puntos de vista o sigan tus dictados: influir, engañar, embaucar, coaccionar. A diferencia de Carisma, no importa que les gustes; los fallos generan enemigos y desconfianza.
- • Malo: pocas y torpes palabras. •• Normal: engañas a veces. ••• Bueno: siempre consigues descuentos. •••• Excepcional: político o líder de secta. ••••• Sobresaliente: convences de lo imposible.
- Especialidades: Persuasivo, Seductor, Razonable, Liante, Invocador de "Hechos".

### Apariencia (appearance)
La primera impresión que das (atractivo o rasgos distintivos). En situaciones de primera impresión, las reservas Sociales pueden quedar limitadas a tu Apariencia.
- • Malo: la gente te evita/eres muy feo. •• Normal: no destacas. ••• Bueno: «déjame invitarte a un trago». •••• Excepcional: se desvían para conocerte. ••••• Sobresaliente: nunca se olvidan de ti.
- Especialidades: Estilo Poco Convencional, Fotogénico, Sentido de la Moda, Rostro Inolvidable, Pose Memorable.

## Mentales

### Percepción (perception)
Observar el entorno, consciente o intuitivamente: advertir emboscadas, hallar pistas, desvelar lo oculto o camuflado.
- • Malo: absorto/cabeza hueca. •• Normal: captas la imagen general. ••• Bueno: percibes cambios minúsculos. •••• Excepcional: nada se te escapa. ••••• Sobresaliente: ves lo casi imperceptible.
- Especialidades: Atento, Perspicaz, Cuidadoso, Sagaz, Táctico.

### Inteligencia (intelligence)
Aprehender hechos y conocimientos, razonar, resolver problemas, evaluar; pensamiento crítico y flexible. No incluye experiencia, sabiduría ni sentido común.
- • Malo: no el más listo. •• Normal: lo justo. ••• Bueno: más despierto que las masas. •••• Excepcional: brillante. ••••• Sobresaliente: genio.
- Especialidades: Conocimiento Teórico, Creativo, Analítico, Resolución de Problemas, Autoridad en una Materia.

### Astucia (wits)
Pensar sobre la marcha y reaccionar rápido; ingenio y calma bajo presión.
- • Malo: «tírame del dedo». •• Normal: sabes cuándo apostar y plantarte. ••• Bueno: no te sorprenden. •••• Excepcional: das con la réplica (tarde). ••••• Sobresaliente: piensas más rápido de lo que actúas.
- Especialidades: Llevar la Iniciativa, Ocurrente, Cambios de Estrategia, Emboscadas.

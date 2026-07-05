# V20 — Trasfondos, Virtudes y otros Rasgos

> Resumen del material del manual aportado por el usuario (Cap. Tres). Ver 00-indice.md. Solo Mascarada.

## Trasfondos

Ventajas externas (relaciones, circunstancias, oportunidades). Rara vez se tiran, pero el Narrador puede pedir tiradas (p. ej. Astucia + Recursos, Manipulación + Contactos). Compartibles en coterie: Aliados, Contactos, Criados, Dominio, Influencia, Rebaño, Recursos.

### Correspondencia libro ES ↔ claves de la app (VTM)

El modelo VTM (`advantages.backgrounds`) tiene: `allies, alternateIdentity, blackHandMembership, contacts, domain, fame, generation, herd, influence, mentor, resources, retainers, rituals, status, customBackgrounds`.

| Libro (ES) | Clave app |
|---|---|
| Aliados | allies |
| Identidad Alternativa | alternateIdentity |
| Miembro de la Mano Negra | blackHandMembership |
| Contactos | contacts |
| Dominio | domain |
| Fama | fame |
| Generación | generation |
| Rebaño | herd |
| Influencia | influence |
| Mentor | mentor |
| Recursos | resources |
| Criados | retainers |
| Rituales | rituals |
| Estatus | status |

> Nota: `rituals` y `blackHandMembership` son **exclusivos del Sabbat**. `alternateIdentity` y `fame` no existen en la lista de Edad Oscura. La app ya los tiene todos en el modelo VTM y los muestra (ver `backgrounds.component.html`), así que el listado del sheet es correcto. Los textos i18n de descripción/niveles para el modal viven en `creationVtm.descriptions.backgrounds.*` (14 claves) y en `backgrounds-content.data.ts`.

### Aliados (allies)
Mortales que te apoyan voluntariamente (familia, amigos, organización). No siempre disponibles; pueden dar acceso indirecto a sus Contactos/Influencia/Recursos. Compartible.
- • Un aliado de influencia y poder moderados.
- •• Dos aliados de poder moderado.
- ••• Tres aliados, uno bastante influyente.
- •••• Cuatro aliados, uno muy influyente.
- ••••• Cinco aliados, uno extremadamente influyente.

### Contactos (contacts)
Gente a la que pagas/manipulas/coaccionas por información. Contactos principales (detallados) + contactos menores (tira Contactos, dif. 7; un menor por éxito). Compartible.
- • Un contacto principal. •• Dos. ••• Tres. •••• Cuatro. ••••• Cinco.

### Criados (retainers)
Sirvientes leales y constantes (a menudo Ghouls, Dominados o fascinados por Presencia). Requieren control (salario, Vitae, Disciplinas); nunca perfectos ni ciegamente leales. Compartible.
- • Un criado. •• Dos. ••• Tres. •••• Cuatro. ••••• Cinco.

### Dominio (domain)
Territorio de Caza reconocido por el Príncipe. Puedes invertir puntos en **tamaño** o en **seguridad** (cada punto de seguridad: +1 dif. a intrusos sin permiso, −1 dif. para que identifiques/rastrees intrusos). Cada punto de tamaño reduce la dif. de Caza y se añade a tu **reserva de Sangre inicial** (no la máxima). Compartible.
- • Edificio pequeño (hogar unifamiliar, local social): refugio básico.
- •• Iglesia, fábrica, almacén, bloque de pisos: acceso controlable.
- ••• Torre, manzana o intersección importante: zonas para ocultarse y acceso controlado.
- •••• Alcantarillas, red de túneles, enclave en colina: rasgos defensivos inherentes.
- ••••• Barrio entero, subdivisión étnica o suburbio.
- Coterie: 6-8 pts una ciudad pequeña; 10-15 un sector urbano; grandes ciudades cientos de puntos.

### Estatus (status)
Reputación entre los Vástagos locales (Camarilla: por Sire/linaje/éxito; Sabbat: por manada/celo). No transferible entre sectas. **Los Caitiff no pueden adquirirlo en creación.**
- • Conocido: Neonato / Sacerdote de manada.
- •• Respetado: Ancilla / Ductus.
- ••• Influyente: Antiguo / Templario.
- •••• Poderoso: Primogenitura / Obispo.
- ••••• Luminaria: Príncipe / Arzobispo.

### Fama (fama → clave `fame`)
Reconocimiento en la sociedad mortal (artista, atleta, criminal célebre…). Arma de doble filo: privilegios pero atención no deseada. Reduce la dif. de Caza en 1 por punto.
- • Conocido en una subcultura selecta.
- •• Gente al azar reconoce tu cara; celebridad menor.
- ••• Mucho renombre (senador, artista viral).
- •••• Celebridad en toda regla.
- ••••• Todos te conocen; ponen tu nombre a sus hijos.

### Generación (generation)
Pureza de la Sangre / proximidad a Caín. Sin puntos = 13ª Generación.
- • 12ª Gen: reserva de Sangre 11, 1 punto/turno.
- •• 11ª Gen: reserva 12, 1 punto/turno.
- ••• 10ª Gen: reserva 13, 1 punto/turno.
- •••• 9ª Gen: reserva 14, 2 puntos/turno.
- ••••• 8ª Gen: reserva 15, 3 puntos/turno.

### Identidad Alternativa (alternateIdentity)
Identidad falsa completa con documentación. Unos te conocen de una forma, otros de otra.
- • Nuevo en el juego; a veces olvidas tu otra personalidad.
- •• Bien asentado (simulas doctor, abogado, espía capaz).
- ••• Buena reputación con ese nombre en tu área de infiltración.
- •••• Respeto y confianza en el área de infiltración.
- ••••• Respeto e influencia; confianza de individuos poderosos.

### Influencia (influence)
Tirón en la comunidad mortal (riqueza, prestigio, cargos, chantaje, manipulación sobrenatural). Vía para generar Recursos. Compartible.
- • Moderadamente influyente; política local.
- •• Bien conectado; política provincial/estatal.
- ••• Posición de influencia; política regional.
- •••• Poder personal extenso; política nacional.
- ••••• Enormemente influyente; política mundial.

### Mentor (mentor)
Vástago (o grupo) que te guía y ayuda ocasionalmente. No es un «sal de la cárcel»; puede pedir cosas a cambio.
- • Ancilla de poca influencia o Ductus/Sacerdote de manada.
- •• Respetado (Antiguo o veterano condecorado).
- ••• Enormemente influyente (Primogenitura u Obispo).
- •••• Gran poder sobre la ciudad (Príncipe o Arzobispo).
- ••••• Extraordinariamente poderoso (Justicar o Cardenal).

### Rebaño (herd)
Grupo de mortales de los que alimentarte con seguridad. Añade dados a las tiradas de Caza. Poco controlables (para peones eficaces, usa Aliados/Criados). Compartible.
- • Tres recipientes. •• Siete. ••• 15. •••• 30. ••••• 60.

### Recursos (resources)
Bienes valiosos (efectivo, inversiones, propiedades, contrabando…). Renta mensual según puntuación.
- • Suficiente (clase trabajadora estable).
- •• Moderado (clase media próspera; un sirviente; nivel 1 hasta 6 meses en cualquier sitio).
- ••• Confortable (tierras y vivienda; buen crédito; nivel 1 indefinido).
- •••• Rico (activos intangibles; nivel 3 hasta un año, nivel 2 indefinido).
- ••••• Extremadamente Rico (inversiones globales; viajas con comodidades de 3+).

### Miembro de la Mano Negra (blackHandMembership) — SOLO SABBAT
Miembro de pleno derecho de la Mano Negra; puedes pedir (y debes prestar) ayuda. Si revelas tu afiliación a otros Sabbat, sumas esta puntuación a reservas Sociales.
- • Soldado raso; pides ayuda a 1 miembro 1 vez/historia.
- •• Conocido y respetado; 2 miembros 1 vez/historia.
- ••• Alta estima; 5 miembros 1 vez/historia.
- •••• Héroe; 7 miembros 2 veces/historia; lideras a muchos en batalla.
- ••••• Leyenda; 12 miembros 2 veces/historia; los Serafines buscan tu consejo.

### Rituales (rituals) — SOLO SABBAT
Conoces los Ritae del Sabbat; vital para ser Sacerdote de manada. Investidura sobrenatural de la magia Tzimisce.
- • Unos pocos Auctoritas Ritae.
- •• Algunos Auctoritas + unos pocos Ignoblis Ritae.
- ••• Todos los Auctoritas + algunos Ignoblis; puedes crear Ignoblis propios.
- •••• Todos los Auctoritas + muchos Ignoblis; conoces funciones de Ignoblis regionales.
- ••••• Todos los Auctoritas + docenas de Ignoblis; conoces casi todos los regionales.

### Compartir Trasfondos (resumen de reglas)
- Se puede aunar Aliados, Contactos, Criados, Dominio, Influencia, Rebaño y Recursos en una coterie.
- **Ancla:** un Trasfondo sostiene al resto; ningún compartido puede superar los puntos del Ancla. Si el Ancla se daña, los demás caen.
- Retirar tu aporte devuelve 1 punto menos de lo aportado.
- Compartir permite superar el límite normal de 5 (el Narrador suele topar el Ancla en 10). Escalar en fiabilidad, no solo cantidad.

---

## Virtudes

Definen el código ético. Entran en juego ante frenesí inminente, actos éticamente cuestionables o miedo/perturbación. **Humanidad inicial = Conciencia + Autocontrol.**

### Conciencia (conscienceConviction en el modelo) — o Convicción en Sendas
Evalúa bien/mal; frena a la Bestia; determina pérdida de Humanidad por transgresiones.
- • Indiferente. •• Normal. ••• Ético. •••• Justo. ••••• Inflexible.

### Autocontrol (selfControlInstint en el modelo) — o Instinto en Sendas
Dominio sobre la Bestia; resistir el frenesí. Nunca tiras más dados para controlar el frenesí que puntos de Sangre en tu reserva.
- • Inestable. •• Normal. ••• Moderado. •••• Curtido. ••••• Total autodominio.

### Coraje (courage)
Afrontar el miedo (fuego, sol, Fe Verdadera → Rötschreck). Todas las Sendas lo tienen.
- • Tímido. •• Normal. ••• Intrépido. •••• Resoluto. ••••• Heroico.

> El modelo VTM usa `virtues.conscienceConviction`, `virtues.selfControlInstint`, `virtues.courage`.

---

## Otros rasgos

### Fuerza de Voluntad (willpower)
Escala 1-10, con **puntuación permanente** (círculos, para tiradas) y **reserva temporal** (recuadros, se gasta). **Inicial = Coraje.** Gastar 1 punto: éxito automático o ignorar penalización por heridas 1 turno, etc.
- 1 Pusilánime · 2 Débil · 3 Retraído · 4 Reservado · 5 Seguro · 6 Confiado · 7 Determinado · 8 Controlado · 9 Férreo · 10 Inamovible.

### Reserva de Sangre (bloodPool)
Vitae en el organismo (1 punto ≈ medio litro / una pinta). Máximo y gasto por turno según Generación (ver Trasfondo Generación). 0 puntos = hambre voraz / frenesí.

### Salud (health)
7 niveles con penalización a reservas de **acciones** (no a tiradas reflejas: absorción, virtudes, FV para abortar):
- Magullado 0 · Lastimado −1 · Lesionado −1 · Herido −2 · Malherido −2 · Tullido −5 · Incapacitado (inmóvil; solo curarse con Sangre o beber la ofrecida).
- Gastar 1 FV ignora las penalizaciones por heridas 1 turno.
- Vástago Incapacitado que sufre 1 agravado más → Muerte Definitiva. Incapacitado sin Sangre → Letargo.
- Las penalizaciones se aplican al daño de ataques de Fuerza, no a armas mecánicas (armas de fuego).

/**
 * Trait specialties for V20 (Mascarada). Unlike Edad Oscura, in Masquerade a
 * specialty can be taken for any Attribute OR Ability rated 4 or more, and
 * there are NO experience fields. Each qualifying trait gets one specialty
 * (free at character creation); on a roll it covers, every 10 counts as two
 * successes. The lists below are orientative suggestions for the player.
 */
export const MAX_SPECIALTIES_PER_TRAIT = 1;

export const ATTRIBUTE_SPECIALTIES: Record<string, string[]> = {
  // Físicos
  strength: ['Levantar Pesos', 'Golpes Demoledores', 'Presas', 'Arrancar'],
  dexterity: ['Rapidez', 'Precisión', 'Esquivar', 'Sigilo', 'Manos Firmes'],
  stamina: ['Aguantar el Dolor', 'Incansable', 'Contra Venenos', 'Resistencia'],
  // Sociales
  charisma: ['Elocuente', 'Magnético', 'Encantador', 'Inspirador'],
  manipulation: ['Persuasión', 'Labia', 'Seducción', 'Intimidación Velada'],
  appearance: ['Imponente', 'Seductora', 'Inocente', 'Elegante'],
  // Mentales
  perception: ['Detalles', 'Instinto', 'Vigilancia', 'Peligros'],
  intelligence: ['Analítica', 'Memoria', 'Cálculo', 'Estrategia'],
  wits: ['Reacción Rápida', 'Ingenio', 'Serenidad Bajo Presión', 'Réplicas'],
};

export const ABILITY_SPECIALTIES: Record<string, string[]> = {
  // Talentos
  alertness: ['Emboscadas', 'Multitudes', 'Ruidos', 'Vigilancia nocturna'],
  athletics: ['Correr', 'Escalada', 'Natación', 'Paracaidismo', 'Acrobacias'],
  awareness: ['Auras', 'Presencias sobrenaturales', 'Premoniciones', 'Lugares encantados'],
  brawl: ['Puñetazos', 'Presas', 'Proyecciones', 'Pelea sucia'],
  emptahy: ['Emociones', 'Motivaciones ocultas', 'Detectar mentiras', 'Consuelo'],
  expression: ['Conversación', 'Discursos', 'Poesía', 'Redes sociales'],
  intimidation: ['Amenazas veladas', 'Coacción física', 'Interrogatorios', 'Autoridad'],
  leadership: ['Órdenes', 'Oratoria', 'Carisma de masas', 'Mando en crisis'],
  streetwise: ['Compraventa ilegal', 'Rumores', 'Bandas', 'Supervivencia urbana'],
  subterfuge: ['Seducción', 'Labia', 'Encontrar debilidades', 'Coartadas'],
  // Técnicas
  animalKen: ['Perros', 'Gatos', 'Ratas', 'Caballos', 'Aves'],
  crafts: ['Mecánica', 'Carpintería', 'Pintura', 'Forja', 'Electrónica'],
  drive: ['Persecuciones', 'Todoterreno', 'Motocicletas', 'Camiones'],
  etiquette: ['Alta sociedad', 'Corte vampírica', 'Negocios', 'Cultura callejera'],
  firearms: ['Pistolas', 'Rifles', 'Escopetas', 'Tiro rápido', 'Francotirador'],
  larceny: ['Forzar cerraduras', 'Carterismo', 'Allanamiento', 'Trile'],
  melee: ['Cuchillos', 'Espadas', 'Armas improvisadas', 'Estacas'],
  performance: ['Canto', 'Danza', 'Actuación', 'Instrumento musical'],
  stealth: ['Sombras', 'Multitudes', 'Acecho', 'Moverse en silencio'],
  survival: ['Rastrear', 'Bosques', 'Desierto', 'Encontrar refugio diurno'],
  // Conocimientos
  academics: ['Historia', 'Literatura', 'Filosofía', 'Arqueología'],
  computer: ['Programación', 'Intrusión', 'Bases de datos', 'Redes'],
  finance: ['Bolsa', 'Blanqueo', 'Tasación', 'Contabilidad'],
  investigation: ['Escenas del crimen', 'Búsqueda', 'Seguimientos', 'Archivos'],
  law: ['Penal', 'Civil', 'Tradiciones de la Estirpe', 'Policía'],
  medicine: ['Urgencias', 'Patología', 'Cirugía', 'Farmacología'],
  occult: ['Tradiciones de la Estirpe', 'Rituales', 'Infierno', 'Magia mortal'],
  politics: ['Ciudad', 'Camarilla', 'Sabbat', 'Elecciones', 'Burocracia'],
  science: ['Química', 'Biología', 'Física', 'Geología'],
  technology: ['Electrónica', 'Seguridad', 'Comunicaciones', 'Sabotaje'],
};

export const getAttributeSpecialties = (member: string): string[] =>
  ATTRIBUTE_SPECIALTIES[member] ?? [];

export const getAbilitySpecialties = (member: string): string[] =>
  ABILITY_SPECIALTIES[member] ?? [];

/** Suggestions for any trait (attribute or ability). */
export const getSpecialtySuggestions = (member: string): string[] =>
  ATTRIBUTE_SPECIALTIES[member] ?? ABILITY_SPECIALTIES[member] ?? [];

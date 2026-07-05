/**
 * Ability specialties from *Edad Oscura: Vampiro* (Capítulo Cinco). Attributes
 * do NOT have specialties in this edition. A specialty grants one extra die on
 * rolls it applies to; you may have up to three per ability and they are bought
 * with freebie points (or experience), never granted by dots.
 *
 * Values are the actual specialty names from the rulebook (Spanish).
 */
export const MAX_SPECIALTIES_PER_ABILITY = 3;

export const ABILITY_SPECIALTIES: Record<string, string[]> = {
  // Talentos
  alertness: ['Bosques', 'Emboscadas', 'Manifestaciones Angélicas/Demoníacas', 'Multitudes', 'Paranoia', 'Ruidos', 'Trampas'],
  athletics: ['Acrobacias', 'Correr', 'Danza', 'Malabarismos', 'Nadar', 'Objetos Arrojadizos'],
  brawl: ['Lucha', 'Llaves', 'Pelear Borracho', 'Presas', 'Proyecciones', 'Puñetazos'],
  dodge: ['A Caballo', 'Agacharse', 'Encontrar Cobertura', 'Paso Atrás', 'Paso Lateral', 'Saltar', 'Tirarse al Suelo'],
  emptahy: ['Emociones', 'Emociones Ocultas', 'Personalidades', 'Problemas Familiares', 'Preocupaciones a Largo Plazo', 'Verdades'],
  expression: ['Actuar', 'Conversación', 'Improvisación', 'Narración', 'Poesía', 'Predicar'],
  intimidation: ['Amenazas Abiertas', 'Amenazas Veladas', 'Chantaje', 'Coacción Física', 'Duelo de Miradas', 'Política', 'Rango Militar'],
  leadership: ['Amistoso', 'Apremiante', 'Noble', 'Órdenes', 'Oratoria', 'Pío', 'Severo'],
  legerdemain: ['Malabarismos', 'Ocultación', 'Robar Bolsas', 'Trucos de Magia'],
  subterfuge: ['Adulación', 'Cambiar de Tema', 'Encontrar Debilidades', 'Labia', 'Omisiones Selectivas', 'Seducción'],
  // Técnicas
  animalKen: ['Animales de Granja', 'Aves de Presa', 'Caballos', 'Perros', 'Pesca', 'Roedores', 'Osos', 'Serpientes'],
  archery: ['A Caballo', 'Caza', 'Blancos Móviles', 'Bosques', 'Campos', 'Dianas', 'Disparo Rápido', 'Emboscada'],
  commerce: ['Estafa', 'Evaluación', 'Negociación', 'Rutas Comerciales'],
  crafts: ['Detalle', 'Invención', 'Metalurgia', 'Organización', 'Sanidad', 'Trabajo Rápido', 'Valoración'],
  etiquette: ['Campesinos', 'Conducta Profesional', 'Costumbres Extranjeras', 'Cultura Callejera', 'Modales Cortesanos', 'Tradiciones Familiares'],
  melee: ['Cuchillos', 'Desarmar', 'Desenvainar Rápido', 'Espadas', 'Hachas', 'Mazas', 'Múltiples Adversarios', 'Tácticas de Equipo'],
  performance: ['Composición', 'Cortesano', 'Erótico'],
  ride: ['Bosques', 'Combate', 'Saltos', 'Sigilo', 'Trucos', 'Velocidad'],
  stealth: ['Calles', 'Evitar Rastreo', 'Multitudes', 'Naturaleza', 'Reptar', 'Sombras'],
  survival: ['Alta Mar', 'Bajíos y Costas', 'Bosques', 'Caza', 'Desiertos', 'Forrajear', 'Marismas y Pantanos', 'Montañas', 'Pionero', 'Rastrear'],
  // Conocimientos
  academics: ['Citar Textos', 'Enseñanza', 'Investigación'],
  hearthWisdom: ['Por país o región', 'Árabe', 'Curas', 'Judío', 'Protecciones', 'Presagios'],
  investigation: ['Acecho', 'Búsqueda', 'Contabilidad', 'Encontrar Informadores', 'Llevar Registros'],
  law: ['Derecho Canónico', 'Diplomacia', 'Leyes Locales', 'Propiedad y Herencia', 'Obligaciones Feudales', 'Sentencias'],
  linguistics: ['Diplomacia', 'Insultos y Juramentos', 'Política', 'Teología', 'Términos Técnicos'],
  medicine: ['Cirugía Menor', 'Diagnóstico', 'Enfermedades', 'Heridas de Guerra', 'Hierbas', 'Partos', 'Primeros Auxilios', 'Tratar Envenenamientos'],
  occult: ['Brujas', 'Cábala', 'Paganismo', 'Secretos Antiguos', 'Sufismo', 'Vampiros'],
  politics: ['Ciudad', 'Heráldica', 'Histórica', 'Obligaciones Feudales', 'Religiosa'],
  seneschal: ['Feudos', 'Granjas', 'Herencia', 'Hogares Comunes', 'Hogares Nobles', 'Órdenes Religiosas', 'Propiedades Urbanas'],
  theology: ['Confesión', 'Debate', 'Exposición', 'Herejía', 'Ortodoxia'],
};

export const getAbilitySpecialties = (member: string): string[] =>
  ABILITY_SPECIALTIES[member] ?? [];

/**
 * Generic abilities also have "experience fields". An experience field grants
 * +1 die and CAN combine with a specialty (up to +2 dice on a roll). You may
 * have as many as your dots in the ability; the first is free, the rest cost
 * one freebie each.
 */
export const EXPERIENCE_FIELDS: Record<string, string[]> = {
  academics: ['Trivium', 'Quadrivium'],
  commerce: ['Alimentos', 'Esclavos', 'Especias', 'Ganado', 'Mercancías Robadas', 'Mercenarios', 'Reliquias', 'Ropas', 'Sedas', 'Vino'],
  performance: ['Actuar', 'Cantar', 'Danza', 'Instrumentos de Cuerda', 'Instrumentos de Viento', 'Percusión'],
  crafts: ['Armería', 'Albañilería', 'Arquitectura', 'Construcción de Barcos', 'Coser y Bordar', 'Herrería', 'Joyería', 'Talla de Madera'],
};

export const isGenericAbility = (member: string): boolean =>
  member in EXPERIENCE_FIELDS;

export const getExperienceFields = (member: string): string[] =>
  EXPERIENCE_FIELDS[member] ?? [];

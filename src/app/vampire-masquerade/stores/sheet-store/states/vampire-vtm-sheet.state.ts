import { VampireMasqueradeSheet } from 'src/app/vampire-masquerade/model/masquerade-sheet/vampire-masquerade/VampireMasqueradeSheet';
import { createEntityAdapter } from "@ngrx/entity";
import { DarkAgesDamageType } from 'src/app/shared/model/dark-ages-sheet/advantages/health/DarkAgesDamageType';

export const vampireVTMsheetFeatureKey = 'vampireVTMsheet';

export interface VampireVTMSheetState extends VampireMasqueradeSheet {}

export const adapter = createEntityAdapter<VampireVTMSheetState>();

export const initialState: VampireVTMSheetState = adapter.getInitialState({
  playerData: {
    info: {
      name: "",
      player: "",
      chronicle: ""
    },
    background: {
      nature: "",
      demeanor: "",
      clan: "",
      sect: "",
      weakness: ""
    },
    concept: {
      generation: 13,
      concept: "",
      haven: "",
    }
  },
  attributes: {
    physical: {
      strength: 1,
      dexterity: 1,
      stamina: 1
    },
    social: {
      charisma: 1,
      manipulation: 1,
      appearance: 1
    },
    mental: {
      perception: 1,
      intelligence: 1,
      wits: 1
    }
  },
  abilities: {
    talents: {
      alertness: 0,
      athletics: 0,
      awareness: 0,
      brawl: 0,
      emptahy: 0,
      expression: 0,
      intimidation: 0,
      leadership: 0,
      streetwise: 0,
      subterfuge: 0,
      customTalents: []
    },
    skills: {
      animalKen: 0,
      crafts: 0,
      drive: 0,
      etiquette: 0,
      firearms: 0,
      larceny: 0,
      melee: 0,
      performance: 0,
      stealth: 0,
      survival: 0,
      customSkills: []
    },
    knowledges: {
      academics: 0,
      computer: 0,
      finance: 0,
      investigation: 0,
      law: 0,
      medicine: 0,
      occult: 0,
      politics: 0,
      science: 0,
      technology: 0,
      customKnowledges: []
    }
  },
  advantages: {
    backgrounds: {
      allies: 0,
      alternateIdentity: 0,
      blackHandMembership: 0,
      contacts: 0,
      domain: 0,
      fame: 0,
      generation: 0,
      herd: 0,
      influence: 0,
      mentor: 0,
      resources: 0,
      retainers: 0,
      rituals: 0,
      status: 0,
      customBackgrounds: []
    },
    virtues: {
      conscienceConviction: 1,
      selfControlInstint: 1,
      courage: 1
    },
    path: {
      name: "",
      level: 0,
      bearing: {
        type: "",
        value: ""
      }
    },
    willpower: {
      permanent: 0,
      temporal: 0
    },
    bloodPool: {
      max: 10,
      pool: 0
    },
    experience: {
      total: 0,
      current: 0,
      entries: []
    },
    health: {
      bruised: {
        penalty: 0,
        value: DarkAgesDamageType.EMPTY
      },
      hurt: {
        penalty: -1,
        value: DarkAgesDamageType.EMPTY
      },
      injured: {
        penalty: -1,
        value: DarkAgesDamageType.EMPTY
      },
      wounded: {
        penalty: -2,
        value: DarkAgesDamageType.EMPTY
      },
      mauled: {
        penalty: -2,
        value: DarkAgesDamageType.EMPTY
      },
      crippled: {
        penalty: -5,
        value: DarkAgesDamageType.EMPTY
      },
      incapacitated: {
        penalty: 0,
        value: DarkAgesDamageType.EMPTY
      }
    },
    languages: [],
    merits: [],
    flaws: []
  },
  disciplines: {
    animalism: {
      level: 0,
      inBlood: false
    },
    auspex: {
      level: 0,
      inBlood: false
    },
    celerity: {
      level: 0,
      inBlood: false
    },
    chimerstry: {
      level: 0,
      inBlood: false
    },
    dementation: {
      level: 0,
      inBlood: false
    },
    dominate: {
      level: 0,
      inBlood: false
    },
    fortitude: {
      level: 0,
      inBlood: false
    },
    necromancy: {
      level: 0,
      inBlood: false,
      paths: [],
      rituals: []
    },
    obfuscate: {
      level: 0,
      inBlood: false
    },
    obtenebration: {
      level: 0,
      inBlood: false
    },
    potence: {
      level: 0,
      inBlood: false
    },
    presence: {
      level: 0,
      inBlood: false
    },
    protean: {
      level: 0,
      inBlood: false
    },
    quietus: {
      level: 0,
      inBlood: false
    },
    serpentis: {
      level: 0,
      inBlood: false
    },
    thaumaturgy: {
      level: 0,
      inBlood: false,
      paths: [],
      rituals: []
    },
    vicissitude: {
      level: 0,
      inBlood: false
    }
  },
  gear: {
    travelEquipment: [],
    weapons: {
      melee: [],
      ranged: []
    },
    armor: {
      class: "",
      protection: 0,
      movementPenalty: 0,
      minStrength: 0,
    },
    shield: {
      class: "",
      protection: 0
    }
  },
  notes: null,
  isEditable: true
} as VampireMasqueradeSheet);

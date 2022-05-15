import { Injectable } from '@angular/core';
import { DarkAgesDamageType } from 'src/app/shared/model/dark-ages-sheet/advantages/health/DarkAgesDamageType';
import { VampireDarkAgesSheet } from '../model/dark-ages-sheet/vampire-dark-ages/VampireDarkAgesSheet';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetStoreService {
  private characterSheet: VampireDarkAgesSheet;

  constructor() {
    this.characterSheet = this.buildEmptyCharacterSheet();
  }

  getCharacterSheet(): VampireDarkAgesSheet {
    return this.characterSheet;
  }

  updateCharacterSheet(characterSheet: VampireDarkAgesSheet): void {
    this.characterSheet = Object.assign({}, characterSheet);
  }

  clearCharacterSheet(): void {
    this.characterSheet = this.buildEmptyCharacterSheet();
  }

  private buildEmptyCharacterSheet(): VampireDarkAgesSheet {
    return {
      playerData: {
        info: {
          name: "",
          player: "",
          chronicle: ""
        },
        background: {
          nature: "",
          demeanor: "",
          clan: ""
        },
        concept: {
          generation: 12,
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
          brawl: 0,
          dodge: 0,
          emptahy: 0,
          expression: 0,
          intimidation: 0,
          leadership: 0,
          legerdemain: 0,
          subterfuge: 0,
          customTalents: []
        },
        skills: {
          animalKen: 0,
          archery: 0,
          commerce: 0,
          crafts: 0,
          etiquette: 0,
          melee: 0,
          performance: 0,
          ride: 0,
          stealth: 0,
          survival: 0,
          customSkills: []
        },
        knowledges: {
          academics: 0,
          hearthWisdom: 0,
          investigation: 0,
          law: 0,
          linguistics: 0,
          medicine: 0,
          occult: 0,
          politics: 0,
          seneschal: 0,
          theology: 0,
          customKnowledges: []
        }
      },
      advantages: {
        backgrounds: {
          allies: 0,
          contacts: 0,
          domain: 0,
          generation: 0,
          herd: 0,
          influence: 0,
          mentor: 0,
          resources: 0,
          retainers: 0,
          status: 0,
          customBackgrounds: []
        },
        virtues: {
          conscienceConviction: 1,
          selfControlInstint: 1,
          courage: 1
        },
        road: {
          name: "",
          level: 0,
          aura: {
            type: "",
            value: ""
          }
        },
        willpower: {
          permanent: 0,
          temporal: 0
        },
        bloodPool: {
          max: 20,
          pool: 0
        },
        experience: {
          total: 0,
          current: 0
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
        quietus: {
          level: 0,
          inBlood: false
        },
        animalism: {
          level: 0,
          inBlood: false
        },
        assamiteSorcery: {
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
        daimoinon: {
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
        gargoyleFlight: {
          level: 0,
          inBlood: false
        },
        koldunicSorcery: {
          level: 0,
          inBlood: false
        },
        mortis: {
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
        serpentis: {
          level: 0,
          inBlood: false
        },
        temporis: {
          level: 0,
          inBlood: false
        },
        thaumaturgy: {
          level: 0,
          inBlood: false,
          paths: [],
          rituals: []
        },
        valerenHealer: {
          level: 0,
          inBlood: false
        },
        valerenWarrior: {
          level: 0,
          inBlood: false
        },
        vicissitude: {
          level: 0,
          inBlood: false
        }
      },
      equipment: {
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
      isEditable: true
    } as VampireDarkAgesSheet;
  }
}

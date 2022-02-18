import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arm-vampire-dark-age',
  templateUrl: './vampire-dark-age.component.html',
  styleUrls: ['./vampire-dark-age.component.scss']
})
export class VampireDarkAgeComponent implements OnInit {
  characterSheet: any;

  constructor() { }

  ngOnInit(): void {
    this.characterSheet = {
      playerData: {
        info: {
          name: "Merlín",
          player: "Alfonso",
          chronicle: "Alguna supongo"
        },
        background: {
          nature: "Ecologista",
          demeanor: "Luchador",
          clan: "Gangrel"
        },
        concept: {
          generation: "8",
          concept: "Ni idea",
          haven: "El mundo",
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
          customTalents: []
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
          customTalents: []
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
          name: "coso",
          level: {
            value: 5,
            meaning: "Algo"
          },
          aura: {
            type: "",
            value: ""
          }
        },
        willpower: {
          permanent: 5,
          temporal: 3
        },
        bloodPool: {
          max: 10,
          pool: 8
        },
        experience: {
          total: 0,
          current: 0
        },
        health: {
          bruised: {
            penalty: 0,
            value: "EMPTY"
          },
          hurt: {
            penalty: -1,
            selected: "EMPTY"
          },
          injured: {
            penalty: -1,
            selected: "EMPTY"
          },
          wounded: {
            penalty: -2,
            selected: "EMPTY"
          },
          mauled: {
            penalty: -2,
            selected: "EMPTY"
          },
          crippled: {
            penalty: -5,
            selected: "EMPTY"
          },
          incapacitated: {
            penalty: 0,
            selected: "EMPTY"
          }
        },
        languages: [],
        merits: [],
        flaws: []
      },
      disciplines: {
        abombwe: {
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
        ogham: {
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
      equipement: {
        travelEquipement: [],
        weapons: [],
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
      }
    }
  }
}

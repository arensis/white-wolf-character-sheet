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
          subterfuge: 0
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
          survival: 0
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
          theology: 0
        }
      },
      advantages: {
        disciplines: {

        },
        backgrounds: {

        },
        virtues: {
          conscienceConviction: 1,
          selfControlInstint: 1,
          courage: 1
        }
      }
    }
  }
}

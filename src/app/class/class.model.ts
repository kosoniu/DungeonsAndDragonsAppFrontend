import {Proficiency} from "../proficiency/proficency.model";

export class Class {
  classId: {value: number};
  name: string;
  description: string;
  hitDice: number;
  healthPoints: number;
  hitDiceOnHigherLevels;
  proficiencies: Proficiency[];

  constructor(classId: { value: number }, name: string, description: string, hitDice: number, healthPoints: number, hitDiceOnHigherLevels, proficiencies: Proficiency[]) {
    this.classId = classId;
    this.name = name;
    this.description = description;
    this.hitDice = hitDice;
    this.healthPoints = healthPoints;
    this.hitDiceOnHigherLevels = hitDiceOnHigherLevels;
    this.proficiencies = proficiencies;
  }
}

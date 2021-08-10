import {Proficiency} from "../proficiency/proficency.model";

export class Class {
  classId: {value: number};
  name: string;
  description: string;
  hitDice: number;
  healthPoints: number;
  healthPointsOnHigherLevels;
  proficiencies: Proficiency[];

  constructor(classId: { value: number }, name: string, description: string, hitDice: number, healthPoints: number, healthPointsOnHigherLevels, proficiencies: Proficiency[]) {
    this.classId = classId;
    this.name = name;
    this.description = description;
    this.hitDice = hitDice;
    this.healthPoints = healthPoints;
    this.healthPointsOnHigherLevels = healthPointsOnHigherLevels;
    this.proficiencies = proficiencies;
  }
}

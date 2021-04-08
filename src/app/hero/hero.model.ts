import {Race} from "../race/race.model";

export class Hero {
  public name: string;
  public level: number;
  public heroId: number;
  public race: Race;

  constructor(name: string, level: number, heroId: number, race: Race) {
    this.name = name;
    this.level = level;
    this.heroId = heroId;
    this.race = race;
  }
}

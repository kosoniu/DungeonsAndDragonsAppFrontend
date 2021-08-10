import {Race} from "../race/race.model";
import {Origin} from "../origin/origin.model";
import {Class} from "../class/class.model";

export class Hero {
  heroId: {value: number};
  name: string;
  level: number;
  race: Race;
  origin: Origin;
  clazz: Class;

  constructor(heroId:{value: number}, name: string, level: number, race: Race, origin: Origin, clazz: Class) {
    this.name = name;
    this.level = level;
    this.heroId = heroId;
    this.race = race;
    this.origin = origin;
    this.clazz = clazz;
  }
}

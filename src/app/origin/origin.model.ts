import {Proficiency} from "../proficiency/proficency.model";

export class Origin {
  originId: {value: number};
  name: string;
  description: string;
  proficiencies: Proficiency[];

  constructor(originId: {value: number}, name: string, description: string, proficiencies: Proficiency[]) {
    this.originId = originId;
    this.name = name;
    this.description = description;
    this.proficiencies = proficiencies;
  }

}

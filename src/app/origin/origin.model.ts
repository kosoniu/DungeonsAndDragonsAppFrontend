import {Proficiency} from "../proficiency/proficency.model";

export class Origin {
  id: number;
  name: string;
  description: string;
  proficiencies: Proficiency[];

  constructor(id: number, name: string, description: string, proficiencies: Proficiency[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.proficiencies = proficiencies;
  }

}

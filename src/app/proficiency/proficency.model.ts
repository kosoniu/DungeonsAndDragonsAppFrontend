
export class Proficiency {
  proficiencyId: {value: number};
  name: string;
  proficiencyType: string;

  constructor(proficiencyId: {value: number}, name: string, proficiencyType: string) {
    this.proficiencyId = proficiencyId;
    this.name = name;
    this.proficiencyType = proficiencyType;
  }
}

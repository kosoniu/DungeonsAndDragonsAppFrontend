
export class RaceFeature {
  raceFeatureId: {value: number};
  name: string;
  description: string;

  constructor(raceFeatureId: {value: number}, name: string, description: string) {
    this.raceFeatureId = raceFeatureId;
    this.name = name;
    this.description = description;
  }
}

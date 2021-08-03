
export class RaceFeature {
  private raceFeatureId: {value: number};
  private name: string;
  private description: string;

  constructor(raceFeatureId: {value: number}, name: string, description: string) {
    this.raceFeatureId = raceFeatureId;
    this.name = name;
    this.description = description;
  }
}

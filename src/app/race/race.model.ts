import {RaceFeature} from "./race-feature.model";

export class Race {
  raceId: {value: number};
  name: string;
  description: string;
  raceFeatures: RaceFeature[]

  constructor(raceId: {value: number}, name: string, description: string, raceFeatures: RaceFeature[]) {
    this.raceId = raceId;
    this.name = name;
    this.description = description;
    this.raceFeatures = raceFeatures;
  }
}

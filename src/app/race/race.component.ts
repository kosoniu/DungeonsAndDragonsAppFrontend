import { Component, OnInit } from '@angular/core';
import {RaceService} from "./race.service";
import {Race} from "./race.model";
import {ActivatedRoute} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  races: Race[];
  raceForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    raceFeatures: new FormArray([ this.createItem() ])
  });

  constructor(private raceService: RaceService, private route: ActivatedRoute) {
    this.races = [];
    this.route.data.subscribe(data => this.races = data.races);
  }

  ngOnInit(): void {}

  createItem(): FormGroup {
    return new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      raceFeatureId: new FormControl(0)
    });
  }

  get features(): FormArray {
    return this.raceForm.get("raceFeatures") as FormArray;
  }

  addItem(): void {
    this.features.push(this.createItem());
  }

  deleteItem(): void {
    this.features.removeAt(this.features.length - 1);
  }

  onSubmit() {
    this.raceService.add(this.raceForm.value).subscribe(() => {
      this.raceForm.reset();
      this.raceService.get().subscribe(races => this.races = races);
    });
  }

  onDeleteFeature() {
    this.raceService.get().subscribe(races => this.races = races);
  }

}

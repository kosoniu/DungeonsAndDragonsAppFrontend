import { Component, OnInit } from '@angular/core';
import {RaceService} from "./race.service";
import {Race} from "./race.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  races: Race[] = [];

  constructor(private raceService: RaceService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      console.log(data.races)
      this.races = data.races
    });
  }

  ngOnInit(): void {}

}

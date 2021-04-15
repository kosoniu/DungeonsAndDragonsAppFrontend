import { Component, OnInit } from '@angular/core';
import {RaceService} from "./race.service";
import {Race} from "./race.model";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  races: Race[] = [];
  private heroesSubscription;

  constructor(private raceService: RaceService) { }

  ngOnInit(): void {
    this.heroesSubscription = this.raceService.get().subscribe(result => {
      console.log(result);
      this.races = result;
    });
  }

}

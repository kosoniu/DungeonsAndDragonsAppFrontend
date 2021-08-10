import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero.model";
import {ActivatedRoute} from "@angular/router";
import {Origin} from "../origin/origin.model";
import {Class} from "../class/class.model";
import {Race} from "../race/race.model";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  origins: Origin[] = [];
  classes: Class[] = [];
  races: Race[] = [];
  heroesSubscription;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.origins = data.origins;
      this.classes = data.classes;
      this.races = data.races;
      console.log(data)
    })

    this.heroesSubscription = this.heroService.get().subscribe(heroes => {
      console.log(heroes)
      this.heroes = heroes
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.heroesSubscription.unsubscribe();
  }

}

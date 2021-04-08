import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero.model";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  heroesSubscription;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroesSubscription = this.heroService.get().subscribe(heroes => {
      console.log(heroes)
      this.heroes = heroes
    });
  }

  ngOnDestroy(): void {
    this.heroesSubscription.unsubscribe();
  }

}

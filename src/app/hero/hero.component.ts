import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero.model";
import {ActivatedRoute} from "@angular/router";
import {Origin} from "../origin/origin.model";
import {Class} from "../class/class.model";
import {Race} from "../race/race.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[] = [];
  origins: Origin[] = [];
  classes: Class[] = [];
  races: Race[] = [];

  heroForm: FormGroup;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.origins = data.origins;
      this.classes = data.classes;
      this.races = data.races;
    })

    this.heroService.get().subscribe(heroes => this.heroes = heroes);

    this.heroForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      origin: new FormControl(null, [Validators.required]),
      clazz: new FormControl(null, [Validators.required]),
      race: new FormControl(null, [Validators.required]),
      level: new FormControl(1, [Validators.required])
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.heroForm.value.race = this.races.filter(race => Number(this.heroForm.value.race) === race.raceId.value)[0];
    this.heroForm.value.clazz = this.classes.filter(clazz => Number(this.heroForm.value.clazz) === clazz.classId.value)[0];
    this.heroForm.value.origin = this.origins.filter(origin => Number(this.heroForm.value.origin) === origin.originId.value)[0];

    this.heroService.add(this.heroForm.value).subscribe(() => {
      this.heroForm.reset({
        level: 1
      })
      this.heroService.get().subscribe(heroes => this.heroes = heroes);
    });
  }

  onDelete(): void {
    this.heroService.get().subscribe(heroes => this.heroes = heroes);
  }

}

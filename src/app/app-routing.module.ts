import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroComponent} from "./hero/hero.component";
import {RaceComponent} from "./race/race.component";
import {ProficienciesResolverService} from "./proficiency/proficiencies-resolver.service";
import {OriginComponent} from "./origin/origin.component";
import {OriginResolverService} from "./origin/origin-resolver.service";
import {ProficiencyComponent} from "./proficiency/proficiency.component";
import {RacesResolverService} from "./race/races-resolver.service";
import {ClassComponent} from "./class/class.component";
import {ClassResolverService} from "./class/class-resolver.service";

const appRoutes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  {
    path: 'heroes',
    component: HeroComponent
  },
  {
    path: 'races',
    component: RaceComponent,
    resolve: {
      races: RacesResolverService
    }
  },
  {
    path: 'classes',
    component: ClassComponent,
    resolve: {
      races: ClassResolverService
    }
  },
  {
    path: 'origins',
    component: OriginComponent,
    resolve: {
      proficiencies: ProficienciesResolverService,
      origins: OriginResolverService
    }
  },
  {
    path: 'proficiencies',
    component: ProficiencyComponent,
    resolve: {
      proficiencies: ProficienciesResolverService,
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

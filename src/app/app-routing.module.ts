import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroComponent} from "./hero/hero.component";
import {RaceComponent} from "./race/race.component";
import {ProficienciesResolverService} from "./proficiency/proficiencies-resolver.service";
import {OriginComponent} from "./origin/origin.component";
import {OriginsResolverService} from "./origin/origins-resolver.service";
import {ProficiencyComponent} from "./proficiency/proficiency.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  {
    path: 'heroes',
    component: HeroComponent
  },
  {
    path: 'races',
    component: RaceComponent
  },
  {
    path: 'origins',
    component: OriginComponent,
    resolve: {
      proficiencies: ProficienciesResolverService,
      origins: OriginsResolverService
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

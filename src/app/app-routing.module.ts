import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroComponent} from "./hero/hero.component";
import {RaceComponent} from "./race/race.component";
import {AdminComponent} from "./admin/admin.component";
import {ProficienciesResolverService} from "./proficiency/proficiencies-resolver.service";

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
    path: 'admin',
    component: AdminComponent,
    resolve: {
      proficiences: ProficienciesResolverService
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

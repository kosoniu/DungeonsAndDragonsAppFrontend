import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import {HeroService} from "./hero/hero.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RaceComponent } from './race/race.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProficiencyComponent } from './proficiency/proficiency.component';
import {ProficiencyService} from "./proficiency/proficiency.service";
import { OriginComponent } from './origin/origin.component';
import {OriginService} from "./origin/origin.service";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {ProficienciesResolverService} from "./proficiency/proficiencies-resolver.service";
import { OriginItemComponent } from './origin/origin-item/origin-item.component';
import {OriginsResolverService} from "./origin/origins-resolver.service";
import { ProficiencyItemComponent } from './proficiency/proficiency-item/proficiency-item.component';
import {ProficiencyFilter} from "./utils/utils.service";
import {HttpErrorInterceptor} from "./utils/httperror.interceptor";
import {RacesResolverService} from "./race/races-resolver.service";
import { RaceItemComponent } from './race/race-item/race-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    RaceComponent,
    ProficiencyComponent,
    OriginComponent,
    OriginItemComponent,
    ProficiencyItemComponent,
    ProficiencyFilter,
    RaceItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
  ],
  providers: [
    HeroService,
    ProficiencyService,
    OriginService,
    ProficienciesResolverService,
    OriginsResolverService,
    RacesResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

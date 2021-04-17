import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import {HeroService} from "./hero/hero.service";
import {HttpClientModule} from "@angular/common/http";
import { RaceComponent } from './race/race.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { AdminComponent } from './admin/admin.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProficiencyComponent } from './proficiency/proficiency.component';
import {ProficiencyService} from "./proficiency/proficiency.service";
import { OriginComponent } from './origin/origin.component';
import {OriginService} from "./origin/origin.service";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {ProficienciesResolverService} from "./proficiency/proficiencies-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    RaceComponent,
    AdminComponent,
    ProficiencyComponent,
    OriginComponent
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
    ProficienciesResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

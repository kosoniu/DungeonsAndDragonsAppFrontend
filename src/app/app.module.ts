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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    RaceComponent,
    AdminComponent,
    ProficiencyComponent
  ],
    imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
    ],
  providers: [
    HeroService,
    ProficiencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

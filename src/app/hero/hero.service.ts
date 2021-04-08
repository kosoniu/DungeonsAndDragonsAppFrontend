import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hero} from "./hero.model";

@Injectable({providedIn: 'root'})
export class HeroService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Hero[]>("http://localhost:8080/heroes")
  }
}

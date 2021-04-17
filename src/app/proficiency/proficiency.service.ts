import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Proficiency} from "./proficency.model";
import {catchError, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ProficiencyService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Proficiency[]>("http://localhost:8080/proficiencies")
  }

  add(proficiency: Proficiency): Observable<Proficiency> {
    return this.http.post<Proficiency>("http://localhost:8080/proficiencies", proficiency);
  }
}

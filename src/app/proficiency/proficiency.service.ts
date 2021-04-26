import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Proficiency} from "./proficency.model";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ProficiencyService {

  private url = "http://localhost:8080/proficiencies";

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Proficiency[]>(this.url)
  }

  add(proficiency: Proficiency): Observable<Proficiency> {
    return this.http.post<Proficiency>(this.url, proficiency);
  }

  delete(id: number): Observable<Proficiency> {
    return this.http.delete<Proficiency>(this.url + "/" + id);
  }

}

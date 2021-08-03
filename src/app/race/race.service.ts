import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Race} from "./race.model";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class RaceService {

  private static url: string = "http://localhost:8080/races";

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Race[]>(RaceService.url)
  }

  add(race: Race): Observable<Race> {
    return this.http.post<Race>(RaceService.url, race);
  }

  delete(id: number): Observable<Race> {
    return this.http.delete<Race>(RaceService.url + "/" + id);
  }
}

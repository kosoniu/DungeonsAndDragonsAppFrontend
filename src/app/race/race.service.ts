import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Race} from "./race.model";

@Injectable({providedIn: 'root'})
export class RaceService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Race[]>("http://localhost:8080/races")
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Origin} from "./origin.model";

@Injectable({providedIn: 'root'})
export class OriginService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Origin[]>("http://localhost:8080/origins")
  }

  add(origin: Origin): Observable<Origin> {
    return this.http.post<Origin>("http://localhost:8080/origins", origin);
  }
}

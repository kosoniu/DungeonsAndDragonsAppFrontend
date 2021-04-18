import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Origin} from "./origin.model";

@Injectable({providedIn: 'root'})
export class OriginService {

  private url = "http://localhost:8080/origins";

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Origin[]>(this.url)
  }

  add(origin: Origin): Observable<Origin> {
    return this.http.post<Origin>(this.url, origin);
  }

  delete(id: number): Observable<Origin> {
    return this.http.delete<Origin>(this.url + "/" + id);
  }
}

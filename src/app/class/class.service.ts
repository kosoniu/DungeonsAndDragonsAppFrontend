import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Class} from "./class.model";

@Injectable({providedIn: 'root'})
export class ClassService {

  private static url: string = "http://localhost:8080/classes";

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Class[]>(ClassService.url)
  }

  add(race: Class): Observable<Class> {
    return this.http.post<Class>(ClassService.url, race);
  }

  delete(id: number): Observable<Class> {
    return this.http.delete<Class>(ClassService.url + "/" + id);
  }
}

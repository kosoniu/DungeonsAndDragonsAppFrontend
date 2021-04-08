import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HeroService {
  private heroes: any;

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get("http://localhost:8080/heroes")
      .subscribe(response => {
        console.log(response);
      })
  }

}

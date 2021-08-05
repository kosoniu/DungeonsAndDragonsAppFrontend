import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Class} from "./class.model";
import {ClassService} from "./class.service";

@Injectable()
export class ClassResolverService implements Resolve<Class[]> {
  constructor(private classService: ClassService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Class[]> | Promise<Class[]> | Class[] {
    return this.classService.get();
  }

}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Origin} from "./origin.model";
import {OriginService} from "./origin.service";

@Injectable()
export class OriginResolverService implements Resolve<Origin[]> {
  constructor(private originService: OriginService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Origin[]> | Promise<Origin[]> | Origin[] {
    return this.originService.get();
  }

}

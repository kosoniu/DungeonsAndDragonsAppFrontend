import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Race} from "./race.model";
import {RaceService} from "./race.service";

@Injectable()
export class RaceResolverService implements Resolve<Race[]> {
  constructor(private raceService: RaceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Race[]> | Promise<Race[]> | Race[] {
    return this.raceService.get();
  }

}

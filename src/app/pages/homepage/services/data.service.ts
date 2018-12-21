import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BaseService } from '../../../models/base.service';
import { Pin } from '../../../models/pin';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  getPins(): Observable<Pin[]> {
    return of([
      {
        name: 'Tábor',
        x: 36,
        y: 62
      }, {
        name: 'Jindřichův Hradec',
        x: 40,
        y: 71
      }, {
        name: 'Třešť',
        x: 46,
        y: 63
      }, {
        name: 'Dačice',
        x: 47,
        y: 71
      }, {
        name: 'Jihlava',
        x: 51,
        y: 61
      }, {
        name: 'Třebíč',
        x: 55,
        y: 70
      }
    ]);
  }

}

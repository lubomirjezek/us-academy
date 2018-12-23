import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BaseService } from '../../../models/base.service';
import { Pin } from '../../../models/pin';
import { City } from '../../../models/city';

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

  getCity(id: string): Observable<City> {
    const cities = {
      'Tábor': {
        name: 'Tábor',
        workshops: [
          {
            price: 1600,
            city: 'Tábor',
            signed: 30,
            capacity: 30,
            date: '01.01.2019',
            time: '19:00-20:00'
          }, {
            price: 1600,
            city: 'Tábor',
            signed: 30,
            capacity: 30,
            date: '01.01.2019',
            time: '19:00-20:00'
          }
        ],
        camps: [
          {
            price: 1600,
            city: 'Tábor',
            signed: 30,
            capacity: 30,
            date: '05.01.2019'
          }
        ]
      },
      'Jindřichův Hradec': {
        name: 'Jindřichův Hradec',
        workshops: [
          {
            price: 1600,
            city: 'Jindřichův Hradec',
            signed: 30,
            capacity: 30,
            date: '01.01.2019',
            time: '19:00-20:00'
          }, {
            price: 1600,
            city: 'Jindřichův Hradec',
            signed: 30,
            capacity: 30,
            date: '01.01.2019',
            time: '19:00-20:00'
          }, {
            price: 1600,
            city: 'Jindřichův Hradec',
            signed: 30,
            capacity: 30,
            date: '01.01.2019',
            time: '19:00-20:00'
          }, {
            price: 1600,
            city: 'Jindřichův Hradec',
            signed: 30,
            capacity: 30,
            date: '01.01.2019',
            time: '19:00-20:00'
          }, {
            price: 1600,
            city: 'Jindřichův Hradec',
            signed: 30,
            capacity: 30,
            date: '01.01.2019',
            time: '19:00-20:00'
          }, {
            price: 1600,
            city: 'Jindřichův Hradec',
            signed: 30,
            capacity: 30,
            date: '01.01.2019',
            time: '19:00-20:00'
          }, {
            price: 1600,
            city: 'Jindřichův Hradec',
            signed: 30,
            capacity: 30,
            date: '01.01.2019',
            time: '19:00-20:00'
          }
        ],
        camps: [
          {
            price: 1600,
            city: 'Jindřichův Hradec',
            signed: 30,
            capacity: 30,
            date: '05.01.2019'
          }
        ]
      },
      'Třešť': {
        name: 'Třešť',
        workshops: [],
        camps: []
      },
      'Dačice': {
        name: 'Dačice',
        workshops: [],
        camps: []
      },
      'Jihlava': {
        name: 'Jihlava',
        workshops: [],
        camps: []
      },
      'Třebíč': {
        name: 'Třebíč',
        workshops: [],
        camps: []
      },
    };

    return of(cities[id]);
  }

}
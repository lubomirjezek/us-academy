import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '../../../models/base.service';
import { Pin } from '../../../models/pin';
import { City } from '../../../models/city';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  getPins(): Observable<Pin[]> {
    const endpoint = this.buildUrl(['cities']);

    return this.http.get<Pin[]>(endpoint);
  }

  getCity(id: string): Observable<City> {
    const endpoint = this.buildUrl(['cities', id, 'trainings']);

    return this.http.get<City>(endpoint);
  }

}

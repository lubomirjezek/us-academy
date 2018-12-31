import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from '../../../models/base.service';
import { Reservation } from '../../../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  postReservation(reservation: Reservation): Observable<any> {
    const endpoint = this.buildUrl(['order']);

    return this.http.post<any>(endpoint, reservation);
  }

}

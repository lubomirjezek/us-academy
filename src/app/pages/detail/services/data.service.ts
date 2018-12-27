import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../../../models/base.service';
import { Training } from '../../../models/training';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  getDetail(id: string): Observable<Training> {
    const endpoint = this.buildUrl(['trainings', id]);

    return this.http
      .get<{ item: Training }>(endpoint)
      .pipe(
        map(value => value.item)
      );
  }

}

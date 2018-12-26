import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../../../models/base.service';
import { Training } from '../../../models/training';
import { Workshop } from '../../../models/workshop';
import { Camp } from '../../../models/camp';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  getDetail(id: string): Observable<Training | Workshop | Camp> {
    const endpoint = this.buildUrl(['trainings', id]);

    return this.http
      .get<{ item: Training | Workshop | Camp }>(endpoint)
      .pipe(
        map(value => value.item)
      );
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BaseService } from '../../../models/base.service';
import { Training } from '../../../models/training';
import { Workshop } from '../../../models/workshop';
import { Camp } from '../../../models/camp';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseService {

  getDetail(id: string): Observable<Training | Workshop | Camp> {
    return of(null);
  }

}

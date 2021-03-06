import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Pin } from '../../../../models/pin';
import { GetCity } from '../../actions/homepage.actions';

@Component({
  selector: 'parkouracademy-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() pins: Pin[];

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() { }

  selectCity(id: string): void {
    this.store.dispatch(new GetCity({
      id: id
    }));
  }

}

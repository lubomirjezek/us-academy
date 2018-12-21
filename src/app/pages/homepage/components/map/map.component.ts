import { Component, Input, OnInit } from '@angular/core';

import { Pin } from '../../../../models/pin';

@Component({
  selector: 'usacademy-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() pins: Pin[];

  constructor() { }

  ngOnInit() { }

}

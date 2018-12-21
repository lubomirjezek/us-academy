import { Component, OnInit } from '@angular/core';
import { Pin } from '../../../../models/pin';

@Component({
  selector: 'usacademy-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  pins: Pin[] = [
    {
      x: 36,
      y: 62
    }, {
      x: 40,
      y: 71
    }, {
      x: 46,
      y: 63
    }, {
      x: 47,
      y: 71
    }, {
      x: 51,
      y: 61
    }, {
      x: 55,
      y: 70
    }
  ];

  constructor() { }

  ngOnInit() { }

}

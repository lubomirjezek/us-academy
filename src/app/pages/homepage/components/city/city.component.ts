import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { City } from '../../../../models/city';
import { fadeInStagger } from '../../../../animations/fade-in-stagger.animation';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'usacademy-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  animations: [
    trigger('fadeInStagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(70, [
            animate('500ms 300ms cubic-bezier(.25, .8, .25, 1)', style({ opacity: 1 }))
          ])
        ],  { optional: true })
      ])
    ])
  ]
})
export class CityComponent implements OnInit, OnChanges {

  @Input() city: City;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    // console.log(this.city);
  }

}

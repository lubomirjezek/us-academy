import { Component, Input, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

import { City } from '../../../../models/city';
import { fadeInStagger } from '../../../../animations/fade-in-stagger.animation';
import { StoreData } from '../../../../models/store-data';

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
export class CityComponent implements OnInit {

  @Input() city: StoreData<City>;

  constructor() { }

  ngOnInit() { }

}
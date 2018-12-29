import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { ScrollToService } from 'ng2-scroll-to-el';

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
export class CityComponent implements OnInit, OnChanges {

  @Input() city: StoreData<City>;

  activeSection = 0;

  constructor(
    private scrollService: ScrollToService
  ) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('city')) {
      this.activeSection = 0;
    }
  }

  selectActiveSection(id: number): void {
    this.activeSection = id;

    this.scrollService.scrollTo('#terminy', 300, -90);
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { Pin } from '../../../../models/pin';
import { Training } from '../../../../models/training';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'parkouracademy-workshops-list',
  templateUrl: './workshops-list.component.html',
  styleUrls: ['./workshops-list.component.scss'],
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
export class WorkshopsListComponent implements OnInit {

  @Input() pin: Pin;
  @Input() workshops: Training[];

  constructor() { }

  ngOnInit() { }

}

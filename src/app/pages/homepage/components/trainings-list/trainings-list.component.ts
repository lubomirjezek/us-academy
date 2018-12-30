import { Component, Input, OnInit } from '@angular/core';

import { Training } from '../../../../models/training';
import { Pin } from '../../../../models/pin';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'usacademy-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.scss'],
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
export class TrainingsListComponent implements OnInit {

  @Input() pin: Pin;
  @Input() trainings: Training[];

  constructor() { }

  ngOnInit() { }

}

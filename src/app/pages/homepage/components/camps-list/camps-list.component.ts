import { Component, Input, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

import { Pin } from '../../../../models/pin';
import { Training } from '../../../../models/training';

@Component({
  selector: 'parkouracademy-camps-list',
  templateUrl: './camps-list.component.html',
  styleUrls: ['./camps-list.component.scss'],
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
export class CampsListComponent implements OnInit {

  @Input() pin: Pin;
  @Input() camps: Training[];

  constructor() { }

  ngOnInit() { }

}

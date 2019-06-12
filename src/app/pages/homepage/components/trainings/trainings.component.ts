import { Component, Input, OnInit } from '@angular/core';

import { Training } from '../../../../models/training';
import { Pin } from '../../../../models/pin';

@Component({
  selector: 'parkouracademy-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  @Input() pin: Pin;
  @Input() beginners: Training[];
  @Input() advanced: Training[];

  constructor() { }

  ngOnInit() { }

}

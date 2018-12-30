import { Component, Input, OnInit } from '@angular/core';

import { Training } from '../../../../models/training';

@Component({
  selector: 'usacademy-selected-training',
  templateUrl: './selected-training.component.html',
  styleUrls: ['./selected-training.component.scss']
})
export class SelectedTrainingComponent implements OnInit {

  @Input() training: Training;

  constructor() { }

  ngOnInit() { }

}

import { Component, Input, OnInit } from '@angular/core';

import { Training } from '../../../../models/training';

@Component({
  selector: 'parkouracademy-selected-training',
  templateUrl: './selected-training.component.html',
  styleUrls: ['./selected-training.component.scss']
})
export class SelectedTrainingComponent implements OnInit {

  @Input() training: Training;
  @Input() isFullYear: boolean;

  constructor() { }

  ngOnInit() { }

}

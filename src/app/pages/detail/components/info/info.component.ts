import { Component, Input, OnInit } from '@angular/core';

import { Training } from '../../../../models/training';

@Component({
  selector: 'parkouracademy-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() training: Training;

  constructor() { }

  ngOnInit() { }

  getBackground(): string {
    return this.training && this.training.image ? `url(${this.training.image.path})` : `url('../../../../../assets/bg_detail.png')`;
  }

}

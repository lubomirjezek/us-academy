import { Component, Input, OnInit } from '@angular/core';

import { Training } from '../../../../models/training';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'parkouracademy-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() training: Training;
  @Input() isFullYear: FormControl;

  constructor() { }

  ngOnInit() { }

  getBackground(): string {
    return this.training && this.training.image ? `url(${this.training.image.path})` : `url('../../../../../assets/bg_detail.png')`;
  }

  buildReservationLink(): string[] {
    if (!this.training) {
      return [];
    }

    const season = this.isFullYear.value ? 'rok' : 'pololeti';

    return ['/', 'rezervace', this.training.id, season];
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Training } from '../../../../models/training';

@Component({
  selector: 'parkouracademy-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() training: Training;
  @Input() isFullYear: FormControl;

  constructor() { }

  ngOnInit() { }

}

import { Component, Input, OnInit } from '@angular/core';

import { Training } from '../../../../models/training';

@Component({
  selector: 'parkouracademy-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() training: Training;

  constructor() { }

  ngOnInit() { }

}

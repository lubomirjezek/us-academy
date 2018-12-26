import { Component, Input, OnInit } from '@angular/core';

import { Training } from '../../../../models/training';
import { Workshop } from '../../../../models/workshop';
import { Camp } from '../../../../models/camp';

@Component({
  selector: 'usacademy-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() detail: Training | Workshop | Camp;

  constructor() { }

  ngOnInit() { }

}

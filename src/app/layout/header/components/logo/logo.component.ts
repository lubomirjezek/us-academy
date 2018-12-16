import { Component, Input, OnInit } from '@angular/core';

import { Link } from '../../../../models/link';

@Component({
  selector: 'usacademy-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() link: Link;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { Link } from '../../../../models/link';

@Component({
  selector: 'parkouracademy-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() links: Link[];
  @Input() isScrolled: boolean;

  constructor() { }

  ngOnInit() { }

}

import { Component, Input, OnInit } from '@angular/core';

import { Link } from '../../../../models/link';

@Component({
  selector: 'usacademy-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() isScrolled: boolean;
  @Input() links: Link[];

  constructor() { }

  ngOnInit() { }

}

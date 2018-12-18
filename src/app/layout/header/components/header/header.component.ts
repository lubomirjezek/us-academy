import { Component, OnInit } from '@angular/core';

import { Link } from '../../../../models/link';

@Component({
  selector: 'usacademy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigation: Link[] = [
    {
      url: '#o-nas',
      name: 'O Nás'
    }, {
      url: '#vyber-mest',
      name: 'Výběr měst'
    }, {
      url: '#kontakt',
      name: 'Kontakt'
    }
  ];
  socialMedias: Link[] = [];

  constructor() { }

  ngOnInit() { }

}

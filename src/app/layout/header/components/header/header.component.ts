import { Component, HostListener, Inject, OnInit } from '@angular/core';

import { Link } from '../../../../models/link';
import { WINDOW } from '../../../../app.config';

@Component({
  selector: 'usacademy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isScrolled: boolean;

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

  constructor(
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() { }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = this.window.pageYOffset > 0;
  }

}

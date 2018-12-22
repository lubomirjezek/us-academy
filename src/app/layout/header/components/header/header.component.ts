import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';

import { Link } from '../../../../models/link';
import { HeaderMode } from '../../../../models/header-mode';
import { WINDOW } from '../../../../app.config';

@Component({
  selector: 'usacademy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() mode: HeaderMode;

  isScrolled = false;
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
  socialMedias: Link[] = [
    {
      url: 'https://www.facebook.com/Urban-Sense-Academy-1621345168099222/',
      name: 'fb'
    }, {
      url: 'https://www.instagram.com/urbansenseacademy/',
      name: 'ig'
    }
  ];

  constructor(
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() { }

  @HostListener('window:scroll')
  onScroll(): void {
    switch (this.mode) {
      case 'transparent':
        this.isScrolled = false;
        return;
      case 'background':
        this.isScrolled = true;
        return;
      case 'switch':
      default:
        this.isScrolled = this.window.pageYOffset > 0;
        return;
    }
  }

}

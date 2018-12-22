import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';

import { Link } from '../../../../models/link';
import { HeaderMode } from '../../../../models/header-mode';
import { WINDOW } from '../../../../app.config';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectNavigation, selectSocialMedias } from '../../reducers/header.reducer';

@Component({
  selector: 'usacademy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() mode: HeaderMode;

  isScrolled = false;
  navigation: Observable<Link[]>;
  socialMedias: Observable<Link[]>;

  constructor(
    @Inject(WINDOW) private window: Window,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.navigation = this.store
      .pipe(
        select(selectNavigation)
      );

    this.socialMedias = this.store
      .pipe(
        select(selectSocialMedias)
      );

    this.onScroll();
  }

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

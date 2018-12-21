import { AfterViewInit, Component, HostBinding, HostListener, Inject } from '@angular/core';
import { timer } from 'rxjs';

import { WINDOW } from './app.config';

@Component({
  selector: 'usacademy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @HostBinding('class.scrolled') isScrolled = false;
  @HostBinding('class.intro') showInto = true;

  constructor(
    @Inject(WINDOW) private window: Window
  ) { }

  ngAfterViewInit() {
    timer(800)
      .subscribe(() => this.showInto = false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = this.window.pageYOffset > 0;
  }

}

import { AfterViewInit, Component, HostBinding, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { NavigationCancel, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import { WINDOW } from './app.config';

@Component({
  selector: 'usacademy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  destroy: Subject<null> = new Subject<null>();

  @HostBinding('class.intro') showInto = true;

  constructor(
    private router: Router,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    this.router.events
      .pipe(
        takeUntil(this.destroy)
      )
      .subscribe((event: RouterEvent) => {
        switch (true) {
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
            this.window.scrollTo(0, 0);
            break;
        }
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  ngAfterViewInit() {
    timer(800)
      .subscribe(() => this.showInto = false);
  }

}

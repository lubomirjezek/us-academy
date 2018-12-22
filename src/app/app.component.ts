import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'usacademy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @HostBinding('class.intro') showInto = true;

  constructor() { }

  ngAfterViewInit() {
    timer(800)
      .subscribe(() => this.showInto = false);
  }

}

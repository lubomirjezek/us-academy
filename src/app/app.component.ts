import { AfterViewInit, Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'usacademy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  showInto = true;

  ngAfterViewInit() {
    timer(700)
      .subscribe(() => this.showInto = false);
  }

}

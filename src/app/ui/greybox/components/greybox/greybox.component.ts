import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-greybox',
  templateUrl: './greybox.component.html',
  styleUrls: ['./greybox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.ui-greybox]': 'true'
  }
})
export class GreyboxComponent implements OnInit {

  @Input() @HostBinding('style.height') height = '20px';
  @Input() @HostBinding('style.margin') margin = '4px 0';
  @Input() @HostBinding('style.border-radius') borderRadius = '4px';

  constructor() { }

  ngOnInit() { }

}

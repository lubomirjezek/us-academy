import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ui-input[type=text]',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  host: {
    '[class.ui-input]': 'true',
    '[class.ui-input--text]': 'true'
  }
})
export class TextComponent implements OnInit {

  @Input() type: string;
  @Input() control: FormControl;
  @Input() placeholder: string;
  @Input() additionalPlaceholder: string;

  isFocused: boolean;

  constructor() { }

  ngOnInit() { }

  hasPlaceholder (): boolean {
    return !!this.placeholder;
  }

  hasAdditionalPlaceholder (): boolean {
    return !!this.additionalPlaceholder;
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }

}

import { Component, OnInit, Input, ContentChild, HostBinding, AfterContentInit } from '@angular/core';
import { InputDir1Directive } from '../common/input-dir1.directive';

@Component({
  selector: 'fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent implements AfterContentInit {
  @Input()
  icon: string;

  @ContentChild(InputDir1Directive)
  input: InputDir1Directive;

  ngAfterContentInit() {
      if (!this.input) {
          console.error('the au-fa-input needs an input inside its content');
      }
  }

  // host binding - Element which host the component. Don get condfused. COuld be used inside directive or component.
  // here host is host of this  component. its like div under which whole compoent in present.
  // Adding class to host, below method would return true or false.
  @HostBinding('class.input-focus')
  get isInputFocus() {
      return this.input ? this.input.focus : false;
  }


  get classes() {

      const cssClasses = {};

      if (this.icon) {
          cssClasses['fa-' + this.icon] = true;
      }

      return cssClasses;
  }

}

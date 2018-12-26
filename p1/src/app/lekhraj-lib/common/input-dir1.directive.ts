import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'fa-input input'
})
export class InputDir1Directive {

  constructor() { }

  focus = false;

    @HostListener('focus')
    onFocus() {
      console.log("focus");
        this.focus = true;
    }

    @HostListener('blur')
    onBlur() {
        console.log("blur");
        this.focus = false;
    }

}

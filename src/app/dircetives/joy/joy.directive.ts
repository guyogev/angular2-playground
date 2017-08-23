import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appJoy]'
})
export class JoyDirective {
  constructor() { }

  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseover') onHover() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseout') onLeave() {
    this.backgroundColor = 'inherit';
  }
}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSad]'
})
export class SadnessDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');
    this.highlight('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
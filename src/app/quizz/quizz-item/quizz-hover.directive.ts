import { Directive, ElementRef, Host, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appQuizzHover]'
})
export class QuizzHoverDirective {

  @HostBinding('class.active') isHover: boolean = false;

  @HostListener('mouseover') onMouseOver() {
    this.isHover = true;
  }

  @HostListener('mouseout') onMouseout() {
    this.isHover = false;
  }

  constructor(private elementRef: ElementRef) { }

}

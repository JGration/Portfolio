import { Component, OnInit, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: '[scroll-check]',
  template: '<ng-content></ng-content>'
})
export class ScrollComponent{

  @Output() scrollState = new EventEmitter();

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 400) {
      this.scrollState.emit('show')
    } else {
      //this.scrollState.emit('hide')
    }

  }

}

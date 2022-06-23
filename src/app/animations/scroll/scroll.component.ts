import { Component, OnInit, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
var mobile = require('is-mobile');

function _window() : any {
  // return the global native browser window object
  return window;
}

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
    const scrollPosition = window.scrollY

    if (!mobile()) {
      if (scrollPosition >= componentPosition - 600) {
        this.scrollState.emit('show')
      }
     }
    else{
      this.scrollState.emit('show')
    }
  }
}

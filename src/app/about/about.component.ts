import { Component, OnInit } from '@angular/core'
import { Animations } from '../animations'
import anime from 'animejs'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: Animations.animate
})
export class AboutComponent implements OnInit {
  state = 'inactive'
  hexagon = 'inactive'
  first = 'inactive'
  second = 'inactive'
  third = 'inactive'

  constructor () {}

  ngOnInit (): void {
    anime({
      targets: '.spin',
      rotate: 360,
      easing: 'linear',
      loop: true,
      duration: 20000,
      direction: 'reverse'
    })
    setTimeout(() => {
      this.state = 'active'
    }, 1500)
    setTimeout(() => {
      this.hexagon = 'active'
    }, 2500)
    setTimeout(() => {
      this.first = 'active'
    }, 3000)
    setTimeout(() => {
      this.second = 'active'
    }, 3500)
    setTimeout(() => {
      this.third = 'active'
    }, 4000)
  }
}

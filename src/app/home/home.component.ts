import { animate } from '@angular/animations'
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { Animations } from '../animations'
import anime from 'animejs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: Animations.animate
})
export class HomeComponent implements AfterViewInit {
  state = 'inactive'

  constructor () {}

  ngOnInit (): void {
    
    setTimeout(() => {
      this.state = 'active'
    }, 4500)
  }

  ngAfterViewInit () {
    const element = document.querySelector<HTMLElement>('.text-animation')
    var lettersHtml =
      element?.textContent?.replace(/\S/g, '<span class="letter">$&</span>') ||
      ''
    lettersHtml = lettersHtml.replace('<span class="letter">D</span>',
      '<span class="letter">&nbsp</span><span class="letter">D</span>'
    )
    element!.innerHTML = `<div class="letters">${lettersHtml}</div><span class="cursor"></span>`
    element!.style.display = 'block'

    const letters = Array.from(element!.querySelectorAll('.letter'))
    const TYPE_AFTER_MS = 1800
    const JUMP_AFTER_MS = 150

    const blink = anime({
      targets: '.text-animation .cursor',
      loop: true,
      duration: 750,
      opacity: [{ value: [1, 1] }, { value: [0, 0] }]
    })

    Promise.resolve(
      anime
        .timeline({ loop: false })
        .add(
          {
            targets: '.text-animation .cursor',
            position: 'absolute',

            translateX: letters.map((letter: any, i) => ({
              value: letter.offsetLeft + letter.offsetWidth,
              duration: 1,
              delay: i === 0 ? 0 : JUMP_AFTER_MS
            }))
          },
          TYPE_AFTER_MS
        )
        .add(
          {
            targets: '.text-animation .letter',
            opacity: [0, 1],
            duration: 1,
            delay: anime.stagger(JUMP_AFTER_MS),
            changeBegin: () => {
              blink.pause()
            },
            changeComplete: () => {
              blink.restart()
            }
          },
          TYPE_AFTER_MS
        )
    ).then(function resolve () {
      setTimeout(function timeout () {
        var cursor = document.querySelector<HTMLElement>('.cursor')
        cursor?.parentNode?.removeChild(cursor)
      }, 8000)
    })
  }
}

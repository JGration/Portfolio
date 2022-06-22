import {
  AnimationTriggerMetadata,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations'

const rightStartSlide = style({
  transform: 'translate(100%, 0)',
  opacity: 0
})
const rightEndSlide = style({
  transform: 'translate(0, 0)',
  opacity: 1
})
const hidden = style({
  opacity: 0
})
const visible = style({
  opacity: 1
})
const bottomStartSlide = style({
  opacity: 0,
  transform: 'translate(0, 100%)'
})
const bottomEndSlide = style({
  opacity: 1,
  transform: 'translate(0)'
})

export class Animations {
  static animate = Animations.getAnimations()

  static getAnimations (): Array<AnimationTriggerMetadata> {
    return [
      trigger('fadeState', [
        state('inactive', hidden),
        state('active', visible),
        transition('inactive => active', animate('1.5s ease-in-out'))
      ]),
      trigger('bottomSlideState', [
        state('inactive', bottomStartSlide),
        state('active', bottomEndSlide),
        transition('inactive => active', animate('1.5s ease-in-out'))
      ]),
      trigger('rightSlideState', [
        state('inactive', rightStartSlide),
        state('active', rightEndSlide),
        transition('inactive => active', animate('1s ease-in-out'))
      ]),
      trigger('scroll', [
        state('hide', rightStartSlide),
        state('show', rightEndSlide),
        transition('show => hide', animate('1400ms ease-out')),
        transition('hide => show', animate('1400ms ease-out'))
      ])

    ]
  }
}

import {
  AnimationTriggerMetadata,
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const rightStartSlide = style({
  transform: 'translate(100%, 0)',
  opacity: 0,
});
const rightEndSlide = style({
  transform: 'translate(0, 0)',
  opacity: 1,
});
const hidden = style({
  opacity: 0,
});
const visible = style({
  opacity: 1,
});
const bottomStartSlide = style({
  opacity: 0,
  transform: 'translate(0, 100%)',
});
const bottomEndSlide = style({
  opacity: 1,
  transform: 'translate(0)',
});
const hiddenScroll = style({
  opacity: 0,
});
const visibleScroll = style({
  opacity: 1,
});

export class Animations {
  static animate = Animations.getAnimations();

  static getAnimations(): Array<AnimationTriggerMetadata> {
    return [
      trigger('fadeState', [
        state('inactive', hidden),
        state('active', visible),
        transition('inactive => active', animate('0.4s ease-in-out')),
      ]),
      trigger('bottomSlideState', [
        state('inactive', bottomStartSlide),
        state('active', bottomEndSlide),
        transition('inactive => active', animate('0.5s ease-in-out')),
      ]),
      trigger('rightSlideState', [
        state('inactive', rightStartSlide),
        state('active', rightEndSlide),
        transition('inactive => active', animate('0.5s ease-in-out')),
      ]),
      trigger('scrollSlide', [
        state('hide', rightStartSlide),
        state('show', rightEndSlide),
        transition('hide => show', animate('0.5s ease-out')),
      ]),
      trigger('scroll', [
        state('hide', hiddenScroll),
        state('show', visibleScroll),
        transition('hide => show', animate('0.8s ease-in-out')),
      ]),
    ];
  }
}

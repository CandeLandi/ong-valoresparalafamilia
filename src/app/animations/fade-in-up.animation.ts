import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  state('void', style({
    opacity: 0,
    transform: 'translateY(30px)'
  })),
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(30px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('void => visible', [
    animate('600ms ease-out')
  ]),
  transition('hidden => visible', [
    animate('600ms ease-out')
  ]),
  transition(':enter', [
    animate('600ms ease-out', style({
      opacity: 1,
      transform: 'translateY(0)'
    }))
  ])
]);

import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInSide = trigger('fadeInSide', [
  state('void', style({
    opacity: 0,
    transform: 'translateX(-20px)'
  })),
  transition(':enter', [
    animate('800ms ease-out', style({
      opacity: 1,
      transform: 'translateX(0)'
    }))
  ])
]);

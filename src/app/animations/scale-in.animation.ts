import { trigger, state, style, transition, animate } from '@angular/animations';

export const scaleIn = trigger('scaleIn', [
  state('void', style({
    opacity: 0,
    transform: 'scale(0.8)'
  })),
  transition(':enter', [
    animate('500ms ease-out', style({
      opacity: 1,
      transform: 'scale(1)'
    }))
  ])
]);

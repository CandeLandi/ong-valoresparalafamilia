import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInSide = trigger('fadeInSide', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(var(--fade-x, 0))' }),
    animate('900ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'none' }))
  ])
]);

import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const fadeInStagger = trigger('fadeInStagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0 }),
      stagger(70, [
        animate('600ms cubic-bezier(.25, .8, .25, 1)', style({ opacity: 1 }))
      ])
    ],  { optional: true })
  ])
]);

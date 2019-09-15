import { trigger, transition, query, style, group, animate } from '@angular/animations';

export const routerAnimation = trigger('routerAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }),
      { optional: true }),
    group([
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out', style({opacity: 1}))
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-in-out', style({ opacity: 0 }))
      ], {optional: true})
    ])
  ])
]);

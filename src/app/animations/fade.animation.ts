import { animate, animation, style } from '@angular/animations';

export const fade = animation([
  style({ opacity: '{{ opacityStart }}' }),
  animate('{{ timings }}', style({ opacity: '{{ opacityEnd }}' }))
]);

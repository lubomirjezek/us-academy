import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trainingTypeToString'
})
export class TrainingTypeToStringPipe implements PipeTransform {

  transform(type: number): string {
    const names = ['Kroužek', 'Workshop', 'Příměstský tábor'];

    return names[type];
  }

}

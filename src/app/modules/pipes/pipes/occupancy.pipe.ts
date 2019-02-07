import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'occupancy'
})
export class OccupancyPipe implements PipeTransform {

  transform(occupancy: [number, number]): any {
    return occupancy[0] >= occupancy[1] ? 'obsazeno' : 'volno';
  }

}

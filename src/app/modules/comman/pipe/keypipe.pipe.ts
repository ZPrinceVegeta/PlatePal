import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keypipe'
})
export class KeypipePipe implements PipeTransform {

  transform(value: any, args?: any[]): any[] {
    return Object.keys(value);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basicFilter'
})
export class BasicFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

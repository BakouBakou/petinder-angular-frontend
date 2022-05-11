import { Pipe, PipeTransform } from '@angular/core';
import {Pet} from "../model/Pet";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: Pet[], filter: string): Pet[] {
    return value
      .filter(pet => pet.name.toLowerCase().includes(filter.toLowerCase()));
  }

}

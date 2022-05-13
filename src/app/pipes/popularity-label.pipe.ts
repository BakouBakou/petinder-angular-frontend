import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'popularityLabel'
})
export class PopularityLabelPipe implements PipeTransform {

  transform(popularity: number): string {
    if (popularity < 1) {
      return 'Freezing';
    }
    if (popularity < 3) {
      return 'Normal';
    }
    if (popularity < 5) {
      return 'Popular';
    }
    return 'Sizzling hot!';
  }

}

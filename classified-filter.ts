import {Pipe, PipeTransform} from '@angular/core';
import {Classifieds} from './classifieds.model';

@Pipe({
  name: 'classifiedFilter'
})
export class ClassifiedFilterPipe implements PipeTransform {
  transform(classifieds: Classifieds[], term: string): any {
    let filteredArray: Classifieds[] = [];

    if (term && term.length > 0) {
      filteredArray = classifieds.filter(
        (classified: Classifieds) =>
          classified.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    return filteredArray.length > 0 ? filteredArray : classifieds;

  }

}

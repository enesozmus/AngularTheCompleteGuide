import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'filter',
  /**
   * You can force this pipe to be updated whenever the data changes by adding a second property to the pipe decorator.
   * The pipe now gets recalculated whenever data changes.
   * This can lead to performance issues.
   */
  pure: false
})
export class FilterPipe implements PipeTransform {
  ElementRef


  // parametre türlerine çok dikkat edilmelidir aksi halde uygularken problem çıkartır
  transform(value: any, filterString: string, propName: string): any {

    if (value.length === 0 || filterString === '') 
    {
      return value;
    }
    const resultArray = [];
    for (const item of value)
    {
      if (item[propName] === filterString)
      {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( arr: any[], filterParam: string, field: string ) {
    if ( arr && filterParam  )
      arr = arr.filter( ell => ell[field]?.toLowerCase().indexOf( filterParam.toLowerCase() ) === 0 )
    return arr;
  }

}

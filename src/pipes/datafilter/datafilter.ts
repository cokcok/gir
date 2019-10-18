import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'datafilter',
})
export class DatafilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(lenght:any ,items: any[], term: string) :any  {
    console.log(lenght,items,term);
    //return items.filter(item => item.land_type.indexOf(term[0]) !== -1);
    return items.filter(item => item.land_type == term);
    //console.log('a');
    //console.log( items.filter(item => item.land_type == term));
    //let item = this.item_rt.filter(val => val.rt_id == data.id);
  }

  /* transform(value: any, arg1: any, arg2: any): any {
    console.log(value,arg1,arg2);
  } */
}

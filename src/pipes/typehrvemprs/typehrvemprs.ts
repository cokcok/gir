import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'typehrvemprs',
})
export class TypehrvemprsPipe implements PipeTransform {
  public states: Object = {
    '0':   'ไม่ระบุ',
    '1':   'จ้างกรีด',
    '2':   'กรีดเอง',
    // '1':   'ต่างด้าว',
    // '2':   'จ้างกรีด',
    // '3':   'จ้างกรีด,ต่างด้าว',
    // '4':   'กรีดเอง',
    // '5':   'กรีดเอง,ต่างด้าว',
    // '6':   'กรีดเอง,จ้างกรีด',
    // '7':   'กรีดเอง,จ้างกรีด,ต่างด้าว'
  };

  transform(value: string, ...args) {
    if(value == null) return;
    if(this.states[value]){
      return this.states[value];
    } else {
      return value;
    }
  }
}

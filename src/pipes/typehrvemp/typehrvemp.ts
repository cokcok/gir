import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'typehrvempPipe',
})
export class TypehrvempPipe implements PipeTransform {
  public states: Object = {
    '0':   'ไม่ระบุ',
    '1':   'จ้างกรีด',
    '2':   'กรีดเอง'
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

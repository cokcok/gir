import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'typeplant',
})
export class TypeplantPipe implements PipeTransform {
  public states: Object = {
    '1':   'ยางพันธุ์ดี',
    '2':   'ยางพันธุ์ดี',
    '3':   'ไม้ยืนต้น',
    '4': 'ปาล์มน้ำมัน',
    '5':  'เกษตรผสมผสาน',
    '6': 'เกษตรผสมผสานยางเป็นหลัก',
    '7': 'เกษตรผสมผสานไม้ยืนต้นเป็นหลัก'
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

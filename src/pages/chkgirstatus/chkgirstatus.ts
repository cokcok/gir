import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GirProvider } from '../../providers/gir/gir';
import { ConfigServiceProvider } from '../../providers/config-service/config-service';
//import { IonicSelectableComponent } from 'ionic-selectable';

@IonicPage()
@Component({
  selector: 'page-chkgirstatus',
  templateUrl: 'chkgirstatus.html',
})
export class ChkgirstatusPage {
  type_person:any; idcard:any;name:any;reqtype:any; item_data_land_rf=[];item_data_land_af=[];item_data_land_fas=[];item_data_land_rs=[];clicked:any;item_data_tapper=[];
  item_data_land_rf_emp=[];tel:any;type_project:any;addr_code:any;app_id:any
  ports_person: any; ports_project: any; item_data_project2:any;flg:any;
  //rf_flg = ["0","3"];
  rf_flg = ['0'];   rf_flg1 = ['1','2'];
  p_idcard:any;urlParameters:any; param:any;
  constructor(public girPro : GirProvider, public config : ConfigServiceProvider,public navCtrl: NavController, public navParams: NavParams) {


  }

  isFound(value:any){
    return this.rf_flg1.find(x=> x == value);
  }


  ionViewDidEnter() {
    this.ports_person = [
      { id: 1, name: 'บุคคลธรรมดา' }
      //,{ id: 2, name: 'นิติบุคคล' }
    ];

    this.ports_project = [
      { id: 2, name: 'ตรวจสอบ ทะเบียนเกษตรกรชาวสวนยาง' },
      { id: 1, name: 'ตรวจสอบ ประกันรายได้ ระยะที่ 1' }

    ];


    this.type_person = this.ports_person[0];
    //this.flg = " <pre>1.เกษตรกรชาวสวนยาง คือ เกษตรกรที่มาขึ้นทะเบียนเป็น เจ้าของสวนยาง ผู้เช่า ผู้ทำสวนยาง คนกรีด กับการยางแห่งประเทศไทยในพื้นที่ที่มีเอกสารสิทธิ์</pre> <pre>1.เกษตรกรชาวสวนยาง คือ เกษตรกรที่มาขึ้นทะเบียนเป็น เจ้าของสวนยาง ผู้เช่า ผู้ทำสวนยาง คนกรีด กับการยางแห่งประเทศไทยในพื้นที่ที่มีเอกสารสิทธิ์</pre>  ";

  }

  Chk(myForm) {
   // console.log(myForm);
    this.refresh();


    if (typeof myForm.type_project === 'undefined' || myForm.type_project === null || myForm.type_project === '') {
      let alert = this.config.ChkformAlert('กรุณาระบุโครงการ');
      alert.present();
      return false;
    }

    if (typeof myForm.idcard === 'undefined' || myForm.idcard === null || myForm.idcard === '') {
      let alert = this.config.ChkformAlert('กรุณาระบุเลขบัตรปชช.');
      alert.present();
      return false;
    }
    if(myForm.type_project.id === 2)
    {
      let loader = this.config.loadingAlert();
      loader.present();
      this.girPro.Chkgir_status1(myForm.idcard,myForm.type_person).subscribe(
        (data) => {
          //console.log(data);
           if(data !== null ){
            this.item_data_project2 = Object.keys(data);
            this.name = data['name'];
            this.addr_code = data['addr_code'];
            this.reqtype = data['type'];
            this.flg = data['flg'];
            this.app_id = data['app_id'];
          }
          else
          {
            let alert = this.config.ChkformAlert('ไม่พบข้อมูลการขึ้นทะเบียนกับ กยท.');
            alert.present();

          }
        },
        (error) => {
          console.log(JSON.stringify(error));
          loader.dismiss();
        },
        () => {
          loader.dismiss();
        }
      );

    }
    if (myForm.type_project.id === 1)
    {
      let loader = this.config.loadingAlert();
      loader.present();
      let uniqid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      this.girPro.Chkgir_status(myForm.idcard,myForm.type_person,uniqid).subscribe(
        (data) => {
          //console.log(data);
          if (data.data_detail.length > 0) {
            this.name = data.data_detail[0]['rf_name'];
            this.tel = data.data_detail[0]['rf_tel'];
            this.reqtype = data.data_detail[0]['reqtype'];
            this.addr_code = data.data_detail[0]['addr_code'];
            this.item_data_land_rf = data.data_detail.filter(item => item.land_type == 2); //คบก.
            this.item_data_land_af = data.data_detail.filter(item => item.land_type == 1); // ปลูกแทน
            this.item_data_land_fas = data.data_detail.filter(item => item.land_type == 3); //พอย.
            this.item_data_land_rs = data.data_detail.filter(item => item.land_type == 4); //ขกม.
            this.item_data_tapper = data.data_detail.filter(item => item.land_type == 5); //คนกรีด
          }
          else
          {
            let alert = this.config.ChkformAlert('ไม่พบข้อมูลเลขบัตรปชช.');
            alert.present();

          }
        },
        (error) => {
          console.log(JSON.stringify(error));
          loader.dismiss();
        },
        () => {
          loader.dismiss();
        }
      );
    }

  }

  refresh(){
    this.item_data_land_af= null;this.item_data_land_fas=null; this.item_data_land_rf=null;this.item_data_land_rf_emp=null;this.item_data_land_rs=null;this.item_data_project2=null;this.item_data_tapper=null;this.name =  null;this.tel = null;this.reqtype = null;this.addr_code = null;
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GirProvider } from '../../providers/gir/gir';
import { ConfigServiceProvider } from '../../providers/config-service/config-service';
@IonicPage()
@Component({
  selector: 'page-chkgirstatus',
  templateUrl: 'chkgirstatus.html',
})
export class ChkgirstatusPage {
  type_person:any; idcard:any;name:any;reqtype:any; item_data_land_rf=[];item_data_land_af=[];item_data_land_fas=[];item_data_land_rs=[];clicked:any;item_data_tapper=[];
  item_data_land_rf_emp=[];tel:any;

  rf_flg = ["0", "3"];
  constructor(public girPro : GirProvider, public config : ConfigServiceProvider,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter() {
    this.type_person = '1';
  }

  Chk(myForm) {
    //console.log(myForm);
    //this.refresh();
    if (typeof myForm.idcard === 'undefined' || myForm.idcard === null || myForm.idcard === '') {
      let alert = this.config.ChkformAlert('กรุณาระบุข้อมูลให้ครบถ้วน');
      alert.present();
      return false;
    }

    let loader = this.config.loadingAlert();
    loader.present();
    let uniqid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.girPro.Chkgir_status(myForm.idcard,myForm.type_person,uniqid).subscribe(
      (data) => {
        console.log(data);
        if (data.data_detail.length > 0) {
          this.name = data.data_detail[0]['rf_name'];
          this.tel = data.data_detail[0]['rf_tel'];
          this.reqtype = data.data_detail[0]['reqtype'];
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

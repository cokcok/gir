import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { GirProvider } from '../../providers/gir/gir';
import { ConfigServiceProvider } from '../../providers/config-service/config-service';




@IonicPage()
@Component({
  selector: 'page-chkgir',
  templateUrl: 'chkgir.html',
})
export class ChkgirPage {
  @ViewChild('myForm') mytemplateForm: NgForm;
  type_person:any; idcard:any;name:any; item_data_land_rf=[];item_data_land_af=[];item_data_land_fas=[];item_data_land_rs=[];
  constructor( public girPro : GirProvider, public config : ConfigServiceProvider,  public navCtrl: NavController, public navParams: NavParams) {
    //console.log(this.config.mySentences[1]);
   // console.log(this.config.filter(this.config.mySentences, { id: 1 }));
    //console.log(this.config.filter(this.config.mySentences, { id: 1 })[0]['text']);
    this.idcard = '3100202253574';
  }

  ionViewDidEnter() {
    this.type_person = '1';
  }

  Chk(myForm) {
    //console.log(myForm);
    this.refresh();
    if (typeof myForm.idcard === 'undefined' || myForm.idcard === null || myForm.idcard === '') {
      let alert = this.config.ChkformAlert('กรุณาระบุข้อมูลให้ครบถ้วน');
      alert.present();
      return false;
    }

    let loader = this.config.loadingAlert();
    loader.present();
    let uniqid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.girPro.Chkgir(myForm.idcard,myForm.type_person,uniqid).subscribe(
      (data) => {
        if (data.data_detail.length > 0) {
          this.name = data.data_detail[0]['rf_name'];
          //this.item_data_land = data.data_detail;
          console.log(data);
          this.item_data_land_rf = data.data_detail.filter(item => item.land_type == 2); //คบก.
          this.item_data_land_af = data.data_detail.filter(item => item.land_type == 1); // ปลูกแทน
          this.item_data_land_fas = data.data_detail.filter(item => item.land_type == 3); //พอย.
          this.item_data_land_rs = data.data_detail.filter(item => item.land_type == 4); //ขกม.
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


  refresh(){
    this.name = null;  this.item_data_land_rf = []; this.item_data_land_af = [];this.item_data_land_fas = []; this.item_data_land_rs = [];
  }
}

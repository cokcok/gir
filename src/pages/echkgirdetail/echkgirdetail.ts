import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-echkgirdetail',
  templateUrl: 'echkgirdetail.html',
})
export class EchkgirdetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('data'))
  }



}

import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myForm') mytemplateForm: NgForm;
  type_person:any; idcard:any;
  constructor(public navCtrl: NavController) {

  }


  ionViewDidEnter() {
    this.type_person = '1';
  }

  Chk(myForm) {
    console.log(myForm);
  }


}

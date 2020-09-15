import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

@Injectable()
export class ConfigServiceProvider {
  public ip: string = "https://www.rubber.co.th/gir/sc";

  public mySentences = [
    {id: 1, text: 'Sentence 1'},
    {id: 2, text: 'Sentence 2'},
    {id: 3, text: 'Sentence 3'},
    {id: 4, text: 'Sentenc4 '},
];
  constructor(public http: HttpClient,public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  delAlert(textalert: string) {
    let alert = this.alertCtrl.create({
      title: 'ต้องการ' + textalert + 'ใช่หรือไม่??',
      buttons: [
        {
          text: 'ใช่',
          handler: () => {
            alert.dismiss(true);
            return false;
          }
        }, {
          text: 'ไม่ใช่',
          handler: () => {
            alert.dismiss(false);
            return false;
          }
        }
      ]
    });
    return alert;
  }

  loadingAlert() {
    let loader = this.loadingCtrl.create({
      content: "กรุณารอสักครู่..."
    });
    //loader.present();
    return loader;
  }

  ChkformAlert(text: string) {
    let alert = this.alertCtrl.create({
      title: text, buttons: ['ตกลง']
    });
    return alert;
  }

   filter(arr, criteria) {
    return arr.filter(function(obj) {
      return Object.keys(criteria).every(function(c) {
        return obj[c] == criteria[c];
      });
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { data } from '../../models/datamodel';
import { FeedBack } from '../../models/feedback';
import { ConfigServiceProvider } from '../config-service/config-service';



@Injectable()
export class GirProvider {

  constructor(public c_config:ConfigServiceProvider,public http: HttpClient) {

  }


  Chkgir(username:string,type_person,uniqid): Observable<data> {
    let api = this.c_config.ip+"/chkgir_web.php";
    const header = { 'Content-Type': 'application/json' };

     let data = {
       'idcard':username,
       'id':uniqid,
       'type_person':type_person
    };
    return this.http.post<data>(api,data,{headers:header});
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { data,data1 } from '../../models/datamodel';
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

  Chkgir_status(username:string,type_person,uniqid): Observable<data> {
    let api = this.c_config.ip+"/chkgirstatus_web.php";
    //let api = "http://appcen01.rubber.co.th/ws_rubber_tech/gir/chkgir_status_test.php";
    const header = { 'Content-Type': 'application/json' };

     let data = {
       'idcard':username,
       'id':uniqid,
       'type_person':type_person
    };
    return this.http.post<data>(api,data,{headers:header});
  }

  Chkgir_status1(username:string,type_person): Observable<data1> {
    let api = this.c_config.ip+"/chkgirstatus_web1.php";
    //let api = "http://appcen01.rubber.co.th/ws_rubber_tech/gir/chkgir_status1.php";
    const header = { 'Content-Type': 'application/json' };

     let data = {
       'idcard':username,
       'type_person':type_person
    };
    return this.http.post<data1>(api,data,{headers:header});
  }
}

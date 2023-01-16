

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { GirProvider } from '../providers/gir/gir';
import { ConfigServiceProvider } from '../providers/config-service/config-service';

import { ChkgirPageModule } from '../pages/chkgir/chkgir.module';
import { TioncardPageModule } from '../pages/tioncard/tioncard.module';
import { EchkgirdetailPageModule } from '../pages/echkgirdetail/echkgirdetail.module';

import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { NetworkInterface } from '@ionic-native/network-interface';
import { IonicSelectableModule } from 'ionic-selectable';

import { ChkgirstatusPageModule } from '../pages/chkgirstatus/chkgirstatus.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),ChkgirPageModule,TioncardPageModule,EchkgirdetailPageModule,ChkgirstatusPageModule,IonicSelectableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GirProvider,GoogleAnalytics,NetworkInterface,
    ConfigServiceProvider
  ]
})
export class AppModule {}

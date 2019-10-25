import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChkgirstatusPage } from './../pages/chkgirstatus/chkgirstatus';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ChkgirstatusPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public ga: GoogleAnalytics ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      /* { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'TioncardPage', component: TioncardPage },
      { title: 'ChkgirPage', component: ChkgirPage } , */
      { title: 'ระบบตรวจสอบข้อมูลเกษตรกร', component: ChkgirstatusPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();


          this.ga.startTrackerWithId('UA-150913909-1')
      .then(() => {
        console.log('Google analytics is ready now');
         this.ga.trackView('test');
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));

       });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

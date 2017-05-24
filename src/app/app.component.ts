import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AbstractPage } from '../pages/abstract/abstract';
import { Cap1Page } from '../pages/cap1/cap1';
import { Cap2Page } from '../pages/cap2/cap2';
import { Cap3Page } from '../pages/cap3/cap3';
import { Cap4Page } from '../pages/cap4/cap4';
import { Cap5Page } from '../pages/cap5/cap5';
import { Cap6Page } from '../pages/cap6/cap6';
import { Cap7Page } from '../pages/cap7/cap7';
import { Cap8Page } from '../pages/cap8/cap8';
import { Cap9Page } from '../pages/cap9/cap9';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Portada', component: HomePage },
      { title: 'Prefacio', component: AbstractPage },
      { title: 'Efectos del alcohol', component: Cap1Page },
      { title: 'Intestino', component: Cap2Page },
      { title: 'Hígado', component: Cap3Page },
      { title: 'Pulmón', component: Cap4Page },
      { title: 'Sistema nervioso', component: Cap5Page },
      { title: 'Marihuana y alcohol', component: Cap6Page },
      { title: 'Desarrollo fetal', component: Cap7Page },
      { title: 'Cáncer', component: Cap8Page },
      { title: 'Vitaminas y Minerales', component: Cap9Page },
      { title: 'Acerca de...', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

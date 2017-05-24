import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AbstractPage,
    Cap1Page,
    Cap2Page,
    Cap3Page,
    Cap4Page,
    Cap5Page,
    Cap6Page,
    Cap7Page,
    Cap8Page,
    Cap9Page,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AbstractPage,
    Cap1Page,
    Cap2Page,
    Cap3Page,
    Cap4Page,
    Cap5Page,
    Cap6Page,
    Cap7Page,
    Cap8Page,
    Cap9Page,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

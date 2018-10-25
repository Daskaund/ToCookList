import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataFetcherProvider } from '../providers/data-fetcher/data-fetcher';
import {ManageRecipePage} from "../pages/manage-recipe/manage-recipe";
import {NewRecipePage} from "../pages/new-recipe/new-recipe";
import {HttpModule} from "@angular/http";
import {File} from "@ionic-native/file";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ManageRecipePage,
    NewRecipePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ManageRecipePage,
    NewRecipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataFetcherProvider,
    File
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataFetcherProvider } from '../providers/data-fetcher/data-fetcher';
import {ManageRecipePage} from "../pages/manage-recipe/manage-recipe";
import {NewRecipePage} from "../pages/new-recipe/new-recipe";
import {HttpModule} from "@angular/http";
import {File} from "@ionic-native/file";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {FIREBASE_CONFIG} from "./app.firebase.config";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ManageRecipePage,
    NewRecipePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ManageRecipePage,
    NewRecipePage,
    LoginPage,
    RegisterPage
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

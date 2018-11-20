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
import {FIREBASE_CONFIG} from "./app.firebase.config";
import {AngularFireModule, FirebaseApp} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireStorageModule} from "@angular/fire/storage";
import { AfProvider } from '../providers/af/af';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {LaboratoirePage} from "../pages/laboratoire/laboratoire";
import {MealsPlanningPage} from "../pages/meals-planning/meals-planning";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ManageRecipePage,
    NewRecipePage,
    LoginPage,
    RegisterPage,
    LaboratoirePage,
    MealsPlanningPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ManageRecipePage,
    NewRecipePage,
    LoginPage,
    RegisterPage,
    LaboratoirePage,
    MealsPlanningPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataFetcherProvider,
    File,
    AfProvider,
    InAppBrowser
  ]
})
export class AppModule {}

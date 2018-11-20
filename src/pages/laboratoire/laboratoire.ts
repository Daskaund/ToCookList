import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase";
import {FIREBASE_CONFIG} from "../../app/app.firebase.config";

@IonicPage()
@Component({
  selector: 'page-laboratoire',
  templateUrl: 'laboratoire.html',
})
export class LaboratoirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.initializeApp(FIREBASE_CONFIG);
    var database = firebase.database();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AfProvider} from "../../providers/af/af";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-laboratoire',
  templateUrl: 'laboratoire.html',
})
export class LaboratoirePage {

  ingredientsList: Observable<any[]>;

  constructor(private afProvider: AfProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.ingredientsList = this.afProvider.getFiles();
  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AfProvider} from "../../providers/af/af";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the MealsPlanningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meals-planning',
  templateUrl: 'meals-planning.html',
})
export class MealsPlanningPage {

  mealsNumber: number;
  mealsList: Observable<any[]>;

  constructor(private afp: AfProvider) {
    this.mealsList = this.afp.getFiles("recipe/")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MealsPlanningPage');
  }

  mealsNumberSelected(event) {
    this.mealsNumber = event;
  }

  generateMealsList(){
    // console.log(Math.floor(Math.random() * this.mealsNumber) + 1);
    // console.log(this.mealsList.length);
    //TODO: trouver comment compter le nombre de valeurs dans un observable
  }

  createSimpleMeal(){

  }
}

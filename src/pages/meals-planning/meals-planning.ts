import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AfProvider} from "../../providers/af/af";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "@angular/fire/database";

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

  numberOfMeals: number; //Nombre de recettes totale
  numberOfWantedMeals: number; //Nombre de repas demandés
  meals: Observable<any[]>;
  ingredients: any[];

  constructor(private afp: AfProvider, private db: AngularFireDatabase) {
    this.meals = this.afp.getFiles("recipe/");
    this.createSimpleMeal();
  }

  mealsNumberSelected(event) {
    this.numberOfWantedMeals = event;
  }

  generateMealsList(){
    let mealsList = []; //Planning des repas
    this.numberOfMeals = document.getElementsByClassName("recipeCounter").length; //Nombre de repas au total
    for (let i=0; i<this.numberOfWantedMeals; i++){
      let mealID = Math.floor(Math.random() * this.numberOfMeals);
      let meal = document.getElementById("recipeN"+mealID);
      // @ts-ignore
      if (mealsList.includes(meal.outerText)){ //Si le repas est déjà prévu cette semaine
        mealsList.push(this.createSimpleMeal()); //On créé un repas simple
      } else {
        mealsList.push(meal.outerText);
      }
    }
    console.log(mealsList);
  }

  createSimpleMeal(){
    // this.ingredients = this.db.list("ingredients/");
    // console.log(this.ingredients);
    // let ref = this.db.list("recipe");

    // ref.on("value", function(snapshot) {
    //   console.log(snapshot.val());
    // }, function (errorObject) {
    //   console.log("The read failed: " + errorObject.code);
    // });

    // return "repas simple";
  }
}

import { Component } from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {AfProvider} from "../../providers/af/af";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-new-recipe',
  templateUrl: 'new-recipe.html',
})
export class NewRecipePage {
  ingredientsList: Observable<any[]>;
  ingredientSelected: any = [];

  constructor(private afProvider: AfProvider) {
    this.ingredientsList = this.afProvider.getFiles('ingredients/');
  }

  addRecipe(recipeName){
    if (recipeName != "" && this.ingredientSelected != ""){
      this.saveData(recipeName, this.ingredientSelected);
      location.reload();
    } else {
      alert("Merci de spécifier un nom pour la recette et/ou des ingrédients");
    }
  }

  toggleSection(event: any){

    var path = event.path || (event.composedPath && event.composedPath());

    if (path){
      // console.log(path);
      var iconForward = path[2].children[0];
      var iconDown = path[2].children[1];
      var target = path[2];
      var childOfTarget = path[4].childNodes[1].children[1];
      var iconAdd = path[4].childNodes[1].children[1].children[0];
      var iconClose = path[4].childNodes[1].children[1].children[1];
    } else {
      console.log("Browser not supported");
    }

    if(childOfTarget.classList.contains("hide")){
      childOfTarget.classList.remove("hide");
      target.classList.add("section-active");
      iconDown.setAttribute("data-hidden", "false");
      iconForward.setAttribute("data-hidden", "true");
      iconClose.setAttribute("data-hidden", "false");
      iconAdd.setAttribute("data-hidden", "true");

    } else {
      childOfTarget.classList.add("hide");
      target.classList.remove("section-active");
      iconForward.setAttribute("data-hidden", "false");
      iconDown.setAttribute("data-hidden", "true");
      iconClose.setAttribute("data-hidden", "false");
      iconAdd.setAttribute("data-hidden", "true");
    }
  }

  removeDataArray(key, array){
    // Get either the index or -1
    const index = array.indexOf(key); // returns 0
    // Despite a real index, or -1, use spread operator and Array.prototype.slice()
    return (index > -1) ? [
      ...array.slice(0, index),
      ...array.slice(index + 1)
    ] : array;
  }

  addToList(textValue, event: any){
    let icon = event.path[0].children[0];
    let target = event.path[4];
    if (target.classList.contains("b-third")){
      target.classList.remove("b-third");
      icon.classList.add("ion-ios-checkmark-circle-outline");
      icon.classList.remove("ion-ios-checkmark-circle");
      this.ingredientSelected = this.removeDataArray(textValue, this.ingredientSelected);
    } else {
      target.classList.add("b-third");
      icon.classList.remove("ion-ios-checkmark-circle-outline");
      icon.classList.add("ion-ios-checkmark-circle");
      this.ingredientSelected.push(textValue);
    }
  }

  saveData(title, ingredients){
    let newRecipe = {
      title: title,
      ingredientName: ingredients
    };
    console.log(newRecipe);
    this.afProvider.uploadInformation("recipe/", newRecipe);
  }
}

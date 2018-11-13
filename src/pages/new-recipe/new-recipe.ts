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
    this.saveData(recipeName, this.ingredientSelected);
    location.reload();
  }

  toggleSection(event: any){
    let iconForward = event.path[2].children[0];
    let iconDown = event.path[2].children[1];
    let target = event.path[2];
    let childOfTarget = event.path[4].childNodes[1].children[1];
    let iconAdd = event.path[4].childNodes[1].children[1].children[0];
    let iconClose = event.path[4].childNodes[1].children[1].children[1];

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
    let target = event.path[4];
    if (target.classList.contains("b-third")){
      target.classList.remove("b-third");
      this.ingredientSelected = this.removeDataArray(textValue, this.ingredientSelected);
    } else {
      target.classList.add("b-third");
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

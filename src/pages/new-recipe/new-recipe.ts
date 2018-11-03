import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataFetcherProvider} from "../../providers/data-fetcher/data-fetcher";
import { File } from '@ionic-native/file';
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

  constructor(private afProvider: AfProvider, navCtrl: NavController, navParams: NavParams, private dataFetcher: DataFetcherProvider, private file: File) {
    this.ingredientsList = this.afProvider.getFiles();
    console.log("this.ingredientsList : ", this.ingredientsList);
  }

  addRecipe(recipeName){
    console.log(this.ingredientSelected);
    console.log(recipeName);
    this.saveData(recipeName, this.ingredientSelected);
  }

  toggleSection(i, item) {
    console.log("toggleSection: ", i, item);
    this.ingredientsList[i].open = !this.ingredientsList[i].open;
  }

  toggleItem(i, j) {
    this.ingredientsList[i].typeMere[j].open = !this.ingredientsList[i].typeMere[j].open;
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
    if (event.path[4].style.backgroundColor == "rgb(78, 209, 255)"){
      event.path[4].style.backgroundColor = "";
      this.ingredientSelected = this.removeDataArray(textValue, this.ingredientSelected);
    } else {
      event.path[4].style.backgroundColor = "rgb(78, 209, 255)";
      this.ingredientSelected.push(textValue);
    }
    console.log(this.ingredientSelected);
  }

  saveData(title, ingredients){
    this.file = new File();
    let newRecipe = {
      title: title,
      ingredientName: ingredients
    };
    let strRecipe = JSON.stringify(newRecipe);
    /* console.log(file); */
    console.log(strRecipe); /*
    this.dataFetcher.postRecipes(strRecipe);
    this.file.writeFile('assets/data/recipes.json', 'recipesTest.json', strRecipe);*/
  }

}

import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
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

  constructor(private toastCtrl: ToastController, private afProvider: AfProvider, navCtrl: NavController, navParams: NavParams, private dataFetcher: DataFetcherProvider, private file: File) {
    this.ingredientsList = this.afProvider.getFiles();
  }

  addRecipe(recipeName){
    console.log(this.ingredientSelected);
    console.log(recipeName);
    this.saveData(recipeName, this.ingredientSelected);
  }

  toggleSection(event: any, item){
    let target = event.path[2];
    let childOfTarget = event.path[4].childNodes[1].children[1];

    if(childOfTarget.classList.contains("hide")){
      childOfTarget.classList.remove("hide");
      target.classList.add("section-active");
    } else {
      childOfTarget.classList.add("hide");
      target.classList.remove("section-active");
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
    console.log(target);
    if (target.classList.contains("b-third")){
      target.classList.remove("b-third");
      this.ingredientSelected = this.removeDataArray(textValue, this.ingredientSelected);
    } else {
      target.classList.add("b-third");
      this.ingredientSelected.push(textValue);
    }
    console.log(this.ingredientSelected);
  }

  saveData(title, ingredients){
    let newRecipe = {
      title: title,
      ingredientName: ingredients
    };
    let strRecipe = JSON.stringify(newRecipe);
    console.log(strRecipe);
    this.uploadInformation(strRecipe);
  }

  uploadInformation(text) {
    let upload = this.afProvider.uploadToStorage(text);
    console.log("upload: ", upload);
    // Perhaps this syntax might change, it's no error here!
    upload.then().then(res => {
      this.afProvider.storeInfoToDatabase(res.metadata).then(() => {
        let toast = this.toastCtrl.create({
          message: 'New File added!',
          duration: 3000
        });
        toast.present();
      });
    });
  }


}

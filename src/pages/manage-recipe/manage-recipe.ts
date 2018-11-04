import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataFetcherProvider} from "../../providers/data-fetcher/data-fetcher";

/**
 * Generated class for the ManageRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-recipe',
  templateUrl: 'manage-recipe.html',
})
export class ManageRecipePage {
  // recipes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataFetcher: DataFetcherProvider) {
  }
  //
  // ionViewDidLoad() {
  //   this.dataFetcher.getRecipesData().then(data => {
  //     this.recipes = data;
  //     console.log(data);
  //   })
  // }
  //
  // toggleSection(i) {
  //   this.recipes[i].open = !this.recipes[i].open;
  // }
  //
  // toggleItem(i, j) {
  //   // this.recipes[i].children[j].open = !this.recipes[i].children[j].open;
  //   // remplacer .children[j] par le nom du tableau concerné. Voir new-recipe.ts
  // }
  //
  // recipeClick(recipeTitle){
  //   console.log(recipeTitle);
  // }

}

import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs-compat/add/operator/map";

/*
  Generated class for the DataFetcherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataFetcherProvider {

  public recipes: any;

  constructor(public http: Http) {
  }

  public getRecipesData(){
    return new Promise((resolve, reject)=> {
      this.http.get('src/assets/data/recipes.json').map(res => res.json()).subscribe(response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  public getIngredientsData(){
    return new Promise((resolve, reject)=> {
      this.http.get('src/assets/data/ingredients.json').map(res => res.json()).subscribe(response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  public postRecipes(data){
    this.http.post('src/assets/data/recipesTest.json', data);
  }
}

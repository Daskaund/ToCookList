import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";

/*
  Generated class for the DataFetcherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataFetcherProvider {

  public recipes: any;

  constructor(public http: Http) {
    console.log('Hello DataFetcherProvider Provider');
  }

  public getRecipesData(){
    return new Promise((resolve, reject)=> {
      this.http.get('assets/data/recipes.json').map(res => res.json()).subscribe(response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }

  public getIngredientsData(){
    return new Promise((resolve, reject)=> {
      this.http.get('assets/data/ingredients.json').map(res => res.json()).subscribe(response => {
        resolve(response);
      }, error => {
        reject(error);
      });
    });
  }
}

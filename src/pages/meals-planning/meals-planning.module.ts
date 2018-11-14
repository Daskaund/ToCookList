import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MealsPlanningPage } from './meals-planning';

@NgModule({
  declarations: [
    MealsPlanningPage,
  ],
  imports: [
    IonicPageModule.forChild(MealsPlanningPage),
  ],
})
export class MealsPlanningPageModule {}

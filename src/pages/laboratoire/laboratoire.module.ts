import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaboratoirePage } from './laboratoire';

@NgModule({
  declarations: [
    LaboratoirePage,
  ],
  imports: [
    IonicPageModule.forChild(LaboratoirePage),
  ],
})
export class LaboratoirePageModule {}

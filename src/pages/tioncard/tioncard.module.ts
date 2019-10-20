import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TioncardPage } from './tioncard';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    TioncardPage,
  ],
  imports: [
    IonicPageModule.forChild(TioncardPage),
    PipesModule
  ],
})
export class TioncardPageModule {}

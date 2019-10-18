import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChkgirPage } from './chkgir';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    ChkgirPage,
  ],
  imports: [
    IonicPageModule.forChild(ChkgirPage),
    PipesModule
  ],
})
export class ChkgirPageModule {}

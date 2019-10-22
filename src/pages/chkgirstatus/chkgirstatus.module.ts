import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChkgirstatusPage } from './chkgirstatus';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    ChkgirstatusPage,
  ],
  imports: [
    IonicPageModule.forChild(ChkgirstatusPage),
    PipesModule
  ],
})
export class ChkgirstatusPageModule {}

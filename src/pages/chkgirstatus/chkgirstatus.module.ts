import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChkgirstatusPage } from './chkgirstatus';
import { PipesModule } from '../../pipes/pipes.module';
import { IonicSelectableModule } from 'ionic-selectable';
//import { SelectSearchableModule } from 'ionic-select-searchable';
@NgModule({
  declarations: [
    ChkgirstatusPage,
  ],
  imports: [
    IonicPageModule.forChild(ChkgirstatusPage),
    PipesModule,IonicSelectableModule
  ],
})
export class ChkgirstatusPageModule {}

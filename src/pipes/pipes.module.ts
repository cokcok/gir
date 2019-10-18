import { NgModule } from '@angular/core';
import { MyPipe } from './my/my';
import { TypehrvempPipe } from './typehrvemp/typehrvemp';
import { DatafilterPipe } from './datafilter/datafilter';
import { TypeplantPipe } from './typeplant/typeplant';
import { TypehrvemprsPipe } from './typehrvemprs/typehrvemprs';
@NgModule({
	declarations: [MyPipe,
    TypehrvempPipe,
    DatafilterPipe,
    TypeplantPipe,
    TypehrvemprsPipe],
	imports: [],
	exports: [MyPipe,
    TypehrvempPipe,
    DatafilterPipe,
    TypeplantPipe,
    TypehrvemprsPipe]
})
export class PipesModule {}

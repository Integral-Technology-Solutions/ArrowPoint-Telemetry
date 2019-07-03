import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Charts} from 'ng2-charts';

import { ChartJsRoutingModule } from './chart-js-routing.module';
import { ChartJsComponent } from './chart-js.component';

@NgModule({
    imports: [
        CommonModule,
        Charts,
        ChartJsRoutingModule
    ],
    declarations: [ChartJsComponent]
})
export class ChartJsModule { }

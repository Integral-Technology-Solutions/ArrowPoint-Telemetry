import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { C3ChartRoutingModule } from './c3-chart-routing.module';
import { C3ChartComponent } from './c3-chart.component';

@NgModule({
    imports: [
        CommonModule,
        C3ChartRoutingModule
    ],
    declarations: [C3ChartComponent]
})
export class C3ChartModule { }

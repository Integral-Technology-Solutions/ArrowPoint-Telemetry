import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingComponent } from './reporting.component';

@NgModule({
    imports: [
        CommonModule,
        ReportingRoutingModule
    ],
    declarations: [ReportingComponent]
})
export class ReportingModule { }

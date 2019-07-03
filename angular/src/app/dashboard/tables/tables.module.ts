import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule
    ],
    declarations: [TablesComponent]
})
export class TablesModule { }

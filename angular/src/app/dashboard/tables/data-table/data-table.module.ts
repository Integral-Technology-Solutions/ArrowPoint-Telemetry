import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataService } from '../../../shared/data';

import { DataTableRoutingModule } from './data-table-routing.module';
import { DataTableComponent } from './data-table.component';

@NgModule({
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        DataTableRoutingModule
    ],
    declarations: [DataTableComponent],
    providers: [DataService]
})
export class DataTableModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapTableRoutingModule } from './bootstrap-table-routing.module';
import { BootstrapTableComponent } from './bootstrap-table.component';

@NgModule({
  imports: [
    CommonModule,
    BootstrapTableRoutingModule
  ],
  declarations: [BootstrapTableComponent]
})
export class BootstrapTableModule { }

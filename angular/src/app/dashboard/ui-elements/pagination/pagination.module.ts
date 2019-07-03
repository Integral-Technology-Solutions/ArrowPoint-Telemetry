import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [
    CommonModule,
    PaginationRoutingModule
  ],
  declarations: [PaginationComponent]
})
export class PaginationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposeRoutingModule } from './compose-routing.module';
import { ComposeComponent } from './compose.component';

@NgModule({
  imports: [
    CommonModule,
    ComposeRoutingModule
  ],
  declarations: [ComposeComponent]
})
export class ComposeModule { }

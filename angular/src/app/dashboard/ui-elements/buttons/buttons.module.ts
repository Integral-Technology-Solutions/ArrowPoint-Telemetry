import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonsRoutingModule
  ],
  declarations: [ButtonsComponent]
})
export class ButtonsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';

@NgModule({
  imports: [
    CommonModule,
    CardsRoutingModule
  ],
  declarations: [CardsComponent]
})
export class CardsModule { }

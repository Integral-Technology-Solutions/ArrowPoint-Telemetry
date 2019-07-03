import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormElementRoutingModule } from './form-element-routing.module';
import { FormElementComponent } from './form-element.component';

@NgModule({
  imports: [
    CommonModule,
    FormElementRoutingModule
  ],
  declarations: [FormElementComponent]
})
export class FormElementModule { }

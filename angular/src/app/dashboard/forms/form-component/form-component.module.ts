import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';


import { FormComponentRoutingModule } from './form-component-routing.module';
import { FormComponentComponent } from './form-component.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DpDatePickerModule,
        FormComponentRoutingModule
    ],
    declarations: [FormComponentComponent]
})
export class FormComponentModule { }

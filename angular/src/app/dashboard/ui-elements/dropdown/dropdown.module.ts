import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        DropdownRoutingModule
    ],
    declarations: [DropdownComponent]
})
export class DropdownModule { }

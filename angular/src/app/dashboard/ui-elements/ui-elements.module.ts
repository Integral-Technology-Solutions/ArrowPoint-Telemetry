import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { UiElementsComponent } from './ui-elements.component';

@NgModule({
    imports: [
        CommonModule,
        UiElementsRoutingModule
    ],
    declarations: [UiElementsComponent]
})
export class UiElementsModule { }

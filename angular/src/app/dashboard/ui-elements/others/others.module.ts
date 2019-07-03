import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbTooltipModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

import { OthersRoutingModule } from './others-routing.module';
import { OthersComponent } from './others.component';

@NgModule({
    imports: [
        CommonModule,
        NgbTooltipModule.forRoot(),
        NgbCarouselModule.forRoot(),
        NgbPopoverModule.forRoot(),
        OthersRoutingModule
    ],
    declarations: [OthersComponent]
})
export class OthersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { ProgressbarRoutingModule } from './progressbar-routing.module';
import { ProgressbarComponent } from './progressbar.component';

@NgModule({
    imports: [
        CommonModule,
        NgbProgressbarModule.forRoot(),
        ProgressbarRoutingModule
    ],
    declarations: [ProgressbarComponent]
})
export class ProgressbarModule { }

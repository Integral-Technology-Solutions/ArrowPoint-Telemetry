import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { StatComponent } from './stat.component';

@NgModule({
    imports: [
        CommonModule,
        NgbProgressbarModule.forRoot()
    ],
    declarations: [StatComponent],
    exports: [StatComponent]
})
export class StatModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterModule } from 'angular2-toaster';

import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';

@NgModule({
    imports: [
        CommonModule,
        ToasterModule,
        FormsModule,
        NgbAlertModule.forRoot(),
        AlertRoutingModule
    ],
    declarations: [AlertComponent]
})
export class AlertModule { }

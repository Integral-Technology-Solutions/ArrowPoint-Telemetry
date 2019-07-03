import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetRoutingModule } from './fleet-management-routing.module';
import { FleetManagementComponent } from './fleet-management.component';


@NgModule({
    imports: [
        CommonModule,
        FleetRoutingModule
    ],
    declarations: [FleetManagementComponent]
})
export class FleetManagementModule { }

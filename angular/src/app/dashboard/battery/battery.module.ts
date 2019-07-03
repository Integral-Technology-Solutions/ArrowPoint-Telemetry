import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatteryComponent } from './battery.component';
import { BatteryRoutingModule } from './battery-routing.module';


@NgModule({
    imports: [
        CommonModule,
        BatteryRoutingModule
    ],
    declarations: [BatteryComponent]
})
export class BatteryModule { }

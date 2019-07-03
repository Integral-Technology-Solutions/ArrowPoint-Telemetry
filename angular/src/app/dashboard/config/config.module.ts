import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { ConfigRoutingModule } from './config-routing.module';


@NgModule({
    imports: [
        CommonModule,
        ConfigRoutingModule
    ],
    declarations: [ConfigComponent]
})
export class ConfigModule { }

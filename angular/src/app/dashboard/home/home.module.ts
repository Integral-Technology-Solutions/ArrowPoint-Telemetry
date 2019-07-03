import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StatModule, TodoModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        TranslateModule,
        StatModule,
        TodoModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }

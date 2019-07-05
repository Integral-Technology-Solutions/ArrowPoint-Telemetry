import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TopnavComponent, SidebarComponent } from '../shared';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BmsService } from 'app/services/bms.service';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        DashboardRoutingModule,
        PerfectScrollbarModule
    ],
    declarations: [
        DashboardComponent,
        TopnavComponent,
        SidebarComponent,
    ],
    providers: [BmsService]
})
export class DashboardModule { }

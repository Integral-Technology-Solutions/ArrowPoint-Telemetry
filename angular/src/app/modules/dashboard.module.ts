import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BwsSummaryComponent } from '../components/pages/bws-summary/bws-summary.component';
import { RealTimeComponent } from '../components/pages/real-time/real-time.component';
import { ShortComponent } from '../components/pages/short/short.component';
import { MediumComponent } from '../components/pages/medium/medium.component';
import { FleetManagementComponent } from '../components/pages/fleet-management/fleet-management.component';
import { ConfigComponent } from '../components/pages/config/config.component';

const routes: Routes = [
   { path: '',  component: DashboardComponent, pathMatch: 'full'},
   { path: 'overview', component: DashboardComponent},
   { path: 'bws', component: BwsSummaryComponent},
   { path: 'real-time', component: RealTimeComponent},
   { path: 'short', component: ShortComponent},
   { path: 'medium', component: MediumComponent},
   { path: 'fleet-management', component: FleetManagementComponent},
   { path: 'config', component: ConfigComponent}
];
@NgModule({
  declarations: [
    DashboardComponent,
    BwsSummaryComponent,
    RealTimeComponent,
    ShortComponent,
    MediumComponent,
    FleetManagementComponent,
    ConfigComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule,
    MaterialModule,
  ],
  providers: [
  ],
  exports: [RouterModule],
})

export class DashboardModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FirstComponent } from '../components/first/first.component';
import { SecondComponent } from '../components/second/second.component';
import { AppAuthGuardService } from '../services/app-auth-guard.service';

const routes: Routes = [
   { path: '',  component: DashboardComponent, pathMatch: 'full', canActivate: [AppAuthGuardService]},
   { path: 'first', component: FirstComponent},
   { path: 'second', component: SecondComponent}
];

@NgModule({
  declarations: [
    DashboardComponent,
    FirstComponent,
    SecondComponent
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

const routes: Routes = [
   { path: '',  component: DashboardComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule,
    MaterialModule
  ],
  providers: [
  ],
  exports: [RouterModule],
})

export class DashboardModule { }

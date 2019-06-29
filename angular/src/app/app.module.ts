import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material.module';
import { Routes, RouterModule,  PreloadAllModules, Route, PreloadingStrategy } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavOptionComponent } from './components/small-components/nav-option/nav-option.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
   { path: 'dashboard', loadChildren: './modules/dashboard.module#DashboardModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavOptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

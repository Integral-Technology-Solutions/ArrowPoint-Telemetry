import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/modules/material.module';
import { Routes, RouterModule,  PreloadAllModules, Route, PreloadingStrategy } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavOptionComponent } from './components/small-components/nav-option/nav-option.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './app-init';
import { AppAuthGuardService } from './services/app-auth-guard.service';

const routes: Routes = [
   { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
   { path: 'dashboard', loadChildren: './modules/dashboard.module#DashboardModule', canActivate: [AppAuthGuardService]}
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
    KeycloakAngularModule,
    MaterialModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializer,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent],
  // exports: [RouterModule]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import * as kc from '../app-init';
import { KeycloakLoginOptions } from 'keycloak-js';
import { environment } from '../../environments/environment';
import { $ } from 'jquery';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Location } from '@angular/common';
import { CONTEXT } from '@angular/core/src/render3/interfaces/view';

@Injectable({
  providedIn: 'root'
})
export class AppAuthGuardService extends KeycloakAuthGuard implements CanActivateChild {
  public kc: KeycloakLoginOptions;

  constructor(
    protected router: Router,
    public keyCloakAngular: KeycloakService,
    protected context: Location
  ) {
    super(router, keyCloakAngular);
  }

  public onLogin(destination: string): void {
    this.keyCloakAngular.login({redirectUri: window.location.origin + destination});
  }

  public onLogout(destination: string): void {
    this.keyCloakAngular.logout(window.location.origin + destination);
  }

  public refreshToken() {
    this.keyCloakAngular.updateToken(180).then(function(refreshed) {
      if (refreshed) {
        console.log('Token was successfully refreshed');
      } else {
        console.log('Token is still valid');
      }
    }).catch(function() {
      console.error('Failed to refresh the token, or the session has expired');
    });
  }

  canActivateChild() {
    return this.keyCloakAngular.isLoggedIn();
  }

  isAccessAllowed(route: ActivatedRouteSnapshot,
                  state: RouterStateSnapshot): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (!this.authenticated) {
        this.keyCloakAngular.login();
      }

      const requiredRoles = route.data.roles;

      if (!requiredRoles || requiredRoles.length === 0) {
        return resolve(true);
      } else {
        if (!this.roles || this.roles.length === 0) {
          resolve(false);
        }

        /** made a simple algorithm to ensure the user has al of the roles that are passed into the secure angular routes */
        let granted = false;
        const goal = route.data.roles.length;
        let score = 0;
        for (const kc_roles of this.roles) {
          for (const route_roles of route.data.roles) {
            if (route_roles === kc_roles) {
              score++;
            }
          }
          granted = score === goal;
        }
        resolve(granted);
      }
    });
  }

  /*
    Helper methods to control cookies
  */

  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  checkCookie(name: string) {
    if (name != null) { // null check

    }
  }
}
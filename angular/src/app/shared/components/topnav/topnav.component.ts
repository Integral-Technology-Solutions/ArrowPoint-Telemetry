import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { AppAuthGuardService } from 'app/services/app-auth-guard.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

    constructor(private translate: TranslateService,
        private authService: AppAuthGuardService) { }

    ngOnInit() {}

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        localStorage.setItem('lang', language);
        this.translate.use(language);
    }

    changeTheme(color: string): void {
        let path = '';
        if (environment.production) {
            path = `/themes/app-${color}.css`;
        } else {
            path = `/assets/temp/themes/app-${color}.css`;
        }
        const link = document.createElement('link');
        link.setAttribute('type', 'text/css');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', path);
        document.head.appendChild(link);

    }

    logout() {
        this.authService.onLogout('/');
    }
}

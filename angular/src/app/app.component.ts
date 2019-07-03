import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private translate: TranslateService,
        private router: Router
    ) {
        translate.addLangs(['en', 'de', 'ur', 'hi']);
        translate.setDefaultLang(localStorage.getItem('lang') || 'en');
    }

    ngOnInit() {
        /**
         * navigate to the login page when user land on root
         */
        if (this.router.url === '/') {
            // this.router.navigate(['/dashboard']);
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    constructor(public router: Router) {}
    ngOnInit() {
        if (this.router.url === '/dashboard') {
            // console.log('%c this.router => ', 'background: #222; color: #bada55', this.router);
            // this.router.navigate(['/login']);
        }
    }
}

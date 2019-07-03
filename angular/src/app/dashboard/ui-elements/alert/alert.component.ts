import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, AfterViewInit {

    alerts: Array<any> = [];
    msg: string = null;
    toastMessage: string = null;

    constructor(private toasterService: ToasterService) {
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
                id: 2,
                type: 'info',
                message: 'This is an info alert',
            }, {
                id: 3,
                type: 'warning',
                message: 'This is a warning alert',
            }, {
                id: 4,
                type: 'danger',
                message: 'This is a danger alert',
            });
    }

    ngOnInit() { }

    closeAlert(index: number): void {
        this.alerts.splice(index, 1);
    }

    addAlert(): void {
        this.alerts.push({ id: this.alerts.length, message: this.msg, type: 'warning', closable: true });
        this.msg = null;
    }

    popToast(type: string) {
        this.toasterService.pop(type, 'Args Title', 'Args Body');
    }

    addToast(): void {
        this.toasterService.pop('', 'Toast', this.toastMessage);
        this.toastMessage = '';
    }

    ngAfterViewInit() {
        this.toasterService.pop('success', 'Toast Title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    }

}

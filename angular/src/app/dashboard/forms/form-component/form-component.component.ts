import { Component, ViewChild } from '@angular/core';
import { IDatePickerConfig } from 'ng2-date-picker';

@Component({
    selector: 'app-form-component',
    templateUrl: './form-component.component.html',
    styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
    config: IDatePickerConfig;
    selectedDate: any;

    constructor() {
        this.config = {
            closeOnSelect: true,
            format: 'DD-MM-YYYY'
        };
    }
}

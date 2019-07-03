import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-compose',
    templateUrl: './compose.component.html',
    styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const jqte: any = $('.jqte');
        jqte.Editor();
    }

}

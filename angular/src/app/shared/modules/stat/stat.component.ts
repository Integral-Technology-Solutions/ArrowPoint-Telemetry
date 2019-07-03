import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() icon: string;
    @Input() value: string;
    @Input() text: string;
    @Input() bgclass: string;
    @Input() link: string;
    @Input() progressValue: number;

    constructor() { }
    ngOnInit() {}
}

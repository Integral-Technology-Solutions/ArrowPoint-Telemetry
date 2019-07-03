import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progressbar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
    contextualProgressBars: number;
    labelBar: number;
    animationProgressBar: number;

    constructor() {}

    ngOnInit() {
        this.random();
    }

    random() {
        this.contextualProgressBars = Math.floor(Math.random() * 100) + 1;
        this.labelBar = Math.floor(Math.random() * 100) + 1;
        this.animationProgressBar = Math.floor(Math.random() * 100) + 1;
    }

}

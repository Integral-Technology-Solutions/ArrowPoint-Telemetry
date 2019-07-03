import { Component, OnInit } from '@angular/core';
// declare var Ps: any;
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
    constructor() { }
    ngOnInit() {
        // Ps.initialize(document.querySelector('.messages-list'));
    }
}

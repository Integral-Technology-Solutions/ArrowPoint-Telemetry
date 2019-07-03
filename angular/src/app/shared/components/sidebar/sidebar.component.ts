import { Component, OnInit } from '@angular/core';
declare var $: any;
// declare var Ps: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const calendar: any = $('#calendar1');
        calendar.fullCalendar({
             eventClick: function(calEvent: any, jsEvent: any, view: any) {
                alert('Event: ' + calEvent.title);
                alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                alert('View: ' + view.name);
            }
        });
        // Ps.initialize(document.querySelector('.sidenav-outer'));
    }
}

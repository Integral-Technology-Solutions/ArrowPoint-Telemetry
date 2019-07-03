import { Component, OnInit } from '@angular/core';
declare var ProgressButton: any;

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        [].slice.call( document.querySelectorAll( 'button.progress-button' ) ).forEach((bttn: any) => {
            const button = new ProgressButton( bttn, {
                callback : function( instance: any ) {
                    let progress = 0;
                    const interval = setInterval( function() {
                        progress = Math.min( progress + Math.random() * 0.1, 1 );
                        instance._setProgress( progress );
                        if ( progress === 1 ) {
                            instance._stop(1);
                            clearInterval( interval );
                        }
                    }, 200 );
                }
            } );
            // console.log(button);
            // console.clear();
        });
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';  // for debugging

/**
* This class provides the Data service with methods to read names and add names.
*/
@Injectable()
export class DataService {

    /**
    * Creates a new DataService with the injected HttpClient.
    * @param {HttpClient} http - The injected HttpClient.
    * @constructor
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns an Observable for the HTTP GET request for the JSON resource.
    * @return {string[]} The Observable for the HTTP request.
    */
    get(): Observable<any> {
        return this.http.get('assets/data.json')
        //              .do(data => console.log('server data:', data))  // debug
        .catch(this.handleError);
    }

    /**
    * Handle HTTP error
    */
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}

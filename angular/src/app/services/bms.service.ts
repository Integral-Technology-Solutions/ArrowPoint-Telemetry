
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable({
  providedIn: 'root'
})
export class BmsService {

  constructor(private http: HttpClient) { }

  getDeviceList(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getDPData(url) {
    return this.http.get<any>(url);
  }

}

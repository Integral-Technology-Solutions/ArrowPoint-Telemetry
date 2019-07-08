import { Component, OnInit, OnDestroy } from '@angular/core';
import { BmsService } from 'app/services/bms.service';
import { environment } from '../../../environments/environment';
import { timer } from 'rxjs';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit, OnDestroy {
  subscribe: any;

  bmsSub = {
    next: res => {
      // console.log(res);
      this.iterateBmsData(res);
    },
    error: err => console.log(err),
    complete: () => {
      // console.log('complete');
    },
  }

  constructor(private bmsService: BmsService) { }

  // Get all the battery management data
  getBMSSummary() {
    this.bmsService.getDPData(environment.server.url + '/bms-data.json').subscribe(this.bmsSub);
  }

  // Get the data point value
  getDPVal(msrmntData, divisor) {
    if (msrmntData.fv === undefined) {
      if (msrmntData.iv === undefined) {
        if (msrmntData.cv === undefined) {
          return undefined;
        } else {
          return msrmntData.cv;
        }
      } else {
        return msrmntData.iv;
      }
    } else {
      return Number((msrmntData.fv / divisor)).toFixed(2);
    }
  }

  // Set the data point value
  setCellValue(msrmntData, divisor) {
    const el = document.getElementById(msrmntData.cId);
    if (el != null) {
      el.innerHTML = this.getDPVal(msrmntData, divisor);
      el.className = msrmntData.state;
    }
  }

  // Iterate results of the web request using helper functions to populate data fields
  iterateBmsData(results) {
    for (let i = 0; i < results.length; i++) {
      for (let k = 0; k < results[i].measurementData.length; k++ ) {
        this.setCellValue(results[i].measurementData[k], results[i].divisor);
      }
    }
  }

  // Constantly update the view
  runOnTimerTick() {
    const source = timer(0, 2000);
    this.subscribe = source.subscribe(val => {
      this.getBMSSummary();
    });
  }

  // On init life cycle hook
  ngOnInit() {
   this.runOnTimerTick();
  }

  // On destroy life cycle hook
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { BmsService } from 'app/services/bms.service';
import { environment } from '../../../environments/environment';
import { timer } from 'rxjs';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit {

  bmsSub = {
    next: res => console.log(res),
    error: err => console.log(err),
    complete: () => {
      console.log('complete');
    },
  }

  constructor(private bmsService: BmsService) { }

  getDPData(canId) {
    this.bmsService.getDPData(environment.server.url + '/bms.json?canId=' + canId).subscribe(this.bmsSub);
  }

  // Gets all of the JSON objects for each of the CAN packets
  getAllDPData() {
    // this.getDPData(1780);
    // this.getDPData(1782);
	  // this.getDPData(1783);
		// this.getDPData(1784);
		// this.getDPData(1786);
		// this.getDPData(1787);
		// this.getDPData(1788);
		// this.getDPData(1537);
		// this.getDPData(1540);
		// this.getDPData(1543);
		// this.getDPData(1546);
		// this.getDPData(1549);
		// this.getDPData(1538);
		// this.getDPData(1539);
		// this.getDPData(1541);
		// this.getDPData(1542);
		// this.getDPData(1544);
		// this.getDPData(1545);
		// this.getDPData(1547);
		// this.getDPData(1548);
		// this.getDPData(1550);
		// this.getDPData(1551);
  }

  runOnTimerTick() {
    // const source = timer(1000, 2000);
    // const subscribe = source.subscribe(val => {
    //   this.getAllDPData();
    // });
// subscribe.unsubscribe();
  }

  ngOnInit() {
    //this.runOnTimerTick();
  }

}

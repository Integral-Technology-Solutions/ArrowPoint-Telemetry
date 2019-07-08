import { Component, OnInit, OnDestroy } from '@angular/core';
import { BmsService } from 'app/services/bms.service';
import { environment } from '../../../environments/environment';
import { timer } from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit, OnDestroy {
  subscribe: any;
  chart = []; // Holds the battery chart
  dataSets = [];
  socYAxis = [];
  socXAxis = [];
  graphColor = [];

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

  batterySoc = {
    // label: this.whatGraph,
    data: this.socYAxis,
    labels: this.socXAxis,
    pointBackgroundColor: this.graphColor,
    fill: false,
    borderColor: 'green', //This sets the line color of the plot
    backgroundColor: 'transparent',
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
      if (msrmntData.cId === 28484) {
        return (eval(Number((msrmntData.fv / divisor)).toFixed(2)) * 100 + '%').toString();

      } else {
        return eval(Number((msrmntData.fv / divisor)).toFixed(2));
      }
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

  initChartData() {
    this.initChart(); // Init the chart
    this.batterySoc.data = this.socYAxis; // Set the soc object y data
    this.dataSets.push(this.batterySoc); // push to data sets array
    //@ts-ignore
    this.chart.data.labels = this.socXAxis;
    this.updateTheChart(this.chart);
  }

  updateTheChart(chart) {
    chart.update();
  }

  initChart() {
    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: this.socXAxis, //labels not included in the dataset
        datasets: this.dataSets,
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        },
        animation: {
          duration: 0, // general animation time
      },
      hover: {
          animationDuration: 0, // duration of animations when hovering an item
      },
      responsiveAnimationDuration: 0, // animation duration after a resize
      }
    });
  }

  // On init life cycle hook
  ngOnInit() {
   this.runOnTimerTick();
   this.initChartData();
  }

  // On destroy life cycle hook
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}

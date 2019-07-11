import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    BmsService
} from 'app/services/bms.service';
import {
    environment
} from '../../../environments/environment';
import {
    timer
} from 'rxjs';
import {
    Chart
} from 'chart.js';

@Component({
    selector: 'app-battery',
    templateUrl: './battery.component.html',
    styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit, OnDestroy {
    subscribe: any;
    chart = []; // Holds the battery chart
    voltageChart = []; // Holds the voltage chart
    currentChart = [];
    dataSets = [];
    voltageDataSets = [];
    currentDataSets = [];
    socYAxis = [];
    voltageYAxis = [];
    socXAxis = [];
    voltageXAxis = [];
    currentYAxis = [];
    currentXAxis = [];
    graphColor = [];
    showSocMenu: boolean;
    showVoltageMenu: boolean;
    showCurrentMenu: boolean;
    bucketIntervalSoc: string;
    bucketIntervalVoltage: string;
    bucketIntervalCurrent: string;
    timeIntervalSoc: string;
    timeIntervalVoltage: string;
    timeIntervalCurrent: string;

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

    socGraphDataSub = {
        next: res => {
            console.log(res);
            this.splitGraphData(res.results.data, 'soc');
        },
        error: err => console.log(err),
        complete: () => {
            // console.log('complete');
            console.log('graph data sub ending');
            this.initSocChartData();
        },
    }

    voltageGraphDataSub = {
        next: res => {
            console.log(res);
            this.splitGraphData(res.results.data, 'voltage');
        },
        error: err => console.log(err),
        complete: () => {
            // console.log('complete');
            console.log('graph data sub ending');
            this.initVoltageChartData();
        },
    }

    currentGraphDataSub = {
        next: res => {
            console.log(res);
            this.splitGraphData(res.results.data, 'current');
        },
        error: err => console.log(err),
        complete: () => {
            // console.log('complete');
            console.log('graph data sub ending');
            this.initCurrentChartData();
        },
    }

    batterySoc = {
        // label: this.whatGraph,
        data: this.socYAxis,
        labels: this.socXAxis,
        pointBackgroundColor: this.graphColor,
        fill: false,
        borderColor: 'green', // This sets the line color of the plot
        backgroundColor: 'transparent',
    }

    batteryVoltage = {
        // label: this.whatGraph,
        data: this.voltageYAxis,
        labels: this.voltageXAxis,
        pointBackgroundColor: this.graphColor,
        fill: false,
        borderColor: 'red', // This sets the line color of the plot
        backgroundColor: 'transparent',
    }

    batteryCurrent = {
        // label: this.whatGraph,
        data: this.currentYAxis,
        labels: this.currentXAxis,
        pointBackgroundColor: this.graphColor,
        fill: false,
        borderColor: 'blue', // This sets the line color of the plot
        backgroundColor: 'transparent',
    }

    constructor(private bmsService: BmsService) {
        this.bucketIntervalSoc = '1 min';
        this.timeIntervalSoc = '1 hour';
        this.bucketIntervalVoltage = '1 min';
        this.timeIntervalVoltage = '1 hour';
        this.bucketIntervalCurrent = '1 min';
        this.timeIntervalCurrent = '1 hour';
    }

    // Split the graph data into x and y lists
    splitGraphData(data, type) {
        const x = [];
        const y = [];
        for (let i = 0; i < data.length; i++) {
            x.push(data[i]['timestamp']);
            y.push(data[i]['fval']);
        }
        if (type === 'soc') {
            this.socYAxis = y;
            this.socXAxis = x;
        } else if (type === 'voltage') {
            this.voltageYAxis = y;
            this.voltageXAxis = x;
        } else if (type === 'current') {
            this.currentYAxis = y;
            this.currentXAxis = x;
        }
    }

    // Get all the battery management data
    getBMSSummary() {
        this.bmsService.getDPData(environment.server.url + '/bms-data.json').subscribe(this.bmsSub);
    }

    getSocChartData() {
        this.bmsService.getSocGraphData(environment.server.url +
            '/graph-data.json?bucketInterval=' +
            this.bucketIntervalSoc +
            '&timeInterval=' +
            this.timeIntervalSoc +
            '&graphName=soc').subscribe(this.socGraphDataSub);
    }

    getVoltageChartData() {
        this.bmsService.getVoltageGraphData(environment.server.url +
            '/graph-data.json?bucketInterval=' +
            this.bucketIntervalVoltage +
            '&timeInterval=' +
            this.timeIntervalVoltage +
            '&graphName=voltage').subscribe(this.voltageGraphDataSub);
    }

    getCurrentChartData() {
        this.bmsService.getCurrentGraphData(environment.server.url +
            '/graph-data.json?bucketInterval=' +
            this.bucketIntervalCurrent +
            '&timeInterval=' +
            this.timeIntervalCurrent +
            '&graphName=current').subscribe(this.currentGraphDataSub);
    }

    toggle(input) {
        if (input === 'soc') {
            !this.showSocMenu ? this.showSocMenu = true : this.showSocMenu = false;
        }
        if (input === 'voltage') {
            !this.showVoltageMenu ? this.showVoltageMenu = true : this.showVoltageMenu = false;
        }
        if (input === 'current') {
            !this.showCurrentMenu ? this.showCurrentMenu = true : this.showCurrentMenu = false;
        }

    }

    rangeSelect(interval) {
        if (interval === 'minsoc') {
            this.bucketIntervalSoc = '1 sec';
            this.timeIntervalSoc = '1 min';
            this.getSocChartData();
        } else if (interval === 'hoursoc') {
            this.bucketIntervalSoc = '1 min';
            this.timeIntervalSoc = '1 hour';
            this.getSocChartData();
        } else if (interval === 'weeksoc') {
            this.bucketIntervalSoc = '1 hour';
            this.timeIntervalSoc = '1 week';
            this.getSocChartData();
        } else if (interval === 'alltimesoc') {
            this.bucketIntervalSoc = '1 day';
            this.timeIntervalSoc = '20 year';
            this.getSocChartData();
        } else if (interval === 'minvoltage') {
            this.bucketIntervalVoltage = '1 sec';
            this.timeIntervalVoltage = '1 min';
            this.getVoltageChartData();
        } else if (interval === 'hourvoltage') {
            this.bucketIntervalVoltage = '1 min';
            this.timeIntervalVoltage = '1 hour';
            this.getVoltageChartData();
        } else if (interval === 'weekvoltage') {
            this.bucketIntervalVoltage = '1 hour';
            this.timeIntervalVoltage = '1 week';
            this.getVoltageChartData();
        } else if (interval === 'alltimevoltage') {
            this.bucketIntervalVoltage = '1 day';
            this.timeIntervalVoltage = '20 year';
            this.getVoltageChartData();
        } else if (interval === 'mincurrent') {
            this.bucketIntervalCurrent = '1 sec';
            this.timeIntervalCurrent = '1 min';
            this.getCurrentChartData();
        } else if (interval === 'hourcurrent') {
            this.bucketIntervalCurrent = '1 min';
            this.timeIntervalCurrent = '1 hour';
            this.getCurrentChartData();
        } else if (interval === 'weekcurrent') {
            this.bucketIntervalCurrent = '1 hour';
            this.timeIntervalCurrent = '1 week';
            this.getCurrentChartData();
        } else if (interval === 'alltimecurrent') {
            this.bucketIntervalCurrent = '1 day';
            this.timeIntervalCurrent = '20 year';
            this.getCurrentChartData();
        }
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
                // tslint:disable-next-line:no-eval
                return (eval(Number((msrmntData.fv / divisor)).toFixed(2)) * 100 + '%').toString();

            } else {
                // tslint:disable-next-line:no-eval
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
            for (let k = 0; k < results[i].measurementData.length; k++) {
                this.setCellValue(results[i].measurementData[k], results[i].divisor);
            }
        }
    }

    // Constantly update the view
    runOnTimerTick() {
        const source = timer(0, 2000);
        this.subscribe = source.subscribe(val => {
            this.getBMSSummary();
            this.getSocChartData();
        });
    }

    // This function will execute in the observer callback to obtain graph data
    initSocChartData() {
        this.batterySoc.data = this.socYAxis; // Set the soc object y data
        this.dataSets.push(this.batterySoc); // push to data sets array
        // @ts-ignore
        this.chart.data.labels = this.socXAxis;
        this.updateTheChart(this.chart);
    }

    // This function will execute in the observer callback to obtain graph data
    initVoltageChartData() {
        this.batteryVoltage.data = this.voltageYAxis; // Set the soc object y data
        this.voltageDataSets.push(this.batteryVoltage); // push to data sets array
        // @ts-ignore
        this.voltageChart.data.labels = this.voltageXAxis;
        this.updateTheChart(this.voltageChart);
    }

    // This function will execute in the observer callback to obtain graph data
    initCurrentChartData() {
        this.batteryCurrent.data = this.currentYAxis; // Set the soc object y data
        this.currentDataSets.push(this.batteryCurrent); // push to data sets array
        // @ts-ignore
        this.currentChart.data.labels = this.currentXAxis;
        this.updateTheChart(this.currentChart);
    }

    updateTheChart(chart) {
        chart.update();
    }

    initCharts() {
        this.chart = new Chart('socChart', {
            type: 'line',
            data: {
                labels: this.socXAxis, // labels not included in the dataset
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

        this.voltageChart = new Chart('voltageChart', {
            type: 'line',
            data: {
                labels: this.voltageXAxis, // labels not included in the dataset
                datasets: this.voltageDataSets,
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

        this.currentChart = new Chart('currentChart', {
            type: 'line',
            data: {
                labels: this.currentXAxis, // labels not included in the dataset
                datasets: this.currentDataSets,
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

    refreshData() {
        this.getSocChartData(); // Pull initial chart data
        this.getVoltageChartData(); // Pull initial chart data
        this.getCurrentChartData();
        this.getBMSSummary(); // Pull initial table data
    }

    // On init life cycle hook
    ngOnInit() {
        this.initCharts(); // Initialize the chart
        this.getSocChartData(); // Pull initial chart data
        this.getVoltageChartData(); // Pull initial chart data
        this.getCurrentChartData();
        this.getBMSSummary(); // Pull initial table data
        // this.runOnTimerTick(); // Configure the chart to update on interval ticks
    }

    // On destroy life cycle hook
    ngOnDestroy() {
        //this.subscribe.unsubscribe();
    }

}

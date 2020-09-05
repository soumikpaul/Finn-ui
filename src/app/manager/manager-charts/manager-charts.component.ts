import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-manager-charts',
  templateUrl: './manager-charts.component.html',
  styleUrls: ['./manager-charts.component.scss']
})
export class ManagerChartsComponent implements OnInit {

  selected = 'option1';
  Selected = 'Month';
  buttonArray = ['Today', 'Week', 'Month', 'Year'];
  
  public lineChartData: ChartDataSets[] = [
    { data: [50, 30, 50, 60, 70, 50, 80, 30, 40, 70, 50], label: 'Total Flights' },
    { data: [15, 10, 15, 20, 30, 20, 40, 10, 10, 35, 15], label: 'Disrupted Flights' },
    { data: [35, 20, 35, 40, 40, 30, 40, 20, 30, 35, 35], label: 'Non-Disrupted Flights' },

  ];
  public lineChartLabels: Label[] = ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      labels: {
        display: false
      }
    }
  };
  public lineChartColors: Color[] = [
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // red
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      }
   
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  myData = [];
  years = [2013, 2014, 2015, 2016, 2017, 2018, 2019];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [2,4,4,8,6,8,4,4,8,2,4,0], label: 'Disruptions this Month' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];




  public doughnutChartLabels:string[] = ['SMS/EMAIL', 'APP', 'SOCIAL MEDIA', 'MANUAL INFORMATION'];
  public demodoughnutChartData  = [[350, 450, 100, 100]];
  public doughnutChartType:string = 'doughnut';


  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
   }

  ngOnInit() {
  }

  doSomething() {
    if (this.selected == 'option1') {
      console.log("reached")
      this.lineChartData[0].data = [25, 30, 35, 40, 56, 45, 27, 30, 20, 35, 25];
    }
    if (this.selected == 'option2') {
      console.log("reached")
      this.lineChartData[0].data = [30, 20, 35, 25, 25, 30, 35, 40, 56, 45, 27, 40]
    }
    if (this.selected == 'option3') {
      console.log("reached")
      this.lineChartData[0].data = [25, 25, 30, 35, 40, 56, 30, 35, 40, 45, 27, 40]
    }
  }
}

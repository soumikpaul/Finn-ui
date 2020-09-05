import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';
@Component({
  selector: 'app-flightcard',
  templateUrl: './flightcard.component.html',
  styleUrls: ['./flightcard.component.scss']
})
export class FlightcardComponent implements OnInit {
  selected = 'option1';
  graph_data = [25, 30, 35, 40, 56, 45, 27, 30, 20, 35, 25];
  public lineChartData: ChartDataSets[] = [
    { data: this.graph_data, label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG','SEP','OCT','NOV','DEC'];
  public lineChartOptions:  any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false
      }
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(186,74,158,0.5)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
    
  myData = [];
  years = [2013,2014,2015,2016,2017,2018,2019];
  ngOnInit() {
    
    this.myData.push({num:5,
      outOf:7,
      type:"long haul flights"});
    
    this.myData.push({num:7,
      outOf:12,
      type:"short haul flights"});
    this.myData.push({num:12,
      outOf:19,
      type:"completed flights"});    
  }
  doSomething(){
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


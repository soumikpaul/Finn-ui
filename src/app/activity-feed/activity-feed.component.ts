import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.scss']
})
export class ActivityFeedComponent implements OnInit {

  arr: any[];
  
  constructor() {
    this.arr = [
      {
        desc: "Satya handled flight A121 in 8 hours advance",
        count: 67,
        status: "HANDLED",
        hasFade1: false,
        hasFade2: false
      },
      {
        desc: "Madhavi handled flight A122 in 4 hours advance",
        count: 89,
        status: "HANDLED",
        hasFade1: false,
        hasFade2: false
      },
      {
        desc: "Need attention to flight AY111",
        count: 0,
        status: "NOT HANDLED",
        hasFade1: false,
        hasFade2: false
      },
      {
        desc: "Need attention to flight AY120",
        count: 0,
        status: "NOT HANDLED",
        hasFade1: false,
        hasFade2: false
      },
      {
        desc: "Poshan handled flight A125 in 4 hours advance",
        count: 90,
        status: "HANDLED",
        hasFade1: true,
        hasFade2: false
      },
      {
        desc: "Chandler handled flight A132 in 4 hours advance",
        count: 78,
        status: "HANDLED",
        hasFade1: false,
        hasFade2: true
      }
    ]
   }

  ngOnInit() {
  }
  
  shuffleArray(){
    this.arr[this.arr.length - 1].hasFade2 = false;
    this.arr[this.arr.length - 2].hasFade1 = false; 
    this.arr = _.shuffle(this.arr)
    this.arr[this.arr.length - 1].hasFade2 = true;
    this.arr[this.arr.length - 2].hasFade1 = true; 
  }
}

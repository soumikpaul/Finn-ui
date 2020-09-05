import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  name: string;
  count: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Satya handled flight A121 in 8 hours advance', count: 67, status: 'HANDLED' },
  { name: 'Poshan handled flight A122 in 4 hours advance', count: 89, status: 'HANDLED' },
  { name: 'Soumik handled flight A112 in 2 hours advance', count: 65, status: 'HANDLED' },
  { name: 'Revanth handled flight A142 in 3 hours advance', count: 55, status: 'HANDLED' },
  { name: 'Need attention to flight AY111', count: 0, status: 'NOT HANDLED' },
  { name: 'Need attention to flight AY111', count: 0, status: 'NOT HANDLED' },
  { name: 'Manoj handled flight A132 in 5 hours advance', count: 68, status: 'HANDLED' },
];

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {
 @Input() heading;
  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['name', 'count', 'status'];
  dataSource = ELEMENT_DATA;

}

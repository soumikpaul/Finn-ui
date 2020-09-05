import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { CustomerFeedComponent } from '../customer-feed/customer-feed.component'

@Component({
  selector: 'app-business-user',
  templateUrl: './business-user.component.html',
  styleUrls: ['./business-user.component.scss']
})
export class BusinessUserComponent implements OnInit {

  hasColor = true;
  arr1: any = [
  {
    number: "AY121",
    customerFeedTitle:"AY121 30-NOV-2019",
    customerNames: ["KRISHNAREVANTH/B MR",

      "MANOJKUMAR/V MR",
      
      "NANDAM/POSHAN MR",
      
      "MAKKONEN/TUIJA MRS",
      
      "WENSTORM/MIKKO MR"],
    display:[true,true,false,false,true],
    travel:"Travelling HEL-DEL",
    status: "been auto handled!",
    firstDesc: "HEL-DEL-30-NOV-2019 at 20:10",
    secondDesc: "HEL-DEL-01-DEC-2019 at 00:25",
    OK: 159,
    NOK: 4,
    icon: "email"
  },
  {
    number: "AY5",
    customerFeedTitle:"AY5 29-NOV-201",
    customerNames: ["KUJANPAA/JUHA MR",

      "PAUL/JOHN MR",
      
      "WILLIAMS/JANE MS",
      
      "KRISHNAMURTHY/MAHESH MR",
      
      "NACHIAPPAN/VISWANATHAN MR"],
    display:[true,true,false,false,true],
    travel:"Travelling HEL-JFK",
    status: "been auto handled!",
    firstDesc: "HEL-JFK-29-NOV-2019 at 12:40",
    secondDesc: "HEL-JFK-29-NOV-2019 at 13:25",
    OK: 182,
    NOK: 18,
    icon: "email"
  },
  {
    number: "AY223",
    customerFeedTitle:"AY223 27-NOV-2019",
    customerNames: ["BISI/SAROJ MR",

      "NITTUR/CHETAN MR",
      
      "PAUL/SOUMIK MR",
      
      "SHARMA/MANOJKUMAR MR",
      
      "ZAKARIA/AMHED MR"],
    display:[true,true,false,false,true],
    travel:"Travelling HEL-TKU",
    status: "not been auto handled. Please handle manually!!",
    firstDesc: "HEL-TKU-27-NOV-2019 at 13:55",
    secondDesc: "CANCELLED",
    OK: 52,
    NOK: 1,
    icon: "email"
  }];

  title = "ACTIVITY FEED";
  types = [
    'Newest', 'This week', 'This month'
  ]
  show = false;
  selected = "Newest";
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(arr){
    const dialogRef = this.dialog.open(CustomerFeedComponent,{
      width:'500px',
      height:'600px',
      data: { dataArray : arr}
    })
  }
  sort() {
    this.show = true;
  }

}

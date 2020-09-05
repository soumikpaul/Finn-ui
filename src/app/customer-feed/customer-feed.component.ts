import { Component, OnInit, Inject } from '@angular/core';
import{ MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-customer-feed',
  templateUrl: './customer-feed.component.html',
  styleUrls: ['./customer-feed.component.scss']
})
export class CustomerFeedComponent implements OnInit {

 
  constructor(private dialogRef: MatDialogRef<CustomerFeedComponent>, @Inject(MAT_DIALOG_DATA) public data) {}
  ngOnInit() {
    console.log(this.data.dataArray);
  }
  
  close()
  {
    this.dialogRef.close();
  }
}

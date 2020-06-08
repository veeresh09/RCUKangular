import { Component, OnInit } from '@angular/core';
import { RFormService } from '../form.service';
@Component({
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css'],
})
export class Rreciept implements OnInit {
  totalAmountPaid = '';
  recieptNo = '';
  transactionNumber = '';
  message = '';
  constructor(public rformservice: RFormService) {}
  ngOnInit() {
    this.totalAmountPaid = this.rformservice.totalAmountPaid;
    this.recieptNo = this.rformservice.recieptNo;
    this.transactionNumber = this.rformservice.transactionNumber;
    this.message = this.rformservice.message;
  }
}

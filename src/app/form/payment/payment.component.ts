import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RFormService } from '../form.service';
@Component({
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class RpaymentForm implements OnInit, OnDestroy {
  constructor(public rformservice: RFormService) {}
  billId = '';
  totalAmountPaid = 'jjkj';
  billNumber = 'jjkkks';
  ngOnInit() {
    this.rformservice.getbbill().subscribe((res) => {
      this.billId = res.billId;
      this.billNumber = res.billNumber;
      this.totalAmountPaid = res.totalAmount;
      console.log(res);
      console.log(this.billId);
    });
  }
  ngOnDestroy() {}
  onSubmit(form: NgForm) {
    this.rformservice.collectpay(
      this.billId,
      form.value.payerName,
      form.value.payerno,
      form.value.amount
    );
  }
}

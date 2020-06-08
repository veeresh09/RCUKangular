import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { Subject, Subscription } from 'rxjs';
import { Rform } from './form.model';
@Injectable({ providedIn: 'root' })
export class RFormService {
  authtoken = 'random';
  consumcode = 'random';
  billId = '';
  totalAmountPaid = '';
  billNumber = '';
  recieptNo = '';
  transactionNumber = '';
  message = '';
  private authtokSub: Subscription;
  constructor(
    private http: HttpClient,
    public authservice: AuthService,
    private router: Router
  ) {}
  getAuthtoken() {
    this.authtoken = this.authservice.authoken;
  }
  async getconsumCode() {
    await this.getAuthtoken();
    const Req = {
      authtoken: this.authtoken,
    };
    console.log(Req);
    this.http
      .post<{ message: string; consumcode: string }>(
        'http://127.0.0.1:8000/api/consumCode/',
        Req
      )
      .subscribe((response) => {
        console.log(response);
        this.consumcode = response.consumcode;
        console.log(this.consumcode);
      });
  }
  createreq(rform: Rform) {
    rform.authtokn = this.authtoken;
    rform.usr_consmcode = this.consumcode;
    console.log(rform);
    this.http
      .post<{ message: string }>('http://127.0.0.1:8000/api/forms/', rform)
      .subscribe((res) => {
        console.log(res);
        if (res.message == 'succesfull') {
          this.router.navigate(['/pay']);
        }
      });
  }
  getbbill() {
    const body = {
      authtoken: this.authtoken,
      consumcode: this.consumcode,
    };
    return this.http.post<{
      message: string;
      billId: string;
      billNumber: string;
      totalAmount: string;
    }>('http://127.0.0.1:8000/api/pay/', body);
  }
  collectpay(
    billId: string,
    payerName: string,
    payerno: string,
    totalAmountpaid: Number
  ) {
    const body = {
      billId: billId,
      payerName: payerName,
      mobileNumber: payerno,
      totalAmountPaid: totalAmountpaid,
      authtoken: this.authtoken,
    };
    this.http
      .post<{
        message: string;
        recieptNo: string;
        transactionNumber: string;
        totalAmountPaid: string;
      }>('http://127.0.0.1:8000/api/collect/', body)
      .subscribe((res) => {
        console.log(res);
        this.totalAmountPaid = res.totalAmountPaid;
        this.message = res.message;
        this.recieptNo = res.recieptNo;
        this.transactionNumber = res.transactionNumber;
        this.router.navigate(['/reciept']);
      });
  }
}

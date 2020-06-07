import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rform } from '../form.model';
import { RFormService } from '../form.service';
@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class RcuttingForm implements OnInit {
  rform: Rform;
  consumcode = 'NULL';
  constructor(public rformservice: RFormService) {}
  async ngOnInit() {
    this.rformservice.getconsumCode();
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.rform = {
      applcnt_name: form.value.applicantName,
      RC_Cost: form.value.roadcost,
      applicnt_email: form.value.applicantemail,
      applicant_mobno: form.value.applicantmobileno,
      authtokn: '',
      applcntaddres: form.value.applicantaddress,
      applcntdist: form.value.applicantdist,
      applcntpin: form.value.pincode,
      usr_consmcode: '',
    };
    this.rformservice.createreq(this.rform);
  }
}

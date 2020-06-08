import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RcuttingForm } from './form/creatingrequest/form.component';
import { RpaymentForm } from './form/payment/payment.component';
import { Rreciept } from './form/reciept/reciept.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'form', component: RcuttingForm },
  { path: 'pay', component: RpaymentForm },
  { path: 'reciept', component: Rreciept },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

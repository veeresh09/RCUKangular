import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RcuttingForm } from './form/creatingrequest/form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'form', component: RcuttingForm },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

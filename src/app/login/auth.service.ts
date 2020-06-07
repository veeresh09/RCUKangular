import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  authoken = 'NULL';
  login(username: string, password: string) {
    const User = {
      username: username,
      user_pswd: password,
    };
    console.log(User);
    this.http
      .post<{ message: string; authtoken: string }>(
        'http://127.0.0.1:8000/api/users/',
        User
      )
      .subscribe((response) => {
        if (response.message == 'success') {
          this.authoken = response.authtoken;
          console.log(this.authoken);
          this.router.navigate(['/form']);
        } else {
          console.log(response);
        }
      });
  }
}

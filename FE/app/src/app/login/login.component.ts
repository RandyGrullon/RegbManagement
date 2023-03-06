import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = new User();
  constructor(private http: HttpClient) {}

  SignIn(email: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      email: email,
      password: password,
    };

    this.http
      .post('http://localhost:3000/api/auth/login', body, { headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}

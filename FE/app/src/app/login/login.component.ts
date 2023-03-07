import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient) {}
  UserArray: User[] =[];
  SelectedUser: User = new User();

  SignIn() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      email: this.SelectedUser.email,
      password: this.SelectedUser.password,
    };

    this.http
      .post('http://localhost:7202/auth/login', body, { headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}

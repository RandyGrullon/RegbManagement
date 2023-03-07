import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}
  UserArray: User[] =[];
  SelectedUser: User = new User();

  SignUp() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      firstName: this.SelectedUser.firstName,
      lastName: this.SelectedUser.lastName,
      email: this.SelectedUser.email,
      password: this.SelectedUser.password,
    };

    this.http
      .post('https://localhost:7202/auth/register', body, { headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}

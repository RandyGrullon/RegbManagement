import { Component } from '@angular/core';
import { User } from '../models/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }

  onSubmit() {
    console.log(`Usuario: ${this.username}, Contraseña: ${this.password}`);
  }
}

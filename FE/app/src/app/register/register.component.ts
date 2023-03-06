import { Component } from '@angular/core';
import { User } from '../models/User/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: User = new User();
  constructor() {}

  SignIn(email: string, password: string){
    
  }
}

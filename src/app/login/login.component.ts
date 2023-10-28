import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
  }
  

  onSubmit() {
    if (this.username === 'a' && this.password === 'a') {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/products']);

    } else {
      console.log('Inicio de sesión fallido');
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  form;

  constructor(private auth: AuthService, private fb: FormBuilder) { 
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login(credentials){
    this.auth.login(credentials);
  }
}

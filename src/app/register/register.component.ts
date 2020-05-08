import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  form;

  constructor(private auth: AuthService, private fb: FormBuilder) { 
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  register(credentials){
    this.auth.register(credentials);
  }
}

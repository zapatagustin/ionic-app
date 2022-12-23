import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form = this.FormBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(private FormBuilder: FormBuilder) {}

  ngOnInit() {}

  register() {
    if (this.form.valid) {
      const { email, password, confirmPassword } = this.form.getRawValue();
      console.log(email, password);
    } else {
      this.form.markAllAsTouched();
    }
  }
}

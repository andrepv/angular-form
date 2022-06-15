import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  form = this.fb.group({
    email: this.fb.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.pattern('^[A-Za-z0-9]+$')
    ]),
    passwordConfirm: this.fb.control('', [
      Validators.required,
    ]),
  }, {
    validators: this.passwordConfirmValidator
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  ngOnInit() {}

  private passwordConfirmValidator(group: any): ValidationErrors | null {
    if (group.get('password').value !== group.get('passwordConfirm').value) {
      return {passwordConfirm: {value: false}}
    }

    return null
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.router.navigate(['/sign-up-confirm', {email: this.email?.value}])
    }
  }

}

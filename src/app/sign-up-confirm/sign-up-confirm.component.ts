import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-confirm',
  templateUrl: './sign-up-confirm.component.html',
  styleUrls: ['./sign-up-confirm.component.css']
})
export class SignUpConfirmComponent implements OnInit {

  email = '';
  code = new FormControl('', [Validators.required])

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.params['email'];
  }

  submit() {
    if (this.code.errors) {
      this.code.markAsTouched();
    } else {
      this.router.navigate(['welcome']);
    }
  }
}

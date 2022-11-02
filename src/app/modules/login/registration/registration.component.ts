import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  form: any = FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      phone: [null, [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      billing_address: ['', [Validators.required]],
      shipping_address: ['', [Validators.required]],
    });
  }



  save() {
    console.log(this.form.value);
    this._router.navigateByUrl('/product')
  }

  cancel() {
  }

}

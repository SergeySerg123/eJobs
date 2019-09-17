import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MustMatch } from '../../../_helpers/must-match.validator';
import { AppState } from '../../../store/state/app.states';
import { Store } from '@ngrx/store';
import { AuthServiceClient } from '../../../services/auth-client.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  errorMessage: string = null;
  registerForm: FormGroup;
  submitted = false;

  constructor(private authServiceClient: AuthServiceClient,
    private store: Store<AppState>,
    private formBuilder: FormBuilder) {
    this.store.subscribe(store => {
      this.errorMessage = store.auth.errorMessage;
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const payload = {
      email: this.registerForm.value.email,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastname,
      password: this.registerForm.value.password
    }

    this.authServiceClient.SignUp(payload);
  }

  hasSignUpError(): boolean {
    return this.errorMessage !== null;
  }

}

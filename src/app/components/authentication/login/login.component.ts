import { Component, OnInit } from '@angular/core';
import { AuthServiceClient } from '../../../services/auth-client.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.states';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  errorMessage: string = null;
  showSpinner: boolean = false;

  constructor(
    private authServiceClient: AuthServiceClient,
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {
    this.store.subscribe(store => {
      this.showSpinner = store.auth.loading;
      this.errorMessage = store.auth.errorMessage;
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const payload = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    }
    this.authServiceClient.LogIn(payload);
  }

  hasAuthErrors(): boolean {
    return this.errorMessage !== null;
  }
}

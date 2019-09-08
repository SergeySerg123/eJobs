import { Injectable } from "@angular/core";
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.states';
import { LogIn, LogInSuccess, LogInFailure, SignUp, SignUpFailure, SignUpSuccess } from '../store/actions/auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceClient {
  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) { }

  LogIn(payload): void {
    this.store.dispatch(new LogIn());
    this.authService.logIn(payload.email, payload.password)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.store.dispatch(new LogInSuccess(res));
        this.router.navigateByUrl('/');
      },
        err => { this.store.dispatch(new LogInFailure(err)) });
  }

  SignUp(payload): void {
    this.store.dispatch(new SignUp())
    this.authService.signUp(payload.email, payload.name, payload.password)
      .subscribe(res => {
        this.store.dispatch(new SignUpSuccess(res));
        this.router.navigateByUrl('/account/login');
      },
        err => { this.store.dispatch(new SignUpFailure(err))});
  }

  LogOut(): void {
    this.authService.logOut();
  }
}

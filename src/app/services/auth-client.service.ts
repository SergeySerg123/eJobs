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
        localStorage.setItem(this.authService.TOKEN, res.token);
        localStorage.setItem(this.authService.USER_ID_KEY, this.authService.USER_ID_KEY);
        this.store.dispatch(new LogInSuccess(res));
        this.router.navigateByUrl('/').then();
      },
        err => { this.store.dispatch(new LogInFailure(err)) });
  }

  SignUp(payload): void {
    this.store.dispatch(new SignUp());
    this.authService.signUp(payload.email, payload.name, payload.password)
      .subscribe(res => {
        this.store.dispatch(new SignUpSuccess(res));
        this.router.navigateByUrl('/account/login').then();
      },
        err => { this.store.dispatch(new SignUpFailure(err))});
  }

  LogOut(): void {
    this.authService.logOut();
  }

  get token(): string {
    return this.authService.getToken();
  }

  get userId(): string {
    return this.authService.getUserId();
  }

  get companyId(): string {
    return this.authService.getCompanyId();
  }

  get role(): string {
    return this.authService.getRole();
  }
}

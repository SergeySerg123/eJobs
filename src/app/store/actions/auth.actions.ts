import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SIGN_UP = '[Auth] Sign up',
  SIGN_UP_SUCCESS = '[Auth] Sign up Success',
  SIGN_UP_FAILURE = '[Auth] Sign up Failure'
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor() { }
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) { }
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) { }
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGN_UP;
  constructor() { }
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGN_UP_SUCCESS;
  constructor(public payload: any) { }
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SIGN_UP_FAILURE;
  constructor(public payload: any) { }
}

export type AuthTypes =
  | LogIn | LogInSuccess | LogInFailure | SignUp | SignUpSuccess | SignUpFailure;

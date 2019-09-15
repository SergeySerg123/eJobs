import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.states';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  isAuthenticated: boolean

  constructor(private store: Store<AppState>,
    private router: Router) {
    this.store.subscribe(store => {
      this.isAuthenticated = store.auth.isAuthenticated;
    });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isAuthenticated) return true;

    this.router.navigateByUrl('login');
    return false;
  }
}

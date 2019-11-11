import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.states';
import { Injectable } from '@angular/core';
import {AuthServiceClient} from "../services/auth-client.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  isAuthenticated: boolean;

  constructor(private store: Store<AppState>,
    private router: Router, private authClient: AuthServiceClient) {
    this.store.subscribe(store => {
      this.isAuthenticated = store.auth.isAuthenticated;
    });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if (this.isAuthenticated) return true;
    
    this.router.navigateByUrl('login');
    return false;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isAuthenticated) return true;

    this.router.navigateByUrl('login');
    return false;
  }
}

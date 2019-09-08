import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:1337';
  private token: string = 'token';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem(this.token);
  }

  logIn(email: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, {email, password});
  }

  signUp(email: string, name: string, password: string): Observable<User> {
    const url = `${this.BASE_URL}/register`;
    return this.http.post<User>(url, {email, name, password});
  }

  logOut(): void {
    localStorage.removeItem(this.token);
  }
}

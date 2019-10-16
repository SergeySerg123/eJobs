import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:1337';
  public TOKEN: string = 'TOKEN';
  public USER_ID_KEY = 'USER_ID_KEY';
  public COMPANY_ID_KEY = 'COMPANY_ID_KEY';
  public ROLE: string = 'ROLE';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem(this.TOKEN);
  }

  getUserId(): string {
    return localStorage.getItem(this.USER_ID_KEY);
  }

  getRole(): string {
    return localStorage.getItem(this.ROLE);
  }

  getCompanyId(): string {
    return localStorage.getItem(this.COMPANY_ID_KEY);
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
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.USER_ID_KEY);
    localStorage.removeItem(this.ROLE);
  }


}

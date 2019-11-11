import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class ProfileService {
  private BASE_URL_PHOTO: string = "http://localhost:3000/profile-photo";
  private BASE_URL_CV: string = "http://localhost:3000/profile-cv";
  private BASE_URL: string = "http://localhost:3000/profile";

  constructor(
    private http: HttpClient
  ) { }

  uploadCV(cv: any): Observable<any> {
    const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
    return this.http.post(this.BASE_URL_CV, {id: id, image: cv});
  }

  getCV(): Observable<any> {
    return this.http.get(this.BASE_URL_CV);
  }

  removeOldCV(id: string): Observable<any> {
    return this.http.delete(this.BASE_URL_CV + `/${id}`);
  }

  uploadPhoto(photo: any): Observable<any> {
    const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
    return this.http.post(this.BASE_URL_PHOTO, {id: id, photo: photo});
  }

  getPhoto(): Observable<any> {
    return this.http.get(this.BASE_URL_PHOTO);
  }

  removeOldPhoto(id: string): Observable<any> {
    return this.http.delete(this.BASE_URL_PHOTO + `/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.BASE_URL + `/${user.id}`, {...user});
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.BASE_URL + `/${id}`);
  }
}
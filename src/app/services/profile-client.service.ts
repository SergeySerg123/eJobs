import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class ProfileClientService {

  constructor(
    private profileService: ProfileService,
    private window: Window
  ) {  }

  uploadCV(payload) {
    this.profileService.getCV().subscribe(oldCV => {
      this.profileService.removeOldCV(oldCV[0].id).subscribe(res => {
        this.profileService.uploadCV(payload).subscribe();
      });
    });    
  }

  uploadPhoto(payload) {
    this.profileService.getPhoto().subscribe(oldPhoto => {
      this.profileService.removeOldPhoto(oldPhoto[0].id).subscribe(res => {
        this.profileService.uploadPhoto(payload).subscribe();
      });
    });
  }

  updateUser(user):Observable<User>{
    return this.profileService.updateUser(user);
  }

  getCV(): Observable<any> {
    return this.profileService.getCV();
  }

  getPhoto(): Observable<any> {
    return this.profileService.getPhoto();
  }

  getUser(id: string): Observable<User> {
    return this.profileService.getUser(id);
  }
}
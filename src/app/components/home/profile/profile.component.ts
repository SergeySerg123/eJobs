import { Component, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileClientService } from 'src/app/services/profile-client.service';
import { User } from 'src/app/models/user.model';
import { AuthServiceClient } from 'src/app/services/auth-client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  submitted: boolean = false;
  profileForm: FormGroup;
  cvForm: FormGroup;
  photoForm: FormGroup;
  photo: string = null;
  cv: string = null;
  userInfo: User = null;

  constructor(
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private profileClient: ProfileClientService,
    private authClient: AuthServiceClient
  ) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      male: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      site: ['', [Validators.required]],
      about: ['', [Validators.required]]
    });

    this.profileClient.getUser(this.authClient.userId).subscribe(user => {
      this.userInfo = user;
    });

    this.photoForm = this.formBuilder.group({
      file: []
    });

    this.cvForm = this.formBuilder.group({
      file: []
    });

    this.profileClient.getPhoto().subscribe(photo => {      
      if (photo !== undefined) {
        this.photo = photo.shift().photo;
      }
    });

    this.profileClient.getCV().subscribe(cv => {
      if (cv !== undefined) {
        this.cv = cv.shift().image;
      }     
    });
  }

  uploadCV(event) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.cvForm.patchValue({
          file: reader.result
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
        const payload = this.cvForm.value.file;
        this.profileClient.uploadCV(payload);
      };
    }
  }

  uploadPhoto (event) {
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        this.photoForm.patchValue({
          file: reader.result
       });
      
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
        const payload = this.photoForm.value.file;
        this.profileClient.uploadPhoto(payload);
      };
    }
  }

  updateUser() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }

    const payload = {
      userId: this.authClient.userId,
      email: this.profileForm.value.email,
      firstName: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      about: this.profileForm.value.about,
      contacts: this.profileForm.value.site,
      male: this.profileForm.value.male,
      birth: this.profileForm.value.birth,
      role: this.authClient.role
    };


    this.profileClient.updateUser(User.create(payload))
      .subscribe(user => {
        this.userInfo = user;
      });
  }

  get f() {return this.profileForm.controls;}
}
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { AuthServiceClient } from '../../services/auth-client.service';
import { RegistrationComponent } from './registration/registration.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [HttpClientModule, ReactiveFormsModule,
    BrowserModule, CommonModule],
  declarations: [LoginComponent, RegistrationComponent],
  providers: [AuthService, AuthServiceClient]
})

export class AuthenticationModule { }

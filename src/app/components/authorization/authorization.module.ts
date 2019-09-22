import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { AuthService } from 'src/app/services/auth.service';
import { AuthServiceClient } from '../../services/auth-client.service';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RightDashboardComponent } from './right-dashboard/right-dashboard.component';
import {HeaderNavbarComponent} from "../header-navbar/header-navbar.component";



@NgModule({
  imports: [HttpClientModule, ReactiveFormsModule,
    BrowserModule, CommonModule, BrowserAnimationsModule, UiModule],
  declarations: [LoginComponent, RegistrationComponent, RightDashboardComponent,
    HeaderNavbarComponent],
  providers: [AuthService, AuthServiceClient]
})
export class AuthorizationModule { }

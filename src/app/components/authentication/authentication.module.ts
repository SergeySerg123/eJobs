import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../authorization/login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { AuthServiceClient } from '../../services/auth-client.service';
import { RegistrationComponent } from '../authorization/registration/registration.component';
import { CommonModule } from '@angular/common';
import { UiModule } from '../UI/ui.module';
import { RightDashboardComponent } from '../authorization/right-dashboard/right-dashboard.component';

@NgModule({
  imports: [HttpClientModule, ReactiveFormsModule,
    BrowserModule, CommonModule, BrowserAnimationsModule, UiModule],
  declarations: [LoginComponent, RegistrationComponent, RightDashboardComponent],
  providers: [AuthService, AuthServiceClient]
})

export class AuthenticationModule { }

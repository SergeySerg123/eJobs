import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreSettingsModule } from './store/store-settings.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './components/authentication/authentication.module';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    StoreSettingsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

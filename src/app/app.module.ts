import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreSettingsModule } from './store/store-settings.module';
import { AppRoutingModule } from './app-routing.module';
import {AuthorizationModule} from "./components/authorization/authorization.module";
import { AuthGuard } from './guards/auth.guard';
import {HomeModule} from "./components/home/home.module";
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizationModule,
    StoreSettingsModule,
    HomeModule
  ],
  providers: [AuthGuard],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

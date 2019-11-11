import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/authorization/login/login.component';
import { NotFoundPageComponent } from '../components/not-found-page/not-found-page.component';
import { AuthGuard } from '../guards/auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { RegistrationComponent } from '../components/authorization/registration/registration.component';
import {homeRoutes} from "./children/home-child.routing";


const routes: Routes = [
  { path: '', canActivateChild: [AuthGuard], component: HomeComponent, 
  children: homeRoutes},
  { path: 'login', component: LoginComponent, data: { state: 'login'} },
  { path: 'registration', component: RegistrationComponent, data: { state: 'registration' } },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

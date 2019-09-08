import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/authentication/registration/registration.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', canActivate: [AuthGuard], component: HomeComponent },
  {
    path: 'account', children: [
      { path: '', pathMatch: 'full', redirectTo: '/account/login'  },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
